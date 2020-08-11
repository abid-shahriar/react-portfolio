import React, { useState } from "react";

import Nav from "./components/nav/Nav";
import Main from "./components/main/Main";

function App() {
  const [section, setSection] = useState("");
  return (
    <>
      <Nav setSection={setSection} section={section} />
      <Main section={section} />
    </>
  );
}

export default App;
