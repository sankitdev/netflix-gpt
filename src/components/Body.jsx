import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Login";
import Singup from "./Singup";
import Browse from "./Browse";

const Body = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <Singup />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);
  return (
    <div className="min-h-screen bg-black text-white">
      <RouterProvider router={router} />
    </div>
  );
};

export default Body;
