import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const URL = "https://course-api.com/react-tours-project";

const initialState = {
  tours: [],
  status: "idle",
  error: null,
};

export const fetchTours = createAsyncThunk(URL, async () => {
  try {
    const response = await fetch(URL);
    const data = await response.json();
    return data;
  } catch (e) {
    return e.message;
  }
});

const toursSlice = createSlice({
  name: "tours",
  initialState,
  reducers: {
    remoteTour(state, action) {
      const id = action.payload;
      state.tours = state.tours.filter((tour) => tour.id !== id);
    },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder
      .addCase(fetchTours.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchTours.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.tours = action.payload;
      })
      .addCase(fetchTours.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const selectAllTours = (state) => state.tours.tours;
export const getToursStatus = (state) => state.tours.status;

export const { remoteTour } = toursSlice.actions;

export default toursSlice.reducer;
