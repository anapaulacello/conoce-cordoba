import React, { useState } from "react";
import { registerUser } from "../../api/fetch_user";
import "./RegisterForm.css";
import { useHistory } from "react-router-dom";

const INITIAL_STATE = {
  email: "",
  name: "",
};
const RegisterForm = (props) => {
  const history = useHistory();
  const [registerForm, setRegisterForm] = useState(INITIAL_STATE);
  const [error, setError] = useState(null);

  const submitForm = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await registerUser(registerForm);
      setRegisterForm(INITIAL_STATE);
      setError("");
      history.push("/about");
    } catch (error) {
      setError(error.message);
    }
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setRegisterForm({ ...registerForm, [name]: value });
  };

  return (
      <div class="form-floating">
        <form onSubmit={submitForm} className="registerForm">
          <input 
          type="text"
          name="name"
          value={registerForm.name}
          onChange={handleInput}
          className="form-control" 
          id="floatingInput" 
          placeholder="Nombre"/>
          <input 
          type="email"
          name="email"
          value={registerForm.email}
          onChange={handleInput}
          className="form-control" 
          id="floatingInput" 
          placeholder="Correo electrónico"/>
          <input 
          type="password"
          name="password"
          value={registerForm.password}
          onChange={handleInput}
          className="form-control" 
          id="floatingInput" 
          placeholder="Contraseña"/>
          <button className="register-button" type="submit">Registrarme</button>
        {error && <div style={{ color: "red" }}>{error}</div>}
        </form>
      </div>
  );
};

export default RegisterForm;
