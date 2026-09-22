import { mapEmbed } from "@/content/site"

export function MapSection() {
  return (
    <section aria-label={mapEmbed.title}>
      <iframe
        src={mapEmbed.src}
        title={mapEmbed.title}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="block h-[320px] w-full border-0 md:h-[420px]"
      />
    </section>
  )
}