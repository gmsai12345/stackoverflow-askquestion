import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import Auth from "./Auth/Auth";
import Questions from "./Questions/Questions";
const Allroutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/Auth" element={<Auth />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Questions" element={<Questions />} />
      </Routes>
    </div>
  );
};
export default Allroutes;
