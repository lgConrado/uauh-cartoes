import { Route, Routes } from "react-router-dom";
import Cartoes from "../pages/Cartoes";
import PoliticaCartoes from "../pages/Cartoes/Politica";
import QuemSomosCartoes from "../pages/Cartoes/QuemSomos";
import Mapa from "../pages/Cartoes/Mapa";

const Rotas = () => {
  return (
    <Routes>
      <Route path="/" element={<Cartoes />} />
      <Route
        path="/politica-privacidade"
        element={<PoliticaCartoes />}
      />
      <Route path="/quem-somos" element={<QuemSomosCartoes />} />
      <Route path="/mapa" element={<Mapa />} />
    </Routes>
  );
};

export default Rotas;