import React from "react";
import "../css/shared.css";
import SideBar from "../components/SideBar";
import "../css/episseurOne.css";
import { sondage11, sondage12, sondage13 } from "../assets/index";
import "../css/sondageOne.css";

const SondageOne = () => {
  return (
    <div className="container">
      <SideBar />
      <div className="episseur-one-content">
        <h2>Soudage à l'arc avec électrode enrobée (SMAW)</h2>
        <img src={sondage11} />
        <p>
          Les chanfreins en V, X ou U sont couramment utilisés pour ce type de
          soudage
        </p>
        <div className="desc">
          <div className="desc1">
            <h3>CHANFREIN X</h3>
            <img src={sondage12} />
          </div>
          <div className="desc2">
            <h3>CHANFREIN V</h3>
            <img src={sondage13} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SondageOne;
