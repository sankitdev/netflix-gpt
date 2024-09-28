import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    moviesList: null,
    moviesTrailer: null,
  },
  reducers: {
    setMoviesList: (state, action) => {
      state.moviesList = action.payload;
    },
    setMoviesTrailer: (state, action) => {
      state.trailer = action.payload;
    },
  },
});
export const { setMoviesList, setMoviesTrailer } = movieSlice.actions;
export default movieSlice.reducer;
