import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => {
  return <h1>Title</h1>;
};

//Component Composition - Writing Title component inside Header component
const Header = () => {
  return (
    <div>
      <Title />
      <h1 id="header">Header from functional component</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Header />);
