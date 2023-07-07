import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import Footer from "./src/components/Footer";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

// const rootNode = React.createElement("div", { id: "parent" }, [
//   React.createElement("h1", { key: 1, id: "child 1" }, "first child node"),
//   React.createElement("h1", { key: 2, id: "child 2" }, "second child node"),
// ]);
// console.log(rootNode);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
