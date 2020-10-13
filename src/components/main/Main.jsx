import React from "react";
import About from "../sections/about/About";
import Home from "../sections/home/Home";
import Blogs from "../sections/blogs/Blogs";
import Contact from "../sections/contact/Contact";
import Projects from "../sections/projects/Projects";
import Skills from "../sections/skills/Skills";
import { Route, Switch } from "react-router-dom";

function Main() {
  return (
    <main id="main">
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/blogs" component={Blogs} />
        <Route path="/contact" component={Contact} />
        <Route path="/projects" component={Projects} />
        <Route path="/skills" component={Skills} />
      </Switch>
    </main>
  );
}

export default Main;
