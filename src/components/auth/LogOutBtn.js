import axios from "axios";
import React, { useContext } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { setLoggedOut } from "../../redux/ActionCreators";
// import AuthContext from "../../context/AuthContext";

function LogOutBtn() {
//   const { getLoggedIn } = useContext(AuthContext);

  const history = useHistory();
   const dispatch = useDispatch();

  async function logOut() {
    await axios.get("http://localhost:3002/auth/logout");
    // await axios.get(
    //   "https://mern-auth-template-tutorial.herokuapp.com/auth/logout"
    // );
    // await getLoggedIn();
    dispatch(setLoggedOut());
    console.log("afterOut")
    history.push("/");
  }

  return <button onClick={logOut}>Log out</button>;
}

export default LogOutBtn;