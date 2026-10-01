import Image from "next/image";

const partnerLogos = [1, 2, 3, 4, 5].map((n) => ({
  src: `/logos/partner-${n}.svg`,
  alt: `Partner logo ${n}`,
}));

/** Muted strip of partner/press logos beneath the hero. */
export function LogoCloud() {
  return (
    <section className="bg-surface-soft py-10">
      <div className="container-page flex flex-wrap items-center justify-center gap-x-12 gap-y-6 opacity-70 grayscale">
        {partnerLogos.map((logo) => (
          <Image
            key={logo.src}
            src={logo.src}
            alt={logo.alt}
            width={169}
            height={42}
            className="h-8 w-auto"
          />
        ))}
      </div>
    </section>
  );
}
