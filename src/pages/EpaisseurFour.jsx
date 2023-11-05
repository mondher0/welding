/* eslint-disable no-irregular-whitespace */
import React from "react";
import "../css/shared.css";
import SideBar from "../components/SideBar";
import "../css/episseurOne.css";
import { episseur31, episseur32, episseur33 } from "../assets/index";
import "../css/episseurThree.css";

const EpaisseurFour = () => {
  return (
    <div className="container">
      <SideBar />
      <div className="episseur-one-content three ">
        <h2>Gamme d’épaisseur  t ≤ 20mm</h2>
        <h3>a - Chanfrein en V doubles pentes (V composés) :</h3>
        <img src={episseur31} />
        <h3>b - Chanfrein en J:</h3>
        <img src={episseur32} />
        <h3>c - J double pente (J Composé):</h3>
        <img src={episseur33} />
      </div>
    </div>
  );
};

export default EpaisseurFour;
