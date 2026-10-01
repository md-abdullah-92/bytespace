import Image from "next/image";
import { Button } from "@/components/ui/Button";

const limeShapeFilter =
  "brightness(0) saturate(100%) invert(87%) sepia(95%) saturate(1200%) hue-rotate(18deg) brightness(108%) contrast(105%)";
const whiteShapeFilter = "brightness(0) invert(96%)";

const shapes = [
  { src: "/shapes/pyramid.png", x: 1078, y: -0.4, size: 189, filter: limeShapeFilter },
  { src: "/shapes/spring-a.png", x: 1107, y: 289, size: 332, filter: limeShapeFilter },
  { src: "/shapes/spring-a.png", x: -122, y: -162, size: 387, filter: limeShapeFilter },
  { src: "/shapes/spring-b.png", x: 178.8, y: 5, size: 176, filter: whiteShapeFilter },
  { src: "/shapes/cone.png", x: -50, y: 224.6, size: 189, filter: whiteShapeFilter },
  { src: "/shapes/torus.png", x: 16.4, y: 298.3, size: 344, filter: limeShapeFilter },
  { src: "/shapes/cylinder.png", x: 1222, y: 5.2, size: 372, filter: whiteShapeFilter },
] as const;

export function CreatorCta() {
  return (
    <section className="relative h-[488px] w-full overflow-hidden bg-brand">
      <div className="absolute left-1/2 top-0 h-[488px] w-[1440px] -translate-x-1/2">
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage:
              "linear-gradient(to right, white 2px, transparent 2px), linear-gradient(to bottom, white 2px, transparent 2px)",
            backgroundSize: "120px 120px",
            backgroundPosition: "0 0, 0 118px",
          }}
        />

        {shapes.map((shape) => (
          <Image
            key={`${shape.src}-${shape.x}-${shape.y}`}
            src={shape.src}
            alt=""
            aria-hidden="true"
            width={shape.size}
            height={shape.size}
            className="pointer-events-none absolute max-w-none select-none"
            style={{
              left: shape.x,
              top: shape.y,
              width: shape.size,
              height: shape.size,
              filter: shape.filter,
            }}
          />
        ))}

        <div className="absolute inset-x-0 top-0 z-10 flex flex-col items-center px-4 pt-[88px] text-center">
          <h2 className="w-[600px] max-w-full font-heading text-[44px] font-semibold leading-[52px] text-[#f5f5f6]">
            Unlock Your Potential as a Creator with ByteSpace
          </h2>
          <p className="mt-[39px] w-[980px] max-w-full text-base font-light leading-[29px] text-[#f5f5f6]">
            Experience the collaboration of numerous creators and an expanding
            selection of courses. Register now and become a part of a community
            comprising over 10,000 local and international creators. Utilize our
            Course Editor, and showcase your expertise by publishing your finest
            course on the ByteSpace Course Library.
          </p>
          <Button
            href="/creators/join"
            variant="lime"
            size="lg"
            className="mt-10 h-[46px] w-[172px] font-normal"
          >
            Join as Creator
          </Button>
        </div>
      </div>
    </section>
  );
}
