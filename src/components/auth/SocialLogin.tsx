import type { ReactNode } from "react";
import { FacebookIcon, GoogleIcon } from "./AuthIcons";

function SocialButton({ label, children }: { label: string; children: ReactNode }) {
  return <button type="button" aria-label={label} className="flex size-[71px] items-center justify-center rounded-3xl border border-line-social bg-white text-black transition hover:bg-surface-soft focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand">{children}</button>;
}

export function SocialLogin() {
  return <div className="flex justify-center gap-[17px]"><SocialButton label="Continue with Facebook"><FacebookIcon className="size-[33px]" /></SocialButton><SocialButton label="Continue with Google"><GoogleIcon className="size-[33px]" /></SocialButton></div>;
}