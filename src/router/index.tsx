import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../components/home/HomeLayout";
import RootLayout from "../components/layout/RootLayout";
import Home from "../pages/explore/Home";
import ComingSoon from "../pages/ComingSoon";

const homeNavComingSoon = [
  "activities",
  "indulge",
  "places",
  "movies",
  "sports",
  "restaurants",
  "find-a-table",
  "conferences",
  "workshops",
  "auditions",
  "people",
  "world-famous",
  "social-buddies",
  "virtual-experiences",
  "events",
  "tours",
].map((path) => ({ path, element: <ComingSoon /> }));

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        element: <HomeLayout />,
        children: [{ index: true, element: <Home /> }, ...homeNavComingSoon],
      },
      { path: "*", element: <ComingSoon /> },
    ],
  },
]);

export default router;
