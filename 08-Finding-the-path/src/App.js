import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { Header } from "./components/header/header.component";
import { RestoContainer } from "./components/resto-container/resto-container.component";
import { Footer } from "./components/footer/footer.component";
import { ErrorPage } from "./pages/error-page/error.screen";
import { AboutScreen } from "./pages/about/about.screen";
import { ContactScreen } from "./pages/contact/contact.screen";
import { RestroDetailsScreen } from "./pages/restaurant-details/resto-details.screen";
import { Home } from "./pages/home/home.screen";

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
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <AboutScreen />,
      },
      {
        path: "/contact",
        element: <ContactScreen />,
      },
      {
        path: "/restaurant/:id",
        element: <RestroDetailsScreen />,
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
