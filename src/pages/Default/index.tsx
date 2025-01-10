import { Outlet } from "react-router-dom";
import FooterCartoes from "../../components/Footer";

const Default = () => {
  return (
    <>
      <Outlet />
      <FooterCartoes />
    </>
  );
};

export default Default;
