/** @format */

import React, { createContext, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Main from "./pages/MainPage/MainPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Galery from "./pages/Galery/Galery";
import Roads from "./pages/Roads/Roads";
import Rules from "./pages/Rules/Rules";
import UploadPage from "./pages/UploadPage/UploadPage";
import LoginPage from "./pages/LoginPage/LoginPage";

export const AppContext = createContext();

export default function App() {
  const [categories, setCategories] = useState([]);
  const [user, setUser] = useState(null);
  const appValue = {
    categories: categories,
    setCategories: setCategories,
    user: user,
    setUser: setUser,
  };

  return (
    <AppContext.Provider value={appValue}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/src/pages/Galery/Galery.js" element={<Galery />} />
          <Route path="/" element={<Main />} />
          <Route path="/src/pages/Roads/Roads.js" element={<Roads />} />
          <Route
            path="/src/pages/UploadPage/UploadPage.js"
            element={
              <UploadPage
                categories={categories}
                setCategories={setCategories}
              />
            }
          />
          <Route path="/src/pages/Rules/Rules.js" element={<Rules />} />
          <Route
            path="/src/pages/LoginPage/LoginPage.js"
            element={<LoginPage />}
          />
        </Routes>
      </Router>
    </AppContext.Provider>
  );
}
