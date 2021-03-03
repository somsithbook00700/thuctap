import React from "react";
import useForm from "./useForm";
import "./Form.css";

function FromLogin() {
  const { values, handleChange, handleSubmit, errors } = useForm();
  return (
    <div className="form-content-right">
      <form onSubmit={handleSubmit}>
        <div className="form">
          <div className="form-inputs">
            <input
              type="text"
              name="username"
              className="form-input"
              placeholder="Enter your username"
              onChange={handleChange}
              value={values.username}
            />
          </div>
          <div className="form-inputs">
            <input
              type="password"
              name="password"
              className="form-input"
              placeholder="Enter your password"
              onChange={handleChange}
              value={values.password}
            />
          </div>
          <button type="submit" className="btn btn-login">
            Login
          </button>
          <div className="login-status">
            <ul>
              {errors.username && <li>{errors.username}</li>}
              {errors.password && <li>{errors.password}</li>}
            </ul>
          </div>
        </div>
      </form>
    </div>
  );
}

export default FromLogin;
