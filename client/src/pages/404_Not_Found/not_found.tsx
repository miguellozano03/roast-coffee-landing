import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <>
      <h1>404</h1>
      <p>Oops, This page not found</p>

      <Link to="/">Go to home</Link>
    </>
  );
};
