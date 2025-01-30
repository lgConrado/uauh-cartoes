import Logo from "../Logo";

const FooterCartoes = () => {
  return (
    <footer className="footer footer--c">
      <div className="footer__content">
        <div className="footer__content__logo footer--c__logo">
          <Logo variant="cartoes" theme="azul" />
        </div>
        <div className="footer__content__lists">
          <div className="footer__content__list">
            <h4 className="heading--c--quaternary heading--c--quaternary--c">
              Sobre nós
            </h4>
            <ul>
                <a
                  href="/politica-privacidade"
                  className="link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <li className="text--cinza">Política de privacidade</li>
                </a>
              <a
                href="/quem-somos"
                className="link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <li className="text--cinza">Quem somos?</li>
              </a>
            </ul>
          </div>
          <div className="footer__content__list">
            <h4 className="heading--c--quaternary heading--c--quaternary--c">
              Serviços
            </h4>
            <ul>
              <a href="/#banner--principal" className="link">
                <li>Cartões benefícios</li>
              </a>
              <a href="https://uauhbank.com.br/" className="link">
                <li>Uauh Bank</li>
              </a>
            </ul>
          </div>
          <div className="footer__content__list">
            <h4 className="heading--c--quaternary heading--c--quaternary--c">
              Navegação
            </h4>
            <ul>
              <a href="#portais" className="link">
                <li>Acesso aos portais</li>
              </a>
              <a href="#app" className="link">
                <li>App</li>
              </a>
              <a href="#beneficios" className="link">
                <li>Benefícios</li>
              </a>
              <a href="#rede" className="link">
                <li>Rede de aceitação</li>
              </a>
            </ul>
          </div>
          <div className="footer__content__list">
            <h4 className="heading--c--quaternary heading--c--quaternary--c">
              Fale conosco
            </h4>
            <ul>
              <li className="text--cinza">0800 361 9000</li>
              <li className="text--cinza">+55 (44) 9.9185-8651</li>
              <li className="text--cinza">contato@uauh.com.br</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer__banner footer--c__banner">
        Copyright &copy; 2025. Todos os direitos reservados.
        <br />
        <b>MH Administradora de Cartões Ltda - CNPJ: 34.180.727/0001-10</b>
      </div>
    </footer>
  );
};

export default FooterCartoes;
