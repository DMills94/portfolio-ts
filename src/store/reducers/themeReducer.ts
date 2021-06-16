import { createSlice } from "@reduxjs/toolkit";
import { Theme } from "helpers/styles";

// Helpers
import determineTheme from "helpers/theme";

const initialState: Theme = determineTheme(true);

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: () => determineTheme(),
  }
})

export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;
