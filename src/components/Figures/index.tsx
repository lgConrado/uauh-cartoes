interface IFigure {
    theme: "azul" | "branca" | "laranja";
  }
  
  const Figure = ({ theme }: IFigure) => {
    switch (theme) {
      case "azul":
        return <div className="figure figure--azul" />;
      case "branca":
        return <div className="figure figure--branca" />;
      case "laranja":
        return <div className="figure figure--laranja" />;
    }
  };
  
  export default Figure;
  