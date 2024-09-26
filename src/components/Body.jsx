import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Login from "./Login";
import Browse from "./Browse";
import Home from "./Home";

const Body = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/login",
      element: <Home />,
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
