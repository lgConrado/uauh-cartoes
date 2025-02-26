import logo_cartoes_azul from "../../assets/logo-azul-cartoes.svg";
import logo_cartoes_branca from "../../assets/logo-branca-cartoes.svg";

interface ILogo {
  variant: "bank" | "cartoes";
  theme: "azul" | "azul-claro" | "branca";
}

const Logo = ({ variant, theme }: ILogo) => {
  switch (variant) {
    case "cartoes":
      switch (theme) {
        case "azul":
          return (
            <a href="/">
              <img
                className="logo"
                src={logo_cartoes_azul}
                alt="Logo Uauh Cartões"
              />
            </a>
          );
        case "branca":
          return (
            //<a href="/">
              <img
                className="logo"
                src={logo_cartoes_branca}
                alt="Logo Uauh Cartões"
              />
            //</a>
          );
      }
  }
};

export default Logo;
