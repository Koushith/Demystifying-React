import { useRouteError } from "react-router-dom";

export const ErrorPage = () => {
  const routeError = useRouteError();

  console.log(routeError);
  return (
    <>
      <h1>OOPS!!! Page you are looking is not found!!</h1>
    </>
  );
};
