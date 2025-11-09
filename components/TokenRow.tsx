import { TokenRow as Row } from "@/utils/data";
import { FiChevronRight } from "react-icons/fi";
import nimage from "../thumbnails/nimage.png";
import coin from "../thumbnails/icon.png";
import American from "../thumbnails/American.png";

function badgeColor(kind: "good" | "bad" | "warn" | "muted") {
  return {
    good: "text-ax.good",
    bad: "text-ax.bad",
    warn: "text-ax.warn",
    muted: "",
  }[kind];
}

export default function TokenRow({
  row,
  columnKey,
}: {
  row: Row;
  columnKey?: string;
}) {

  const returnThumbnailIcon = () => {
    switch (columnKey) {
      case "new":
        return nimage;      
      case "final":
        return coin;        
      case "migrated":
        return American;    
      default:
        return coin;
    }
  };

  const IconStack = () => (
    <div className="flex items-center gap-1">
      {row.statsIcons?.map((Icon, idx) => (
        <Icon key={idx} className="h-4 w-4" />
      ))}
    </div>
  );

  return (
    <div className="flex items-center gap-3 rounded-lg bg-white/5 px-3 py-2 hover:bg-white/10 transition-colors">
      {/* Left side */}
      <div className="w-12 h-12 overflow-hidden rounded-md bg-gray-900">
        <img
          src={returnThumbnailIcon().src}
          alt={`${columnKey} thumbnail`}
          className="object-cover w-full h-full transition-transform duration-250 hover:scale-110"
          loading="lazy"
        />
      </div>

      {/* mid block */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2">
          <p className="truncate text-sm font-semibold text-white">{row.name}</p>
          <span className="text-[11px] text-gray-400">{row.age}</span>
        </div>

        <div className="flex items-center gap-2 text-[11px] text-gray-400">
          <IconStack />
          {row.subtitle && <span>{row.subtitle}</span>}
        </div>

        {row.changeBadges?.length > 0 && (
          <div className="mt-1 flex flex-wrap gap-1">
            {row.changeBadges.map((badge, i) => (
              <span
                key={i}
                className={`rounded-full px-2 py-0.5 text-[10px] font-medium bg-white/10 ${badgeColor(badge.color)}`}
              >
                {badge.label}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* right side */}
      <div className="text-right">
        <div className="text-[11px] text-gray-200">
          MC <span className="text-blue-500">{row.mc}</span>
        </div>
        <div className="text-[11px] text-blue-400">∨ {row.val}</div>
        <div className="flex justify-end gap-2 mt-1">
          {row.fee && (
            <span className="rounded-full px-2 py-0.5 text-[10px] font-medium bg-white/10 text-gray-300">{row.fee}</span>
          )}
          {row.chainPill && (
            <span className="rounded-full px-2 py-0.5 text-[10px] font-medium bg-ax.sol/20 text-ax.sol">{row.chainPill}</span>
          )}
        </div>
      </div>
    </div>
  );
}
