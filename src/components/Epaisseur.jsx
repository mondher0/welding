/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import "../css/epaisseur.css";
import { useNavigate } from "react-router-dom";

const Epaisseur = ({ number, text, route }) => {
  const navigate = useNavigate();
  return (
    <div
      className="epaisseur"
      onClick={() => {
        if (route) {
          navigate(route);
        }
      }}
    >
      <div className="number">
        <p>{number}</p>
      </div>
      <div className="size">
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Epaisseur;
