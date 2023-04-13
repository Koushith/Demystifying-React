import React from "react";
import ReactDOM from "react-dom/client";

const element = React.createElement("h2", {}, "Hello from React");

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(element);
