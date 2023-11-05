import React from "react";
import "../css/shared.css";
import Epaisseur from "../components/Epaisseur";
import "../css/ClassificationParEpaisseur.css";
import SideBar from "../components/SideBar";

const UsinageBord = () => {
  return (
    <div className="container">
      <SideBar />
      <div className="content-epaisseur">
        <Epaisseur
          number="1"
          text="Chanfreinage manuel"
          route="/chanfreinage"
        />
        <Epaisseur number="2" text="Fraisage" route="/fraisage" />
        <Epaisseur number="3" text="Découpe au plasma" route="/plasma" />
        <Epaisseur number="4" text="Scie à tronçonner" route="/scie" />
        <Epaisseur number="5" text="Découpe au laser" route="/laser" />
        <Epaisseur number="6" text="Découpe à l'eau" route="/eau" />
      </div>
    </div>
  );
};

export default UsinageBord;
