import React from "react";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import SendIcon from "@mui/icons-material/Send";
import { blue, grey } from "@mui/material/colors";

const Input = () => {
  return (
    <div className="input">
      <div className="inputWrapper">
        <input type="text" placeholder="Write your message..." />
        <div className="inputIcons">
          <AddCircleIcon style={{color: grey[300]}} />
          <AddPhotoAlternateIcon style={{color: grey[300]}} />
          {/* <input type="file" id="addpic" style={{ display: "none" }} />
          <label htmlFor="addpic">
          </label> */}
          <button>
            <SendIcon style={{color: blue[600]}} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Input;
