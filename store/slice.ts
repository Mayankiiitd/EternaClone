import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Phase = "P1" | "P2" | "P3";
type ColumnKey = "new" | "final" | "migrated";

interface UIState {
  theme: "dark" | "light";
  phases: Record<ColumnKey, Phase>;
  showOnly: Record<ColumnKey, number>;
}

const initialState: UIState = {
  theme: "dark",
  phases: { new: "P1", final: "P1", migrated: "P1" },
  showOnly: { new: 0, final: 0, migrated: 0 },
};

const ui = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setTheme(state, a: PayloadAction<"dark"|"light">) { state.theme = a.payload; },
    setPhase(state, a: PayloadAction<{col: ColumnKey; phase: Phase;}>) {
      state.phases[a.payload.col] = a.payload.phase;
    },
  },
});

export const { setTheme, setPhase } = ui.actions;
export default ui.reducer;
