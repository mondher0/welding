import React from "react";
import SideBar from "../components/SideBar";
import { scie } from "../assets";

const Scie = () => {
  return (
    <div className="container">
      <SideBar />
      <div className="episseur-one-content plus">
        <h2>Scie à tronçonner</h2>
        <p>
          Les scies à tronçonner équipées de lames spéciales peuvent couper des
          pièces avec des bords en biseau à angle droit. C'est couramment
          utilisé pour le chanfreinage de tuyaux..
        </p>
        <img src={scie} />
      </div>
    </div>
  );
};

export default Scie;
