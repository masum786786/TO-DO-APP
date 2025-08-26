import React, { useState } from "react";
import axios from "axios";
import "./Login.css"; // External CSS
import { toast, ToastContainer } from "react-toastify";

const Login = () => {
  const [formdata, setFormdata] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormdata({
      ...formdata,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // toast.success("Login successfully!", {
    //     position: "top-center",
    //     autoClose: 2000,
    //   });
    axios
      .post(
        "https://api.escuelajs.co/api/v1/auth/login",
        formdata,
        { headers: { "Content-Type": "application/json" } }
      )
      .then((res) => {
        alert("Successful Login");
        console.log(res.data);
      })
      .catch((err) => {
        console.error("Login Failed", err.response?.data || err.message);
      });
  };

  return (
    <div className="login-container">
        {/* Right Side - Image */}
      <div className="login-image-container">
        <img
          src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80"
          alt="Login Visual"
        />
      </div>
      {/* Left Side - Login Form */}
      <div className="login-form-container">
        <h2>Welcome Back</h2>
        <p className="subtitle">Login to your account</p>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formdata.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formdata.password}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="login-btn">
            Login
          </button>
        </form>
      </div>

      {/* <ToastContainer/> */}
      
    </div>
  );
};

export default Login;
