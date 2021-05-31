import React, { Component, useEffect, useState } from 'react';
import axios from "axios"
import {checkIsLoggedIn} from "../../redux/ActionCreators";
import { useDispatch, useSelector } from 'react-redux';
import { Loggingreducer } from '../../redux/reducers/Loggingreducer';


const Login = () => {
        
     const islogged = useSelector(state => state.checkAuth.isToken)
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const dispatch = useDispatch();

    // console.log("before",{islogged})

    (() => {
        console.log("hehe iife")
        if(!islogged){
            dispatch(checkIsLoggedIn("hello from logged in"));
            console.log("iife after",{islogged})

        }
      })()

    const submitLogin = async(e) =>{
        e.preventDefault();
        try{
            const LoginData = {
                email, password
            }

        //  let resp = await axios.post("http://localhost:3002/auth/login",LoginData);
         let resp = await axios.post("https://nodejwtauth-email.herokuapp.com/auth/login",LoginData);

         dispatch(checkIsLoggedIn("hello from logged in"));
            console.log({resp})
        }
        catch(err){
            console.error("Errorsss ! ",err?.response?.data)
        }
        
    }

    return (
        !islogged &&
        <div>
        
        <h1>Login new User !</h1>
        <form onSubmit={submitLogin}>
            
            <input type="text" placeholder="Email" onChange={(e)=>setEmail(e.target.value)} />
            <input type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} />
            
            <button type="submit">Submit</button>
        </form>
            
        </div>
    );
}

export default Login;
