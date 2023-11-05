import React from "react";
import "../css/shared.css";
import SideBar from "../components/SideBar";
import "../css/episseurOne.css";
import { episseur01 } from "../assets/index";

const EpaisseurOne = () => {
  return (
    <div className="container">
      <SideBar />
      <div className="episseur-one-content">
        <h2>Gamme d’épaisseur 2mm ≤ t ˂ 5mm</h2>
        <p>
          Bords droits pour les plaques dont l’épaisseur est supérieure ou égal
          à 2 mm mais inférieure à 5 mm
        </p>
        <img src={episseur01} />
      </div>
    </div>
  );
};

export default EpaisseurOne;
