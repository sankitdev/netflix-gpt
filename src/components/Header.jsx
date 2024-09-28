import { Logo } from "../utils/Constant.js";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase.js";
import Button from "./ui/Button";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../store/userSlice";
import { useDispatch } from "react-redux";

const Header = () => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const user = useSelector((store) => store.userData);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      // console.log("Auth State Changed:", user);
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out
        if (pathname !== "/" && pathname !== "/login") {
          navigate("/");
        }
        dispatch(removeUser());
      }
    });
    return () => unsubscribe();
  }, [dispatch, navigate, pathname]);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("User signed out successfully");
      })
      .catch((error) => {
        console.log("Error signing out:", error);
      });
  };

  return (
    <div className="w-full absolute z-10 px-8 md:px-32 mt-4 flex justify-between items-center ">
      <Link to={"/"}>
        <img src={Logo} alt="Netflix Logo" className="w-28 md:w-44" />
      </Link>
      {user ? (
        // If user is logged in, show profile and Sign Out button
        <div className="flex items-center">
          <img
            src={user.photoURL}
            alt={user.displayName}
            className="w-8 h-8 rounded-full mr-4"
          />
          <Button
            styles={"px-4 py-1"}
            text={"Sign Out"}
            onClick={handleSignOut}
          />
        </div>
      ) : (
        // If user is not logged in and on home page, show Sign In button
        pathname === "/" && (
          <Link to={"/login"}>
            <Button styles={"px-4 py-1"} text={"Sign In"} />
          </Link>
        )
      )}
    </div>
  );
};

export default Header;
