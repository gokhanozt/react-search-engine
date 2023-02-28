import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Results from "./Results";

const Routers = () => {
  return (
    <div className="Routes">
      <Routes>
        <Route exact path="/" element={<Navigate to="/search" />} />
        <Route exact path="/search" element={<Results />} />
      </Routes>
    </div>
  );
};

export default Routers;
