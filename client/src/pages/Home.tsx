/*
Design philosophy: Gulf Futurist Editorial. UAE market — premium concierge tone.
Midnight ink backgrounds, champagne/sand accents, cyan automation signals.
*/

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import {
  ArrowRight,
  CalendarCheck,
  ChevronDown,
  Clock3,
  MailCheck,
  MessageCircle,
  Network,
  ShieldCheck,
  Sparkles,
  Target,
  UsersRound,
  Zap,
} from "lucide-react";

const heroImage = "https://d2xsxph8kpxj0f.cloudfront.net/310519663448682532/nf6M9W4BdrdGd42UAWRmy4/lead-response-hero-command-board-LQPD2if9ADZ4EV8Umagz5u.webp";
const marketImage = "https://d2xsxph8kpxj0f.cloudfront.net/310519663448682532/nf6M9W4BdrdGd42UAWRmy4/uae-ai-lead-concierge-YZ6YW8mF822nyQcpJcQCbQ.webp";
const flowImage = "https://d2xsxph8kpxj0f.cloudfront.net/310519663448682532/nf6M9W4BdrdGd42UAWRmy4/lead-flow-diagram-abstract-6dKwfTtBRQRdUSpEa8giiH.webp";

const flowSteps = [
  [MessageCircle, "Inquiry", "Website, ad, WhatsApp, or form lead arrives."],
  [Zap, "Instant response", "The system replies and collects the first details."],
  [Target, "Qualification", "Serious prospects are identified before the call."],
  [CalendarCheck, "Booking", "Qualified leads are guided toward a calendar or quote."],
  [MailCheck, "Follow-up", "Quiet leads receive reminders instead of being forgotten."],
] as const;

const industries = [
  ["Real estate agencies", "Qualify property inquiries and route serious buyers or tenants to agents."],
  ["Clinics and aesthetic studios", "Answer service questions, collect details, and book consultations."],
  ["Consultants and agencies", "Capture project inquiries and schedule discovery calls."],
  ["Hospitality and events", "Respond to event, reservation, and package inquiries faster."],
] as const;

const offerSteps = [
  ["Strategy call", "Map the current lead flow and identify where prospects are being lost."],
  ["Premium landing page", "Present the offer clearly and turn visitors into inquiries."],
  ["AI response assistant", "Answer common questions and collect intake details."],
  ["WhatsApp + calendar routing", "Guide qualified prospects toward a booked call."],
  ["CRM pipeline", "Organise new, contacted, booked, and closed leads."],
] as const;

const packages = [
  ["Starter", "$1,500 setup", "Landing page refresh, WhatsApp button, lead form, tracker, and basic follow-up."],
  ["Growth", "$3,500 setup + $397/mo", "Landing page, AI-assisted intake, routing, booking calendar, CRM, and automations."],
  ["Premium", "$7,500 setup + $797/mo", "Growth system plus AI voice receptionist, custom workflows, training, and reporting."],
] as const;

const faqs = [
  ["Is this just a chatbot?", "No. The real value is the complete lead flow: page, intake, routing, booking, CRM, and follow-up."],
  ["Do we need a new website?", "Not always. If your site is usable, the system can improve the lead-capture flow without a full rebuild."],
  ["Can this work with WhatsApp?", "Yes. WhatsApp routing is central because many UAE buyers expect fast mobile messaging."],
] as const;

function scrollToForm() {
  document.getElementById("diagnostic-form")?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p className="section-label">{children}</p>;
}

export default function Home() {
  const [openFaq, setOpenFaq] = useState(0);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    toast.success("Audit request received", {
      description: "We'll review your lead flow and follow up within one business day.",
    });
  }

  return (
    <div className="min-h-screen overflow-hidden bg-background text-foreground">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#061018]/78 backdrop-blur-2xl">
        <div className="container flex h-20 items-center justify-between gap-6">
          <a href="#top" className="group flex items-center gap-3" aria-label="LeadSignal UAE home">
            <span className="grid h-11 w-11 place-items-center border border-[#d7b46a]/40 bg-[#d7b46a]/10 shadow-[0_0_34px_rgba(215,180,106,0.18)]">
              <Network className="h-5 w-5 text-[#d7b46a] transition-transform group-hover:rotate-12" />
            </span>
            <span>
              <span className="block font-display text-lg font-semibold tracking-wide text-white">LeadSignal</span>
              <span className="block text-xs uppercase tracking-[0.24em] text-[#a9b8c4]">UAE · AI response systems</span>
            </span>
          </a>

          <nav className="hidden items-center gap-8 text-sm text-[#b8c7d1] md:flex">
            <a className="transition hover:text-white" href="#system">System</a>
            <a className="transition hover:text-white" href="#industries">Industries</a>
            <a className="transition hover:text-white" href="#packages">Packages</a>
            <a className="transition hover:text-white" href="#faq">FAQ</a>
          </nav>

          <Button onClick={scrollToForm} className="gold-button hidden sm:inline-flex">
            Free audit <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </header>

      <main id="top">
        {/* Hero */}
        <section className="relative min-h-screen pt-28">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(0,214,255,0.18),transparent_30%),radial-gradient(circle_at_80%_8%,rgba(215,180,106,0.18),transparent_26%),linear-gradient(135deg,#051018_0%,#081822_46%,#02070b_100%)]" />
          <div className="absolute inset-0 opacity-[0.08] grain" />
          <div className="container relative grid min-h-[calc(100vh-7rem)] items-center gap-14 py-20 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="reveal-up max-w-3xl">
              <div className="inline-flex items-center gap-3 border border-white/10 bg-white/[0.04] px-4 py-2 text-xs uppercase tracking-[0.22em] text-[#d7b46a]">
                <Sparkles className="h-4 w-4" /> Dubai · Abu Dhabi · premium service teams
              </div>
              <h1 className="mt-8 font-display text-5xl font-semibold leading-[0.96] tracking-[-0.06em] text-white sm:text-7xl lg:text-8xl">
                Turn Dubai inquiries into booked appointments.
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-[#c4d0d8] sm:text-xl">
                A premium website, AI response assistant, WhatsApp routing, booking calendar, and CRM workflow built for UAE service businesses that cannot afford slow follow-up.
              </p>
              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <Button onClick={scrollToForm} className="gold-button h-14 px-7 text-base">
                  Book a Free Lead Response Audit <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button onClick={() => document.getElementById("industries")?.scrollIntoView({ behavior: "smooth" })} variant="outline" className="h-14 border-white/15 bg-white/[0.03] px-7 text-base text-white hover:bg-white/10">
                  See UAE playbook
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
              <img src={heroImage} alt="AI lead response command board" className="relative w-full border border-white/10 object-cover shadow-[0_34px_120px_rgba(0,0,0,0.5)]" />
              <div className="absolute -bottom-8 left-6 right-6 border border-[#d7b46a]/30 bg-[#07131b]/90 p-5 shadow-2xl backdrop-blur-xl md:left-auto md:w-[360px]">
                <p className="text-xs uppercase tracking-[0.24em] text-[#d7b46a]">AI Lead Concierge</p>
                <p className="mt-3 text-xl font-semibold text-white">Inquiry → AI response → booked call</p>
                <p className="mt-2 text-sm leading-6 text-[#9fb0bc]">Your leads are expensive. Slow follow-up makes them even more expensive.</p>
              </div>
            </div>
          </div>
        </section>

        {/* System */}
        <section id="system" className="relative border-y border-white/10 bg-[#08151e] py-24">
          <div className="container">
            <div className="grid items-end gap-8 lg:grid-cols-[0.72fr_1fr]">
              <div>
                <SectionLabel>The conversion engine</SectionLabel>
                <h2 className="mt-4 font-display text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">A complete front-end lead system, not another contact form.</h2>
              </div>
              <p className="max-w-3xl text-lg leading-8 text-[#b8c7d1]">
                Every inquiry is answered instantly, qualified professionally, and routed into your calendar or sales pipeline — whether it comes from your website, a WhatsApp click, or an ad.
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
              <img src={flowImage} alt="Lead journey from inquiry to follow-up" className="w-full object-cover" />
            </div>
          </div>
        </section>

        {/* Industries */}
        <section id="industries" className="relative bg-[#050c12] py-24">
          <div className="container">
            <div className="mx-auto max-w-4xl text-center">
              <SectionLabel>Who we build for</SectionLabel>
              <h2 className="mt-4 font-display text-4xl font-semibold tracking-[-0.04em] text-white sm:text-6xl">Built for the UAE service businesses that cannot lose a lead.</h2>
              <p className="mt-6 text-lg leading-8 text-[#b8c7d1]">Every system is built around how your industry generates and closes inquiries.</p>
            </div>

            <div className="mt-14 grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
              <div className="market-panel p-8 sm:p-10">
                <p className="text-xs uppercase tracking-[0.24em] text-[#d7b46a]">Dubai · Abu Dhabi · premium service teams</p>
                <h3 className="mt-5 font-display text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">Turn Dubai inquiries into booked appointments with an AI Lead Concierge.</h3>
                <p className="mt-5 text-lg leading-8 text-[#c2ced6]">A premium website, AI response assistant, WhatsApp routing, booking calendar, and CRM workflow built for UAE service businesses that cannot afford slow follow-up.</p>
                <div className="mt-8 rounded-none border border-white/10 bg-white/[0.035] p-6">
                  <p className="font-display text-2xl text-white">Your leads are expensive. Slow follow-up makes them even more expensive.</p>
                  <p className="mt-3 leading-7 text-[#9fb0bc]">Every inquiry is answered instantly, qualified professionally, and routed into your calendar or sales pipeline while your team stays focused on closing.</p>
                </div>
                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <Button onClick={scrollToForm} className="gold-button h-13 px-6">Book a Free Lead Response Audit</Button>
                  <Button variant="outline" className="h-13 border-white/15 bg-transparent px-6 text-white hover:bg-white/10">See UAE playbook</Button>
                </div>
              </div>

              <div className="space-y-6">
                <img src={marketImage} alt="UAE AI Lead Concierge" className="aspect-[4/3] w-full border border-white/10 object-cover shadow-[0_30px_100px_rgba(0,0,0,0.36)]" />
                <div className="grid gap-4 sm:grid-cols-2">
                  {industries.map(([industry, useCase]) => (
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

        {/* Packages */}
        <section id="packages" className="relative bg-[#08151e] py-24">
          <div className="container">
            <div className="grid gap-10 lg:grid-cols-[0.75fr_1fr]">
              <div>
                <SectionLabel>Implementation packages</SectionLabel>
                <h2 className="mt-4 font-display text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">Build the lead system prospects understand in five seconds.</h2>
                <p className="mt-6 text-lg leading-8 text-[#b8c7d1]">The page sells the diagnostic first, then reveals the setup path once the prospect understands the cost of slow response.</p>
              </div>
              <div className="space-y-4">
                {offerSteps.map(([item, description], index) => (
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
              {packages.map(([name, price, contents]) => (
                <div key={name} className="group border border-white/10 bg-[#07131b] p-7 transition duration-300 hover:-translate-y-1 hover:border-[#d7b46a]/40">
                  <p className="text-xs uppercase tracking-[0.24em] text-[#d7b46a]">{price}</p>
                  <h3 className="mt-4 font-display text-3xl text-white">{name}</h3>
                  <p className="mt-4 leading-7 text-[#a7b7c2]">{contents}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Form */}
        <section id="diagnostic-form" className="relative bg-[#050c12] py-24">
          <div className="absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(circle_at_70%_40%,rgba(215,180,106,0.16),transparent_42%)]" />
          <div className="container relative grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="max-w-xl">
              <SectionLabel>Capture inquiries</SectionLabel>
              <h2 className="mt-4 font-display text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">Request your UAE lead-response audit</h2>
              <p className="mt-6 text-lg leading-8 text-[#b8c7d1]">This form is intentionally short. The goal is to start a conversation, not force a prospect to write a technical project brief.</p>
              <div className="mt-8 border border-[#39d5ff]/20 bg-[#39d5ff]/[0.06] p-5 text-sm leading-6 text-[#bcefff]">
                <strong className="text-white">Note:</strong> Connect this form to GHL, your email, or a backend before going live to store real leads.
              </div>
            </div>

            <form onSubmit={handleSubmit} className="border border-white/10 bg-[#0b1b25]/90 p-6 shadow-[0_30px_100px_rgba(0,0,0,0.32)] backdrop-blur-xl sm:p-8">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="field-label">Name<input required name="name" placeholder="Your name" /></label>
                <label className="field-label">Business name<input required name="business" placeholder="Company or practice" /></label>
                <label className="field-label">Website URL<input name="website" placeholder="https://..." /></label>
                <label className="field-label">WhatsApp number<input required name="whatsapp" placeholder="+971 50 000 0000" /></label>
                <label className="field-label">Industry<input required name="industry" placeholder="Clinic, real estate, agency..." /></label>
                <label className="field-label">Monthly inquiry volume<input name="volume" placeholder="Approx. per month" /></label>
              </div>
              <label className="field-label mt-5">Main issue<select name="issue" required>
                <option value="slow-response">Slow response time</option>
                <option value="missed-whatsapp">Missed WhatsApp messages</option>
                <option value="no-follow-up">No follow-up system</option>
                <option value="outdated-website">Outdated website</option>
                <option value="no-crm">No CRM or lead tracker</option>
              </select></label>
              <label className="field-label mt-5">What should we review first?<textarea name="notes" rows={4} placeholder="Tell us where your inquiries come from and what usually gets missed." /></label>
              <Button type="submit" className="gold-button mt-7 h-14 w-full text-base">Book a Free Lead Response Audit <ArrowRight className="ml-2 h-5 w-5" /></Button>
            </form>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="bg-[#08151e] py-24">
          <div className="container grid gap-10 lg:grid-cols-[0.75fr_1fr]">
            <div>
              <SectionLabel>FAQ</SectionLabel>
              <h2 className="mt-4 font-display text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">Questions prospects ask before booking.</h2>
              <p className="mt-6 text-lg leading-8 text-[#b8c7d1]">These answers reduce friction and clarify that this is a complete lead flow, not a gimmick.</p>
            </div>
            <div className="space-y-3">
              {faqs.map(([question, answer], index) => (
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
          <p>© 2026 LeadSignal UAE. AI lead response systems for UAE service businesses.</p>
          <div className="flex gap-5">
            <a href="#industries" className="hover:text-white">Industries</a>
            <a href="#diagnostic-form" className="hover:text-white">Free audit</a>
            <a href="#system" className="hover:text-white">Workflow</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
