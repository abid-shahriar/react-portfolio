import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Nav from "./components/nav/Nav";
import Main from "./components/main/Main";

function App() {
  const [Toggle, setToggle] = useState(true)

  window.addEventListener('click', (e) => {
    if (!Toggle) {
      if (e.target.classList.contains('toggle-btn')) {
        return
      } else {
        setToggle(true)
      }
    }
  })
  return (
    <BrowserRouter>
      <Nav Toggle={Toggle} setToggle={setToggle} />
      <Main Toggle={Toggle} setToggle={setToggle} />
    </BrowserRouter>
  );
}

export default App;
