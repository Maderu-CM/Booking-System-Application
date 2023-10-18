import React from "react";

import AboutUs from "./AboutUs";
import Booking from "./Booking";
import Footer from "./Footer";
import { Link } from "react-router-dom";

function Homepage() {
  return (
    <div>
      <Header />
      <nav>
        <ul>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/booking">Booking</Link>
          </li>
        </ul>
      </nav>
      <AboutUs />
      <Booking />
      <Footer />
    </div>
  );
}

export default Homepage;
