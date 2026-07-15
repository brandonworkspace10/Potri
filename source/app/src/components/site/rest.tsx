import { BOOK_URL, PotriLockup, Container } from "./brand";

/* ---------------- tool strip ---------------- */

const TOOLS = [
  "Podio",
  "REsimpli",
  "InvestorFuse",
  "REI BlackBook",
  "Follow Up Boss",
  "GoHighLevel",
  "CallRail",
  "BatchLeads",
  "PropStream",
  "Carrot",
  "Zapier",
  "Google Sheets",
];

export function ToolStrip() {
  return (
    <section className="border-y border-[#EDE6DD] bg-white/60 py-8">
      <p className="text-soft text-center text-sm font-semibold">
        I plug into the tools you already run deals on
      </p>
      <div
        className="mt-5 overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
        }}
      >
        <div className="marquee-track gap-12 pr-12">
          {[...TOOLS, ...TOOLS].map((t, i) => (
            <span
              key={`${t}-${i}`}
              aria-hidden={i >= TOOLS.length}
              className="whitespace-nowrap text-lg font-extrabold tracking-tight text-[#122032]/45"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- how it works ---------------- */

const STEPS = [
  {
    n: "01",
    title: "Connect your lead flow",
    body: "Point your website forms, list pulls and CRM at me. Podio, REsimpli, InvestorFuse, Google Sheets, or a plain webhook.",
  },
  {
    n: "02",
    title: "I learn your script and your market",
    body: "Your qualifying questions, your comp logic, your offer ranges. I sound like your best acquisitions rep because I'm trained on them.",
  },
  {
    n: "03",
    title: "Appointments land on your calendar",
    body: "You wake up to qualified seller appointments with notes, recordings and next steps attached. You close. I keep dialing.",
  },
];

export function HowItWorks() {
  return (
    <section id="how" className="py-20 md:py-28">
      <Container>
        <h2 className="max-w-[20ch] text-4xl font-extrabold leading-tight tracking-tighter md:text-5xl">
          Live in a week, not a quarter.
        </h2>
        <div className="mt-10 flex flex-col divide-y divide-[#EDE6DD] border-y border-[#EDE6DD]">
          {STEPS.map((s) => (
            <div
              key={s.n}
              className="grid gap-3 py-8 md:grid-cols-[100px_1fr_1.2fr] md:items-baseline md:gap-8"
            >
              <span className="font-mono-call text-sm font-medium text-[#A97B2F]">
                {s.n}
              </span>
              <h3 className="text-xl font-extrabold tracking-tight md:text-2xl">
                {s.title}
              </h3>
              <p className="text-soft max-w-[58ch] leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ---------------- compliance ---------------- */

const GUARDRAILS = [
  {
    title: "Calling windows",
    body: "I respect TCPA calling hours in every lead's own timezone, automatically.",
    wide: true,
  },
  {
    title: "DNC scrubbing",
    body: "Numbers are checked against do-not-call lists before I ever dial.",
  },
  {
    title: "Live human handoff",
    body: "A hot seller can be transferred straight to your phone mid-call.",
  },
  {
    title: "Recorded and logged",
    body: "Every call is recorded, transcribed and synced to your CRM, so nothing I say is a mystery.",
    wide: true,
  },
];

export function Guardrails() {
  return (
    <section className="bg-white py-20 md:py-28">
      <Container>
        <h2 className="max-w-[18ch] text-4xl font-extrabold leading-tight tracking-tighter md:text-5xl">
          Built to call the right way.
        </h2>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {GUARDRAILS.map((g) => (
            <div
              key={g.title}
              className={`rounded-2xl border border-[#EDE6DD] bg-[#FBF7F2] p-6 ${
                g.wide ? "md:col-span-2" : ""
              }`}
            >
              <h3 className="text-lg font-extrabold tracking-tight">{g.title}</h3>
              <p className="text-soft mt-2 leading-relaxed">{g.body}</p>
            </div>
          ))}
        </div>
        <p className="text-soft mt-6 text-sm">
          Outbound calling rules are real. I ship with the guardrails, and your
          setup call covers consent and compliance for your specific lead sources.
        </p>
      </Container>
    </section>
  );
}

/* ---------------- pricing ---------------- */

export function Pricing() {
  return (
    <section id="pricing" className="py-20 md:py-28">
      <Container>
        <h2 className="mx-auto max-w-[24ch] text-center text-4xl font-extrabold leading-tight tracking-tighter md:text-5xl">
          A calling team for less than one part-time cold caller.
        </h2>
        <div className="mx-auto mt-12 grid max-w-5xl gap-6 lg:grid-cols-3">
          <div className="rounded-3xl border border-[#EDE6DD] bg-white/70 p-7">
            <p className="text-sm font-bold text-[#51606F]">A human cold caller</p>
            <p className="mt-3 text-4xl font-extrabold tracking-tight text-[#51606F] line-through decoration-[#A97B2F] decoration-2">
              $2,800
              <span className="text-base font-semibold">/mo</span>
            </p>
            <ul className="text-soft mt-6 flex flex-col gap-2.5 text-[15px]">
              <li>25 hours a week, tops</li>
              <li>Tired by the 40th dial</li>
              <li>Off sick on launch day</li>
              <li>Quits right after training</li>
            </ul>
          </div>

          <div className="relative rounded-3xl border-2 border-[#2B5FEB] bg-white p-7 shadow-[0_30px_60px_-40px_rgba(43,95,235,0.5)]">
            <span className="absolute -top-3.5 left-7 rounded-full bg-[#2B5FEB] px-3 py-1 text-[11px] font-extrabold uppercase tracking-wide text-white">
              Founding rate
            </span>
            <p className="text-sm font-bold">Potri</p>
            <p className="mt-3 text-4xl font-extrabold tracking-tight">
              $997<span className="text-base font-semibold text-[#51606F]">/mo</span>
            </p>
            <ul className="mt-6 flex flex-col gap-2.5 text-[15px] font-medium">
              <li>Every new lead called in under 60 seconds</li>
              <li>12+ touch call, text and voicemail sequences</li>
              <li>Qualified appointments on your calendar</li>
              <li>CRM sync, recordings and transcripts</li>
              <li>Month to month, cancel anytime</li>
            </ul>
            <a
              href={BOOK_URL}
              target="_blank"
              rel="noreferrer"
              className="cta-demo-pricing mt-7"
            >
              Book a demo
            </a>
          </div>

          <div className="rounded-3xl border border-[#EDE6DD] bg-white/70 p-7">
            <p className="text-sm font-bold text-[#51606F]">Custom</p>
            <p className="mt-3 text-4xl font-extrabold tracking-tight">
              Let's talk
            </p>
            <ul className="text-soft mt-6 flex flex-col gap-2.5 text-[15px]">
              <li>Multi-market teams</li>
              <li>Custom scripts and integrations</li>
              <li>High-volume list campaigns</li>
              <li>Inbound + outbound bundles</li>
            </ul>
            <a
              href={BOOK_URL}
              target="_blank"
              rel="noreferrer"
              className="cta-talk mt-7"
            >
              Talk to us
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ---------------- final band + footer ---------------- */

export function FinalBand() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url(/assets/plate-amber.png)" }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-[#FBF7F2]/35" aria-hidden="true" />
      <Container className="relative flex flex-col items-center py-24 text-center md:py-32">
        <h2 className="max-w-[18ch] text-4xl font-extrabold leading-tight tracking-tighter md:text-6xl">
          Wake up to a calendar full of seller appointments.
        </h2>
        <p className="mt-5 max-w-[46ch] text-lg leading-relaxed text-[#122032]/80">
          I start calling the day you connect your leads. Eight founding
          operator slots open this quarter.
        </p>
        <a
          href={BOOK_URL}
          target="_blank"
          rel="noreferrer"
          className="cta-demo-final mt-9"
        >
          Book a demo
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M3 8h10m0 0L9 4m4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </Container>
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-[#EDE6DD] bg-[#FBF7F2]">
      <Container className="flex flex-col gap-8 py-12 md:flex-row md:items-start md:justify-between">
        <div>
          <PotriLockup size={26} />
          <p className="text-soft mt-3 max-w-[36ch] text-sm leading-relaxed">
            Outbound AI callers and follow-up systems for real estate
            investors and wholesalers.
          </p>
        </div>
        <nav className="flex gap-10 text-sm">
          <div className="flex flex-col gap-2.5">
            <p className="font-bold">Explore</p>
            <a href="#work" className="text-soft hover:text-[#122032]">What I do</a>
            <a href="#listen" className="text-soft hover:text-[#122032]">Sample call</a>
            <a href="#how" className="text-soft hover:text-[#122032]">How it works</a>
            <a href="#pricing" className="text-soft hover:text-[#122032]">Pricing</a>
          </div>
          <div className="flex flex-col gap-2.5">
            <p className="font-bold">Get started</p>
            <a
              href={BOOK_URL}
              target="_blank"
              rel="noreferrer"
              className="text-soft hover:text-[#122032]"
            >
              Book a demo
            </a>
          </div>
        </nav>
      </Container>
      <div className="border-t border-[#EDE6DD] py-5">
        <Container>
          <p className="font-mono-call text-xs text-[#51606F]">
            © 2026 Potri. Calls are recorded and made within legal calling
            hours.
          </p>
        </Container>
      </div>
    </footer>
  );
}
