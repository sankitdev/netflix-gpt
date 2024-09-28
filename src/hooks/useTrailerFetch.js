import { useEffect } from "react";
import { options } from "../utils/Constant";
import { useDispatch, useSelector } from "react-redux";
import { setMoviesTrailer } from "../store/movieSlice";
const useFetchTrailer = ({ movieId }) => {
  const dispatch = useDispatch();
  const trailer = useSelector((store) => store.movieData.moviesTrailer);
  useEffect(() => {
    const fetchTrailer = async () => {
      if (trailer && trailer.length > 0) return;
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}/videos`,
          options
        );
        const data = await response.json();
        console.log(data);
        dispatch(setMoviesTrailer(data));
      } catch (error) {
        console.error("Error inside get Trailer", error);
      }
    };
    if (movieId) {
      fetchTrailer();
    }
  }, [dispatch, movieId, trailer]);
};

export default useFetchTrailer;
