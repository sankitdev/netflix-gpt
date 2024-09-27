import { ErrorImg } from "../utils/Images";
import Button from "./ui/Button";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-red-600">404</h1>
        <p className="mt-4 text-xl text-white">
          Oops! We cant find the page youre looking for.
        </p>

        {/* Image */}
        <div className="mt-8 flex items-center justify-center ">
          <img src={ErrorImg} alt="Lost in the unknown" className="w-1/2" />
        </div>

        {/* Return to Home Button */}
        <Link to={"/"}>
          {" "}
          <Button styles="mt-8 p-2" text={"Back to Home"} />
        </Link>
      </div>
    </div>
  );
};

export default Error;
