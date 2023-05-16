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
import { AuthProvider } from "../context/auth.context";
import { CartPage } from "./pages/cart/cart.page";
import { Provider } from "react-redux";
import { Store } from "./store/store";

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
      {
        path: "/cart",
        element: <CartPage />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={Store}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </Provider>
  </React.StrictMode>
);
