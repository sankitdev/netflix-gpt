import Header from "./Header";
import useMovieFetch from "../hooks/useMovieFetch";
import { useSelector } from "react-redux";
import BrowseHero from "./BrowseHero";
import BrowseRest from "./BrowseRest";
import Footer from "./Footer";
const Browse = () => {
  useMovieFetch();
  const movieList = useSelector((store) => store.movieData);
  console.log(movieList);
  return (
    <div className="h-screen">
      <Header />
      <BrowseHero />
      <BrowseRest />
      <Footer />
    </div>
  );
};
export default Browse;
