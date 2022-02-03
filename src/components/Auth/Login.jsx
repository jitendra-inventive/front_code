import React, {useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { notify } from 'react-notify-toast';
import login from "../../api/auth/login";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import Title from "../Partial/Title";
import './Login.Register.css';

const Login = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const history = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("user")) {
      history("/dashboard");
    } 
  }, [window.location.pathname]);
  const auth = async () => {
    let payload = { email: email, password: password };

    try {
      await login(payload);
      localStorage.setItem("user", JSON.stringify(payload));
      notify.show('Login successful', "success")
      history("/dashboard");
    } catch {
      notify.show("Login failed check your email address or password", "error");
    }
  };

  return (
    <div id="login_screen" className="loginSection">
      <div className="login_box">
        <Title title="Login"/>
        <div>
          <div className="form-group">
            <TextField
              value={email}
              onChange={(e) => setemail(e.target.value)}
              label="Email"
              fullWidth
              variant="outlined" />
          </div>
          <div className="form-group">
            <TextField
              value={password}
              onChange={(e) => setpassword(e.target.value)}
              hintText="Password"
              label="Password"
              type="password"
              fullWidth
              variant="outlined" />
          </div>

          <div className="login-action-btn">
            <Button
              onClick={auth}
              type="submit"
              variant="contained"
              color="primary"
            >Sign In</Button>
          </div>
          <div className="text-center mt-4">
            <p>
              Don't have an account? <a href="/register">Sign Up</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
