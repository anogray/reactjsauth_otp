import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { checkIsLoggedIn } from '../../redux/ActionCreators';

const LoggingAuth = () => {

    const dispatch = useDispatch();

    const [isLogged, setisLogged] = useState(false);



    const keepCheckLogin = ()=>{
        dispatch(checkIsLoggedIn("Dispatched checkAuth"));
    }

    useEffect(() => {

        keepCheckLogin()
        
    }, [])
    return (
        <div>
            
        </div>
    );
}

export default LoggingAuth;
