import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import Nav from "./components/nav/Nav";
import Main from "./components/main/Main";
import Loading from "./components/fallbacks/Loading";

function App() {
  const [Toggle, setToggle] = useState(true);
  const [Loaded, setLoaded] = useState(false);

  window.addEventListener("click", (e) => {
    if (!Toggle) {
      if (e.target.classList.contains("toggle-btn")) {
        return;
      } else {
        setToggle(true);
      }
    }
  });

  window.addEventListener("swiped", (e) => {
    if (e.detail.dir === "right") {
      setToggle(false);
    } else if (e.detail.dir === "left") {
      setToggle(true);
    }
  });

  if (Loaded) {
    return (
      <>
        <Nav Toggle={Toggle} setToggle={setToggle} />
        <Main Toggle={Toggle} setToggle={setToggle} />
      </>
    );
  } else {
    setTimeout(() => {
      setLoaded(true);
    }, 1000);

    return <Loading />;
  }
}

export default withRouter(App);
