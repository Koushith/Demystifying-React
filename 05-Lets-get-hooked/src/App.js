import React from "react";
import ReactDOM from "react-dom/client";
import { Header } from "./components/header/header.component";
import { RestoContainer } from "./components/resto-container/resto-container.component";

export const App = () => {
  return (
    <>
      {/* header
    body
    card
    
    */}
      <Header />
      <RestoContainer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
