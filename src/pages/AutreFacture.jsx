import React from "react";
import SideBar from "../components/SideBar";
import "../css/autre-facture.css";
import "../css/shared.css";

const AutreFacture = () => {
  return (
    <div className="container">
      <SideBar />
      <div className="content">
        <h2>Autres facteurs</h2>
        <ol>
          <li>
            <span>Matériau à souder: </span> Différents types de métaux et
            d'alliages ont des propriétés de fusion et de conductivité thermique
            différentes, ce qui peut influencer le type de bord requis.
          </li>
          <li>
            <span>Type de joint: </span>Le type de joint à réaliser, comme un
            joint bout à bout, en T, à recouvrement, etc., détermine le type de
            bord nécessaire pour créer une connexion solide.
          </li>
          <li>
            <span>Normes et spécifications: </span>Les normes de l'industrie et
            les spécifications du projet peuvent prescrire le type de bord à
            utiliser pour des raisons de sécurité ou de performance.
          </li>
          <li>
            <span>Coûts et efficacité: </span>Le coût de la préparation du bord,
            le temps de travail et les ressources disponibles peuvent influencer
            le choix du type de bord.
          </li>
          <li>
            <span>Complexité de la pièce: </span>Des pièces avec des géométries
            complexes peuvent nécessiter des types de bords spécifiques pour une
            adaptation précise.
          </li>
          <li>
            <span>Équipement disponible: </span>La disponibilité d'équipement
            d'usinage, comme des fraiseuses, des meuleuses ou des machines de
            découpe au plasma, peut également influencer le choix du type de
            bord.
          </li>
        </ol>
      </div>
    </div>
  );
};

export default AutreFacture;
