export default function ItemsDisplay({ items }) {
  return (
    <div>
      <h2 className="text-2xl font-bold text-emerald-300 mb-4">Itens Principais</h2>
      <div className="flex gap-6 flex-wrap justify-center">
        {items.map(({ name, icon }) => (
          <div
            key={name}
            className="flex flex-col items-center p-2 rounded-lg bg-zinc-800 shadow-md"
          >
            <img src={icon} alt={name} className="w-12 h-12" />
            <span className="mt-1 text-sm">{name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
