import { LinkPrimary, LinkSecundary } from "../../styles/Links";
import logo from "../../img/logo.png";
import Header from "../../styles/Header";

export const AboutUs = () => {
  return (
    <>
      <Header>
        <img src={logo} alt="Logo Kenzinho" />
        <div className="rightHeader">
          <LinkPrimary to={"/login"} className="buttonHeaderDesktop">
            Login
          </LinkPrimary>
          <LinkSecundary to={"/"} className="buttonHeaderDesktop">
            Inicio
          </LinkSecundary>
        </div>
      </Header>
    </>
  );
};
