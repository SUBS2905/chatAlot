import React, { useContext } from "react";
import VideocamIcon from "@mui/icons-material/Videocam";
import LogoutIcon from "@mui/icons-material/Logout";
import Messages from "./Messages";
import Input from "./Input";
import { ChatContext } from "../context/ChatContext";
import { confirmAlert } from "react-confirm-alert";
import options from "./ModalOptions";
import { useNavigate } from "react-router-dom";

const Chat = () => {
  const navigate = useNavigate();
  const { data } = useContext(ChatContext);

  const handleLogout = () => {
    confirmAlert(options);
  };

  return (
    <div className="chat">
      <div className="chatInfo">
        <span>{data.user?.displayName}</span>
        <div className="chatIcons">
          <VideocamIcon
            onClick={() => {
              navigate("/underDev");
            }}
          />
          <button id="logout" onClick={handleLogout}>
            <LogoutIcon style={{ color: "red" }} />
          </button>
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
};

export default Chat;
