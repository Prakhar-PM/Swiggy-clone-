import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./Components/Home.js";
import { BrowserRouter, Routes, Route } from "react-router";
import Restaurant from "./Components/Restaurant";
import ResturantMenu from "./Components/ResturantMenu";

function App() {
    return(
    <>
      <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/restaurant" element={<Restaurant></Restaurant>} />
      <Route path="/city/delhi/:id" element={<ResturantMenu></ResturantMenu>} />
    </Routes>
  </BrowserRouter>
    
    </>
    )
}


let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);                