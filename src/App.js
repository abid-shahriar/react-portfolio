import React from "react";
import { BrowserRouter } from "react-router-dom";

import Nav from "./components/nav/Nav";
import Main from "./components/main/Main";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Main />
    </BrowserRouter>
  );
}

export default App;
