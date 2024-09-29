import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    nowPlayingList: null,
    popularMoviesList: null,
    topRatedList: null,
    upComingList: null,
    moviesTrailer: null,
  },
  reducers: {
    setNowPlayingList: (state, action) => {
      state.nowPlayingList = action.payload;
    },
    setPopularMoviesList: (state, action) => {
      state.popularMoviesList = action.payload;
    },
    setTopRatedList: (state, action) => {
      state.topRatedList = action.payload;
    },
    setUpComingList: (state, action) => {
      state.upComingList = action.payload;
    },
    setMoviesTrailer: (state, action) => {
      state.moviesTrailer = action.payload;
    },
  },
});

export const {
  setNowPlayingList,
  setPopularMoviesList,
  setTopRatedList,
  setUpComingList,
  setMoviesTrailer,
} = movieSlice.actions;

export default movieSlice.reducer;
