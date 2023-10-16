import React from "react";


function Homepage() {
    //navigating function
    const navigateTo = (path) => {
        window.location.href = path;
    };
    return (
        <div>
            <header>
                <h1>Transport Booking Platform</h1>
                <nav>
                    <ul>
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="/booking">Bookings</a>
                        </li>
                        <li>
                            <a href="/register">Register</a>
                        </li>
                        <li>
                            <a href="/login">Login</a>
                        </li>
                    </ul>
                </nav>
            </header>

            <body>
                <h2>ABOUT US</h2>
            </body>
            <footer>
                <p>&#169; 2023 Booking Platform</p>
                <div>
                    <p>Contacts:</p>
                    <p>Phone: 0723176982</p>
                    <p>Email: bookingplatform@gmail.com</p>
                </div>
            </footer>

        </div>
    )
}

export default Homepage;