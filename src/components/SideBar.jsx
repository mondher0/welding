import React from "react";
import { NavLink } from "react-router-dom";
import { logo, logoFac } from "../assets/index";
import "../css/SideBar.css";

const SideBar = () => {
  return (
    <aside className="sidebar">
      <div className="title">
        <img src={logo} />
      </div>
      <div className="logo-fac">
        <img src={logoFac} />
      </div>
      <ul className="links">
        <NavLink activeclassname="active" to="/">
          <li>Classification par épaisseur</li>
        </NavLink>
        <NavLink activeclassname="active" to="/soundage">
          <li>Classification En fonction de type de soudage</li>
        </NavLink>
        <NavLink activeclassname="active" to="/autre-facture">
          <li>Autres facteurs</li>
        </NavLink>
        <NavLink activeclassname="active" to="/usinage-bord">
          <li>L’usinage de bord</li>
        </NavLink>
        <NavLink activeclassname="active" to="/about">
          <li>A propos de l’outil</li>
        </NavLink>
      </ul>
    </aside>
  );
};

export default SideBar;
