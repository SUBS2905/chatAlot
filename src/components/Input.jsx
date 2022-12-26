import React from "react";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import SendIcon from "@mui/icons-material/Send";
import { blue, grey } from "@mui/material/colors";

const Input = () => {
  return (
    <div className="input">
      <div className="inputWrapper">
        <input type="text" placeholder="Write your message..." />
        <div className="inputIcons">
          <AttachFileIcon style={{color: grey[300]}} />
          <input type="file" id="addpic" style={{ display: "none" }} />
          <label htmlFor="addpic">
            <AddPhotoAlternateIcon style={{color: grey[300]}} />
          </label>
          <button>
            <SendIcon style={{color: blue[600]}} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Input;
