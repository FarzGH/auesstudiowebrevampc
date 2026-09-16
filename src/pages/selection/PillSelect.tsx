interface PillOption {
  id: string;
  label: string;
}

interface PillSelectProps {
  options: PillOption[];
  value: string;
  onChange: (val: string) => void;
  columns?: 2 | 3;
  name: string;
}

export default function PillSelect({ options, value, onChange, columns = 3, name }: PillSelectProps) {
  return (
    <div className={`grid gap-2 ${columns === 2 ? "grid-cols-2" : "grid-cols-3"}`}>
      {options.map((opt) => (
        <label
          key={opt.id}
          onClick={() => onChange(opt.id)}
          className={`cursor-pointer rounded-xl border px-1 py-2 text-center text-xs font-semibold transition-all duration-200 ${
            value === opt.id
              ? "border-brass-bright bg-brass/20 text-brass-bright shadow-glow-brass"
              : "border-parchment/10 bg-ink/50 text-parchment-dim hover:border-parchment/30"
          }`}
        >
          <input type="radio" name={name} value={opt.id} checked={value === opt.id} onChange={() => {}} className="hidden" />
          {opt.label}
        </label>
      ))}
    </div>
  );
}
