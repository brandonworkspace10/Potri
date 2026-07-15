import { BOOK_URL, PotriMark } from "./brand";

const DRIFT_PHRASES: {
  text: string;
  className: string;
  tilt: string;
  i: number;
}[] = [
  { text: "call the new Carrot lead", className: "left-[3%] top-[14%]", tilt: "-4deg", i: 0 },
  { text: "leave voicemail no. 3", className: "left-[9%] bottom-[18%]", tilt: "3deg", i: 1 },
  { text: "text Maria the offer time", className: "right-[4%] top-[10%]", tilt: "2deg", i: 2 },
  { text: "work the probate list", className: "right-[7%] bottom-[12%]", tilt: "-3deg", i: 3 },
];

const SMS_THREAD: { from: "potri" | "lead"; text: string; i: number }[] = [
  {
    from: "potri",
    text: "Hi Maria, it's Potri with Ridgeline Home Buyers. You asked about a cash offer for 412 Alder St. Still a good time for a quick call?",
    i: 0,
  },
  { from: "lead", text: "Yes but I'm at work until 5", i: 1 },
  {
    from: "potri",
    text: "No problem. I'll call you at 5:15. If the condition checks out, you could have an offer this week.",
    i: 2,
  },
];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 hidden select-none lg:block"
        aria-hidden="true"
      >
        {DRIFT_PHRASES.map((p) => (
          <span
            key={p.text}
            className={`drift-phrase absolute text-lg ${p.className}`}
            style={{ "--tilt": p.tilt, "--i": p.i } as React.CSSProperties}
          >
            {p.text}
          </span>
        ))}
      </div>

      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-5 pb-20 pt-16 md:px-8 md:pb-24 md:pt-20 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="max-w-xl">
          <h1
            className="rise text-5xl font-extrabold leading-none tracking-tighter md:text-7xl"
            style={{ "--i": 0 } as React.CSSProperties}
          >
            hey, I'm <span className="text-[#A97B2F]">Potri.</span>
          </h1>
          <p
            className="rise text-soft mt-6 max-w-[46ch] text-lg leading-relaxed md:text-xl"
            style={{ "--i": 2 } as React.CSSProperties}
          >
            I call your seller leads, follow up until they answer, and book
            them on your calendar.
          </p>
          <div
            className="rise mt-9 flex flex-wrap items-center gap-5"
            style={{ "--i": 4 } as React.CSSProperties}
          >
            <a href={BOOK_URL} target="_blank" rel="noreferrer" className="cta-demo-hero">
              Book a demo
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8h10m0 0L9 4m4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a href="#listen" className="cta-listen">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                <circle cx="9" cy="9" r="8" stroke="currentColor" strokeWidth="1.6" />
                <path d="M7.5 6.5v5l4-2.5-4-2.5Z" fill="currentColor" />
              </svg>
              Hear a sample call
            </a>
          </div>
        </div>

        <PhoneThread />
      </div>
    </section>
  );
}

function PhoneThread() {
  return (
    <div className="rise mx-auto w-full max-w-[360px]" style={{ "--i": 3 } as React.CSSProperties}>
      <div className="rounded-[42px] border border-[#122032]/10 bg-white p-3 shadow-[0_30px_60px_-30px_rgba(18,32,50,0.35)]">
        <div className="rounded-[32px] border border-[#EDE6DD] bg-[#FDFBF8] pb-5">
          <div className="flex items-center gap-3 border-b border-[#EDE6DD] px-5 pb-3 pt-4">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#E7EEFF] text-sm font-extrabold text-[#2B5FEB]">
              M
            </span>
            <div className="leading-tight">
              <p className="text-sm font-bold">Maria R.</p>
              <p className="font-mono-call text-[11px] text-[#51606F]">
                new lead · website form
              </p>
            </div>
            <span className="ml-auto inline-flex items-center gap-1.5 rounded-full bg-[#E9F5EC] px-2 py-1 text-[11px] font-bold text-[#2C7A45]">
              <span className="live-dot h-1.5 w-1.5 rounded-full bg-[#2C7A45]" />
              working
            </span>
          </div>

          <div className="flex flex-col gap-2.5 px-4 pt-4">
            {SMS_THREAD.map((m) => (
              <div
                key={m.i}
                className={`bubble max-w-[85%] rounded-2xl px-3.5 py-2.5 text-[13px] leading-snug ${
                  m.from === "potri"
                    ? "self-end rounded-br-md bg-[#2B5FEB] text-white"
                    : "self-start rounded-bl-md bg-[#EEE8E0] text-[#122032]"
                }`}
                style={{ "--i": m.i } as React.CSSProperties}
              >
                {m.text}
              </div>
            ))}
            <div
              className="bubble mt-2 flex items-center gap-2 self-center rounded-full border border-[#EDE6DD] bg-white px-3 py-1.5"
              style={{ "--i": 3.2 } as React.CSSProperties}
            >
              <PotriMark size={14} />
              <span className="font-mono-call text-[11px] font-medium text-[#51606F]">
                call scheduled 5:15 PM · on your calendar
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
