import { CallieChip, CallieMark, Container } from "./brand";

type Chapter = {
  eyebrow: string;
  title: string;
  body: string;
  plate: string;
  mock: React.ReactNode;
  flip?: boolean;
};

const CHAPTERS: Chapter[] = [
  {
    eyebrow: "Speed to lead",
    title: "I call every new lead in under 60 seconds.",
    body: "The moment a seller hits your website or drops in from a list pull, I'm dialing. You stay first in line while your competitors are still checking their CRM.",
    plate: "/assets/plate-amber.png",
    mock: <LiveCallMock />,
  },
  {
    eyebrow: "Follow-up",
    title: "I never let a seller lead go cold.",
    body: "Calls, texts and voicemails on a cadence that doesn't get tired or embarrassed. I keep touching every lead until they pick up or tell me to stop.",
    plate: "/assets/plate-dawn.png",
    mock: <SequenceMock />,
    flip: true,
  },
  {
    eyebrow: "Qualify and book",
    title: "I qualify sellers, and book them on your calendar.",
    body: "I ask about condition, timeline, motivation, price and occupancy, then put qualified sellers straight on your calendar with my notes attached.",
    plate: "/assets/plate-sage.png",
    mock: <BookedMock />,
  },
];

export function Chapters() {
  return (
    <section id="work" className="pb-6 pt-4">
      <Container>
        <div className="flex flex-col gap-8">
          {CHAPTERS.map((c) => (
            <ChapterCard key={c.eyebrow} chapter={c} />
          ))}
          <ReactivationCard />
        </div>
      </Container>
    </section>
  );
}

function ChapterCard({ chapter }: { chapter: Chapter }) {
  return (
    <article className="hairline-card overflow-hidden rounded-3xl">
      <div
        className={`grid items-stretch lg:grid-cols-2 ${
          chapter.flip ? "lg:[direction:rtl]" : ""
        }`}
      >
        <div className="flex flex-col justify-center gap-4 p-8 md:p-12 lg:[direction:ltr]">
          <p className="eyebrow-honey">{chapter.eyebrow}</p>
          <h2 className="flex items-start gap-3 text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
            <span className="mt-1 shrink-0">
              <CallieMark size={26} />
            </span>
            {chapter.title}
          </h2>
          <p className="text-soft max-w-[52ch] leading-relaxed">{chapter.body}</p>
        </div>
        <div
          className="relative flex min-h-[320px] items-center justify-center bg-cover bg-center p-8 lg:[direction:ltr]"
          style={{ backgroundImage: `url(${chapter.plate})` }}
        >
          {chapter.mock}
        </div>
      </div>
    </article>
  );
}

function LiveCallMock() {
  return (
    <div className="w-full max-w-[330px] rounded-2xl border border-white/60 bg-white/95 p-4 shadow-[0_18px_40px_-20px_rgba(18,32,50,0.35)]">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#FBEFD8] text-xs font-extrabold text-[#A97B2F]">
            DK
          </span>
          <div className="leading-tight">
            <p className="text-sm font-bold">Derrick K.</p>
            <p className="font-mono-call text-[11px] text-[#51606F]">
              driving-for-dollars list
            </p>
          </div>
        </div>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-[#E9F5EC] px-2 py-1 text-[11px] font-bold text-[#2C7A45]">
          <span className="live-dot h-1.5 w-1.5 rounded-full bg-[#2C7A45]" />
          live call
        </span>
      </div>
      <div className="mt-4 flex h-9 items-center justify-center gap-[3px]">
        {Array.from({ length: 22 }).map((_, i) => (
          <span
            key={i}
            className="wave-bar h-full w-[3px] rounded-full bg-[#2B5FEB]/70"
            style={{ "--i": i % 7 } as React.CSSProperties}
          />
        ))}
      </div>
      <p className="font-mono-call mt-3 text-center text-[11px] text-[#51606F]">
        dialing began 42s after lead came in
      </p>
      <div className="mt-3 flex justify-center">
        <CallieChip label="Called by Callie" />
      </div>
    </div>
  );
}

const SEQUENCE_STEPS = [
  { day: "Day 0", touch: "Call + text within 60 seconds", done: true },
  { day: "Day 1", touch: "Voicemail, morning window", done: true },
  { day: "Day 3", touch: "Call, late afternoon", done: true },
  { day: "Day 7", touch: "Text with your offer range", done: false },
  { day: "Day 14", touch: "Call until answered", done: false },
];

function SequenceMock() {
  return (
    <div className="w-full max-w-[330px] rounded-2xl border border-white/60 bg-white/95 p-4 shadow-[0_18px_40px_-20px_rgba(18,32,50,0.35)]">
      <p className="text-sm font-bold">Follow-up sequence · Maria R.</p>
      <ul className="mt-3 flex flex-col">
        {SEQUENCE_STEPS.map((s) => (
          <li
            key={s.day}
            className="flex items-center gap-3 border-b border-[#F1EBE3] py-2 last:border-0"
          >
            <span
              className={`flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded-full ${
                s.done ? "bg-[#2B5FEB]" : "border-[1.5px] border-[#D8CFC3]"
              }`}
            >
              {s.done && (
                <svg width="9" height="9" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                  <path d="M1.5 5.2 4 7.5l4.5-5" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </span>
            <span className="font-mono-call w-12 shrink-0 text-[11px] font-medium text-[#51606F]">
              {s.day}
            </span>
            <span className="text-[13px] font-medium">{s.touch}</span>
          </li>
        ))}
      </ul>
      <div className="mt-3 flex justify-center">
        <CallieChip label="Sequence by Callie" />
      </div>
    </div>
  );
}

const QUALIFIERS = ["Condition", "Timeline", "Motivation", "Price", "Occupancy"];

function BookedMock() {
  return (
    <div className="w-full max-w-[330px] rounded-2xl border border-white/60 bg-white/95 p-4 shadow-[0_18px_40px_-20px_rgba(18,32,50,0.35)]">
      <div className="rounded-xl border border-[#DCE6FF] bg-[#F3F7FF] p-3">
        <p className="text-[11px] font-bold uppercase tracking-wide text-[#2B5FEB]">
          Thursday
        </p>
        <p className="mt-1 text-sm font-bold">Walkthrough · 412 Alder St.</p>
        <p className="font-mono-call mt-0.5 text-[11px] text-[#51606F]">
          10:30 to 11:15 AM · you + Maria R.
        </p>
      </div>
      <ul className="mt-3 flex flex-wrap gap-1.5">
        {QUALIFIERS.map((q) => (
          <li
            key={q}
            className="inline-flex items-center gap-1 rounded-full bg-[#E9F5EC] px-2 py-1 text-[11px] font-bold text-[#2C7A45]"
          >
            <svg width="9" height="9" viewBox="0 0 10 10" fill="none" aria-hidden="true">
              <path d="M1.5 5.2 4 7.5l4.5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            {q}
          </li>
        ))}
      </ul>
      <div className="mt-3 flex justify-center">
        <CallieChip label="Booked by Callie" />
      </div>
    </div>
  );
}

const AGED_ROWS = [
  { name: "Alton Rd duplex", note: "asked to call back in spring", state: "answered" },
  { name: "Pinecrest bungalow", note: "listed, then expired", state: "queued" },
  { name: "Hewitt Ave estate", note: "probate, cold for 8 months", state: "queued" },
];

function ReactivationCard() {
  return (
    <article className="hairline-card overflow-hidden rounded-3xl">
      <div className="grid items-stretch lg:grid-cols-[1fr_1.2fr]">
        <div className="flex flex-col justify-center gap-4 p-8 md:p-12">
          <p className="eyebrow-honey">List reactivation</p>
          <h2 className="flex items-start gap-3 text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
            <span className="mt-1 shrink-0">
              <CallieMark size={26} />
            </span>
            I wake up your dead lead list.
          </h2>
          <p className="text-soft max-w-[52ch] leading-relaxed">
            Those old pulls and dead deals you already paid for? I work back
            through them and surface the sellers whose timing finally changed.
          </p>
        </div>
        <div
          className="relative flex min-h-[300px] items-center justify-center bg-cover bg-center p-8"
          style={{ backgroundImage: "url(/assets/plate-amber.png)" }}
        >
          <div className="w-full max-w-[430px] rounded-2xl border border-white/60 bg-white/95 p-4 shadow-[0_18px_40px_-20px_rgba(18,32,50,0.35)]">
            <div className="flex items-center justify-between">
              <p className="text-sm font-bold">Aged leads · this week</p>
              <span className="font-mono-call text-[11px] text-[#51606F]">
                2,418 queued
              </span>
            </div>
            <ul className="mt-3 flex flex-col">
              {AGED_ROWS.map((r) => (
                <li
                  key={r.name}
                  className="flex items-center gap-3 border-b border-[#F1EBE3] py-2.5 last:border-0"
                >
                  <div className="min-w-0 flex-1 leading-tight">
                    <p className="truncate text-[13px] font-bold">{r.name}</p>
                    <p className="font-mono-call truncate text-[11px] text-[#51606F]">
                      {r.note}
                    </p>
                  </div>
                  <span
                    className={`rounded-full px-2 py-1 text-[11px] font-bold ${
                      r.state === "answered"
                        ? "bg-[#E9F5EC] text-[#2C7A45]"
                        : "bg-[#F4EFE8] text-[#51606F]"
                    }`}
                  >
                    {r.state}
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-3 flex justify-center">
              <CallieChip label="Revived by Callie" />
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
