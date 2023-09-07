import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import About from "./components/About";
import Header from "./components/Header";

const AppLayout = () => {
  return (
    <div className="">
      <Header />
      <About />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
