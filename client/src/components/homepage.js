import React from 'react';
import Header from './header';
import AboutUs from './aboutUs';
import Footer from './footer';

function Homepage() {
  return (
    <div className="homepage-container">
      <Header />
      <main>
        <AboutUs />
      </main>
      <Footer />
    </div>
  );
}

export default Homepage;
