import React, { useContext, useState } from "react";
import { sendEmailVerification, signOut } from "firebase/auth";
import { AuthContext } from "../context/AuthContext";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

const VerifyEmail = () => {
  const [mailSent, setMailSent] = useState(false);
  const [err, setErr] = useState(false);
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSend = async (e) => {
    try {
      e.preventDefault();
      await sendEmailVerification(currentUser);
      setMailSent(true);
    } catch {
      setErr(true);
    }
  };
  const handleSignout = async (e) => {
    try {
      e.preventDefault();
      await signOut(auth);
      navigate("/login");
    } catch {
      setErr(true);
    }
  };

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Chat-a-Lot</span>
        <span className="title">Verify Email</span>
        <form>
          <button onClick={handleSend}>Send Verification Link</button>
          <button
            style={{ backgroundColor: "#d7403a" }}
            onClick={handleSignout}
          >
            Sign Out
          </button>
        </form>
        {mailSent && (
          <span className="error-msg">
            Verification mail sent
            <br />
            Please verify and sign in again
          </span>
        )}
        {err && <span className="error-msg">Something went wrong!</span>}
      </div>
    </div>
  );
};

export default VerifyEmail;
