import React, { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";

const About = lazy(() => import("../sections/about/About"));
const Blogs = lazy(() => import("../sections/blogs/Blogs"));
const Contact = lazy(() => import("../sections/contact/Contact"));
const Projects = lazy(() => import("../sections/projects/Projects"));
const Skills = lazy(() => import("../sections/skills/Skills"));

function Main() {
  return (
    <main id="main">
      <Switch>
        <Suspense fallback={<div>Loading...</div>}>
          <Route path="/" exact component={About} />
          <Route path="/blogs" component={Blogs} />
          <Route path="/contact" component={Contact} />
          <Route path="/projects" component={Projects} />
          <Route path="/skills" component={Skills} />
        </Suspense>
      </Switch>
    </main>
  );
}

export default Main;
