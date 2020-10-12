import React from "react";
import About from "../sections/about/About";
import Home from "../sections/home/Home";
import Blogs from "../sections/blogs/Blogs";
import Contact from "../sections/contact/Contact";
import Projects from "../sections/projects/Projects";
import Skills from "../sections/skills/Skills";
import { Route } from "react-router-dom";

function Main(props) {
  return (
    <main id="main" >
      <Route path="/" exact component={Home} />
      <Route path="/about" exact component={About} />
      <Route path="/blogs" exact component={Blogs} />
      <Route path="/contact" exact component={Contact} />
      <Route path="/projects" exact component={Projects} />
      <Route path="/skills" exact component={Skills} />
    </main >
  );
}

export default Main;
