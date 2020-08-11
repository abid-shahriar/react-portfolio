import React from "react";
import About from "../sections/About";
import Home from "../sections/Home";
import Blog from "../sections/Blog";
import Contact from "../sections/Contact";
import Portfolio from "../sections/Portfolio";
import Service from "../sections/Service";

function Main({ section }) {
  const renderSection = () => {
    switch (section) {
      case "about":
        return <About />;

      case "blog":
        return <Blog />;

      case "contact":
        return <Contact />;

      case "portfolio":
        return <Portfolio />;

      case "service":
        return <Service />;

      default:
        return <Home />;
    }
  };

  return <main id="main">{renderSection()}</main>;
}

export default Main;
