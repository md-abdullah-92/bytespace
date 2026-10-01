import Image from "next/image";

interface HeroPanelProps { title: string; description: string; className?: string; }

export function HeroPanel({ title, description, className = "" }: HeroPanelProps) {
  return <div className={`relative min-h-[784px] ${className}`}><div className="max-w-[480px] text-white"><h2 className="font-heading text-xl font-medium leading-7">{title}</h2><p className="mt-3 text-xl font-light leading-[30px] text-surface">{description}</p></div><Image src="/images/hero-illustration.png" alt="Screenshots of course cards from the platform, with student ratings and avatars" width={580} height={620} className="absolute -left-[25px] top-[145px] h-auto w-[520px] max-w-none" priority /></div>;
}