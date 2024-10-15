import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Browse from "./Browse";
import Home from "./Home";
import Error from "./Error";
import Search from "./Search";

const Body = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <Error />,
    },
    {
      path: "/login",
      element: <Home />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
    {
      path: "/search",
      element: <Search />,
    },
  ]);

  return (
    <div className="min-h-screen bg-black text-white">
      <RouterProvider router={router} />
    </div>
  );
};

export default Body;
