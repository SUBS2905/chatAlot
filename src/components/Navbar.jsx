import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { currentUser } = useContext(AuthContext);
  
  const handleImage = () => {
    window.open(currentUser.photoURL, "_blank");
  };

  return (
    <div className="navbar">
      <span className="logo">Chat-a-Lot</span>
      <div className="user">
        <img src={currentUser.photoURL} alt="" onClick={handleImage} />
        <span>{currentUser.displayName}</span>
      </div>
    </div>
  );
};

export default Navbar;
