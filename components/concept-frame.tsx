export function ConceptFrame({ label }: { label: string }) {
  return (
    <div className="relative aspect-[16/10] overflow-hidden bg-[#e7edf5]">
      <div className="absolute inset-3 flex flex-col gap-2 rounded-lg bg-white/85 p-3 sm:inset-4">
        <div className="flex items-center gap-2">
          <div className="h-2 w-14 rounded-full bg-[#c5d0de]" />
          <div className="ml-auto h-2 w-8 rounded-full bg-[#d5deea]" />
        </div>
        <div className="grid min-h-16 flex-1 grid-cols-3 gap-2">
          <div className="rounded-md bg-[#e7edf5]" />
          <div className="rounded-md bg-[#e7edf5]" />
          <div className="rounded-md bg-[#d7e3f6]" />
        </div>
        <div className="h-2 w-2/3 rounded-full bg-[#d5deea]" />
      </div>
      <span className="absolute bottom-3 left-3 rounded-full bg-white/95 px-2.5 py-1 text-[11px] font-medium text-muted">
        Concept preview
      </span>
      <span className="sr-only">{label}</span>
    </div>
  );
}
