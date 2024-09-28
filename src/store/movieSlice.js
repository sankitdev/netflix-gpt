import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState: null,
  reducers: {
    popularMovies: (state, action) => {
      return action.payload;
    },
  },
});
export const { popularMovies } = movieSlice.actions;
export default movieSlice.reducer;
