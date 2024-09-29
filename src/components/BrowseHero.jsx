import PropTypes from "prop-types";
import useFetchTrailer from "../hooks/useFetchTrailer.js";
import { useSelector } from "react-redux";
import YouTubeEmbed from "./YoutubeEmbed.jsx";

const BrowseHero = ({ title, overview, movieId }) => {
  useFetchTrailer(movieId);
  const trailer = useSelector((store) => store.movieData.moviesTrailer);
  if (!trailer) return;
  return (
    <div className="h-screen w-full relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-gray-900 z-10">
        <div className="absolute top-1/3 left-20 z-20">
          <h1 className="text-6xl font-bold mb-5">{title}</h1>
          <h2 className="w-1/2 md:w-1/3 leading-5">{overview}</h2>
          <button className="bg-white text-black py-4 px-12 text-xl rounded-lg mt-5 mr-5 hover:bg-[rgba(255,255,255,0.1)] hover:text-white">
            Play
          </button>
          <button className="bg-gray-500 text-white py-4 px-12 text-xl rounded-lg mt-5 hover:bg-gray-100 hover:text-black">
            More Info
          </button>
        </div>
      </div>
      <YouTubeEmbed videoId={trailer.key} />
    </div>
  );
};

BrowseHero.propTypes = {
  title: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  movieId: PropTypes.number.isRequired,
};

export default BrowseHero;
