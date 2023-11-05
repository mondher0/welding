import React from "react";
import SideBar from "../components/SideBar";

const About = () => {
  return (
    <div className="container">
      <SideBar />
      <div className="episseur-one-content plus">
        <h2>A propos de l’outil</h2>
        <p>
          Cet outil a été réalisé par l’étudiant YAHIAOUI Abdeldjalil dans le
          cadre d’obtention de diplôme MASTER en génie mécanique -Assemblages
          soudés et matériaux- l’année 2023, Sous la supervision de Mr ACHOUI
          Mohamed ; cet outil est dédié pour nous aide à classer les bords des
          pièces à souder selon différents facteurs pour garantir une soudure
          endurant et rigide et les méthodes d’usinage utilisés pour réaliser
          ces bords de pièces à souder.
        </p>
      </div>
    </div>
  );
};

export default About;
