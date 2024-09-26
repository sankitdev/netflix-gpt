import { bgImg } from "../Images";
import Header from "./Header";
import HomePage from "./HomePage";
import { useLocation } from "react-router-dom";
import Login from "./Login";
const Home = () => {
  const { pathname } = useLocation();
  return (
    <>
      <Header />
      <div className="h-screen bg-cover bg-center relative ">
        <div
          className={`${
            pathname === "/login" ? "h-full" : "h-4/5"
          } md:h-full absolute inset-0 bg-gradient-to-b from-black to-black ${
            pathname === "/login" ? "opacity-50" : "opacity-70"
          }`}
        ></div>
        <div
          className={`${
            pathname === "/login" ? "h-full" : "h-4/5"
          }  md:h-full w-full bg-cover bg-center`}
          style={{ backgroundImage: `url(${bgImg})` }}
        >
          {pathname === "/login" ? <Login /> : <HomePage />}
        </div>
        {pathname !== "/login" && (
          <>
            <div className="h-1 bg-gradient-custom"></div>
            <div className=" h-[calc(100vh-80%)] bg-gradient-to-b from-blue-950 to-black opacity-100 px-8 md:px-32 pt-4">
              <h1>Trending Now</h1>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Home;
