import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { Header } from "./components/header/header.component";
import { RestoContainer } from "./components/resto-container/resto-container.component";
import { Footer } from "./components/footer/footer.component";

import { Home } from "./pages/home/home.screen";

const About = lazy(() => import("../src/pages/about/about.screen"));

const ErrorPage = lazy(() => import("./pages/error-page/error.screen"));

const Contact = lazy(() => import("./pages/contact/contact.screen"));

const RestroDetails = lazy(() =>
  import("./components/resto-container/resto-container.component")
);

export const App = () => {
  return (
    <>
      <Header />

      <Outlet />

      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loading</h1>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: (
          <Suspense fallback={<h1>Loading</h1>}>
            <Contact />
          </Suspense>
        ),
      },
      {
        path: "/restaurant/:id",
        element: (
          <Suspense fallback={<h1>Loading</h1>}>
            <RestroDetails />
          </Suspense>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
