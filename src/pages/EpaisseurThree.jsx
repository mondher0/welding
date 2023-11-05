/* eslint-disable no-irregular-whitespace */
import React from "react";
import "../css/shared.css";
import SideBar from "../components/SideBar";
import "../css/episseurOne.css";
import { episseur2 } from "../assets/index";

const EpaisseurThree = () => {
  return (
    <div className="container">
      <SideBar />
      <div className="episseur-one-content">
        <h2>Gamme d’épaisseur  12mm ≤ t ≤ 20mm</h2>
        <p>
          Bords chanfreinés en X pour les plaques dont l’épaisseur est
          supérieure ou égale à 12 mm mais inférieure ou égale à 20 mm
        </p>
        <img src={episseur2} />
      </div>
    </div>
  );
};

export default EpaisseurThree;
