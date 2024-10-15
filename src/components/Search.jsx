import { bgImg } from "../utils/Constant";
import Button from "./ui/Button";
import { useRef, useState } from "react";
import Header from "./Header";
import gptMovieSearch from "../utils/gptMovieSearch";
import { useDispatch } from "react-redux";
import MovieCards from "./MovieCards";
import { useSelector } from "react-redux";
import ShimmerMovieCards from "./ui/Shimmer";
const Search = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const inputval = useRef();
  const handleSearch = async () => {
    const searchText = inputval?.current?.value.trim();
    if (searchText) {
      try {
        setLoading(!loading);
        await gptMovieSearch(searchText, dispatch);
        setLoading(!loading);
      } catch (error) {
        console.error("Error in gathering response", error);
      }
    } else {
      alert("Enter prompt to get recommendation");
    }
  };
  const movieData = useSelector((store) => store.movieData.gptMovies);
  return (
    <div className="h-screen relative overflow-auto">
      <div className="relative z-30">
        <Header />
      </div>
      <div className="h-screen absolute inset-0 bg-gradient-to-b from-black to-black opacity-30"></div>
      <div
        className={`h-full w-full bg-cover bg-center`}
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        <div className="relative z-20 flex flex-col sm:flex-row items-center justify-center pt-24 pb-5 w-full">
          <input
            type="text"
            ref={inputval}
            className="w-4/5 md:w-1/2 py-3 px-2 rounded-md text-gray-500"
            placeholder="Write prompt for your movies..."
          />
          <Button
            text={"Search"}
            styles={"px-3 py-2 mt-3 sm:mt-0 sm:py-3 md:px-6 ml-2"}
            onClick={handleSearch}
          />
        </div>
        <div className="relative z-20 w-full mx-auto h-full overflow-y-scroll bg-black bg-opacity-30">
          {movieData ? (
            movieData.map((movies, index) => (
              <MovieCards key={index} movieData={movies} title={"Search"} />
            ))
          ) : loading ? (
            <ShimmerMovieCards />
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default Search;
