import propTypes from "prop-types";

const YouTubeEmbed = ({ videoId }) => {
  return (
    <div className="relative w-full h-screen aspect-video">
      {" "}
      {/* 16:9 Aspect Ratio */}
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&fs=1&modestbranding=1&rel=0`}
        allow="autoplay; fullscreen"
        allowFullScreen
        className="absolute top-0 left-0 w-full h-full"
      ></iframe>
    </div>
  );
};

YouTubeEmbed.propTypes = {
  videoId: propTypes.number.isRequired,
};

export default YouTubeEmbed;
