import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div>
      <h2>Please Register Here</h2>
      <input type="email" placeholder="Enter your mail" />
      <br />
      <input type="password" placeholder="Enter your password" />
      <br />
      <button>Register</button>
      <br />
      <Link to="/login">Already Registered</Link>
    </div>
  );
};

export default Register;
