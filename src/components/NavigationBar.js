import React from "react";
import { Link } from "react-router-dom";
import "./NavigationBar.css";
export default function NavigationBar() {
  return (
    <nav>
      <ul className="flex">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/staff">Staff</Link></li>
      </ul>
    </nav>
  );
}
