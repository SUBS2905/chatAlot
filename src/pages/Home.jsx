import React, { useContext } from "react";
import Sidebar from "../components/Sidebar";
import Chat from "../components/Chat";
import { AuthContext } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

const Home = () => {
  const { currentUser } = useContext(AuthContext);
  const isVerified = currentUser.emailVerified;

  return isVerified ? (
    <div className="home">
      <div className="container">
        <Sidebar />
        <Chat />
      </div>
    </div>
  ) : (
    <Navigate to="/verify" />
  );
};

export default Home;
