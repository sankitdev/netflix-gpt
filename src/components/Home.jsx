import { bgImg } from "../Images";
import Header from "./Header";

const Home = () => {
  return (
    <>
      <Header />
      <div className="h-screen bg-cover bg-center relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-100"></div>
        <div
          className="h-full w-full bg-cover bg-center"
          style={{ backgroundImage: `url(${bgImg})` }}
        ></div>
      </div>
    </>
  );
};

export default Home;
