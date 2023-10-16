import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Booking from "./components/booking";
import Login from "./components/login";
import Register from "./components/register";
import Homepage from "./components/homepage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
