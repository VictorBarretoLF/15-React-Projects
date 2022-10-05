import { createSlice } from "@reduxjs/toolkit";
import { birthdays } from "../../data/birthdays";

const initialState = {
  list: birthdays,
};

export const listSlice = createSlice({
  name: "list",
  initialState,
  reducers: {
    clearList: (state) => {
      state.list = [];
    },
  },
});

export const { clearList } = listSlice.actions;

export default listSlice.reducer;
