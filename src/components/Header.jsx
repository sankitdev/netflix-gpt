import { Logo } from "../Images";
import { Link, useLocation } from "react-router-dom";
import Button from "./ui/Button";
const Header = () => {
  const url = useLocation();
  return (
    <div className="w-full absolute z-10 px-8 md:px-32 mt-4 flex justify-between items-center ">
      <Link to={"/"}>
        <img src={Logo} alt="Netflix Logo" className="w-28 md:w-44" />
      </Link>
      {url.pathname === "/" ? (
        <Link to={"/login"}>
          <Button styles={"px-4 py-1"} text={"Sign In"} />
        </Link>
      ) : (
        ""
      )}
    </div>
  );
};

export default Header;
