import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    isGenericSectionOpen: false, // Our new toggle state
  },
  reducers: {
    toggleGenericSection: (state) => {
      state.isGenericSectionOpen = !state.isGenericSectionOpen;
    },
  },
});

export const { toggleGenericSection } = uiSlice.actions;
export const uiReducer = uiSlice.reducer;
