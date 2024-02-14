import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function NavBar() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        {!isAuthenticated && (
          <li>
            <Link to="/signup">Sign Up</Link>
          </li>
        )}
        {!isAuthenticated && (
          <li>
            <Link to="/signin">Sign In</Link>
          </li>
        )}
        {isAuthenticated && (
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        )}
        {isAuthenticated && (
          <li>
            <Link to="/signout">Sign Out</Link>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default NavBar;
