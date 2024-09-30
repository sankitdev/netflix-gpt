import PropTypes from "prop-types";
import MovieCards from "./MovieCards";
const BrowseRest = ({ movieData }) => {
  const nowPlaying = movieData.nowPlayingList;
  const popularList = movieData.popularMoviesList;
  const topRatedList = movieData.topRatedList;
  const upComingList = movieData.upComingList;
  return (
    <div className=" min-h-screen bg-black pb-10">
      <div className="relative z-20 -mt-48 sm:-mt-36 ">
        <MovieCards movieData={nowPlaying} title={"Now Playing"} />
      </div>
      <MovieCards movieData={popularList} title={"Trending"} />
      <MovieCards movieData={topRatedList} title={"Top Rated"} />
      <MovieCards movieData={upComingList} title={"Up Coming"} />
    </div>
  );
};

BrowseRest.propTypes = {
  movieData: PropTypes.arrayOf(
    PropTypes.shape({
      original_title: PropTypes.string.isRequired,
      poster_path: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default BrowseRest;
