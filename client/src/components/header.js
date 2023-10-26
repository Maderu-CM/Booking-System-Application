import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-dark text-light">
      <div className="container">
        <h1>USAFIRI</h1>
        <nav className="navbar navbar-expand-lg navbar-dark">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item ml-1">
                <Link to="/">Home</Link>
              </li>
              <li className="nav-item ml-1">
                <Link to="/booking">Booking</Link>
              </li>
              <li className="nav-item ml-1">
                <Link to="/login">Login</Link>
              </li>
              <li className="nav-item ml-1">
                <Link to="/register">Register</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
