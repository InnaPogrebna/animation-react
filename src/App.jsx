import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import HomePage from "./pages/HomePage/HomePage";
import WhoPage from "./pages/WhoPage";
import WhatPage from './pages/WhatPage';
import WherePage from './pages/WherePage';

function App() {

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/who" element={<WhoPage />} />
        <Route path="/what" element={<WhatPage />} />
        <Route path="/where" element={<WherePage />} />
        <Route path="*" element={<p>ERROR</p>} />
      </Routes>
    </div>
  );
}

export default App;
