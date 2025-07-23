export default function SpellDisplay({ spells, skillOrder }) {
  if (!spells || !skillOrder) return null;

  return (
    <div>
      <h2 className="text-2xl font-bold text-emerald-300 mb-4">Spells & Ordem de Habilidades</h2>

      <div className="flex justify-center gap-6 flex-wrap mb-6">
        {spells.map(({ name, icon }, index) => {
          const safeName = name || `spell-${index}`;
          return (
            <div key={`${safeName}-${index}`} className="flex flex-col items-center">
              <img src={icon} alt={safeName} className="w-14 h-14" />
              <span className="text-sm mt-1">{safeName}</span>
            </div>
          );
        })}
      </div>

      <div className="overflow-x-auto bg-zinc-900 p-4 rounded-md text-center text-white font-mono text-lg tracking-widest border border-emerald-600">
        {skillOrder.join(" → ")}
      </div>
    </div>
  );
}
