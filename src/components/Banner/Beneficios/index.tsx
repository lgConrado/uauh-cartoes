import beneficios from "./beneficios.json";
import Figure from "../../Figures";
import cartao_alimentacao from "../../../assets/cartao-alimentacao.png";
import cartao_multi from "../../../assets/cartao-multi.png";
import cartao_transporte from "../../../assets/cartao-transporte.png";
import cartao_trocoFrete from "../../../assets/cartao-troco-frete.png";

interface IBeneficio {
  beneficio: string;
  tema: string;
  descricao: string[];
}

const BannerCartoesBeneficios = () => {

  const cardBeneficio = (beneficio: string) => {
    switch (beneficio) {
      case "Alimentação":
        return (
          <img
            className="banner--c--beneficios__content__cartao"
            src={cartao_alimentacao}
            alt={`Imagem do Cartão ${beneficio}`}
          />
        );
      case "Multi benefícios":
        return (
          <img
            className="banner--c--beneficios__content__cartao"
            src={cartao_multi}
            alt={`Imagem do Cartão ${beneficio}`}
          />
        );
      case "Transporte":
        return (
          <img
            className="banner--c--beneficios__content__cartao"
            src={cartao_transporte}
            alt={`Imagem do Cartão ${beneficio}`}
          />
        );
      case "Troco frete":
        return (
          <img
            className="banner--c--beneficios__content__cartao"
            src={cartao_trocoFrete}
            alt={`Imagem do Cartão ${beneficio}`}
          />
        );
    }
  };
  return (
    <div className="banner--c--beneficios__container" id="beneficios">
      {beneficios.map((beneficio: IBeneficio, index) => {
        return (
          <section
            className={`banner--c--beneficios banner--c--beneficios--${beneficio.tema}`}
            key={index}
          >
            <div className="banner--c--beneficios__content">
              {cardBeneficio(beneficio.beneficio)}
              <div className="banner--c--beneficios__content__texts">
                <h1 className="heading--c--primary">{beneficio.beneficio}</h1>
                <ul>
                  {beneficio.descricao.map((topico: string, index) => {
                    return <li key={index}>{topico}</li>;
                  })}
                </ul>
              </div>
            </div>

            <div className="banner--c--beneficios__figure banner--c--beneficios__figure--azul">
              <Figure theme="azul" />
            </div>
            <div className="banner--c--beneficios__figure banner--c--beneficios__figure--branca">
              <Figure theme="branca" />
            </div>
            <div className="banner--c--beneficios__figure banner--c--beneficios__figure--laranja">
              <Figure theme="laranja" />
            </div>
          </section>
        );
      })}
    </div>
  );
};

export default BannerCartoesBeneficios;
