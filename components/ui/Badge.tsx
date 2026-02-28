export function Badge({ label }: { label: string }) {
  return <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-charcoal">{label}</span>;
}
