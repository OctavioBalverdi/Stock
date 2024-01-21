import React from 'react';
import './Login.css'; // Asegúrate de tener el archivo CSS correspondiente

const Login = () => {
  return (
    <div className="container">
      <div className="card">
        <a className="login">Login</a>
        <div className="inputBox">
          <input type="text" required="required" />
          <span className="user">Username</span>
        </div>

        <div className="inputBox">
          <input type="password" required="required" />
          <span>Password</span>
        </div>

        <button className="enter">Enter</button>
      </div>
    </div>
  );
};

export default Login;