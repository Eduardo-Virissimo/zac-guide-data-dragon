export default function SpellDisplay({ spells, skillOrder }) {
  if (!spells || !skillOrder) return null;

  return (
    <div className="mt-6 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold text-emerald-300 mb-4">Spells & Ordem de Habilidades</h2>

      <div className="flex justify-center gap-6 flex-wrap mb-4">
        {spells.map(({ name, icon }, index) => {
          const safeName = name || `spell-${index}`;
          return (
            <div key={`${safeName}-${index}`} className="flex flex-col items-center">
              <img src={icon} alt={safeName} className="w-12 h-12" />
              <span className="text-sm mt-1">{safeName}</span>
            </div>
          );
        })}
      </div>

      <div className="overflow-x-auto bg-zinc-800 p-4 rounded-md text-center text-white font-mono text-lg tracking-widest">
        {skillOrder.join(" → ")}
      </div>
    </div>
  );
}
