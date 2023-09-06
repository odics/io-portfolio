import React from "react";

const Header = () => {
  return (
    <header class="hero">
      <div class="hero-text">
        <h2>SEVERIN</h2>
        <h2 class="mobile-h2">ODIC</h2>

        <div class="text-container">
          <div class="letter-o">
            <div class="inner-o"></div>
          </div>
          <h1>DIC</h1>
        </div>
        <div class="hero-description">
          <div class="nav-wrapper">
            <h3>
              A <span>FULL STACK</span> DEVELOPER BASED IN <span>BATH, UK</span>
            </h3>
            <div class="nav-links">
              <a href="#about">ABOUT</a>
              <a href="#projects">PROJECTS</a>
              <a href="#contact">CONTACT</a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
