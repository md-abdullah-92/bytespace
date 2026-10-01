export function Divider({ label }: { label: string }) {
  return <div className="flex items-center gap-[19px] px-[52px]" role="separator" aria-label={label}><span className="h-px flex-1 bg-line-social" /><span className="text-base font-light text-[#888888]">{label}</span><span className="h-px flex-1 bg-line-social" /></div>;
}