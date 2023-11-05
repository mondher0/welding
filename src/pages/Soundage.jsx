import React from "react";
import SideBar from "../components/SideBar";
import "../css/shared.css";
import { sondage1, sondage2, sondage3 } from "../assets/index";
import "../css/sondage.css";
import { useNavigate } from "react-router-dom";

const Soundage = () => {
  const navigate = useNavigate();
  return (
    <div className="container">
      <SideBar />
      <div className="sondage-content">
        <img
          src={sondage1}
          onClick={() => {
            navigate("/sondage-one");
          }}
        />
        <img
          src={sondage2}
          onClick={() => {
            navigate("/sondage-two");
          }}
        />
        <img
          src={sondage3}
          onClick={() => {
            navigate("/sondage-three");
          }}
        />
      </div>
    </div>
  );
};

export default Soundage;
