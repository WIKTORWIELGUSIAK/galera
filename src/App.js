/** @format */

import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Main from "./pages/MainPage/MainPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Galery from "./pages/Galery/Galery";
import Roads from "./pages/Roads/Roads";
import Rules from "./pages/Rules/Rules";
import UploadPage from "./pages/UploadPage/UploadPage";

export default function App() {
  const [categories, setCategories] = useState([]);
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/src/pages/Galery/Galery.js"
          element={
            <Galery categories={categories} setCategories={setCategories} />
          }
        />
        <Route path="/src/pages/MainPage/MainPage.js" element={<Main />} />
        <Route path="/src/pages/Roads/Roads.js" element={<Roads />} />
        <Route
          path="/src/pages/UploadPage/UploadPage.js"
          element={
            <UploadPage categories={categories} setCategories={setCategories} />
          }
        />
        <Route path="/src/pages/Rules/Rules.js" element={<Rules />} />
      </Routes>
    </Router>
  );
}
