import React from "react";
import SideBar from "../components/SideBar";
import { eau } from "../assets";

const Eau = () => {
  return (
    <div className="container">
      <SideBar />
      <div className="episseur-one-content plus">
        <h2>Découpe à l'eau</h2>
        <p>
          La découpe à l'eau est utilisée pour créer des chanfreins précis sans
          générer de chaleur, ce qui est particulièrement utile pour les
          matériaux sensibles à la chaleur.
        </p>
        <img src={eau} />
      </div>
    </div>
  );
};

export default Eau;
