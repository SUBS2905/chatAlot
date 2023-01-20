import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../firebase";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [err, setErr] = useState(false);

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;

    try {
      await sendPasswordResetEmail(auth, email);
      window.alert("Email sent!");
      navigate("/login");
    } catch (err) {
      setErr(true);
      console.log(err);
    }
  };

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Chat-a-Lot</span>
        <span className="title">Forgot Password</span>
        <form onSubmit={handleForgotPassword}>
          <input type="email" placeholder="email" />
          <button>Send Password Reset Link</button>
        </form>
          {err && <span className="error-msg">Something went wrong!</span>}
        <p>
          <Link to="/login">Back to Login Screen</Link>
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;
