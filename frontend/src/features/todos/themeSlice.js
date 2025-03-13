import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "theme",
  initialState: {
    theme: false,
  },
  reducers: {
    toggleTheme: (state) => {
      state.theme = !state.theme;
    },
  },
});

export const { toggleTheme } = todoSlice.actions;
export default todoSlice.reducer;
