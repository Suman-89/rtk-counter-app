import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="container my-4">
      <ul className="nav justify-content-center">
        <li className="nav-item">
          <Link className="nav-link" to="/">
            Counter
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/user">
            User crud
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
