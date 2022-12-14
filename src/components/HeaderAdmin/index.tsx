import { LinkSecundary } from "../../styles/Links";
import Logo from "../../img/logo.png";
import StyleHeader from "../../styles/HeaderAdmin";

const Header = () => {
  return (
    <StyleHeader>
      <img src={Logo} alt="Logo Kenzinho" />
      <div className="rightHeader">
        <LinkSecundary to={"/"} className="buttonHeaderDesktop">
          Logout
        </LinkSecundary>
      </div>
    </StyleHeader>
  );
};

export default Header;
