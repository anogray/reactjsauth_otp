import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import Logging from "./ActionTypes"
// setLoggedOut


// export const setLoggedIn = (data)=>{
    
//     console.log("setLoggedIn", data);
//     return {
//         type : Logging.SET_LOGGEDIN,
//         payload : data
//     }

// }


export const setLoggedIn = (data)=>({
    type: Logging.SET_LOGGEDIN,
    payload:data
});
export const setLoggedOut = (data)=>{
    console.log("beforeOut")

    return{
    type: Logging.SET_LOGGEDOFF,
}}


export const checkIsLoggedIn = ()=>async(dispatch) =>{

    // console.log("checkIsLoggedIn actionCreator ",data, isLogged, setisLogged)
    // setLoggedIn("hehehehe")

     //let isLoggedIn = await axios.get("http://localhost:3002/auth/loggedIn");
    let isLoggedIn = await axios.get("https://nodejwtauth-email.herokuapp.com/auth/loggedIn");

    console.log("isLoggedIn",isLoggedIn.data)

    if(isLoggedIn.data){
       dispatch(setLoggedIn(isLoggedIn.data));
    }

}

