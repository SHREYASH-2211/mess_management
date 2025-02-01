import React, { useState } from 'react';
import './LoginForm1.css';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login submitted', { email, password, rememberMe });
  };

  return (
    <>
      <div className="login">
        <img 
          src="https://munchlabs.de/wp-content/uploads/2023/03/canteen-food-scaled.jpg" 
          alt="login image" 
          className="login__img" 
        />

        <form onSubmit={handleSubmit} className="login__form">
          <h1 className="login__title">Login</h1>

          <div className="login__content">
            {/* Email Input */}
            <div className="login__box">
              <i className="ri-user-3-line login__icon"></i>

              <div className="login__box-input">
                <input 
                  type="email" 
                  required 
                  className="login__input" 
                  id="login-email" 
                  placeholder=" "
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor="login-email" className="login__label" placeholder="Email"></label>
              </div>
            </div>

            {/* Password Input */}
            <div className="login__box">
              <i className="ri-lock-2-line login__icon"></i>

              <div className="login__box-input">
                <input 
                  type={showPassword ? "text" : "password"} 
                  required 
                  className="login__input" 
                  id="login-pass" 
                  placeholder=" "
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <label htmlFor="login-pass" className="login__label" placeholder="Password"></label>
                
                {/* Show/Hide Password Icon */}
                <i 
                  className={`ri-eye-${showPassword ? 'line' : 'off-line'} login__eye`} 
                  id="login-eye"
                  onClick={() => setShowPassword(!showPassword)}
                ></i>
              </div>
            </div>
          </div>

          {/* Remember Me & Forgot Password */}
          <div className="login__check">
            <div className="login__check-group">
              <input 
                type="checkbox" 
                className="login__check-input" 
                id="login-check"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              <label htmlFor="login-check" className="login__check-label">Remember me</label>
            </div>

            <a href="#" className="login__forgot">Forgot Password?</a>
          </div>

          {/* Login Button */}
          <button type="submit" className="login__button">Login</button>

          {/* Register Link */}
          <p className="login__register">
            Don't have an account? <a href="#">Register</a>
          </p>
        </form>
      </div>
    </>
  );
};

export default LoginForm;
