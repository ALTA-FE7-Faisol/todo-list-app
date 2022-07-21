import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "../pages/HomePage";
import DetailTodo from "../pages/DetailTodo";

const index = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="detail" element={<DetailTodo />} />
        <Route path="*" element={"not found"} />
      </Routes>
    </BrowserRouter>
  );
};

export default index;
