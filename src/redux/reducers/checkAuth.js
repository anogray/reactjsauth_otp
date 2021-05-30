import loggedIN from "../ActionTypes"

export const checkAuth = (state = {isToken:false}, action) =>{
    console.log("storeReact", state,action)

    switch(action.type){

        case loggedIN.SET_LOGGEDIN:
            return{ ...state, isToken : action.payload};

            case loggedIN.SET_LOGGEDOFF:
                return{ ...state, isToken : false};

        default:
            return state;

    }

}