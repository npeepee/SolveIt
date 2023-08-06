import React from "react";
import { useState, useContext } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { navLinks1 } from "../solveItLinks/navLinks-solveIt-left";
import { navLinks2 } from "../solveItLinks/navLinks-solveIt-right";
import { AuthContext } from "./AuthProvider";

export default function NavBar() {
  const { user, logout } = useContext(AuthContext);
  const handleLogout = () => {
    logout();
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
        <div className="container">
          <NavLink to="/" className="navbar-brand">
            SolveIt
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navmenu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse"
            id="navmenu"
            style={{ justifyContent: "space-around" }}
          >
            <ul className="navbar-nav">
              {navLinks1.map((nav) => {
                return (
                  <li key={nav.id} className="nav-item">
                    <NavLink
                      to={nav.href}
                      className="text-secondary text-decoration-none"
                    >
                      {nav.title}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
            <ul className="navbar-nav ml-auto">
              {user ? (
                <>
                  {navLinks2.map((nav) => {
                    return (
                      <li key={nav.id} className="nav-item">
                        <NavLink
                          to={nav.href}
                          className="text-secondary text-decoration-none"
                        >
                          {nav.title}
                        </NavLink>
                      </li>
                    );
                  })}
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
        </div>
      </nav>
      <Outlet />
    </>
  );
}

//1. check if user acct is alr in database (POST)
//2. once the frontend receives success msg, then youchange the login state to true
//3. set value like {"user": "name"} inside localstorage or cookie ***assumming your backend has protected resource
//4. after that your state will always be "logged in"
//5. if press logout, then change login state back to false
