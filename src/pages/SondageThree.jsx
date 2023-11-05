import React from "react";
import "../css/shared.css";
import SideBar from "../components/SideBar";
import "../css/episseurOne.css";
import { sondage31, sondage32, sondage33 } from "../assets/index";
import "../css/sondageOne.css";

const SondageThree = () => {
  return (
    <div className="container">
      <SideBar />
      <div className="episseur-one-content">
        <h2>Soudage MIG/MAG (GMAW) :</h2>
        <img src={sondage31} />
        <p>
          Les chanfreins en J, X sont souvent utilisés pour ce type de soudage
        </p>
        <div className="desc">
          <div className="desc1">
            <h3>CHANFREIN J</h3>
            <img src={sondage32} />
          </div>
          <div className="desc2">
            <h3>CHANFREIN X</h3>
            <img src={sondage33} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SondageThree;
