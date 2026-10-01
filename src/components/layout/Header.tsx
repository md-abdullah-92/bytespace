import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { BagIcon } from "@/components/ui/Icons";
import { Logo } from "@/components/ui/Logo";
import { primaryNav } from "@/data/navigation";

/**
 * Transparent header meant to sit on top of the blue hero section.
 * `Hero` renders this inside its own `<section>` so the background shows
 * through.
 */
export function Header() {
  return (
    <header className="absolute left-[122px] top-[35px] z-20 flex h-[35px] w-[1194px] items-center">
      <Logo />

      <nav aria-label="Primary" className="absolute left-[494px] top-[12px] hidden items-center gap-7 md:flex">
        {primaryNav.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-base leading-5 text-white/90 transition-colors hover:text-white"
          >
            {link.label}
          </Link>
        ))}
      </nav>

      <div className="absolute right-0 top-[3px] flex items-center gap-6">
        <Link
          href="/login"
          className="hidden text-sm font-medium text-white/90 transition-colors hover:text-white sm:inline"
        >
          Sign In
        </Link>
        <Button href="/register" variant="ghost-light" size="md" className="h-10 px-0">
          Join Us
        </Button>
        <Link
          href="/cart"
          aria-label="Cart"
          className="text-white/90 transition-colors hover:text-white"
        >
          <BagIcon className="h-5 w-5" />
        </Link>
      </div>
    </header>
  );
}
