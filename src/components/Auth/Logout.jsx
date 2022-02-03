import React, {useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@material-ui/core";
import './Login.Register.css';

const Logout = (props) => { 
    const history = useNavigate();
    const authLogout = () => {
        localStorage.clear();
        history('/');
    }
    return(
        <Button onClick={authLogout} className="primary logoutBtn">{props.name}</Button>
    )
}
export default Logout;