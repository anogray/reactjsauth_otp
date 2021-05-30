import React from 'react';
import {BrowserRouter, Switch, Route, Redirect} from "react-router-dom";
import Navbar from './components/layouts.js/Navbar';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Home from './components/Home';
import { useSelector } from 'react-redux';
import Photos from './components/Photos';

const Routes = ()=>{

    const isLogged = useSelector(state => state.checkAuth.isToken)

    return(
        <BrowserRouter>

            <Navbar/>
            <Switch>

            <Route exact path = "/">
                 <Home/>   
                </Route>

                {!isLogged && 
                <Route path = "/register" >
                 <Register/>  
                </Route>}
                
                {!isLogged && 
                <Route path = "/login">
                 <Login/>  
                </Route>}

                 {isLogged && <Route path = "/photos">
                 <Photos/>  
                </Route>}
                
                <Redirect to="/"></Redirect>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;