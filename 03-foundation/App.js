import React from "react";
import ReactDOM from "react-dom/client";

const element = React.createElement("h2", {}, "Hello from React");

//jsx is not html inside js. jsx is html like syntax to create react element
const jsxHeading = <h1>Hekkkkkkkkko</h1>;

console.log("jsx heading", jsxHeading);

const Heading = () => (
  <>
    <h1>This is a heading</h1>
    <h1>This is a heading</h1>
    {2 + 2}
    {console.log("helooooooooooooooooooooooooooooooooooo")}
  </>
);

console.log("heading", Heading);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Heading />);

root.render(jsxHeading);
root.render(<Heading />);
