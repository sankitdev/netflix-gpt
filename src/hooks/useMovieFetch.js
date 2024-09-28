import { useCallback, useEffect } from "react";
import { url, options } from "../utils/Constant";
import { useDispatch, useSelector } from "react-redux";
import { setMoviesList } from "../store/movieSlice";

const useMovieFetch = () => {
  const dispatch = useDispatch();
  const movies = useSelector((store) => store.movieData.moviesList);
  const movieData = useCallback(async () => {
    if (movies && movies.length > 0) return;
    console.log("Test");
    try {
      const response = await fetch(url, options);
      const data = await response.json();
      dispatch(setMoviesList(data.results));
    } catch (error) {
      console.error("Error while MovieFetch", error);
    }
  }, [dispatch, movies]);
  useEffect(() => {
    movieData();
  }, [movieData]);
};
export default useMovieFetch;
