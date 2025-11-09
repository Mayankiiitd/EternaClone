import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import { setPhase } from "@/store/slice";

export default function ColumnToolbar({ colKey }:{ colKey:"new"|"final"|"migrated" }) {
  const dispatch = useDispatch();
  const phase = useSelector((s:RootState)=>s.ui.phases[colKey]);

  const Btn = ({p}:{p:"P1"|"P2"|"P3"}) => (
    <button
      onClick={()=>dispatch(setPhase({col: colKey, phase: p}))}
      className={`px-2 py-0.5 text-[10px] rounded-md border ${phase===p ? "bg-white/10 text-white border-white/20" : "border-white/10 hover:border-white/20"}`}
    >{p}</button>
  );

  return (
    <div className="flex items-center justify-between text-xs">
      <div className="flex items-center gap-2">
        <span className="bg-white/5 px-1.5 py-0.5 rounded">0</span>
      </div>
      <div className="flex items-center gap-1">
        <Btn p="P1" /><Btn p="P2" /><Btn p="P3" />
      </div>
    </div>
  );
}
