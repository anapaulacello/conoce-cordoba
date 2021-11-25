import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { loginUser } from "../../api/fetch_user";
import { UserContext } from "../../App";
import './LoginForm.css'

const LoginForm = () => {
  const { user, saveUser } = useContext(UserContext);
  const [error, setError] = useState("");
  const history = useHistory();

  const submitForm = async (ev) => {
    ev.preventDefault();
    try {
      const { email, password } = ev.target;

      const form = {
        email: email.value,
        password: password.value,
      };

      const userDB = await loginUser(form);
      saveUser(userDB.data.user);
      history.push("/");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div class="form-floating">
      <form onSubmit={submitForm} className="login-form">
        <input
          className="login-input"
          type="text"
          name="email"
          placeholder="E-mail" />
        <input
          className="login-input"
          type="password"
          name="password"
          placeholder="Password" />
        <button className="login-button" type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;