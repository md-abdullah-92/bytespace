import Link from "next/link";
import { Divider } from "./Divider";
import { LoginForm } from "./LoginForm";
import { SocialLogin } from "./SocialLogin";

export function LoginCard({ className = "" }: { className?: string }) {
  return <section className={`flex w-full max-w-[579px] flex-col rounded-3xl bg-white px-6 pb-[35px] pt-[61px] sm:px-[63px] xl:h-[784px] ${className}`}><header><p className="text-lg leading-7 text-brand">Sign In</p><h1 className="mt-1 font-heading text-[44px] font-semibold leading-[48px] text-ink">Welcome Back</h1></header><div className="mt-10"><LoginForm /></div><div className="mt-[87px]"><Divider label="or" /></div><div className="mt-[45px]"><SocialLogin /></div><p className="mt-10 text-center text-base font-light text-ink-muted xl:mb-0 xl:mt-auto">New user? <Link href="/register" className="font-normal text-brand hover:underline">Create an account</Link></p></section>;
}