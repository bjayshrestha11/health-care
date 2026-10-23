import { Section } from "@/components/layout/section"
import { aboutSection } from "@/content/home"

export function AboutSection() {
  const { video } = aboutSection

  return (
    <Section id={aboutSection.id} className="scroll-mt-20 bg-primary text-primary-foreground">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="space-y-5">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            {aboutSection.heading}
          </h2>
          {aboutSection.paragraphs.map((paragraph) => (
            <p key={paragraph} className="max-w-prose leading-relaxed text-primary-foreground/85">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="overflow-hidden rounded-xl bg-black/20 shadow-xl ring-1 ring-white/15">
          {/* The clip has a voice-over, so it never autoplays, and only its
              metadata loads until someone presses play. */}
          <video
            controls
            preload="metadata"
            playsInline
            title={video.title}
            className="aspect-video w-full bg-black"
          >
            <source src={video.src} type={video.type} />
            <a href={video.src} className="underline">
              Download the video
            </a>
          </video>
        </div>
      </div>
    </Section>
  )
}
