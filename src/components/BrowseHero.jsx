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
      {/* Semi-transparent gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-gray-900 z-10 pointer-events-none" />

      {/* Content container */}
      <div className="absolute top-1/3 left-8 md:left-20 z-20">
        <h1 className="text-5xl md:text-6xl font-bold mb-5">{title}</h1>
        <h2 className="w-64 h-16 md:h-28 md:w-80 leading-5 overflow-clip">
          {overview}
        </h2>
        {/* Buttons with hover effects */}
        <button className="bg-white text-black py-2 px-8 md:px-12 md:py-4 md:text-xl text-lg rounded-lg mt-5 mr-5 hover:bg-[rgba(255,255,255,0.1)] hover:text-white transition duration-300 ease-in-out">
          Play
        </button>
        <button className="bg-gray-500 text-white py-2 px-6 md:px-12 md:py-4 md:text-xl text-lg rounded-lg mt-5 hover:bg-gray-100 hover:text-black transition duration-300 ease-in-out">
          More Info
        </button>
      </div>

      {/* YouTube Embed */}
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
