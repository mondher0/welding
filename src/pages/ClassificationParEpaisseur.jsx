/* eslint-disable no-unreachable */
import React from "react";
import SideBar from "../components/SideBar";
import "../css/shared.css";
import Epaisseur from "../components/Epaisseur";
import "../css/ClassificationParEpaisseur.css";

const ClassificationParEpaisseur = () => {
  return (
    <div className="container">
      <SideBar />
      <div className="content-epaisseur">
        <Epaisseur
          number="1"
          text="Gamme d’épaisseur 2mm ≤ t ˂ 5mm"
          route="/epaisseur-one"
        />
        <Epaisseur
          number="2"
          text="Gamme d’épaisseur  5mm ≤ t ≤ 12mm"
          route="/epaisseur-two"
        />
        <Epaisseur
          number="3"
          text="Gamme d’épaisseur  12mm ≤ t ≤ 20mm"
          route="/epaisseur-three"
        />
        <Epaisseur
          number="4"
          text="Gamme d’épaisseur t ≤ 20mm"
          route="/epaisseur-four"
        />
      </div>
    </div>
  );
};

export default ClassificationParEpaisseur;
