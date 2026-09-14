export default function VideoBackground({
  src,
  poster = "/images/ocean-poster.svg",
}: {
  src: string;
  poster?: string;
}) {
  return (
    <>
      {/* Poster-toned backdrop: shows instantly, and remains visible if the video fails to load */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${poster}')` }}
        aria-hidden
      />

      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster={poster}
      >
        <source src={src} type="video/mp4" />
      </video>

      {/* Legibility scrim */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink/55 via-ink/25 to-ink/60" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
    </>
  );
}
