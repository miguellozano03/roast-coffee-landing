import App from "../App";
import { Home, Menu, Locations, About, NotFound } from "../pages";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/menu",
        Component: Menu,
      },
      {
        path: "/locations",
        Component: Locations,
      },

      {
        path: "/about",
        Component: About,
      },

      {
        path: "*",
        Component: NotFound,
      },
    ],
  },
]);

export default router;
