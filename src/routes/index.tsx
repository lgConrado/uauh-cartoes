import { Route, Routes } from "react-router-dom";
import Cartoes from "../pages/Cartoes";
import PoliticaCartoes from "../pages/Cartoes/Politica";
import QuemSomosCartoes from "../pages/Cartoes/QuemSomos";

const Rotas = () => {
  return (
    <Routes>
      <Route path="/" element={<Cartoes />} />
      <Route
        path="/politica-privacidade"
        element={<PoliticaCartoes />}
      />
      <Route path="/quem-somos" element={<QuemSomosCartoes />} />
    </Routes>
  );
};

export default Rotas;