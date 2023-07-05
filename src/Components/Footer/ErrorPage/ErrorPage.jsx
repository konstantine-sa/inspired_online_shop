import { useRouteError } from "react-router-dom";

export const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div>
      <p>{error?.message || "Unknown error"}</p>
      <h2>404</h2>
    </div>
  );
};
