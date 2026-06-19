import { useEffect, useRef, useState } from "react";
import HomePage from "./pages/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProjectDetails from "./pages/ProjectDetails";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path='/projects/:id' element={<ProjectDetails />} />
      </Routes>
    </BrowserRouter>
  );
}
