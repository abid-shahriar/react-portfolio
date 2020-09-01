import React from "react";
import About from "../sections/About";
import Home from "../sections/Home";
import Blog from "../sections/Blog";
import Contact from "../sections/Contact";
import Portfolio from "../sections/Portfolio";
import Service from "../sections/Service";

import { Route } from "react-router-dom";

function Main() {
  return (
    <main id="main">
      <Route path="/" exact component={Home} />
      <Route path="/about" exact component={About} />
      <Route path="/blog" exact component={Blog} />
      <Route path="/contact" exact component={Contact} />
      <Route path="/portfolio" exact component={Portfolio} />
      <Route path="/service" exact component={Service} />
    </main>
  );
}

export default Main;
