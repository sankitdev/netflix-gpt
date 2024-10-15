import { bgImg } from "../utils/Constant";
import Button from "./ui/Button";
import { useRef } from "react";
import Header from "./Header";
import gptMovieSearch from "../utils/gptMovieSearch";
import { useDispatch } from "react-redux";
import MovieCards from "./MovieCards";
import { useSelector } from "react-redux";
const Search = () => {
  const dispatch = useDispatch();
  const inputval = useRef();
  const handleSearch = async () => {
    const searchText = inputval?.current?.value.trim();
    if (searchText) {
      try {
        await gptMovieSearch(searchText, dispatch);
      } catch (error) {
        console.error("Error in gathering response", error);
      }
    } else {
      alert("Enter prompt to get recommendation");
    }
    searchText === "";
  };
  const movieData = useSelector((store) => store.movieData.gptMovies);

  // console.log(movieData && movieData[0]);
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
        <div className="relative z-20 flex justify-center pt-20 pb-5 w-full">
          <input
            type="text"
            ref={inputval}
            className="w-4/5 md:w-1/2 py-3 px-2 rounded-md text-gray-500"
            placeholder="Write prompt for your movies..."
          />
          <Button
            text={"Search"}
            styles={"px-3 md:px-6 ml-2"}
            onClick={handleSearch}
          />
        </div>
        <div className="relative z-20 w-full mx-auto h-full overflow-y-scroll bg-black bg-opacity-30">
          {movieData?.length > 0 &&
            movieData.map((movies, index) => (
              <MovieCards key={index} movieData={movies} title={"Search"} />
            ))}
          {/* {movieData && <MovieCards movieData={movieData} title={"Search"} />} */}
        </div>
      </div>
    </div>
  );
};

export default Search;
