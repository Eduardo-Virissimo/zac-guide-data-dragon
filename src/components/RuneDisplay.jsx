import { useEffect, useState } from "react";
import { getAllRunesData } from "../data/utils/ddragon";

export default function RuneDisplay({ runes }) {
  const [runesData, setRunesData] = useState(null);

  useEffect(() => {
    getAllRunesData().then(setRunesData);
  }, []);

  if (!runes || !runesData) return null;

  const renderRuneSlot = (slot, selectedIds) => (
    <div className="flex justify-center gap-3 flex-wrap mb-3">
      {slot.runes.map((rune) => {
        const isSelected = selectedIds.includes(rune.id);
        return (
          <div
            key={rune.id}
            className={`flex flex-col items-center p-2 rounded-lg transition-all ${isSelected
                ? "opacity-100 border border-emerald-500"
                : "opacity-30 grayscale"
              }`}
          >
            <img
              src={`https://ddragon.leagueoflegends.com/cdn/img/${rune.icon}`}
              alt={rune.name}
              className="w-12 h-12"
            />
            <span className="mt-1 text-sm text-center text-white">
              {rune.name}
            </span>
          </div>
        );
      })}
    </div>
  );

  const renderTreeSlots = (treeId, selectedIds, title) => {
    const tree = runesData.find((t) => t.id === treeId);
    if (!tree) return null;

    return (
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2 text-emerald-400">
          {title}: {tree.name}
        </h3>
        {tree.slots.map((slot, i) => (
          <div key={i}>{renderRuneSlot(slot, selectedIds)}</div>
        ))}
      </section>
    );
  };

  const renderShards = () => (
    <section>
      <h3 className="text-xl font-semibold mb-2 text-emerald-400">Fragmentos</h3>
      <div className="flex gap-4 justify-center flex-wrap">
        {runes.shards.map(({ name, icon }, index) => (
          <div
            key={`${name}-${index}`}
            className="flex flex-col items-center p-2 rounded-lg"
          >
            <img src={icon} alt={name} className="w-12 h-12" />
            <span className="mt-1 text-sm text-center text-white">{name}</span>
          </div>
        ))}
      </div>
    </section>
  );

  return (
    <div>
      <h2 className="text-2xl font-bold text-emerald-300 mb-4">Runas</h2>

      {renderTreeSlots(
        runes.primaryTreeId,
        runes.primaryRunesSelectedIds,
        "Runa Primária"
      )}
      {renderTreeSlots(
        runes.secondaryTreeId,
        runes.secondaryRunesSelectedIds,
        "Runa Secundária"
      )}
      {renderShards()}
    </div>
  );
}
