import React from "react";
import { LoginForm } from "../../components";
import "./Login.css"
const Login = () => {
 
  return (
    <div className="login-container">
      <h3 className="login-container_title">Iniciar sesión</h3>
      <LoginForm/>
    </div>
  );
};

export default Login;
