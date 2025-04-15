import BannerCartoesPrincipal from "../../components/Banner/Principal";
import BannerCartoesBeneficios from "../../components/Banner/Beneficios";
import Portais from "../../components/Portais";
import BannerAppCartoes from "../../components/Banner/App";
import BannerCartoesRede from "../../components/Banner/Rede";
import { useEffect } from "react";
import FooterCartoes from "../../components/Footer";
import CookieBanner from "../../components/Cookie";

const Cartoes = () => {
  useEffect(() => {
    const scrollToBannerPrincipal = () => {
      const element = document.getElementById("banner--c--principal");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    };

    window.addEventListener("load", scrollToBannerPrincipal);

    return () => {
      window.removeEventListener("load", scrollToBannerPrincipal);
    };
  }, []);
  return (
    <>
      <main className="main">
        <CookieBanner/>
        <BannerCartoesPrincipal />
        <Portais />
        <div>
          <BannerCartoesBeneficios />
          <BannerAppCartoes />
          <BannerCartoesRede />
        </div>
      </main>
      <FooterCartoes />
    </>
  );
};

export default Cartoes;
