import React from "react";
import { CallEnd } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const Videocall = () => {
  const navigate = useNavigate();
  return (
    <div className="vc-container">
      <div className="vc-windows">
        <div className="incoming-window">
          <div className="outgoing-window"></div>
        </div>
      </div>
      <div className="vc-buttons" onClick={()=>{navigate("/")}}><CallEnd fontSize="large" /></div>
    </div>
  );
};

export default Videocall;
