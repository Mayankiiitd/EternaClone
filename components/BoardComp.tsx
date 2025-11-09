import Column from "./ColumnComp";
import { newPairs, finalStretch, migrated } from "@/utils/data";

export default function Board() {
  return (
    <div className="max-w-7xl mx-auto px-4 h-full">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 h-full">
        <Column title="New Pairs" items={newPairs} colKey="new" />
        <Column title="Final Stretch" items={finalStretch} colKey="final" />
        <Column title="Migrated" items={migrated} colKey="migrated" />

      </div>
    </div>
  );
}
