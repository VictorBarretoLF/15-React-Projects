import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  index: 0,
};

export const reviewSlice = createSlice({
  name: "review",
  initialState,
  reducers: {
    nextReview: (state) => {
      state.index++;
      if (state.index > 3) state.index = 0;
    },
    prevReview: (state) => {
      state.index--;
      if (state.index < 0) state.index = 3;
    },
    randomReview: (state) => {
      state.index = Math.floor(Math.random() * 4);
    },
  },
});

export const currentIndex = (state) => state.review.index;

export const { nextReview, prevReview, randomReview } = reviewSlice.actions;

export default reviewSlice.reducer;
