import React from "react";
import { Link } from "react-router-dom";
import useFirebase from "../../hooks/useFirebase";
const LogIn = () => {
  const { registrationUsingGoogle } = useFirebase();
  console.log(useFirebase());
  return (
    <div>
      <h2>Please Login Here</h2>
      <button onClick={registrationUsingGoogle}>Log in</button>
      <br />
      <Link to="/register">Don't Have Id?</Link>
    </div>
  );
};

export default LogIn;
