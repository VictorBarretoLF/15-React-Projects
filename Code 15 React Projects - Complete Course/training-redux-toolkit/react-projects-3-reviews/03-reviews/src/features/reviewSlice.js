import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    index : 0
}

export const reviewSlice = createSlice({
    name: 'review',
    initialState,
    reducers: {
        nextReview: (state) => {
          state.index === 3 ? state.index = 0 : state.index++
        },
    }
});

export const currentIndex = (state) => state.review.index

export const { nextReview } = reviewSlice.actions;

export default reviewSlice.reducer;