import React from "react";
import SideBar from "../components/SideBar";
import { fraisage } from "../assets";

const Fraisage = () => {
  return (
    <div className="container">
      <SideBar />
      <div className="episseur-one-content plus">
        <h2>Fraisage</h2>
        <p>
          Les fraiseuses, qu'elles soient manuelles ou CNC, sont utilisées pour
          le chanfreinage précis des bords des pièces. Elles permettent de créer
          des chanfreins droits ou biseautés selon les spécifications requises.
        </p>
        <img src={fraisage} />
      </div>
    </div>
  );
};

export default Fraisage;
