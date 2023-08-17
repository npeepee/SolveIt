import React from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { navLinks3 } from "../solveItLinks/navLinks-solveIt-create";
import { useState, useContext } from "react";
import { AuthContext } from "../solveItComponents/AuthProvider";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { user, login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login({ username, password });
    navigate("/challenges");
  };

  return (
    <>
      <link rel="stylesheet" href="../css/suka.css" />
      <body>
        <div className="jumbotron">
          <div className="container">
            <h1>Account Login</h1>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-8 col offset-md-2 col-lg-6 offset-lg-3">
              <div></div>
              <form
                method="post"
                onSubmit={handleSubmit}
              >
                <div className="mb-3">
                  <b>
                    <label className="form-label" htmlFor="name">
                      User Name
                    </label>
                  </b>
                  <input
                    className="form-control"
                    id="username"
                    name="username"
                    required
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Username"
                  />
                </div>
                <div className="mb-3">
                  <b>
                    <label className="form-label" htmlFor="password">
                      Password{" "}
                    </label>
                  </b>
                  <input
                    className="form-control"
                    id="password"
                    name="password"
                    required
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                  />
                </div>
                <div className="row pt-3">
                  <div className="col-6 col-md-8">
                    <a className="align-middle">
                      {navLinks3.map((nav) => {
                        return (
                          <a key={nav.id}>
                            <NavLink to={nav.href}>{nav.title}</NavLink>
                          </a>
                        );
                      })}
                    </a>
                  </div>
                </div>
                <div className="row pt-3">
                  <div className="col-6 col-md-8">
                    <a className="align-middle" href="/reset_password">
                      <NavLink to="/forgot">Forgot your password?</NavLink>
                    </a>
                  </div>
                  <div className="col-6 col-md-4">
                    <input
                      className="btn btn-block btn-primary w-100"
                      id="_submit"
                      name="_submit"
                      type="submit"
                      value="Submit"
                    />
                  </div>
                </div>
                <input
                  id="nonce"
                  name="nonce"
                  type="hidden"
                  value="afbccc7d541f4e0429b7e91f1a64922fbb95850a84e74f989d66882fb9fe46cf"
                />
              </form>
            </div>
          </div>
        </div>

        <footer className="footer" />

        <div x-data>
          <div className="modal" x-ref="modal" tabindex="-1">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-body">
                  <p x-html="$store.modal.html" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <script
          defer
          type="3279986c1f4218bbac25f22f-module"
          src="/themes/core-beta/static/assets/index.6f926540.js"
        ></script>
      </body>
    </>
  );
}
