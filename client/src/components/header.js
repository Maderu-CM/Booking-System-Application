import React from "react";
import { Link } from "react-router-dom";

function Header() {
    return (
        <header className="bg-dark text-light">
            <div className="container">
                <h1>Transport Booking Platform</h1>
                <nav className="navbar navbar-expand-lg navbar-dark">
                    <ul className="navbar-nav ml-auto">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/booking">Booking</Link>
                        </li>
                        <li>
                            <Link to="/login">Login</Link>
                        </li>
                        <li>
                            <Link to="/register">Register</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
