import React from "react";
import SideBar from "../components/SideBar";
import { laser } from "../assets";

const Laser = () => {
  return (
    <div className="container">
      <SideBar />
      <div className="episseur-one-content plus">
        <h2>Découpe au laser</h2>
        <p>
          Les machines de découpe au laser peuvent être programmées pour créer
          des chanfreins précis sur des pièces métalliques. Elles sont
          particulièrement utiles pour les projets nécessitant des chanfreins de
          haute qualité et de faibles tolérances.
        </p>
        <img src={laser} />
      </div>
    </div>
  );
};

export default Laser;
