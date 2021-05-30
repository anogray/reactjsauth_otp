import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from 'redux-thunk';
import { checkAuth } from './reducers/checkAuth';
import {Loggingreducer}  from './reducers/Loggingreducer';

// const composedEnhancer = compose(composeWithDevTools(), applyMiddleware(thunk))

// export const store = ()=> createStore(checkAuth, composedEnhancer);


// import { createStore, applyMiddleware, compose  } from 'redux';
// import { checkAuth } from './reducers/checkAuth';
// import { composeWithDevTools } from "redux-devtools-extension";
// import thunk from 'redux-thunk';

// const composedEnhancer = compose(composeWithDevTools, applyMiddleware(thunk))

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


//Single reducer-store
// export const configureStore = ()=>{
//     const store = createStore(checkAuth, composeEnhancers(applyMiddleware(thunk)));
//     return store;

// } 

//Multiple/combination reducers-store
export const configureStore = ()=>{
    const store = createStore(combineReducers({checkAuth:checkAuth,Loggingreducer:Loggingreducer}), composeEnhancers(applyMiddleware(thunk)));
    return store;

} 