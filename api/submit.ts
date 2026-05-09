import type { VercelRequest, VercelResponse } from "@vercel/node";

const GHL_API_URL = "https://services.leadconnectorhq.com";
const GHL_LOCATION_ID = "4W7WgynwywTgrsirjV4B"; // AddAI Pro
const GHL_API_KEY = process.env.GHL_ADDAIPRO_API_KEY || "";

async function ghlRequest(method: string, path: string, body?: object) {
  const res = await fetch(`${GHL_API_URL}${path}`, {
    method,
    headers: {
      Authorization: `Bearer ${GHL_API_KEY}`,
      "Content-Type": "application/json",
      Version: "2021-07-28",
    },
    body: body ? JSON.stringify(body) : undefined,
  });
  return res.json();
}

async function upsertContact(params: {
  name: string;
  phone: string;
  business: string;
  website: string;
  industry: string;
  volume: string;
  issue: string;
  notes: string;
}) {
  const { name, phone, business, website, industry, volume, issue, notes } = params;

  // Search by phone first
  let existingId: string | undefined;
  if (phone) {
    const search = await ghlRequest(
      "GET",
      `/contacts/?locationId=${GHL_LOCATION_ID}&phone=${encodeURIComponent(phone)}`
    );
    existingId = (search as { contacts?: Array<{ id: string }> })?.contacts?.[0]?.id;
  }

  const [firstName, ...rest] = (name || "").trim().split(" ");
  const lastName = rest.join(" ") || undefined;

  const tags = ["leadsignal-uae", "inbound-lead"];
  if (industry) tags.push(`industry-${industry.toLowerCase().replace(/\s+/g, "-")}`);

  const contactPayload: Record<string, unknown> = {
    firstName: firstName || undefined,
    lastName,
    tags,
    companyName: business || undefined,
    website: website || undefined,
  };
  if (phone) contactPayload.phone = phone;

  const noteText = [
    `Source: LeadSignal UAE`,
    `Business: ${business || "—"}`,
    `Website: ${website || "—"}`,
    `Industry: ${industry || "—"}`,
    `Monthly inquiry volume: ${volume || "—"}`,
    `Main issue: ${issue || "—"}`,
    notes ? `\nAdditional notes:\n${notes}` : "",
  ]
    .filter(Boolean)
    .join("\n");

  if (existingId) {
    await ghlRequest("PUT", `/contacts/${existingId}`, contactPayload);
    await ghlRequest("POST", `/contacts/${existingId}/notes`, { body: noteText });
    return existingId;
  }

  const created = await ghlRequest("POST", `/contacts/`, {
    locationId: GHL_LOCATION_ID,
    source: "LeadSignal UAE",
    ...contactPayload,
  });

  const contactId = (created as { contact?: { id?: string } })?.contact?.id;
  if (contactId && noteText) {
    await ghlRequest("POST", `/contacts/${contactId}/notes`, { body: noteText });
  }
  return contactId;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "method not allowed" });
    return;
  }

  try {
    const { name, business, website, whatsapp, industry, volume, issue, notes } =
      req.body as Record<string, string>;

    if (!name || !whatsapp) {
      res.status(400).json({ error: "name and whatsapp required" });
      return;
    }

    const contactId = await upsertContact({
      name,
      phone: whatsapp,
      business,
      website,
      industry,
      volume,
      issue,
      notes,
    });

    res.json({ ok: true, contactId });
  } catch (err) {
    console.error("leadsignal-uae submit error:", err);
    res.status(500).json({ error: "internal" });
  }
}
