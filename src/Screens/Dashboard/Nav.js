import React from "react";
import "./Dashboard.css";
export default function Nav() {
  return (
    <nav className="nav">
      <h1>Smart Farm</h1>
      <div className="position-right-nav">
        <form className="searching-box-nav">
          <input
            type="text"
            name="search"
            id="navbar-search"
            placeholder="Search..."
            className="form-input"
          />
          <button type="submit" className="btn btn-success">
            <i className="fa fa-search">Search</i>
          </button>
        </form>
        <div className="btn-logout">
          <button type="submit" className="btn btn-danger">
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
}
