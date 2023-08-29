import React from "react";
import { Link } from "react-router-dom";
import Logo from "/assets/logo.svg";
import Navbar from "./Navbar";

function Header({ heading }) {
  return (
    <header className="header">
      <div className="header__content">
        <Link to="/" className="header__logo" aria-label="Home - Loopstudios">
          <img src={Logo} alt="" />
        </Link>
        <Navbar />
      </div>
      <section className="hero-section">
        <h1 className="hero-section__heading intro-heading">{heading}</h1>
      </section>
    </header>
  );
}

export default Header;
