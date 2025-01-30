import Figure from "../../Figures";
import undraw from "../../../assets/ilustracao-busca-credenciado.png";

const BannerCartoesRede = () => {

  return (
    <section className="banner--c--rede" id="rede">
      <div className="banner--c--rede__content">
        <img
          className="banner--c--rede__content__ilustracao"
          src={undraw}
          alt="Ilustração de cartões"
        />
        <div className="banner--c--rede__content__texts">
          <h1 className="heading--c--primary">
            Explore nossa rede de aceitação!
          </h1>
          <h2 className="heading--c--secondary">
            Onde você estiver, estamos com você. Explore nossa rede de aceitação
            e faça suas compras com segurança e praticidade!
          </h2>
          <div className="banner--c--rede__content__button">
            <a
              //href="https://site.uauh.com.br/rede-aceitacao/"
              href="mapa"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="button button--c--laranja">Buscar</button>
            </a>
          </div>
        </div>
      </div>

      <div className="banner--c--rede__figure banner--c--rede__figure--azul">
        <Figure theme="azul" />
      </div>
      <div className="banner--c--rede__figure banner--c--rede__figure--branca">
        <Figure theme="branca" />
      </div>
      <div className="banner--c--rede__figure banner--c--rede__figure--laranja">
        <Figure theme="laranja" />
      </div>
    </section>
  );
};

export default BannerCartoesRede;
