import React from "react";
import SideBar from "../components/SideBar";
import { plasma } from "../assets";

const Plasma = () => {
  return (
    <div className="container">
      <SideBar />
      <div className="episseur-one-content plus">
        <h2>Découpe au plasma</h2>
        <p>
          Les machines de découpe au plasma peuvent découper des chanfreins
          biseautés sur des pièces métalliques épaisses. Cette méthode est
          rapide et efficace.
        </p>
        <img src={plasma} />
      </div>
    </div>
  );
};

export default Plasma;
