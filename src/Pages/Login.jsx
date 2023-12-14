import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../config/index.js";
import { useUser } from "./../Components/Context.jsx";

const Login = () => {
  const { formFields, setFormFields, setUser, logoutUser, userEmail } =
    useUser();
  const { displayName, email, password, confirmPassword } = formFields;
  const navigate = useNavigate();
  const submitHandler = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Password do not Match");
      return;
    }
    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      const userDocRef = await createUserDocumentFromAuth(user, {
        displayName,
      });
      if (userDocRef) {
        alert("SignUp Success");
        navigate("/sign");
      }
    } catch (err) {
      console.log("Something Happened", err.message);
      console.log(err.code);
      if (err.code === "auth/email-already-in-use") {
        alert("Email Already Exists Please use alternate Email");
      } else if (err.code === "auth/weak-password") {
        alert("Password must be at least 6 characters long");
      }
    }
  };

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="main-container">
      <div className="header">
        <h2>Sign Up</h2>
      </div>
      <form action="" onSubmit={submitHandler}>
        <div className="box">
          <input
            type="text"
            id="display-name"
            name="displayName"
            required
            onChange={changeHandler}
            placeholder="UserName"
          />
        </div>
        <div className="box">
          <input
            type="email"
            id="email"
            name="email"
            required
            onChange={changeHandler}
            placeholder="Email Id"
          />
        </div>
        <div className="box">
          <input
            type="password"
            id="password"
            name="password"
            required
            onChange={changeHandler}
            placeholder="Password"
          />
        </div>
        <div className="box">
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            required
            onChange={changeHandler}
            placeholder="Confirm Password"
          />
        </div>
        <p>
          Already Have an Account <Link to={`/Sign`}>Login Now</Link>
        </p>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};
export default Login;
