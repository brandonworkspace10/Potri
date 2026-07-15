import { useEffect, useRef, useState } from "react";
import { PotriMark, Container } from "./brand";

const TRANSCRIPT: { who: "potri" | "maria"; text: string }[] = [
  { who: "potri", text: "Hi, is this Maria? This is Potri calling for Ridgeline Home Buyers, about the house on Alder Street." },
  { who: "maria", text: "Oh right, I filled out the form last week." },
  { who: "potri", text: "You did. Are you still thinking about selling, or did I catch you past that?" },
  { who: "maria", text: "No, we still want to sell. The roof needs work and we already moved out." },
  { who: "potri", text: "That's exactly the kind of house we buy, so the roof is no problem. Would Thursday at 10:30 work for a walkthrough offer?" },
  { who: "maria", text: "Thursday works." },
];

export function ListenIn() {
  const [step, setStep] = useState(TRANSCRIPT.length);
  const started = useRef(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (started.current) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;
    const el = sectionRef.current;
    if (!el) return;
    // Replay the call line by line the first time the section is on screen.
    // The list is fully rendered before JS runs, so nothing is ever hidden
    // from crawlers or screenshots; this only re-runs it as a performance.
    const io = new IntersectionObserver(
      (entries) => {
        if (!entries.some((e) => e.isIntersecting) || started.current) return;
        started.current = true;
        io.disconnect();
        setStep(1);
        let n = 1;
        const t = setInterval(() => {
          n += 1;
          setStep(n);
          if (n >= TRANSCRIPT.length) clearInterval(t);
        }, 1100);
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section id="listen" className="py-20 md:py-28">
      <Container className="flex flex-col items-center">
        <h2 className="max-w-[22ch] text-center text-4xl font-extrabold leading-tight tracking-tighter md:text-5xl">
          Listen to me work a lead.
        </h2>
        <p className="text-soft mt-4 max-w-[48ch] text-center leading-relaxed">
          A real call shape: greet, qualify, handle the objection, book the
          appointment. Forty seven seconds, start to finish.
        </p>

        <div
          ref={sectionRef}
          className="hairline-card mt-12 w-full max-w-2xl rounded-3xl p-6 shadow-[0_30px_60px_-40px_rgba(18,32,50,0.4)] md:p-8"
        >
          <div className="flex items-center justify-between border-b border-[#F1EBE3] pb-4">
            <div className="flex items-center gap-3">
              <PotriMark size={34} />
              <div className="leading-tight">
                <p className="text-sm font-bold">Outbound call · Maria R.</p>
                <p className="font-mono-call text-[11px] text-[#51606F]">
                  first attempt · 4:02 PM lead local time
                </p>
              </div>
            </div>
            <span className="font-mono-call rounded-full bg-[#F4EFE8] px-2.5 py-1 text-[11px] font-medium text-[#51606F]">
              0:47
            </span>
          </div>

          <ul className="mt-5 flex flex-col gap-4">
            {TRANSCRIPT.map((line, i) => (
              <li
                key={i}
                className="flex gap-3 transition-all duration-500"
                style={{
                  opacity: i < step ? 1 : 0.15,
                  transform: i < step ? "translateY(0)" : "translateY(4px)",
                }}
              >
                <span
                  className={`font-mono-call mt-0.5 w-14 shrink-0 text-[11px] font-medium uppercase tracking-wide ${
                    line.who === "potri" ? "text-[#2B5FEB]" : "text-[#A97B2F]"
                  }`}
                >
                  {line.who}
                </span>
                <p className="text-[15px] leading-relaxed">{line.text}</p>
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-wrap items-center gap-2 border-t border-[#F1EBE3] pt-4">
            {["qualified", "appointment booked", "notes synced to CRM"].map((t) => (
              <span
                key={t}
                className="rounded-full bg-[#E7EEFF] px-2.5 py-1 text-[11px] font-bold text-[#2B5FEB]"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
