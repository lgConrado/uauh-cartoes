import portais from "./portais.json";
import portal_beneficio from "../../assets/icone-portal-beneficio.png";
import portal_credenciado from "../../assets/icone-portal-credenciado.png";
import portal_frota from "../../assets/icone-portal-frota.png";
import portal_usuario from "../../assets/icone-portal-usuario.png";
interface IPortal {
  portal: string;
  descricao: string;
  link: string;
}

const coverCard = (portal: string) => {

  switch (portal) {
    case "Portal Benefício":
      return (
        <img
          src={portal_beneficio}
          alt={`Capa ${portal}`}
          className="portais__card__header__cover"
        />
      );
    case "Portal Credenciado":
      return (
        <img
          src={portal_credenciado}
          alt={`Capa ${portal}`}
          className="portais__card__header__cover"
        />
      );
    case "Portal Frota":
      return (
        <img
          src={portal_frota}
          alt={`Capa ${portal}`}
          className="portais__card__header__cover"
        />
      );
    case "Portal Usuário":
      return (
        <img
          src={portal_usuario}
          alt={`Capa ${portal}`}
          className="portais__card__header__cover"
        />
      );
  }
};

const Portais = () => {
  return (
    <section className="portais" id="portais">
      <div className="portais__content">
        {portais.map((portal: IPortal, index) => {
          return (
            <div className="portais__card" key={index}>
              <div className="portais__card__header">
                {coverCard(portal.portal)}
                <h3 className="heading--c--tertiary">{portal.portal}</h3>
              </div>
              <p className="text--cinza portais__card__descricao">
                {portal.descricao}
              </p>
              <div className="portais__card__button">
                <a
                  href={portal.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none" }}
                >
                  <button className="button button--c--laranja">Acessar</button>
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Portais;
