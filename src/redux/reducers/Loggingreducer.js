import LoggingAuth from "../../components/auth/LoggingAuth"
import loggedIN from "../ActionTypes"
{/* <LoggingAuth/> */}

 const st = <LoggingAuth/>;

//  const Loggingreducer = (state = {"fxnLogged":"st"}, action) =>{
//     console.log("store React", state)

//     return state

//     }

// }
// export default Loggingreducer

export const Loggingreducer = (state = {fxnLogged:""}, action) =>{
    console.log("Loggingreducer store ", action)

    switch(action.type){

        case loggedIN.IS_LOGGEDIN:
            return  {...state, fxnLogged : action.payload}
    }

    return state;


}