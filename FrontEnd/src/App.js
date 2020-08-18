import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
  const [openModalsState, setopenModalsState] = useState(false);

  return (
    <div className="App">
      <Navbar
        openModalsState={openModalsState}
        setopenModalsState={setopenModalsState}
      />
      <Home
        openModalsState={openModalsState}
        setopenModalsState={setopenModalsState}
      />
    </div>
  );
}

export default App;
