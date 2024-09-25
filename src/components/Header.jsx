import { Logo } from "../Images";
const Header = () => {
  return (
    <div className="w-full absolute z-10 px-8 md:px-32 pt-4 flex justify-between items-center">
      <img src={Logo} alt="Netflix Logo" className="w-28 md:w-44" />
      <button className="bg-red-600 px-4 py-1 rounded-md ">Sign In</button>
    </div>
  );
};

export default Header;
