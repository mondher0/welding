import React from "react";
import SideBar from "../components/SideBar";
import { chanfreinage } from "../assets";

const Chanfreinage = () => {
  return (
    <div className="container">
      <SideBar />
      <div className="episseur-one-content plus">
        <h2>Chanfreinage manuel</h2>
        <p>
          Cette méthode implique l'utilisation d'une meuleuse d'angle tenue à la
          main pour créer un chanfrein sur les bords des pièces. C'est une
          option flexible et largement utilisée.
        </p>
        <img src={chanfreinage} />
      </div>
    </div>
  );
};

export default Chanfreinage;
