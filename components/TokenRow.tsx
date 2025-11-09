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
  columnKey?: "new" | "final" | "migrated" | string;
}) {
  const pickThumb = () => {
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

  const IconStack = () =>
    row.statsIcons?.length ? (
      <div className="flex items-center gap-1">
        {row.statsIcons.map((Icon, idx) => (
          <Icon key={idx} className="h-4 w-4" />
        ))}
      </div>
    ) : null;

  const badges = Array.isArray(row.changeBadges) ? row.changeBadges : [];

  return (
    <div className="flex items-center gap-3 rounded-lg bg-white/5 px-3 py-2 transition-colors hover:bg-white/10">
      {/* Left thumbnail */}
      <div className="h-12 w-12 overflow-hidden rounded-md bg-gray-900">
        <img
          src={pickThumb().src}
          alt={`${columnKey ?? "token"} thumbnail`}
          className="h-full w-full object-cover transition-transform duration-300 hover:scale-110"
          loading="lazy"
        />
      </div>

      {/* Middle block */}
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2">
          <p className="truncate text-sm font-semibold text-white">{row.name}</p>
          <span className="text-[11px] text-gray-400">{row.age}</span>
        </div>

        <div className="flex items-center gap-2 text-[11px] text-gray-400">
          <IconStack />
          {row.subtitle && <span className="truncate">{row.subtitle}</span>}
        </div>

        {badges.length > 0 && (
          <div className="mt-1 flex flex-wrap gap-1">
            {badges.map((badge, i) => (
              <span
                key={`${row.id}-badge-${i}`}
                className={`rounded-full px-2 py-0.5 text-[10px] font-medium bg-white/10 ${badgeColor(
                  badge.color
                )}`}
              >
                {badge.label}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Right side */}
      <div className="text-right">
        <div className="text-[11px] text-gray-200">
          MC <span className="text-blue-500">{row.mc}</span>
        </div>
        <div className="text-[11px] text-blue-400">∨ {row.val}</div>
        <div className="mt-1 flex justify-end gap-2">
          {row.fee && (
            <span className="rounded-full bg-white/10 px-2 py-0.5 text-[10px] font-medium text-gray-300">
              {row.fee}
            </span>
          )}
          {row.chainPill && (
            <span className="rounded-full bg-ax.sol/20 px-2 py-0.5 text-[10px] font-medium text-ax.sol">
              {row.chainPill}
            </span>
          )}
        </div>
      </div>

      <FiChevronRight className="ml-1 text-white/30" />
    </div>
  );
}
