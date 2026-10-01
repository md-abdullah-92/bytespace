import Image from "next/image";
import { cn } from "@/lib/cn";

interface AvatarStackProps {
  avatars: string[];
  /** Text shown in the trailing lime bubble, e.g. "26+" or "2K+". */
  countLabel: string;
  size?: number;
  className?: string;
}

/** Row of overlapping circular avatars followed by a "+N" lime bubble. */
export function AvatarStack({
  avatars,
  countLabel,
  size = 28,
  className,
}: AvatarStackProps) {
  return (
    <div className={cn("flex items-center", className)}>
      <div className="flex" style={{ paddingRight: 4 }}>
        {avatars.map((src, i) => (
          <span
            key={src}
            className="-ml-2 block overflow-hidden rounded-full border-2 border-white first:ml-0"
            style={{ width: size, height: size }}
          >
            <Image
              src={src}
              alt=""
              width={size}
              height={size}
              className="h-full w-full object-cover"
            />
          </span>
        ))}
      </div>
      <span
        className="-ml-2 flex items-center justify-center rounded-full bg-lime text-[11px] font-semibold text-ink"
        style={{ height: size, paddingInline: 8 }}
      >
        {countLabel}
      </span>
    </div>
  );
}
