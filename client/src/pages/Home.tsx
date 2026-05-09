/*
Design philosophy: Gulf Futurist Editorial. This page uses asymmetric premium editorial sections, midnight ink backgrounds, champagne/sand accents, cyan automation signals, and visible lead-flow motifs to make the offer feel high-trust, fast, and operational rather than like a generic agency website.
*/

import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import {
  ArrowRight,
  CalendarCheck,
  CheckCircle2,
  ChevronDown,
  Clock3,
  Globe2,
  MailCheck,
  MessageCircle,
  Network,
  PhoneCall,
  ShieldCheck,
  Sparkles,
  Target,
  UsersRound,
  Zap,
} from "lucide-react";

const heroImage = "https://d2xsxph8kpxj0f.cloudfront.net/310519663448682532/nf6M9W4BdrdGd42UAWRmy4/lead-response-hero-command-board-LQPD2if9ADZ4EV8Umagz5u.webp";
const uaeImage = "https://d2xsxph8kpxj0f.cloudfront.net/310519663448682532/nf6M9W4BdrdGd42UAWRmy4/uae-ai-lead-concierge-YZ6YW8mF822nyQcpJcQCbQ.webp";
const southAfricaImage = "https://d2xsxph8kpxj0f.cloudfront.net/310519663448682532/nf6M9W4BdrdGd42UAWRmy4/south-africa-missed-lead-recovery-b2AdKt9wY7L52FRaJvWtxN.webp";
const flowImage = "https://d2xsxph8kpxj0f.cloudfront.net/310519663448682532/nf6M9W4BdrdGd42UAWRmy4/lead-flow-diagram-abstract-6dKwfTtBRQRdUSpEa8giiH.webp";

type MarketKey = "uae" | "south-africa";

const markets = {
  uae: {
    label: "UAE",
    badge: "Dubai · Abu Dhabi · premium service teams",
    product: "AI Lead Concierge",
    headline: "Turn Dubai inquiries into booked appointments with an AI Lead Concierge.",
    subheadline:
      "A premium website, AI response assistant, WhatsApp routing, booking calendar, and CRM workflow built for UAE service businesses that cannot afford slow follow-up.",
    cta: "Book a Free Lead Response Audit",
    secondary: "See UAE playbook",
    problem: "Your leads are expensive. Slow follow-up makes them even more expensive.",
    promise:
      "Every inquiry is answered instantly, qualified professionally, and routed into your calendar or sales pipeline while your team stays focused on closing.",
    image: uaeImage,
    accent: "champagne",
    industries: [
      ["Real estate agencies", "Qualify property inquiries and route serious buyers or tenants to agents."],
      ["Clinics and aesthetic studios", "Answer service questions, collect details, and book consultations."],
      ["Consultants and agencies", "Capture project inquiries and schedule discovery calls."],
      ["Hospitality and events", "Respond to event, reservation, and package inquiries faster."],
    ],
    offer: [
      ["Strategy call", "Map the current lead flow and identify where prospects are being lost."],
      ["Premium landing page", "Present the offer clearly and turn visitors into inquiries."],
      ["AI response assistant", "Answer common questions and collect intake details."],
      ["WhatsApp + calendar routing", "Guide qualified prospects toward a booked call."],
      ["CRM pipeline", "Organize new, contacted, booked, and closed leads."],
    ],
    faq: [
      ["Is this just a chatbot?", "No. The real value is the complete lead flow: page, intake, routing, booking, CRM, and follow-up."],
      ["Do we need a new website?", "Not always. If your site is usable, the system can improve the lead-capture flow without a full rebuild."],
      ["Can this work with WhatsApp?", "Yes. WhatsApp routing is central because many UAE buyers expect fast mobile messaging."],
    ],
  },
  "south-africa": {
    label: "South Africa",
    badge: "Cape Town · Johannesburg · local service firms",
    product: "AI Lead Follow-Up System",
    headline: "Stop losing leads from your website, WhatsApp, and Facebook ads.",
    subheadline:
      "A practical AI follow-up system and high-converting website flow for South African service businesses that need inquiries answered, organized, and followed up automatically.",
    cta: "Get a Free Missed Lead Check",
    secondary: "See SA playbook",
    problem: "Most businesses do not need more leads first. They need to stop wasting the leads they already get.",
    promise:
      "New inquiries get a fast response, better intake, reminders, and a simple pipeline so fewer potential customers disappear in the inbox.",
    image: southAfricaImage,
    accent: "green",
    industries: [
      ["Dental, medical, and wellness clinics", "Book consultations and follow up with patients who ask about services."],
      ["Estate agents and property firms", "Respond to buyer, tenant, and valuation inquiries faster."],
      ["Accountants and legal practices", "Capture client inquiries and schedule consultation calls."],
      ["Home-service and trade businesses", "Organize quote requests and follow up until the customer chooses a provider."],
    ],
    offer: [
      ["Missed lead review", "Review website, forms, WhatsApp links, and follow-up process."],
      ["Website refresh", "Improve the page where prospects decide whether to contact you."],
      ["Quote workflow", "Create a clear path for new inquiries, bookings, or quote requests."],
      ["AI-assisted FAQ intake", "Answer common questions and collect useful lead details."],
      ["Simple lead tracker", "Organize inquiries in a pipeline your team can actually use."],
    ],
    faq: [
      ["Is this affordable for a small business?", "Yes. The system can start simple with a landing page, WhatsApp flow, lead tracker, and basic follow-up."],
      ["Do I need to understand AI?", "No. The workflow is set up for you and explained in plain English."],
      ["Can this work with Facebook ads?", "Yes. It can support leads from ads, landing pages, forms, and WhatsApp clicks."],
    ],
  },
} as const;

const flowSteps = [
  [MessageCircle, "Inquiry", "Website, ad, WhatsApp, or form lead arrives."],
  [Zap, "Instant response", "The system replies and collects the first details."],
  [Target, "Qualification", "Serious prospects are identified before the call."],
  [CalendarCheck, "Booking", "Qualified leads are guided toward a calendar or quote."],
  [MailCheck, "Follow-up", "Quiet leads receive reminders instead of being forgotten."],
] as const;

const packages = [
  ["Starter", "Lower-friction setup", "Landing page refresh, WhatsApp button, lead form, tracker, and basic follow-up."],
  ["Growth", "Core recommended offer", "Landing page, AI-assisted intake, routing, booking calendar, CRM, and automations."],
  ["Premium", "High-ticket concierge", "Growth system plus custom workflows, training, reporting, and multi-channel support."],
];

function scrollToForm() {
  document.getElementById("diagnostic-form")?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p className="section-label">{children}</p>;
}

export default function Home() {
  const [selectedMarket, setSelectedMarket] = useState<MarketKey>("uae");
  const [openFaq, setOpenFaq] = useState(0);
  const market = markets[selectedMarket];

  const formHeadline = useMemo(
    () => (selectedMarket === "uae" ? "Request your UAE lead-response audit" : "Request your South Africa missed-lead check"),
    [selectedMarket],
  );

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    toast.success("Diagnostic request drafted", {
      description: "The front-end form is ready. Connect it to your email, CRM, or backend before publishing to store real inquiries.",
    });
  }

  return (
    <div className="min-h-screen overflow-hidden bg-background text-foreground">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#061018]/78 backdrop-blur-2xl">
        <div className="container flex h-20 items-center justify-between gap-6">
          <a href="#top" className="group flex items-center gap-3" aria-label="Lead Response Systems home">
            <span className="grid h-11 w-11 place-items-center border border-[#d7b46a]/40 bg-[#d7b46a]/10 shadow-[0_0_34px_rgba(215,180,106,0.18)]">
              <Network className="h-5 w-5 text-[#d7b46a] transition-transform group-hover:rotate-12" />
            </span>
            <span>
              <span className="block font-display text-lg font-semibold tracking-wide text-white">LeadSignal</span>
              <span className="block text-xs uppercase tracking-[0.24em] text-[#a9b8c4]">AI response systems</span>
            </span>
          </a>

          <nav className="hidden items-center gap-8 text-sm text-[#b8c7d1] md:flex">
            <a className="transition hover:text-white" href="#system">System</a>
            <a className="transition hover:text-white" href="#markets">Markets</a>
            <a className="transition hover:text-white" href="#packages">Packages</a>
            <a className="transition hover:text-white" href="#faq">FAQ</a>
          </nav>

          <Button onClick={scrollToForm} className="gold-button hidden sm:inline-flex">
            Free diagnostic <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </header>

      <main id="top">
        <section className="relative min-h-screen pt-28">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(0,214,255,0.18),transparent_30%),radial-gradient(circle_at_80%_8%,rgba(215,180,106,0.18),transparent_26%),linear-gradient(135deg,#051018_0%,#081822_46%,#02070b_100%)]" />
          <div className="absolute inset-0 opacity-[0.08] grain" />
          <div className="container relative grid min-h-[calc(100vh-7rem)] items-center gap-14 py-20 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="reveal-up max-w-3xl">
              <div className="inline-flex items-center gap-3 border border-white/10 bg-white/[0.04] px-4 py-2 text-xs uppercase tracking-[0.22em] text-[#d7b46a]">
                <Sparkles className="h-4 w-4" /> AI Lead Response System
              </div>
              <h1 className="mt-8 font-display text-5xl font-semibold leading-[0.96] tracking-[-0.06em] text-white sm:text-7xl lg:text-8xl">
                Stop paying for leads that never get answered.
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-[#c4d0d8] sm:text-xl">
                We build market-specific websites and AI follow-up workflows that answer inquiries instantly, qualify prospects, book appointments, and keep every lead organized.
              </p>
              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <Button onClick={scrollToForm} className="gold-button h-14 px-7 text-base">
                  Start with a free diagnostic <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button onClick={() => document.getElementById("markets")?.scrollIntoView({ behavior: "smooth" })} variant="outline" className="h-14 border-white/15 bg-white/[0.03] px-7 text-base text-white hover:bg-white/10">
                  Compare UAE and South Africa
                </Button>
              </div>
              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {[
                  [Clock3, "Instant", "Reply workflow"],
                  [ShieldCheck, "Qualified", "Lead intake"],
                  [CalendarCheck, "Booked", "Calendar path"],
                ].map(([Icon, value, label]) => (
                  <div key={label as string} className="border border-white/10 bg-white/[0.035] p-4 backdrop-blur">
                    <Icon className="mb-4 h-5 w-5 text-[#39d5ff]" />
                    <p className="font-display text-2xl text-white">{value as string}</p>
                    <p className="text-sm text-[#91a5b3]">{label as string}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative reveal-fade">
              <div className="absolute -inset-6 bg-[#39d5ff]/10 blur-3xl" />
              <img src={heroImage} alt="AI lead response command board showing inquiries moving into booked appointments" className="relative w-full border border-white/10 object-cover shadow-[0_34px_120px_rgba(0,0,0,0.5)]" />
              <div className="absolute -bottom-8 left-6 right-6 border border-[#d7b46a]/30 bg-[#07131b]/90 p-5 shadow-2xl backdrop-blur-xl md:left-auto md:w-[360px]">
                <p className="text-xs uppercase tracking-[0.24em] text-[#d7b46a]">Live workflow preview</p>
                <p className="mt-3 text-xl font-semibold text-white">Inquiry → AI response → booked call</p>
                <p className="mt-2 text-sm leading-6 text-[#9fb0bc]">The offer is simple enough for owners to understand and specific enough for ads to convert.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="system" className="relative border-y border-white/10 bg-[#08151e] py-24">
          <div className="container">
            <div className="grid items-end gap-8 lg:grid-cols-[0.72fr_1fr]">
              <div>
                <SectionLabel>The conversion engine</SectionLabel>
                <h2 className="mt-4 font-display text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">A complete front-end lead system, not another contact form.</h2>
              </div>
              <p className="max-w-3xl text-lg leading-8 text-[#b8c7d1]">
                The highest-converting product angle is a missed-lead recovery system because business owners already understand the cost of slow replies, ignored WhatsApp messages, forgotten quote requests, and leads that never get booked.
              </p>
            </div>

            <div className="mt-14 grid gap-5 lg:grid-cols-5">
              {flowSteps.map(([Icon, title, description], index) => (
                <div key={title} className="group relative border border-white/10 bg-[#0b1c27] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#39d5ff]/40 hover:bg-[#0d2431]">
                  <div className="mb-8 flex items-center justify-between">
                    <span className="grid h-11 w-11 place-items-center border border-[#39d5ff]/25 bg-[#39d5ff]/10 text-[#39d5ff]">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="font-display text-4xl text-white/10">0{index + 1}</span>
                  </div>
                  <h3 className="font-display text-xl font-semibold text-white">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[#9fb0bc]">{description}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 overflow-hidden border border-white/10 bg-black/20">
              <img src={flowImage} alt="Abstract diagram showing the lead journey from inquiry to follow-up" className="w-full object-cover" />
            </div>
          </div>
        </section>

        <section id="markets" className="relative bg-[#050c12] py-24">
          <div className="container">
            <div className="mx-auto max-w-4xl text-center">
              <SectionLabel>Two market-specific landing paths</SectionLabel>
              <h2 className="mt-4 font-display text-4xl font-semibold tracking-[-0.04em] text-white sm:text-6xl">One system, two offers built for how each market buys.</h2>
              <p className="mt-6 text-lg leading-8 text-[#b8c7d1]">Select a market to see the offer, buyer fit, and diagnostic CTA change in real time.</p>
            </div>

            <div className="mx-auto mt-12 grid max-w-2xl grid-cols-2 border border-white/10 bg-white/[0.03] p-2">
              {(Object.keys(markets) as MarketKey[]).map((key) => (
                <button
                  key={key}
                  type="button"
                  onClick={() => setSelectedMarket(key)}
                  className={`px-4 py-4 font-display text-sm font-semibold uppercase tracking-[0.18em] transition ${selectedMarket === key ? "bg-[#d7b46a] text-[#071018]" : "text-[#b8c7d1] hover:bg-white/[0.06] hover:text-white"}`}
                >
                  {markets[key].label}
                </button>
              ))}
            </div>

            <div className="mt-14 grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
              <div className="market-panel p-8 sm:p-10">
                <p className="text-xs uppercase tracking-[0.24em] text-[#d7b46a]">{market.badge}</p>
                <h3 className="mt-5 font-display text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">{market.headline}</h3>
                <p className="mt-5 text-lg leading-8 text-[#c2ced6]">{market.subheadline}</p>
                <div className="mt-8 rounded-none border border-white/10 bg-white/[0.035] p-6">
                  <p className="font-display text-2xl text-white">{market.problem}</p>
                  <p className="mt-3 leading-7 text-[#9fb0bc]">{market.promise}</p>
                </div>
                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <Button onClick={scrollToForm} className="gold-button h-13 px-6">{market.cta}</Button>
                  <Button variant="outline" className="h-13 border-white/15 bg-transparent px-6 text-white hover:bg-white/10">{market.secondary}</Button>
                </div>
              </div>

              <div className="space-y-6">
                <img src={market.image} alt={`${market.product} market visual`} className="aspect-[4/3] w-full border border-white/10 object-cover shadow-[0_30px_100px_rgba(0,0,0,0.36)]" />
                <div className="grid gap-4 sm:grid-cols-2">
                  {market.industries.map(([industry, useCase]) => (
                    <div key={industry} className="border border-white/10 bg-[#0b1b25] p-5">
                      <UsersRound className="mb-4 h-5 w-5 text-[#39d5ff]" />
                      <h4 className="font-display text-lg text-white">{industry}</h4>
                      <p className="mt-2 text-sm leading-6 text-[#9fb0bc]">{useCase}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="packages" className="relative bg-[#08151e] py-24">
          <div className="container">
            <div className="grid gap-10 lg:grid-cols-[0.75fr_1fr]">
              <div>
                <SectionLabel>Implementation package</SectionLabel>
                <h2 className="mt-4 font-display text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">Build the lead system prospects understand in five seconds.</h2>
                <p className="mt-6 text-lg leading-8 text-[#b8c7d1]">The page should sell the diagnostic first, then reveal the setup path once the prospect understands the cost of slow response.</p>
              </div>
              <div className="space-y-4">
                {market.offer.map(([item, description], index) => (
                  <div key={item} className="flex gap-5 border border-white/10 bg-[#0c1e29] p-5">
                    <span className="grid h-9 w-9 shrink-0 place-items-center bg-[#d7b46a]/15 font-display text-sm text-[#d7b46a]">{index + 1}</span>
                    <div>
                      <h3 className="font-display text-xl text-white">{item}</h3>
                      <p className="mt-2 leading-7 text-[#9fb0bc]">{description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-16 grid gap-5 lg:grid-cols-3">
              {packages.map(([name, position, contents]) => (
                <div key={name} className="group border border-white/10 bg-[#07131b] p-7 transition duration-300 hover:-translate-y-1 hover:border-[#d7b46a]/40">
                  <p className="text-xs uppercase tracking-[0.24em] text-[#d7b46a]">{position}</p>
                  <h3 className="mt-4 font-display text-3xl text-white">{name}</h3>
                  <p className="mt-4 leading-7 text-[#a7b7c2]">{contents}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="diagnostic-form" className="relative bg-[#050c12] py-24">
          <div className="absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(circle_at_70%_40%,rgba(215,180,106,0.16),transparent_42%)]" />
          <div className="container relative grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="max-w-xl">
              <SectionLabel>Capture inquiries</SectionLabel>
              <h2 className="mt-4 font-display text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">{formHeadline}</h2>
              <p className="mt-6 text-lg leading-8 text-[#b8c7d1]">This form is intentionally short. The goal is to start a conversation, not force a prospect to write a technical project brief.</p>
              <div className="mt-8 border border-[#39d5ff]/20 bg-[#39d5ff]/[0.06] p-5 text-sm leading-6 text-[#bcefff]">
                <strong className="text-white">Static-site note:</strong> the inquiry UI is built and conversion-ready. To store real leads, connect this form to your email, CRM, or upgrade the site with backend storage before publishing.
              </div>
            </div>

            <form onSubmit={handleSubmit} className="border border-white/10 bg-[#0b1b25]/90 p-6 shadow-[0_30px_100px_rgba(0,0,0,0.32)] backdrop-blur-xl sm:p-8">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="field-label">Name<input required name="name" placeholder="Your name" /></label>
                <label className="field-label">Business name<input required name="business" placeholder="Company or practice" /></label>
                <label className="field-label">Website URL<input name="website" placeholder="https://..." /></label>
                <label className="field-label">WhatsApp number<input required name="whatsapp" placeholder="+971 / +27 ..." /></label>
                <label className="field-label">Market<select name="market" value={selectedMarket} onChange={(event) => setSelectedMarket(event.target.value as MarketKey)}><option value="uae">UAE</option><option value="south-africa">South Africa</option></select></label>
                <label className="field-label">Industry<input required name="industry" placeholder="Clinic, real estate, legal..." /></label>
              </div>
              <label className="field-label mt-5">Main issue<select name="issue" required><option value="slow-response">Slow response</option><option value="missed-whatsapp">Missed WhatsApp messages</option><option value="no-follow-up">No follow-up system</option><option value="outdated-website">Outdated website</option><option value="no-crm">No CRM or lead tracker</option></select></label>
              <label className="field-label mt-5">What should we review first?<textarea name="notes" rows={4} placeholder="Tell us where your inquiries currently come from and what usually gets missed." /></label>
              <Button type="submit" className="gold-button mt-7 h-14 w-full text-base">{market.cta} <ArrowRight className="ml-2 h-5 w-5" /></Button>
            </form>
          </div>
        </section>

        <section id="faq" className="bg-[#08151e] py-24">
          <div className="container grid gap-10 lg:grid-cols-[0.75fr_1fr]">
            <div>
              <SectionLabel>FAQ</SectionLabel>
              <h2 className="mt-4 font-display text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">Questions prospects ask before booking.</h2>
              <p className="mt-6 text-lg leading-8 text-[#b8c7d1]">These answers reduce fear around AI and clarify that the service is a complete lead flow, not a gimmick.</p>
            </div>
            <div className="space-y-3">
              {market.faq.map(([question, answer], index) => (
                <button key={question} type="button" onClick={() => setOpenFaq(openFaq === index ? -1 : index)} className="w-full border border-white/10 bg-[#0b1b25] p-5 text-left transition hover:border-[#d7b46a]/35">
                  <span className="flex items-center justify-between gap-4 font-display text-xl text-white">
                    {question}
                    <ChevronDown className={`h-5 w-5 text-[#d7b46a] transition ${openFaq === index ? "rotate-180" : ""}`} />
                  </span>
                  {openFaq === index && <span className="mt-4 block leading-7 text-[#9fb0bc]">{answer}</span>}
                </button>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-[#04090d] py-10">
        <div className="container flex flex-col gap-6 text-sm text-[#8fa1ae] md:flex-row md:items-center md:justify-between">
          <p>© 2026 LeadSignal. AI lead response systems for service businesses.</p>
          <div className="flex gap-5">
            <a href="#markets" className="hover:text-white">Markets</a>
            <a href="#diagnostic-form" className="hover:text-white">Free diagnostic</a>
            <a href="#system" className="hover:text-white">Workflow</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
