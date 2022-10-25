import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "../src/pages/Login/Login";
import Main from "../src/pages/Main/Main";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/main" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
