import Image from "next/image";
import Link from "next/link";
import { Poppins, Plus_Jakarta_Sans } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["600"] });
const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

/*
  Assets expected in /public/images/hero/:
  hero-student.png
  avatars/avatar-1.png ... avatar-7.png
  shape-1.png (white)  shape-2.png (lime)  shape-3.png (white, mirrored by CSS)
  shape-4.png (white)  shape-5.png (lime)  shape-6.png (white)
*/

const IMG = "/images/hero";

// x, y, size taken from the 1440 x 1024 design
const shapes = [
  { n: 1, x: 1123.93, y: 672, s: 331.5 },
  { n: 2, x: -121.58, y: 221, s: 386.8 },
  { n: 3, x: 183.8, y: 477, s: 175.8, flip: true },
  { n: 4, x: 14.4, y: 681.26, s: 343.7 },
  { n: 5, x: 1227.1, y: 220.2, s: 371.8 },
  { n: 6, x: 1104.03, y: 463.6, s: 188.9 },
];

const vLines = [1, 121, 241, 361, 481, 601, 721, 841, 961, 1081, 1201, 1321];
const hLines = [-1, 119, 239, 359, 479, 605, 719, 839, 959];

const shadow = [
  "0.52px 0.74px 3.04px rgba(0,0,0,.04)",
  "2.23px 3.19px 5.72px rgba(0,0,0,.06)",
  "5.38px 7.69px 9.57px rgba(0,0,0,.07)",
  "10.21px 14.58px 16.09px rgba(0,0,0,.08)",
  "16.95px 24.21px 24px rgba(0,0,0,.09)",
  "25.84px 36.91px 36px rgba(0,0,0,.10)",
  "37.12px 53.03px 56px rgba(0,0,0,.105)",
  "51.04px 72.91px 72px rgba(0,0,0,.13)",
]
  .map((s) => `drop-shadow(${s})`)
  .join(" ");

export default function HeroSection() {
  return (
    <section
      className={`${jakarta.className} relative h-[1024px] w-full overflow-hidden bg-[#003BE2]`}
    >
      {/* 1440px design canvas, centered */}
      <div className="absolute left-1/2 top-0 h-[1024px] w-[1440px] -translate-x-1/2">
        {/* Grid lines */}
        <svg
          aria-hidden
          className="absolute inset-0"
          width="1440"
          height="1024"
          viewBox="0 0 1440 1024"
        >
          <g opacity="0.12" stroke="#fff" strokeWidth="2">
            {vLines.map((x) => (
              <line key={`v${x}`} x1={x} y1="0" x2={x} y2="1024" />
            ))}
            {hLines.map((y) => (
              <line key={`h${y}`} x1="0" y1={y} x2="1440" y2={y} />
            ))}
          </g>
        </svg>

        {/* Lime ring */}
        <svg
          aria-hidden
          className="absolute inset-0"
          width="1440"
          height="1024"
          viewBox="0 0 1440 1024"
        >
          <circle
            cx="719.5"
            cy="1156.5"
            r="414.5"
            stroke="#CBFC01"
            strokeWidth="320"
            fill="none"
          />
        </svg>

        {/* ---------- Navbar ---------- */}
        <Link
          href="/"
          aria-label="ByteSpace"
          className="absolute left-[122px] top-[35px] block h-[35px] w-[172px]"
        >
          <svg width="172" height="35" viewBox="122 35 172 35" fill="none">
            <path
              d="M132.5 45.5C132.5 39.701 127.799 35 122 35V56C122 61.799 126.701 66.5 132.5 66.5V45.5Z"
              fill="#D4FB20"
            />
            <path
              d="M140.375 45.5C146.174 45.5 150.875 50.201 150.875 56H143C137.201 56 132.5 51.299 132.5 45.5L140.375 45.5Z"
              fill="#D4FB20"
            />
            <path
              d="M140.375 66.5C146.174 66.5 150.875 61.799 150.875 56H143C137.201 56 132.5 60.701 132.5 66.5L140.375 66.5Z"
              fill="#D4FB20"
            />
            <path
              d="M170.496 65H159.72V48.92H169.944C173.424 48.92 175.152 50.288 175.152 52.808C175.152 54.872 174.072 56.336 171.144 56.456V56.696C174.36 56.816 175.896 58.304 175.896 60.536C175.896 63.248 174.336 65 170.496 65ZM164.208 52.976V55.016H169.464C170.376 55.016 170.64 54.752 170.64 54.008C170.64 53.264 170.28 52.976 169.344 52.976H164.208ZM164.208 58.712V60.944H169.92C171 60.944 171.336 60.728 171.336 59.816C171.336 58.928 171.024 58.712 169.92 58.712H164.208ZM179.517 69.08H177.333V65H180.837C181.197 65 181.485 64.952 181.677 64.856L175.893 52.904H181.029L183.117 57.656L183.981 60.44H184.293L185.085 57.608L186.885 52.904H191.925L186.189 65.48C184.893 68.336 183.045 69.08 179.517 69.08ZM201.463 65H198.295C195.271 65 193.471 63.536 193.471 60.392V56.6H191.695V52.904H193.471V50.816H197.983V52.904H201.463V56.6H197.983V59.744C197.983 60.704 198.271 60.944 199.303 60.944H201.463V65ZM209.284 65.24C205.18 65.24 202.3 63.488 202.3 58.952C202.3 55.016 205.156 52.664 209.188 52.664C213.364 52.664 216.028 54.752 216.028 58.64C216.028 59.048 216.004 59.36 215.956 59.792H206.476C206.548 61.256 207.196 61.664 209.116 61.664C210.94 61.664 211.42 61.352 211.42 60.632V60.368H215.932V60.656C215.932 63.344 213.364 65.24 209.284 65.24ZM209.092 56.12C207.436 56.12 206.74 56.48 206.548 57.512H211.66C211.492 56.48 210.772 56.12 209.092 56.12ZM225.036 65.24C220.116 65.24 217.116 63.488 217.116 59.408V59.264H221.628V59.768C221.628 60.848 222.012 61.136 225.036 61.136C227.772 61.136 228.06 60.92 228.06 60.2C228.06 59.624 227.748 59.384 226.428 59.216L221.388 58.544C218.388 58.136 216.876 56.528 216.876 53.936C216.876 51.368 218.868 48.68 224.676 48.68C229.788 48.68 232.236 50.912 232.236 54.512V54.656H227.724V54.296C227.724 53.144 227.22 52.76 224.196 52.76C221.892 52.76 221.388 53.072 221.388 53.768C221.388 54.272 221.676 54.512 222.54 54.632L227.58 55.376C231.516 55.952 232.572 57.968 232.572 60.032C232.572 62.792 230.46 65.24 225.036 65.24ZM238.154 69.08H233.642V52.904H237.866V56.168H238.106C238.49 53.768 239.93 52.664 242.762 52.664C246.458 52.664 248.498 55.04 248.498 58.952C248.498 62.888 246.506 65.24 242.954 65.24C240.098 65.24 238.754 63.896 238.394 61.88H238.154V69.08ZM238.154 59.096C238.154 60.8 239.114 61.136 241.13 61.136C243.218 61.136 243.938 60.56 243.938 58.952C243.938 57.344 243.218 56.792 241.13 56.792C239.114 56.792 238.154 57.176 238.154 58.928V59.096ZM253.609 65.24C250.873 65.24 249.337 63.992 249.337 61.928C249.337 60.224 250.513 59 253.249 58.736L258.169 58.256V58.016C258.169 56.792 257.641 56.6 256.033 56.6C254.545 56.6 254.089 56.888 254.089 57.896V57.992H249.577V57.944C249.577 54.728 252.265 52.664 256.369 52.664C260.593 52.664 262.633 54.728 262.633 58.112V65H258.409V62.456H258.169C257.713 64.16 256.225 65.24 253.609 65.24ZM253.873 61.64C253.873 62.024 254.257 62.096 254.953 62.096C257.137 62.096 258.025 61.832 258.145 60.752L254.449 61.184C254.041 61.232 253.873 61.376 253.873 61.64ZM270.762 65.24C266.466 65.24 263.73 62.864 263.73 58.952C263.73 55.016 266.466 52.664 270.762 52.664C274.89 52.664 277.53 54.776 277.53 58.016V58.4H273.042V58.208C273.042 56.96 272.13 56.696 270.666 56.696C269.01 56.696 268.218 57.056 268.218 58.952C268.218 60.824 269.01 61.184 270.666 61.184C272.13 61.184 273.042 60.944 273.042 59.696V59.48H277.53V59.888C277.53 63.104 274.89 65.24 270.762 65.24ZM285.48 65.24C281.376 65.24 278.496 63.488 278.496 58.952C278.496 55.016 281.352 52.664 285.384 52.664C289.56 52.664 292.224 54.752 292.224 58.64C292.224 59.048 292.2 59.36 292.152 59.792H282.672C282.744 61.256 283.392 61.664 285.312 61.664C287.136 61.664 287.616 61.352 287.616 60.632V60.368H292.128V60.656C292.128 63.344 289.56 65.24 285.48 65.24ZM285.288 56.12C283.632 56.12 282.936 56.48 282.744 57.512H287.856C287.688 56.48 286.968 56.12 285.288 56.12Z"
              fill="#F5F5F6"
            />
          </svg>
        </Link>

        <nav
          className="absolute top-[47px] text-[16px] leading-[20px] text-[#F5F5F6]"
          style={{ left: 0, width: 1440 }}
        >
          <Link
            href="/"
            className="absolute font-medium"
            style={{ left: 616 }}
          >
            Home
          </Link>
          <Link href="/courses" className="absolute" style={{ left: 683 }}>
            Courses
          </Link>
          <Link href="/creators" className="absolute" style={{ left: 765 }}>
            Creators
          </Link>
          <Link href="/sign-in" className="absolute" style={{ left: 1147 }}>
            Sign In
          </Link>
          <Link href="/join" className="absolute" style={{ left: 1219 }}>
            Join Us
          </Link>
        </nav>

        <Link
          href="/cart"
          aria-label="Cart"
          className="absolute left-[1300px] top-[50px] block h-[20px] w-[16px]"
        >
          <svg width="16" height="20" viewBox="1300 50 16 20" fill="#F5F5F6">
            <path d="M1314 54H1312C1312 51.79 1310.21 50 1308 50C1305.79 50 1304 51.79 1304 54H1302C1300.9 54 1300 54.9 1300 56V68C1300 69.1 1300.9 70 1302 70H1314C1315.1 70 1316 69.1 1316 68V56C1316 54.9 1315.1 54 1314 54ZM1308 52C1309.1 52 1310 52.9 1310 54H1306C1306 52.9 1306.9 52 1308 52ZM1314 68H1302V56H1304V58C1304 58.55 1304.45 59 1305 59C1305.55 59 1306 58.55 1306 58V56H1310V58C1310 58.55 1310.45 59 1311 59C1311.55 59 1312 58.55 1312 58V56H1314V68Z" />
          </svg>
        </Link>

        {/* ---------- Heading / copy / search ---------- */}
        <h1
          className={`${poppins.className} absolute left-0 top-[166px] w-full text-center text-[72px] font-semibold leading-[86px] tracking-[-0.01em] text-white`}
        >
          Get Access to Hundreds
          <br />
          Courses Available
        </h1>

        <p className="absolute left-0 top-[373px] w-full text-center text-[18px] font-light leading-[28px] text-[#E5E6E8]">
          Unlock your creativity, gain valuable knowledge, and grow your
          business with our wide range of courses.
        </p>

        <form
          action="/courses"
          className="absolute left-[429.5px] top-[462px] flex items-start gap-[16px]"
        >
          <label className="relative block h-[52px] w-[461px]">
            <svg
              aria-hidden
              className="absolute left-[27.5px] top-[17px]"
              width="18"
              height="18"
              viewBox="456.7 479.2 18 17.6"
              fill="#82868E"
            >
              <path d="M469.255 490.255H468.465L468.185 489.985C469.165 488.845 469.755 487.365 469.755 485.755C469.755 482.165 466.845 479.255 463.255 479.255C459.665 479.255 456.755 482.165 456.755 485.755C456.755 489.345 459.665 492.255 463.255 492.255C464.865 492.255 466.345 491.665 467.485 490.685L467.755 490.965V491.755L472.755 496.745L474.245 495.255L469.255 490.255ZM463.255 490.255C460.765 490.255 458.755 488.245 458.755 485.755C458.755 483.265 460.765 481.255 463.255 481.255C465.745 481.255 467.755 483.265 467.755 485.755C467.755 488.245 465.745 490.255 463.255 490.255Z" />
            </svg>
            <input
              name="q"
              type="text"
              placeholder="Course, topic, creator"
              className="h-full w-full rounded-[24px] bg-white pl-[56.5px] pr-4 text-[16px] text-[#242528] outline-none placeholder:text-[#82868E]"
            />
          </label>
          <button
            type="submit"
            className="h-[46px] w-[104px] rounded-full bg-[#D4FB20] text-[16px] leading-[20px] text-[#242528]"
          >
            Search
          </button>
        </form>

        {/* ---------- Student ---------- */}
        <div
          className="absolute left-[431px] top-[512px] z-[1] h-[541px] w-[578px]"
          style={{ filter: shadow }}
        >
          <Image
            src={`${IMG}/hero-student.png`}
            alt="Smiling student with headphones and laptop"
            width={578}
            height={541}
            priority
            className="h-full w-full max-w-none"
          />
        </div>

        {/* Learning progress */}
        <div className="absolute left-[842px] top-[651px] z-[2] h-[131px] w-[232px] rounded-[16px] bg-white px-[16px] pt-[16px] text-[#242528]">
          <p className="text-[14px] leading-[18px]">Learning Progress</p>
          <p className="mt-[14px] text-[44px] font-medium leading-[44px]">
            55%
          </p>
          <div className="absolute bottom-[16px] left-[16px] h-[8px] w-[200px] rounded-full bg-[#F6F6F6]">
            <div className="h-full w-[112px] rounded-full bg-[#D4FB20]" />
          </div>
        </div>

        {/* Happy students */}
        <div className="absolute left-[328px] top-[837px] z-[2] h-[121px] w-[258px] rounded-[16px] bg-white px-[16px] pt-[16px] text-[#242528]">
          <p className="text-[16px] leading-[20px]">Happy Students</p>
          <p className="mt-[3px] flex items-center text-[12px] leading-[16px]">
            <span>4.5</span>
            <span className="ml-[4px] text-[#82868E]">(240)</span>
            <svg
              className="ml-[4px]"
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="#D4FB20"
              aria-hidden
            >
              <path d="M12 1.5l3.1 7 7.6.7-5.8 5 1.8 7.5L12 17.7l-6.7 4 1.8-7.5-5.8-5 7.6-.7z" />
            </svg>
          </p>
          <div className="absolute left-[16px] top-[62px] flex">
            {[1, 2, 3, 4, 5, 6, 7].map((n) => (
              <Image
                key={n}
                src={`${IMG}/avatars/avatar-${n}.png`}
                alt=""
                width={43}
                height={43}
                className="-mr-[16px] h-[43px] w-[43px] max-w-none rounded-full object-cover"
              />
            ))}
            <span className="flex h-[43px] w-[43px] items-center justify-center rounded-full bg-[#D4FB20] text-[12px] font-semibold text-[#242528]">
              2K+
            </span>
          </div>
        </div>

        {/* ---------- Shapes ---------- */}
        {shapes.map((sh) => (
          <Image
            key={sh.n}
            src={`${IMG}/shape-${sh.n}.png`}
            alt=""
            aria-hidden
            width={Math.round(sh.s)}
            height={Math.round(sh.s)}
            className="pointer-events-none absolute z-[3] max-w-none select-none"
            style={{
              left: sh.x,
              top: sh.y,
              width: sh.s,
              height: sh.s,
              transform: sh.flip ? "scaleX(-1)" : undefined,
            }}
          />
        ))}

        {/* UI/UX card (drawn above the shapes) */}
        <div className="absolute left-[404px] top-[639px] z-[4] h-[70px] w-[208px] rounded-[16px] bg-white px-[16px] pt-[16px] text-[#242528]">
          <p className="text-[16px] font-medium leading-[20px]">UI/UX Design</p>
          <p className="flex items-center text-[12px] leading-[16px] text-[#82868E]">
            <span>200 Courses</span>
            <span className="mx-[9px] h-[3px] w-[3px] rounded-full bg-[#82868E]" />
            <span>1000+ Students</span>
          </p>
        </div>
      </div>
    </section>
  );
}
