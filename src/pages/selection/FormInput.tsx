import type { InputHTMLAttributes } from "react";

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  required?: boolean;
  invalid?: boolean;
}

export default function FormInput({ label, required, invalid, className = "", ...props }: FormInputProps) {
  return (
    <div>
      <label className="mb-1.5 block text-xs font-semibold text-parchment-muted">
        {label} {required && <span className="text-brass-bright">*</span>}
      </label>
      <input
        {...props}
        className={`w-full rounded-xl border bg-ink/50 px-4 py-2.5 text-sm text-parchment placeholder:text-parchment-dim focus:outline-none transition-all duration-300 ${
          invalid ? "border-garnet-bright focus:border-garnet-bright" : "border-parchment/20 focus:border-brass-bright"
        } ${className}`}
      />
    </div>
  );
}
