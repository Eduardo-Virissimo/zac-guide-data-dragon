import midIcon from "../assets/lanes/mid.png";
import topIcon from "../assets/lanes/top.png";
import jungleIcon from "../assets/lanes/jungle.png";
import botIcon from "../assets/lanes/bottom.png";
import supportIcon from "../assets/lanes/support.png";

const laneIcons = {
  mid: midIcon,
  top: topIcon,
  jungle: jungleIcon,
  bot: botIcon,
  support: supportIcon,
};

export default function LaneSelector({ lanes, selectedLane, onSelectLane }) {
  return (
    <nav
      aria-label="Selecionar lane"
      className="flex justify-center gap-6 mb-12 flex-wrap"
    >
      {lanes.map((lane) => (
        <button
          key={lane}
          type="button"
          onClick={() => onSelectLane(lane)}
          className={`flex items-center gap-3 px-6 py-3 rounded-full text-base font-bold uppercase transition shadow-md
            focus:outline-none focus:ring-2 focus:ring-emerald-400
            ${
              selectedLane === lane
                ? "bg-emerald-500 text-white shadow-xl scale-105"
                : "bg-zinc-800 text-gray-300 hover:bg-zinc-700 hover:text-white"
            }
          `}
          aria-pressed={selectedLane === lane}
        >
          <img
            src={laneIcons[lane]}
            alt={`${lane} icon`}
            className="w-7 h-7"
          />
          {lane.charAt(0).toUpperCase() + lane.slice(1)}
        </button>
      ))}
    </nav>
  );
}
