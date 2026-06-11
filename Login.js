import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="form-container">
      <h2>Login</h2>

      <form className="form">
        <input type="email" placeholder="Enter Email" required />

        <input type="password" placeholder="Enter Password" required />

        <button type="submit">Login</button>
      </form>

      <p>
        Don't have an account? <Link to="/signup">Sign Up</Link>
      </p>
    </div>
  );
}

export default Login;