import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const redirectHome = () => {
    navigate("/");
  };

  return (
    <nav className="navbar">
      <h2>Flight Tracker</h2>

      <div className="nav-links">
        <Link to="/">Home</Link>

        <button onClick={redirectHome}>Dashboard</button>
        <button onClick={redirectHome}>Flight Monitoring</button>
        <button onClick={redirectHome}>Notifications</button>
        <button onClick={redirectHome}>Admin</button>

        <Link to="/login">Login</Link>
        <Link to="/signup">Sign Up</Link>
      </div>
    </nav>
  );
}

export default Navbar;