import React from "react";
import "../css/shared.css";
import SideBar from "../components/SideBar";
import "../css/episseurOne.css";
import { sondage21, sondage22, sondage23 } from "../assets/index";
import "../css/sondageOne.css";

const SondageTwo = () => {
  return (
    <div className="container">
      <SideBar />
      <div className="episseur-one-content">
        <h2>Soudage TIG (GTAW)</h2>
        <img src={sondage21} />
        <p>
          Un chanfrein en X ou en V peut être approprié pour le soudage TIG.
        </p>
        <div className="desc">
          <div className="desc1">
            <h3>CHANFREIN X</h3>
            <img src={sondage22} />
          </div>
          <div className="desc2">
            <h3>CHANFREIN V</h3>
            <img src={sondage23} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SondageTwo;
