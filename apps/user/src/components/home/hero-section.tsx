import { Link } from "@tanstack/react-router"
import { hero } from "@/content/home"

export function HeroSection() {
  return (
    <section className="relative isolate flex min-h-svh items-end overflow-hidden">
      <img
        src={hero.image.src}
        alt={hero.image.alt}
        className="absolute inset-0 -z-10 size-full object-cover"
      />
      {/* Keeps the copy readable over the photo, heaviest on the left. */}
      <div className="absolute inset-0 -z-10 bg-linear-to-r from-black/70 via-black/40 to-black/10" />
      <div className="absolute inset-x-0 top-0 -z-10 h-40 bg-linear-to-b from-black/50 to-transparent" />

      <div className="mx-auto w-full max-w-7xl px-4 pt-32 pb-20 sm:px-6 md:pb-28 lg:px-8">
        <div className="max-w-2xl space-y-6 text-white">
          <p className="text-sm font-medium tracking-[0.18em] text-white/85 uppercase sm:text-base">
            {hero.eyebrow}
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl">
            {hero.heading}
          </h1>
          <p className="max-w-xl text-base leading-relaxed text-white/90 sm:text-lg">
            {hero.body}
          </p>
          <Link
            to={hero.cta.to}
            className="inline-flex items-center rounded-full bg-white/20 px-8 py-3.5 text-base font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/30 focus-visible:ring-3 focus-visible:ring-white/50 focus-visible:outline-none"
          >
            {hero.cta.label}
          </Link>
        </div>
      </div>
    </section>
  )
}
