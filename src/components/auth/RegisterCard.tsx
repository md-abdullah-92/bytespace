import Link from "next/link";
import { RegisterForm } from "./RegisterForm";

export function RegisterCard({ className = "" }: { className?: string }) {
  return <section className={`flex w-full max-w-[579px] flex-col rounded-3xl bg-white px-6 pb-[35px] pt-[61px] sm:px-[63px] xl:h-[784px] ${className}`}><header><p className="text-lg leading-7 text-brand">Create an Account</p><h1 className="mt-1 font-heading text-[44px] font-semibold leading-[48px] text-ink">Welcome to ByteSpace</h1></header><div className="mt-10"><RegisterForm /></div><p className="mt-10 text-center text-base font-light text-ink-muted xl:mb-0 xl:mt-auto">Already have an account? <Link href="/login" className="font-normal text-brand hover:underline">Login</Link></p></section>;
}