import React from 'react';
import { useSelector } from 'react-redux';
import {Link} from "react-router-dom";
import Register from '../auth/Register';
import LogOutBtn from "../auth/LogOutBtn";


const Navbar = () => {
 const isLogged = useSelector(state => state.checkAuth.isToken)
 console.log("check",isLogged)
    return (
        <div>
            <Link to = "/"> Home</Link>
            <Link to = "/register"> {isLogged ? "" :"Register" }</Link>
            <Link to = "/login"> {isLogged ? "" :"Login" }</Link>
            <Link to = "/photos"> {isLogged ? "Photos" :"" }</Link>
            {isLogged && <LogOutBtn/>}
        </div>
    );
}

export default Navbar;
