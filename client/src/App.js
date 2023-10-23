import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AboutUs from './components/aboutUs';
import Booking from './components/booking';
import Footer from './components/footer';
import Header from './components/header';
import Homepage from './components/homepage';
import Register from './components/register';  
import Login from './components/login';        

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/register" element={<Register />} /> 
        <Route path="/login" element={<Login />} />           
        <Route path="/booking" element={<Booking />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/header" element={ <Header/>}/>     
        <Route path="/footer" element={ <Footer/>}/>  
        </Routes>
    </BrowserRouter>
  );
}

export default App;
