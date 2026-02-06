import { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoClose, IoReorderThreeOutline } from "react-icons/io5";
import "../../styles/header.css";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      {/* Hamburger */}
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? (
          <IoClose className="icon" />
        ) : (
          <IoReorderThreeOutline className="icon" />
        )}
      </div>
      <div className="logo">
        <img src="/logo.png" alt="Spring Boot AI" />
      </div>

      {/* Logo */}

      {/* Navigation */}
      <nav className={`nav ${menuOpen ? "open" : ""}`}>
        <ul>
          <li data-aos="fade-right">
            <NavLink to="/" onClick={() => setMenuOpen(false)}>
              Home
            </NavLink>
          </li>
          <li data-aos="fade-right">
            <NavLink to="/about" onClick={() => setMenuOpen(false)}>
              About
            </NavLink>
          </li>
          <li data-aos="fade-right">
            <NavLink to="/overview" onClick={() => setMenuOpen(false)}>
              Overview
            </NavLink>
          </li>
          <li data-aos="fade-right">
            <NavLink to="/brochure" onClick={() => setMenuOpen(false)}>
              Brochure
            </NavLink>
          </li>
          <li data-aos="fade-right">
            <NavLink to="/contact" onClick={() => setMenuOpen(false)}>
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
      <a
        href=" https://forms.gle/uicz8PtijJEJUiki8"
        className="register-btn"
        onClick={() => setMenuOpen(false)}
      >
        Register
      </a>
    </header>
  );
};
