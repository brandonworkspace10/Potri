export const BOOK_URL = "https://calendly.com/realleadin/30min";

export function TopriMark({ size = 30 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
    >
      <rect x="1" y="1" width="30" height="30" rx="10" fill="#F6DFA9" />
      <rect
        x="1"
        y="1"
        width="30"
        height="30"
        rx="10"
        stroke="#122032"
        strokeOpacity="0.12"
      />
      <circle cx="11.2" cy="13.4" r="1.7" fill="#122032" />
      <circle cx="20.8" cy="13.4" r="1.7" fill="#122032" />
      {/* smile drawn as a tiny phone handset */}
      <path
        d="M9.6 19.2c1 2.6 3.4 4.2 6.4 4.2s5.4-1.6 6.4-4.2"
        stroke="#122032"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <circle cx="9.6" cy="19.4" r="1.9" fill="#122032" />
      <circle cx="22.4" cy="19.4" r="1.9" fill="#122032" />
    </svg>
  );
}

export function TopriLockup({ size = 30 }: { size?: number }) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <TopriMark size={size} />
      <span
        className="font-extrabold tracking-tight"
        style={{ fontSize: size * 0.72 }}
      >
        topri
      </span>
    </span>
  );
}

export function TopriChip({ label }: { label: string }) {
  return (
    <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-[#E7EEFF] px-2.5 py-1 text-xs font-bold text-[#2B5FEB]">
      <TopriMark size={14} />
      {label}
    </span>
  );
}

export function Container({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-6xl px-5 md:px-8 ${className}`}>
      {children}
    </div>
  );
}
