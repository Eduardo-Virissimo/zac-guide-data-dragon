export default function LaneSelector({ lanes, selectedLane, onSelectLane }) {
  return (
    <div className="flex justify-center gap-4 mb-8 flex-wrap">
      {lanes.map((lane) => (
        <button
          key={lane}
          onClick={() => onSelectLane(lane)}
          className={`px-5 py-2 rounded-full text-sm font-semibold uppercase transition shadow-md
            ${selectedLane === lane
              ? 'bg-emerald-500 text-white'
              : 'bg-zinc-800 text-gray-300 hover:bg-zinc-700 hover:text-white'}
          `}
        >
          {lane}
        </button>
      ))}
    </div>
  );
}
