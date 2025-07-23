export default function ItemsDisplay({ items }) {
  if (!items || items.length === 0) return null;

  return (
    <div>
      <h2 className="text-2xl font-bold text-emerald-300 mb-4">Itens Principais</h2>
      <div className="flex gap-6 flex-wrap justify-center">
        {items.map(({ name, icon }) => (
          <div
            key={name}
            className="flex flex-col items-center p-2 rounded-lg bg-zinc-900 shadow-md border border-emerald-600 transition hover:scale-105"
          >
            <img src={icon} alt={name} className="w-14 h-14" />
            <span className="mt-1 text-sm">{name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
