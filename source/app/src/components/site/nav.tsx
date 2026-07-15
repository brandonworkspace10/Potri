import { BOOK_URL, CallieLockup } from "./brand";

const LINKS = [
  { href: "#work", label: "What I do" },
  { href: "#how", label: "How it works" },
  { href: "#pricing", label: "Pricing" },
];

export function SiteNav() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#EDE6DD] bg-[#FBF7F2]/90 backdrop-blur-md">
      <nav className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 md:px-8">
        <a href="#top" className="flex items-center" aria-label="Callie home">
          <CallieLockup size={30} />
        </a>
        <div className="hidden items-center gap-7 md:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-semibold text-[#51606F] transition-colors hover:text-[#122032]"
            >
              {l.label}
            </a>
          ))}
        </div>
        <a href={BOOK_URL} target="_blank" rel="noreferrer" className="cta-demo-nav">
          Book a demo
        </a>
      </nav>
    </header>
  );
}
