import React from "react";
import FromLogin from "../../Components/Login/FromLogin";
import "./LoginPage.css";
import logo from "../../img/smart-farm-logo2.png";
export default function LoginPage() {
  return (
    <div className=" row ">
      {/* logo */}
      <div className="col">
        <img src={logo} alt="smart-farm-logo" className="smart-farm-logo" />
      </div>

      {/* login form panel*/}
      <div className="col">
        <FromLogin />
      </div>
    </div>
  );
}
