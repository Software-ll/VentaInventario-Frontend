import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Inventario from "./components/inventario";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/inventario" element={<Inventario/>} /> 
        </Routes>
      </Router>
    </>
  );
}

export default App;
