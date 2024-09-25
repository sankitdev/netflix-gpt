import { bgImg } from "../Images";
import Header from "./Header";

const Home = () => {
  return (
    <>
      <Header />
      <div className="h-screen bg-cover bg-center relative ">
        <div className="h-4/5 md:h-full absolute inset-0 bg-gradient-to-b from-black to-black opacity-70"></div>
        <div
          className="h-4/5  md:h-full w-full bg-cover bg-center"
          style={{ backgroundImage: `url(${bgImg})` }}
        >
          <div className="px-10 relative top-1/4 md:top-1/3 z-10 mx-auto text-center w-full md:w-3/4 xl:w-1/2 md:py-4 px-5">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold md:font-extrabold lg:leading-snug">
              Unlimited movies, TV shows and more
            </h1>
            <h2 className="mt-4 md:text-xl ">
              Starts at ₹149. Cancel at any time.
            </h2>
            <h3 className="mt-3 md:mt-5 ">
              Ready to watch? Enter your email to create or restart your
              membership.
            </h3>
            <button className="mt-4 px-6 py-2 text-lg font-bold bg-red-600 rounded-md">
              Get Started {">"}{" "}
            </button>
          </div>
        </div>
        <div className="h-1 bg-gradient-custom"></div>
        <div className=" h-[calc(100vh-80%)] bg-gradient-to-b from-blue-950 to-black opacity-100 px-8 md:px-32 pt-4">
          <h1>Trending Now</h1>
        </div>
      </div>
    </>
  );
};

export default Home;
