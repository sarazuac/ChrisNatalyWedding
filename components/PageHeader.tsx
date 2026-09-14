import WaveDivider from "./WaveDivider";

export default function PageHeader({
  kicker,
  title,
  subtitle,
}: {
  kicker: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="relative bg-sea-deep text-ink pt-40 pb-20 md:pt-48 md:pb-28">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <p className="text-[11px] tracking-label uppercase text-ink/60 mb-5">
          {kicker}
        </p>
        <h1 className="font-display italic text-5xl md:text-6xl text-ink">{title}</h1>
        {subtitle && (
          <p className="mt-6 text-ink/70 text-base md:text-lg max-w-xl mx-auto">
            {subtitle}
          </p>
        )}
      </div>
      <div className="absolute bottom-0 inset-x-0 translate-y-[1px]">
        <WaveDivider color="var(--color-ivory)" />
      </div>
    </section>
  );
}
