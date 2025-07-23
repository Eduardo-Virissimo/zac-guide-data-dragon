export default function LaneSelector({ lanes, selectedLane, onSelectLane }) {
  return (
    <nav aria-label="Selecionar lane" className="flex justify-center gap-4 mb-8 flex-wrap">
      {lanes.map((lane) => (
        <button
          key={lane}
          type="button"
          onClick={() => onSelectLane(lane)}
          className={`px-5 py-2 rounded-full text-sm font-semibold uppercase transition shadow-md focus:outline-none focus:ring-2 focus:ring-emerald-400
            ${selectedLane === lane ? "bg-emerald-500 text-white shadow-lg" : "bg-zinc-800 text-gray-300 hover:bg-zinc-700 hover:text-white"}
          `}
          aria-pressed={selectedLane === lane}
        >
          {lane}
        </button>
      ))}
    </nav>
  );
}
