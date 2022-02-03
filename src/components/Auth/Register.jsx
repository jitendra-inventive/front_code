import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { notify } from 'react-notify-toast';
import register from "../../api/auth/register";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import Title from "../Partial/Title";
import './Login.Register.css';


const Register = () => {
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [confirmpass, setconfirmpass] = useState('')
    const [name, setname] = useState('')
    const history = useNavigate();
    var auth = async () => {
        if (email === '' || password === '' || name === '') {
            notify.show('Please fill all fields to create account.', "error")
            return
        }
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if (!pattern.test(email)) {
            notify.show('Invalid email address, Enter valid email address.', "error")
            return

        }
        if (password.length < 6) {
            notify.show('Passwords must be at least 6 characters in length.', 'error')
            return
        }
        if (password != confirmpass) {
            notify.show('The password and confirmation password do not match.', 'error')
            return
        }
        let payload = { Name: name, Email: email, Password: password }

        let response = await register(payload);

        if (response.status == 1) {
            localStorage.setItem('user', JSON.stringify(payload));
            notify.show(response.message, "success");
            history("/dashboard");
        }
        else {
            notify.show(response.message, "error");
        }

    }

    return (
        <div className="loginSection">
            <div className="login_box">
                <Title title="Create New Account"/>
                <div >
                    <div className="form-group">
                        <TextField
                            value={name}
                            onChange={(e) => setname(e.target.value)}
                            label="Name"
                            fullWidth
                            variant="outlined" />
                    </div>
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
                    <div className="form-group">
                        <TextField
                            value={confirmpass}
                            onChange={(e) => setconfirmpass(e.target.value)}
                            hintText="Password"
                            label="Confirm Password"
                            type="password"
                            fullWidth
                            variant="outlined" />
                    </div>
                    <div className="login-action-btn mt-2">
                        <Button
                            onClick={auth}
                            type="submit"
                            variant="contained"
                            color="primary"
                        >Register</Button>
                    </div>
                    <div className="text-center mt-4">
                        <p>Already have an account?
                            <a href="/" fontWaight="600">Login here</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Register;