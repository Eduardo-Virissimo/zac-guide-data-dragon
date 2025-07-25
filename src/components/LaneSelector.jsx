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
    <div className="flex flex-wrap gap-3">
      {lanes.map((lane) => (
        <button
          key={lane}
          type="button"
          onClick={() => onSelectLane(lane)}
          className={`flex items-center gap-2 px-4 py-2 rounded border transition-all duration-200 text-sm font-semibold uppercase
            ${
              selectedLane === lane
                ? "bg-[#1E2328] border-emerald-500 text-[#F0E6D2] ring-2 ring-emerald-500"
                : "bg-[#1E2328] border-[#785A28] text-[#C8AA6E] hover:bg-[#2A2E35] hover:text-[#F0E6D2]"
            }
          `}
          aria-pressed={selectedLane === lane}
        >
          <img src={laneIcons[lane]} alt={`${lane} icon`} className="w-5 h-5" />
          {lane.charAt(0).toUpperCase() + lane.slice(1)}
        </button>
      ))}
    </div>
  );
}
