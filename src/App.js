/** @format */

import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Main from "./pages/MainPage/MainPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Galery from "./pages/Galery/Galery";
import Roads from "./pages/Roads/Roads";
import Rules from "./pages/Rules/Rules";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/src/pages/Galery/Galery.js" element={<Galery />} />
        <Route path="/src/pages/MainPage/MainPage.js" element={<Main />} />
        <Route path="/src/pages/Roads/Roads.js" element={<Roads />} />
        <Route path="/src/pages/Rules/Rules.js" element={<Rules />} />
        {/* <Main /> */}
      </Routes>
    </Router>
  );
}
