import App from "../App";
import { NotFound } from "../pages/404_Not_Found/not_found";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        path: "*",
        Component: NotFound,
      },
    ],
  },
]);

export default router;
