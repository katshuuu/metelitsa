import Image from "next/image";
import { partners, type Partner } from "@/content/partners";

function Logo({ partner }: { partner: Partner }) {
  const image = (
    <Image
      src={partner.src}
      alt={partner.name}
      width={partner.width}
      height={partner.height}
      sizes="148px"
      className="h-12 w-auto max-w-[9.25rem] object-contain md:h-16"
      style={{ width: "auto", height: "4rem" }}
    />
  );

  if (!partner.href) {
    return <span className="inline-flex min-h-11 items-center">{image}</span>;
  }

  return (
    <a
      href={partner.href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex min-h-11 items-center"
    >
      {image}
    </a>
  );
}

function Lane({ items, reverse = false }: { items: Partner[]; reverse?: boolean }) {
  return (
    <div className="partner-band bg-white" aria-hidden={reverse ? true : undefined}>
      <div className={reverse ? "marquee-track marquee-track-reverse" : "marquee-track"}>
        <ul className="flex items-center">
          {items.map((partner) => (
            <li key={partner.src} className="flex items-center px-8 md:px-11">
              <Logo partner={partner} />
            </li>
          ))}
        </ul>
        <ul className="flex items-center" aria-hidden="true">
          {items.map((partner) => (
            <li key={`${partner.src}-clone`} className="flex items-center px-8 md:px-11" data-clone="">
              <Logo partner={partner} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function Partners() {
  const shifted = [...partners.slice(5), ...partners.slice(0, 5)];

  return (
    <section className="bg-mist text-navy" aria-labelledby="partners-title">
      <div className="mx-auto w-[min(1300px,calc(100%-40px))] pb-8 pt-14 md:w-[min(1300px,calc(100%-64px))] md:pb-10 md:pt-[4.5rem]">
        <h2 id="partners-title" className="text-center font-display text-h2">
          Наши партнеры
        </h2>
      </div>
      <Lane items={partners} />
      <div className="h-[22px] bg-mist" aria-hidden="true" />
      <Lane items={shifted} reverse />
      <div className="h-12 bg-mist md:h-16" aria-hidden="true" />
    </section>
  );
}
