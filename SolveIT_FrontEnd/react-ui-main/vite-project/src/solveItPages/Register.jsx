import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../solveItComponents/AuthProvider";

export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [repeat_password, setRepeatPassword] = useState("");
  const [error, setError] = useState("");
  const { registerUserAccount } = useContext(AuthContext);
  const navigate = useNavigate();
  const [repeatPasswordError, setRepeatPasswordError] = useState("");


  const passwordIsValid = {
    length: password.length >= 8,
    uppercase: /[A-Z]/.test(password),
    lowercase: /[a-z]/.test(password),
    number: /\d/.test(password),
    specialChar: /[!@#$%^&*(),.?":{}|<>]/.test(password),
  };

  

  const validCriteriaCount = Object.values(passwordIsValid).filter(Boolean).length;

  let passwordStrength = "Very Weak";
  let strengthColor = "red";

  switch (validCriteriaCount) {
    case 1:
      passwordStrength = "Very Weak";
      strengthColor = "red";
      break;
    case 2:
      passwordStrength = "Weak";
      strengthColor = "orange ";
      break;
    case 3:
      passwordStrength = "Decent";
      strengthColor = "yellow";
      break;
    case 4:
      passwordStrength = "Strong";
      strengthColor = "#3BCA6D";
      break
    case 5:
      passwordStrength = "Very Strong";
      strengthColor = "#00FF7F";
      break;
    default:
      passwordStrength = "Nothing";
      strengthColor = "grey";
  }

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== repeat_password) {
      setRepeatPasswordError("Passwords do not match.");
      return;
    } else {
      setRepeatPasswordError(""); // Reset the error when passwords do match
    }

    if (validCriteriaCount < 5) {
      setError("You need a Very Strong password to register.");
      return;
    }

    await registerUserAccount({ username, password, repeat_password });
    navigate("/challenges");
};


  return (
    <>
      <link rel="stylesheet" href="../css/suka.css" />

      <div className="jumbotron">
        <div className="container">
          <h1>Register Account</h1>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <form method="post" role="form" onSubmit={handleSubmit}>
              {/* Username Input */}
              <div className="mb-3">
                <b><label className="form-label" htmlFor="name">User Name</label></b>
                <input
                  className="form-control"
                  id="username"
                  name="username"
                  required
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <small className="form-text text-muted">Your username on the site</small>
              </div>

              {/* Password Input with Strength Bar and Criteria Check */}
              <div className="mb-3">
                <b><label className="form-label" htmlFor="password">Password</label></b>
                <input className="form-control" id="password" name="password" required type="password" value={password} onChange={handlePasswordChange} />
                <div style={{marginTop: '5px', backgroundColor: strengthColor, width: '100%', height: '5px'}}></div>
                <small className="form-text text-muted">Password used to log into your account</small>

                <ul style={{ listStyle: "none", padding: 0, marginTop: '5px' }}>
                  <li><span style={{ color: passwordIsValid.length ? 'green' : 'gray' }}>✔</span> 8+ Characters</li>
                  <li><span style={{ color: passwordIsValid.uppercase ? 'green' : 'gray' }}>✔</span> Uppercase</li>
                  <li><span style={{ color: passwordIsValid.lowercase ? 'green' : 'gray' }}>✔</span> Lowercase</li>
                  <li><span style={{ color: passwordIsValid.number ? 'green' : 'gray' }}>✔</span> Number</li>
                  <li><span style={{ color: passwordIsValid.specialChar ? 'green' : 'gray' }}>✔</span> Special Character</li>
                </ul>

                {error && <div className="text-danger">{error}</div>}
              </div>

              {/* Repeat Password Input */}
              <div className="mb-3">
                  <b><label className="form-label" htmlFor="password">Repeat Password</label></b>
                  <input
                    className="form-control"
                    id="repeat_password"
                    name="repeat_password"
                    required
                    type="password"
                    value={repeat_password}
                    onChange={(e) => setRepeatPassword(e.target.value)}
                  />
                  <small className="form-text text-muted">Repeat your password</small>
                  {repeatPasswordError && <div className="text-danger">{repeatPasswordError}</div>}
              </div>


              <input
                id="nonce"
                name="nonce"
                type="hidden"
                value="5f8025822c64ea34644eed66994b2530741b00cb0cfbce87077359c0ee8909aa"
              />

              <div className="row pt-3">
                <div className="col-6 col-md-4 offset-6 offset-md-8">
                  <input className="btn btn-block btn-primary w-100" id="_submit" name="_submit" type="submit" value="Create" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="container text-center">
          <a href="https://SolveIt.io" className="text-secondary">
            <small className="text-muted">SolveIt</small>
          </a>
        </div>
      </footer>
    </>
  );
}
