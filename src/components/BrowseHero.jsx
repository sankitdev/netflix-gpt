import PropTypes from "prop-types";
import useFetchTrailer from "../hooks/useTrailerFetch";

const BrowseHero = ({ title, overview, movieId }) => {
  useFetchTrailer(movieId);
  return (
    <div className="h-screen w-full relative">
      <div className="absolute top-1/2">
        <h1>{title}</h1>
        <h2>{overview}</h2>
      </div>
    </div>
  );
};

BrowseHero.propTypes = {
  title: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  movieId: PropTypes.number.isRequired,
};

export default BrowseHero;
