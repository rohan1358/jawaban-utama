// 9. Membuatlah satu halaman

import React, { useState } from "react";

const getData = localStorage.getItem("secret"),
  pardseData = getData ? JSON.parse(getData) : false;

function LoginRegister() {
  const [login, setIsLogin] = useState(false);
  const [state, setState] = useState(
    pardseData || {
      username: "",
      password: "",
    }
  );

  const handleChange = (e) => {
    let { value, name } = e.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const handleLogin = () => {
    if (state.username && state.password) {
      localStorage.setItem("secret", JSON.stringify(state));
      setIsLogin(true);
    }
  };
  const handleLogout = () => {
    setIsLogin(false);
    localStorage.removeItem("secret");
  };

  return (
    <div className="container p-5">
      {login ? <h1>Selamat Datang</h1> : <h1>Login</h1>}
      {login && (
        <>
          <h2>{state.username}</h2>
        </>
      )}
      {login ? (
        <>
          <button
            onClick={() => {
              handleLogout();
            }}
            type="submit"
            className="btn btn-primary"
          >
            Logout
          </button>
        </>
      ) : (
        <form>
          <div className="row mb-3">
            <label htmlFor="inputusername3" className="col-sm-2 col-form-label">
              username
            </label>
            <div className="col-sm-10">
              <input
                onChange={(e) => handleChange(e)}
                className="form-control"
                id="inputusername3"
                placeholder="username"
                name="username"
              />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">
              Password
            </label>
            <div className="col-sm-10">
              <input
                onChange={(e) => handleChange(e)}
                name="password"
                type="password"
                className="form-control"
                id="inputPassword3"
              />
            </div>
          </div>

          <button
            onClick={() => {
              handleLogin();
            }}
            className="btn btn-primary"
          >
            Login
          </button>
        </form>
      )}
    </div>
  );
}

export default LoginRegister;
