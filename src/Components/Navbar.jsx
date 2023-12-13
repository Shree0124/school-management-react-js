import React from "react";
import { useNavigate } from "react-router-dom";
import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  let navigate = useNavigate();
  let token = localStorage.getItem("token");
  let role = localStorage.getItem("role");

  let logoutHandler = () => {
    if (window.confirm("are you sure, you want logout")) {
      localStorage.clear();
      navigate("/Login");
    } else navigate("/home");
  };
  return (
    <div>
      <div className="main">
        <div id="logo">
          <img
            src="data:image/png;base64,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"
            alt=" logo"
            height={80}
            width={160}
          />
        </div>
        <div id="menu">
          <ol>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to={"/about"}>About</Link>
            </li>
            <li>Gallery</li>

            {token ? (
              <a to="/login">
                <li onClick={logoutHandler}>Logout</li>
              </a>
            ) : (
              <div className="chan">
                <li>
                  {" "}
                  <Link to="/">Register</Link>
                </li>
                <br />
                <li>
                  <Link to="/login">Login</Link>
                </li>
              </div>
            )}
            {role === "ROLE_ADMIN" ? (
              <Link to="/adminDashBoard">
                <li>Admin dashboard</li>
              </Link>
            ) : null}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
