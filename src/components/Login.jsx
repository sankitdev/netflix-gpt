import { useState, useRef } from "react";
import FormValidation from "../utils/FormValidation.js";
import Button from "./ui/Button";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase.js";
const Login = () => {
  const [signUp, setSignUp] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const toggleSignUp = () => {
    setSignUp(!signUp);
  };
  const email = useRef(null);
  const pass = useRef(null);
  const name = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    const message = FormValidation(
      signUp ? name.current.value : null,
      email.current.value,
      pass.current.value
    );
    setErrorMessage(message);
    if (message !== null) return;
    if (signUp && message === null) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        pass.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode + " " + errorMessage);
          setErrorMessage(errorCode + " " + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(auth, email.current.value, pass.current.value)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode + " " + errorMessage);
          setErrorMessage(errorCode + " " + errorMessage);
        });
    }
  };
  return (
    <div className="relative mx-auto top-20 w-96 p-16 bg-black bg-opacity-50">
      <h1 className="text-4xl font-bold mb-5">
        {signUp ? "Sign Up" : "Sign In"}
      </h1>
      <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
        {signUp && (
          <input
            type="text"
            placeholder="Name"
            ref={name}
            className="py-3 border-2 border-slate-300 bg-black bg-opacity-60 px-5"
          />
        )}
        <input
          type="email"
          placeholder="Enter Email"
          ref={email}
          className="py-3 border-2 border-slate-300 bg-black bg-opacity-60 px-5"
        />
        <input
          type="password"
          placeholder="Password"
          ref={pass}
          className="py-3 border-2 border-slate-300 bg-black bg-opacity-60 px-5"
        />
        <p className="text-red-600">{errorMessage}</p>
        <Button styles="py-2" text="Sign In" />
        <p>
          <span className="text-gray-300">New to Netflix? </span>
          <span className="cursor-pointer" onClick={toggleSignUp}>
            Sign up now
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
