import { forwardRef, useId, type InputHTMLAttributes } from "react";

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> { label: string; }

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(function TextField({ label, id, className = "", ...props }, ref) {
  const generatedId = useId();
  const inputId = id ?? generatedId;
  return <div className="flex flex-col gap-2"><label htmlFor={inputId} className="text-sm text-ink">{label}</label><input ref={ref} id={inputId} className={`h-[51px] w-full rounded-xl border border-line bg-white px-[22px] text-lg font-light text-ink outline-none transition placeholder:text-ink-muted focus:border-brand focus:ring-2 focus:ring-brand/20 ${className}`} {...props} /></div>;
});