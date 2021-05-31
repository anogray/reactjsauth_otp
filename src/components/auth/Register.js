import React, { Component, useState } from 'react';
import axios from "axios"
import { useDispatch } from 'react-redux';
import { checkIsLoggedIn } from '../../redux/ActionCreators';


const Register = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const [verifyPassword, setVerifyPassword] = useState("");
    const [isOtp, setisOtp] = useState(false)
    const [invalidOtp, setinvalidOtp]  = useState(false);
    const [otpVal, setOtpVal]  = useState("");
    const [isLoading, setLoading] = useState(false);
    const dispatch = useDispatch();


    const submitRegister = async(e) =>{
        e.preventDefault();
        console.log("e",e,e.target.name)
        if(e.target.name=="basic"){

            try{
                const registerData = {
                    email, password, verifyPassword
                }
            
                console.log("gotForm",registerData);

                if(password===verifyPassword){
                setLoading(true);
                setisOtp(true);
                // await axios.post("http://localhost:3002/auth",registerData);
                await axios.post("https://nodejwtauth-email.herokuapp.com/auth",registerData);
                }else{
                    alert("Incorrect password")
                }

                
                //dispatch(checkIsLoggedIn());
    
            }
            catch(err){
                console.error(err)
            }
        }
        else if(e.target.name=="otpBtn"){

            try{

                if(otpVal.length){
                    let otpClient = +otpVal
                   //await axios.post("http://localhost:3002/auth",{otpClient});
                   await axios.post("https://nodejwtauth-email.herokuapp.com/auth",{otpClient});

                    dispatch(checkIsLoggedIn());
                }
                
            }
            catch(err){
                console.error("mee",err.response)
                if(err.response.status===400){
                    setinvalidOtp(true);
                }
            }
        }
        
        
    }
    return (
        <div>
        <h1>Register new User !</h1>
        <form >
        {isLoading && <div>Waiting to check and sending OTP</div>}
        {!isOtp &&
            <>
            <input type="text" placeholder="Email" onChange={(e)=>setEmail(e.target.value)} />
            <input type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} />
            <input type="password" placeholder="Confirm Password" onChange={(e)=>setVerifyPassword(e.target.value)} />
            </>
            }
            <br/>
            {invalidOtp && <div>Invalid Otp : Please check</div>}
            { isOtp && <input type="number" name="confirmotp" placeholder="Enter your OTP : " onChange={(e)=>setOtpVal(e.target.value)} />}

            
            {!isOtp && <button type="submit" name="basic" onClick={submitRegister}>Submit</button>}
            {isOtp && <button type="submit" name="otpBtn" onClick={submitRegister}>Submit</button>}

        </form>
            
        </div>
    );
}

export default Register;
