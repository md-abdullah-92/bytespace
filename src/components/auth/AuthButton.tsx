import type { ButtonHTMLAttributes } from "react";

export function AuthButton({ className = "", type = "button", ...props }: ButtonHTMLAttributes<HTMLButtonElement>) {
  return <button type={type} className={`inline-flex h-[46px] items-center justify-center rounded-full bg-lime px-[26px] text-lg font-medium text-ink transition hover:brightness-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand disabled:opacity-60 ${className}`} {...props} />;
}