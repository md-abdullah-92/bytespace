import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import { footerColumns, legalLinks } from "@/data/navigation";

export function Footer() {
  return (
    <footer className="border-t border-border bg-white text-ink">
      <div className="relative mx-auto flex max-w-[1200px] flex-col gap-8 px-6 py-12 lg:block lg:h-[525px] lg:px-0 lg:py-0">
        <Logo
          wordmarkClassName="text-ink"
          className="lg:absolute lg:left-0 lg:top-[71px]"
        />

        <p className="max-w-[470px] text-sm font-light leading-5 text-ink lg:absolute lg:left-0 lg:top-[126px] lg:max-w-none lg:whitespace-nowrap">
          Stay Up to date with our latest features and releases by joining our
          newsletter.
        </p>

        <form className="flex w-full max-w-[504px] items-center gap-4 lg:absolute lg:left-0 lg:top-[191px]">
          <label htmlFor="footer-email" className="sr-only">
            Email address
          </label>
          <input
            id="footer-email"
            type="email"
            required
            placeholder="Enter your email"
            className="h-[51px] min-w-0 flex-1 rounded-full border border-border bg-white px-6 text-base font-light text-ink outline-none placeholder:text-ink focus:ring-2 focus:ring-brand/30"
          />
          <Button
            type="submit"
            variant="lime"
            size="md"
            className="h-[46px] w-[104px] shrink-0 px-0 font-normal"
          >
            Search
          </Button>
        </form>

        <p className="max-w-[470px] text-xs font-light leading-[19px] text-ink lg:absolute lg:left-0 lg:top-[268px]">
          By subscribing, you agree to our Privacy Policy and consent to receive
          updates from our company.
        </p>

        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:absolute lg:left-[621px] lg:top-[120px] lg:w-[579px] lg:grid-cols-[207px_207px_1fr] lg:gap-0">
          {footerColumns.map((column, index) => (
            <ul
              key={index}
              className="flex flex-col gap-4 lg:gap-[18px]"
            >
              {column.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm font-light leading-5 text-ink-soft transition-opacity hover:opacity-70"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          ))}
        </div>

        <div className="hidden lg:absolute lg:left-0 lg:top-[434px] lg:block lg:h-px lg:w-full lg:bg-border" />

        <div className="flex flex-col gap-4 border-t border-border pt-6 text-xs font-light leading-5 text-ink-muted sm:flex-row sm:items-center sm:justify-between lg:absolute lg:inset-x-0 lg:top-[459px] lg:border-0 lg:pt-0">
          <p>@ 2023 ByteSpace. All rights reserved.</p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-ink"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
