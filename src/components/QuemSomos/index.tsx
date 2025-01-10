import Logo from "../Logo";

const QuemSomosUauhCartoes = () => {
  return (
    <section className="politica">
      <div className="politica__logo">
        <Logo theme="azul" variant="cartoes" />
      </div>
      <article>
        <span>
          <h1>Mais sobre a Uauh.</h1>
          <p>
            Somos a UAUH uma empresa que nasceu diferente de tudo que você já
            viu, entendemos que é preciso pensar nas pessoas e na maneira como
            elas vivem. Surgimos para oferecer a solução perfeita, através de
            nossa tecnologia, produtos e serviços, levamos até as pessoas uma
            melhor qualidade de vida.
          </p>
        </span>
        <span>
          <h1>Política de Gestão da Qualidade</h1>
          <p>
            A UAUH, administradora de cartões de benefícios, atuando em todo o
            território nacional com foco em ser referencia como agente
            facilitador no processo de pagamentos, utilizando tecnologia
            inovadora e comprometida com o atendimento dos requisitos legais
            aplicáveis e com o aumento da satisfação dos clientes e partes
            interessadas, através de sua Política de Gestão da Qualidade,
            garante a sustentabilidade a respeito a seus clientes, colaboradores
            e fornecedores através do compromisso a melhoria continua do sistema
            de gestão da qualidade e seus processos.
          </p>
        </span>
      </article>
    </section>
  );
};

export default QuemSomosUauhCartoes;
