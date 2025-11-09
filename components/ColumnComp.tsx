import ColumnToolbar from "./ColumnToolbar";
import TokenRow from "./TokenRow";
import { TokenRow as Row } from "@/utils/data";

export default function Column({
  title,
  items,
  colKey,
}: {
  title: string;
  items: Row[];
  colKey: "new" | "final" | "migrated";
}) {
  return (
    <section className="flex h-[850px] flex-col scroll-smooth rounded-xl">
      <div className="sticky top-0 z-10 -mx-2 px-5 py-3 bg-gray-950 rounded-lg">
        <div className="flex items-center justify-between">
          <h2 className="text-[13px] font-semibold text-white/90">{title}</h2>
          <ColumnToolbar colKey={colKey} />
        </div>
      </div>

      <div className="mt-2 flex-1 overflow-y-auto pr-2 space-y-2">
        {items.map((item) => (
          <TokenRow key={item.id} row={item} columnKey={colKey} />
        ))}
        <div className="h-2" />
      </div>
    </section>
  );
}
