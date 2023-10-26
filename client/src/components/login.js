import React, { useState } from "react";

function Login() {
  const [loginData, setLoginData] = useState({
    identifier: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle data to server
    console.log("Login Data", loginData);
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h1 className="text-center">Sign In</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="identifier">Email or Contact</label>
              <input
                type="text"
                id="identifier"
                name="identifier"
                value={loginData.identifier}
                onChange={handleChange}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={loginData.password}
                onChange={handleChange}
                className="form-control"
              />
            </div>
            <button type="submit" className="btn btn-primary">Login</button>
          </form>
          <p className="mt-3">
            <a href="#">Forgot Password</a>
          </p>
          <p>
            Don't have an account? <a href="#">Sign up</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
