import Image from "next/image";
import { Header } from "@/components/layout/Header";
import { SearchIcon } from "@/components/ui/Icons";

const shapes: Array<{
  src: string;
  x: number;
  y: number;
  size: number;
  flip?: boolean;
}> = [
  { src: "/hero-image/shape-1.png", x: 1124, y: 672, size: 332 },
  { src: "/hero-image/shape-2.png", x: -122, y: 221, size: 387 },
  { src: "/hero-image/shape-3.png", x: 184, y: 477, size: 176, flip: true },
  { src: "/hero-image/shape-4.png", x: 14, y: 681, size: 344 },
  { src: "/hero-image/shape-5.png", x: 1227, y: 220, size: 372 },
  { src: "/hero-image/shape-6.png", x: 1104, y: 464, size: 189 },
];

/** Blue hero banner: nav, headline, search bar, and floating stat cards. */
export function Hero() {
  return (
    <section className="relative h-[1024px] w-full overflow-hidden bg-brand">
      <div className="absolute left-1/2 top-0 h-[1024px] w-[1440px] -translate-x-1/2">
        <div className="absolute inset-0 opacity-[0.12]" style={{ backgroundImage: "linear-gradient(to right, white 2px, transparent 2px), linear-gradient(to bottom, white 2px, transparent 2px)", backgroundSize: "120px 120px", backgroundPosition: "0 0, 0 118px" }} />
        <svg aria-hidden="true" className="absolute inset-0" viewBox="0 0 1440 1024"><circle cx="719.5" cy="1156.5" r="414.5" stroke="#CBFC01" strokeWidth="320" fill="none" /></svg>

        <Header />

        <h1 className="absolute left-0 top-[166px] w-full text-center text-[52px] font-semibold leading-[1.18] text-white md:text-[72px]">Get Access to Hundreds<br />Courses Available</h1>
        <p className="absolute left-0 top-[373px] w-full text-center text-lg font-light text-[#E5E6E8]">Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.</p>

        <form action="/courses" className="absolute left-1/2 top-[462px] flex -translate-x-1/2 items-start gap-4">
          <label className="relative block h-[52px] w-[461px]"><SearchIcon className="absolute left-7 top-[17px] h-[18px] w-[18px] text-ink-muted" /><span className="sr-only">Search courses</span><input name="q" type="search" placeholder="Course, topic, creator" className="h-full w-full rounded-3xl bg-white pl-14 pr-4 text-base text-ink outline-none placeholder:text-ink-muted" /></label>
          <button type="submit" className="h-[46px] w-[104px] rounded-full bg-lime text-base text-ink">Search</button>
        </form>

        <Image src="/hero-image/hero-student.png" alt="Smiling student with headphones and laptop" width={578} height={541} priority className="absolute left-[431px] top-[512px] z-[1] h-[541px] w-[578px] max-w-none object-contain drop-shadow-[0_25px_35px_rgba(0,0,0,0.14)]" />
        <div className="absolute left-[842px] top-[651px] z-[4] h-[131px] w-[232px] rounded-2xl bg-white px-4 pt-4 text-ink"><p className="text-sm">Learning Progress</p><p className="mt-3 text-[44px] font-medium leading-10">55%</p><div className="absolute bottom-4 left-4 h-2 w-[200px] rounded-full bg-surface-alt"><div className="h-full w-28 rounded-full bg-lime" /></div></div>
        <div className="absolute left-[328px] top-[837px] z-[4] h-[121px] w-[258px] rounded-2xl bg-white px-4 pt-4 text-ink"><p className="text-base">Happy Students</p><p className="mt-1 text-xs">4.5 <span className="ml-1 text-ink-muted">(240)</span> <span className="text-lime">★</span></p><div className="absolute left-4 top-[62px] flex items-center">{[1, 2, 3, 4, 5, 6, 7].map((n) => <Image key={n} src={`/hero-image/avatar-${n}.png`} alt="" width={30} height={30} className="-mr-2 h-[30px] w-[30px] rounded-full border-2 border-white object-cover" />)}<span className="-ml-1 flex h-[30px] min-w-[42px] items-center justify-center rounded-full bg-lime px-2 text-xs font-semibold text-ink">2K+</span></div></div>
        <div className="absolute left-[404px] top-[639px] z-[5] h-[70px] w-[208px] rounded-2xl bg-white px-4 pt-4 text-ink"><p className="text-base font-medium leading-5">UI/UX Design</p><p className="text-xs leading-4 text-ink-muted">200 Courses <span className="mx-2">•</span> 1000+ Students</p></div>

        {shapes.map((shape) => <Image key={`${shape.src}-${shape.x}-${shape.y}`} src={shape.src} alt="" aria-hidden="true" width={800} height={800} className={`pointer-events-none absolute z-[3] max-w-none ${shape.flip ? "scale-x-[-1]" : ""}`} style={{ left: shape.x, top: shape.y, width: shape.size, height: shape.size }} />)}
      </div>
    </section>
  );
}
