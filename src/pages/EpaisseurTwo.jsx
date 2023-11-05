/* eslint-disable no-irregular-whitespace */
import "../css/shared.css";
import SideBar from "../components/SideBar";
import "../css/episseurOne.css";
import { episseur1 } from "../assets/index";

const EpaisseurTwo = () => {
  return (
    <div className="container">
      <SideBar />
      <div className="episseur-one-content">
        <h2>Gamme d’épaisseur  5mm ≤ t ≤ 12mm</h2>
        <p>
          Bords chanfreinés en V pour les plaques dont l’épaisseur est
          supérieure ou égale à 5 mm mais inférieure ou égale à 12 mm
        </p>
        <img src={episseur1} />
      </div>
    </div>
  );
};

export default EpaisseurTwo;
