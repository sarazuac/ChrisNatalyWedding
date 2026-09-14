export default function WaveDivider({
  flip = false,
  color = "var(--color-ivory)",
  className = "",
}: {
  flip?: boolean;
  color?: string;
  className?: string;
}) {
  return (
    <div
      aria-hidden
      className={`w-full overflow-hidden leading-none ${flip ? "rotate-180" : ""} ${className}`}
    >
      <svg
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        className="w-full h-[48px] md:h-[64px]"
      >
        <path
          d="M0,32 C 220,70 420,0 720,28 C 1020,56 1220,10 1440,40 L1440,80 L0,80 Z"
          fill={color}
        />
      </svg>
    </div>
  );
}
