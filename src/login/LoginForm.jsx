import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";
import "./LoginForm1.css";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("student"); // Default role: Student
  const navigate = useNavigate(); // Hook for navigation

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate authentication (replace with actual API call)
    console.log("Logging in:", { email, password, role });

    // Redirect based on role
    if (role === "staff") {
      navigate("/staff");
    } else {
      navigate("/home");
    }
  };

  return (
    <div className="login">
      <img
        src="https://munchlabs.de/wp-content/uploads/2023/03/canteen-food-scaled.jpg"
        alt="login background"
        className="login__img"
      />

      <form onSubmit={handleSubmit} className="login__form">
        <h1 className="login__title">Login</h1>

        <div className="login__box">
          <i className="ri-user-3-line login__icon"></i>
          <input
            type="email"
            required
            className="login__input"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="login__box">
          <i className="ri-lock-2-line login__icon"></i>
          <input
            type="password"
            required
            className="login__input"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="login__box">
          <label>Login as:</label>
          <select
            className="login__input"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="student">Student</option>
            <option value="staff">Staff</option>
          </select>
        </div>

        <button type="submit" className="login__button">Login</button>

        <p className="login__register">
  Don't have an account? <button onClick={() => alert("Registration coming soon!")}>Register</button>
</p>

      </form>
    </div>
  );
};

export default LoginForm;
