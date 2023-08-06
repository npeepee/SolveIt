import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../solveItComponents/AuthProvider";

export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [repeat_password, setRepeatPassword] = useState("");
  const { registerUserAccount } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await registerUserAccount({ username, password, repeat_password });
    navigate("/challenges");
  };

  return (
    <>
      <link rel="stylesheet" href="../css/Bootstrap.css" />

      <div className="jumbotron">
        <div className="container">
          <h1>Register Account</h1>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div></div>
            <form method="post" role="form" onSubmit={handleSubmit}>
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
                />
                <small className="form-text text-muted">
                  Your username on the site
                </small>
              </div>
              <div className="mb-3">
                <b>
                  <label className="form-label" htmlFor="password">
                    Password
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
                />
                <small className="form-text text-muted">
                  Password used to log into your account
                </small>
              </div>
              <div className="mb-3">
                <b>
                  <label className="form-label" htmlFor="password">
                    Repeat Password
                  </label>
                </b>
                <input
                  className="form-control"
                  id="repeat_password"
                  name="repeat_password"
                  required
                  type="password"
                  value={repeat_password}
                  onChange={(e) => setRepeatPassword(e.target.value)}
                />
                <small className="form-text text-muted">
                  Repeat your password
                </small>
              </div>
              <input
                id="nonce"
                name="nonce"
                type="hidden"
                value="5f8025822c64ea34644eed66994b2530741b00cb0cfbce87077359c0ee8909aa"
              />
              <div className="row pt-3">
                <div className="col-6 col-md-4 offset-6 offset-md-8">
                  <input
                    className="btn btn-block btn-primary w-100"
                    id="_submit"
                    name="_submit"
                    type="submit"
                    value="Create"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <footer className="footer">
        <div className="container text-center">
          <a href="https://SolveIt.io" className="text-secondary">
            <small className="text-muted">SolveIt</small>
          </a>
        </div>
      </footer>
      <div x-data>
        <div
          className="position-fixed bottom-0 end-0 p-3"
          style={{ zIndex: 11 }}
        >
          <div
            x-ref="toast"
            className="toast hide"
            role="alert"
            aria-live="assertive"
            aria-atomic="true"
          >
            <div className="toast-header">
              <strong className="me-auto" x-text="$store.toast.title"></strong>
              <small>just now</small>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="toast"
                aria-label="Close"
              ></button>
            </div>
            <div className="toast-body" x-html="$store.toast.html"></div>
          </div>
        </div>
      </div>
      <div x-data>
        <div className="modal" x-ref="modal" tabindex="-1">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" x-text="$store.modal.title"></h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <p x-html="$store.modal.html"></p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-primary"
                  data-bs-dismiss="modal"
                >
                  Got it!
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <script
        defer
        type="ae3f6d91e51c3bb30f69fdc6-module"
        src="/themes/core-beta/static/assets/index.6f926540.js"
      ></script>
      <script
        src="/cdn-cgi/scripts/7d0fa10a/cloudflare-static/rocket-loader.min.js"
        data-cf-settings="ae3f6d91e51c3bb30f69fdc6-|49"
        defer
      ></script>
    </>
  );
}
