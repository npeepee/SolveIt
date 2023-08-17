import React from "react";
import { useContext } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { navLinks1 } from "../solveItLinks/navLinks-solveIt-left";
import { navLinksGuest, navLinksUser, navLinksAdmin } from "../solveItLinks/navLinks-solveIt-right";
import { AuthContext } from "./AuthProvider";

export default function NavBar() {
  const { user, logout } = useContext(AuthContext);
  
  const handleLogout = () => {
    logout();
  };

  let userLinks = [];

  function Check(user) {
    {[user.user]}
      if (user.role == 2) {
        userLinks = navLinksAdmin;
      }
      else if (user.role == 1) {
        userLinks = navLinksUser;
      }
      else {
        userLinks = navLinksGuest;
      }
    
  }
    
    


  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
        <div className="container">
          <NavLink to="/" className="navbar-brand">
            SolveIt
          </NavLink>
          <ul className="navbar-nav ml-auto">
            {user ? (
              <>
                <ul className="navbar-nav mr-auto">
                  {navLinks1.map((nav) => (
                    <li key={nav.id} className="nav-item">
                      <NavLink
                        to={nav.href}
                        className="text-secondary text-decoration-none"
                      >
                        {nav.title}
                      </NavLink>
                    </li>
                  ))}
                </ul>
                {Check(user)}
                {userLinks.map((nav) => (
                  <li key={nav.id} className="nav-item">
                    <NavLink
                      to={nav.href}
                      className="text-secondary text-decoration-none"
                    >
                      {nav.title}
                    </NavLink>
                  </li>
                ))}
                <li className="nav-item">
                  <i
                    onClick={handleLogout}
                    className="fas fa-sign-out-alt text-secondary"
                    style={{ cursor: "pointer" }}
                  ></i>
                </li>
              </>
            ) : (
              <>
                <ul className="navbar-nav ms-auto">
                  <li className="nav-item">
                    <NavLink
                      to="/pricing"
                      className="text-secondary text-decoration-none"
                    >
                      Pricing
                    </NavLink>
                  </li>
                </ul>
                <li className="nav-item">
                  <NavLink
                    to="/register"
                    className="text-secondary text-decoration-none"
                  >
                    Register
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/login"
                    className="text-secondary text-decoration-none"
                  >
                    Login
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>
      <Outlet />
    </>
  );
}
