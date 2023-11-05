import "./App.css";
import { Routes, Route, HashRouter } from "react-router-dom";
import ClassificationParEpaisseur from "./pages/ClassificationParEpaisseur";
import Soundage from "./pages/Soundage";
import EpaisseurOne from "./pages/EpaisseurOne";
import EpaisseurTwo from "./pages/EpaisseurTwo";
import EpaisseurThree from "./pages/EpaisseurThree";
import EpaisseurFour from "./pages/EpaisseurFour";
import SondageOne from "./pages/SondageOne";
import SondageTwo from "./pages/SondageTwo";
import SondageThree from "./pages/SondageThree";
import AutreFacture from "./pages/AutreFacture";
import UsinageBord from "./pages/UsinageBord";
import Chanfreinage from "./pages/Chanfreinage";
import Fraisage from "./pages/Fraisage";
import Plasma from "./pages/Plasma";
import Scie from "./pages/Scie";
import Laser from "./pages/Laser";
import Eau from "./pages/Eau";
import About from "./pages/About";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<ClassificationParEpaisseur />} />
        <Route path="/soundage" element={<Soundage />} />
        <Route path="/epaisseur-one" element={<EpaisseurOne />} />
        <Route path="/epaisseur-two" element={<EpaisseurTwo />} />
        <Route path="/epaisseur-three" element={<EpaisseurThree />} />
        <Route path="/epaisseur-four" element={<EpaisseurFour />} />
        <Route path="/sondage-one" element={<SondageOne />} />
        <Route path="/sondage-two" element={<SondageTwo />} />
        <Route path="/sondage-three" element={<SondageThree />} />
        <Route path="/autre-facture" element={<AutreFacture />} />
        <Route path="/usinage-bord" element={<UsinageBord />} />
        <Route path="/chanfreinage" element={<Chanfreinage />} />
        <Route path="/fraisage" element={<Fraisage />} />
        <Route path="/plasma" element={<Plasma />} />
        <Route path="/scie" element={<Scie />} />
        <Route path="/laser" element={<Laser />} />
        <Route path="/eau" element={<Eau />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
