import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/main">Main</Link>
        </li>
        <li>
          <Link to="/cake">Cake</Link>
        </li>
        <li>
          <Link to="/bee">Bee</Link>
        </li>
        <li>
          <Link to="/banner">Banner</Link>
        </li>
        <li>
          <Link to="guestbook">Guestbook</Link>
        </li>
        <li>
          <Link to="footer">Footer</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
