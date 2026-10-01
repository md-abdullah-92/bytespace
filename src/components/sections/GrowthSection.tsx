import Image from "next/image";
import { CheckCircleIcon, LevelIcon, StarIcon } from "@/components/ui/Icons";

const stats = [
  { value: "12K", label: "Students" },
  { value: "70+", label: "Courses" },
  { value: "16", label: "Creators" },
];

export function GrowthSection() {
  return (
    <section className="relative overflow-hidden bg-[#FAFAFA] text-ink">
      <div className="pointer-events-none absolute -top-40 left-[15%] h-[520px] w-[620px] rounded-full bg-[#e4fb5c]/70 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-[-180px] right-[-100px] h-[460px] w-[560px] rounded-full bg-[#b9c8f5]/70 blur-[120px]" />

      <div className="container-page relative">
        <div className="grid items-center gap-12 pb-16 pt-24 lg:grid-cols-[1fr_580px]">
          <div>
            <h2 className="max-w-[560px] text-4xl font-semibold leading-[1.15] md:text-[46px]">
              Your Path to Professional Growth Starts Here!
            </h2>
            <p className="mt-8 max-w-[480px] text-base font-light leading-[29px] text-ink-soft">
              Explore our curated selection of courses tailored to enhance your
              capabilities and accelerate your career journey. Whether you are
              looking to sharpen specific skills, gain industry expertise, or
              embark on a new career path entirely, we have the resources you
              need.
            </p>
            <dl className="mt-10 flex gap-8 sm:gap-14">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <dt className="text-3xl font-medium text-brand md:text-[38px]">
                    {stat.value}
                  </dt>
                  <dd className="mt-2 text-sm text-ink-soft md:text-[17px]">
                    {stat.label}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative mx-auto h-[460px] w-full max-w-[580px] sm:h-[560px]">
            <div className="absolute left-0 top-0 z-0 w-[min(371px,70%)] rounded-[26px] border border-[#e3e3ea] bg-white p-3 shadow-card">
              <Image
                src="/courses/figma.jpg"
                alt="Learn Figma from Basic course preview"
                width={520}
                height={380}
                className="h-auto w-full rounded-2xl object-cover"
              />
              <h3 className="mt-4 text-lg font-semibold text-ink">
                Learn Figma from Basic to Advanced
              </h3>
              <p className="mt-1 text-xs text-ink-soft">
                by <span className="text-brand">purepearl studio</span>
              </p>
              <div className="mt-4 flex items-center gap-2">
                <span className="flex items-center gap-2 rounded-full bg-surface-soft px-3 py-2 text-xs text-ink-soft">
                  <LevelIcon className="h-4 w-4" /> Beginner
                </span>
                <span className="h-8 w-8 rounded-full bg-[#f7b8c4]" />
              </div>
              <p className="mt-3 text-xl font-semibold text-brand">
                $25 <span className="text-xs font-normal text-ink-soft">/lifetime</span>
              </p>
            </div>

            <Image
              src="/people/hero-student.png"
              alt="Smiling student with laptop"
              width={516}
              height={483}
              className="absolute left-[6%] top-12 z-10 w-[89%] object-contain drop-shadow-[0_30px_40px_rgba(30,30,60,0.18)]"
            />

            <div className="absolute right-0 top-[190px] z-20 w-[210px] rounded-2xl bg-white px-4 py-5 shadow-floating sm:w-[232px]">
              <p className="text-sm text-ink">Learning Progress</p>
              <p className="mt-1 text-4xl font-medium text-ink">55%</p>
              <div className="mt-2 h-2 w-full rounded-full bg-[#eef0f2]">
                <div className="h-full w-[55%] rounded-full bg-lime" />
              </div>
            </div>
          </div>
        </div>

        <div className="grid items-center gap-12 pb-24 pt-10 lg:grid-cols-[660px_1fr]">
          <div className="relative mx-auto h-[660px] w-full max-w-[660px]">
            <div className="absolute left-0 top-2 z-10 w-[280px] rounded-xl bg-brand px-7 py-7 text-white sm:w-[310px]">
              <p className="text-lg font-medium">Total Revenue</p>
              <p className="mt-1 text-xs text-white/80">July 1-28</p>
              <p className="mt-2 text-[30px] font-semibold">$120.29</p>
              <div className="mt-3 h-2 w-[220px] rounded-full bg-white/90">
                <div className="h-full w-3/4 rounded-full bg-lime" />
              </div>
            </div>
            <div className="absolute left-0 top-48 z-10 w-[190px] rounded-xl bg-brand px-6 py-6 text-white">
              <p className="text-lg font-medium">Year to Date</p>
              <p className="mt-1 text-xs text-white/80">2023</p>
              <p className="mt-2 text-[28px] font-semibold">$1,200.38</p>
              <span className="mt-3 inline-block rounded-full bg-lime px-3 py-1.5 text-xs font-medium text-ink">
                +12$
              </span>
            </div>
            <Image
              src="/people/creator.png"
              alt="Smiling course creator with tablet"
              width={500}
              height={500}
              className="absolute left-[5%] top-0 z-20 w-[100%] object-contain"
            />
            <div className="absolute bottom-0 right-0 z-30 w-[340px] rounded-2xl bg-white px-7 py-7 shadow-floating">
              <p className="text-lg text-ink">Happy Students</p>
              <p className="mt-2 flex items-center gap-1 text-base font-medium">
                4.5 <span className="font-normal text-ink-muted">(240)</span>
                <StarIcon className="h-5 w-5 text-lime" />
              </p>
            </div>
          </div>

          <div>
            <h2 className="max-w-[480px] text-4xl font-semibold leading-[1.15] md:text-[46px]">
              Create &amp; Manage Courses Easily.
            </h2>
            <p className="mt-8 max-w-[560px] text-base font-light leading-[29px] text-ink-soft">
              <span className="font-semibold text-ink">ByteSpace</span> supports
              individuals or entities in the creation, publication, and
              administration of educational courses.
            </p>
            <ul className="mt-8 space-y-4">
              {["Share Your Expertise", "Monetize Your Passion", "Flexibility and Autonomy", "Build a Community"].map((benefit) => (
                <li key={benefit} className="flex items-center gap-3">
                  <CheckCircleIcon className="h-5 w-5 shrink-0 text-brand" />
                  <span className="text-base text-ink-soft">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
