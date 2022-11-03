import Header from "../../styles/HeaderAdmin";
import { LinkPrimary, LinkSecundary } from "../../styles/Links";
import logo from "../../img/logo.png";
import { DivKenzinho, DivLanding, DivOurNumbers } from "./style";
import group from "../../img/group.png";
import whykenzinho from "../../img/whykenzinho.png"

export const LandingPage = () => {
  return (
    <>
      <Header>
        <img src={logo} alt="Logo Kenzinho" />
        <div className="rightHeader">
          <LinkPrimary to={"/"} className="buttonHeaderDesktop">
            Sobre Nós
          </LinkPrimary>
          <LinkSecundary to={"/login"} className="buttonHeaderDesktop">
            Login
          </LinkSecundary>
        </div>
      </Header>
      <DivLanding>
        <div className="div1">
          <img src={group} alt="Pessoas trabalhando" />
        </div>
        <div className="div2">
          <h1 className="titleLand">
            AS MELHORES VAGAS PARA PROFISSIONAIS JÚNIOR DE TECNOLOGIA
          </h1>
          <p>Cadastre-se e comece sua experiência com a Kenzinho</p>
        </div>
      </DivLanding>
      <div>Carrossel</div>
      <DivOurNumbers>
        <h2 className="titleLand2">NOSSOS NÚMEROS</h2>
        <ul className="listNumbers">
          <li>
            <h4>
              <span>+1000</span>
            </h4>
            <h4>OPORTUNIDADES</h4>
          </li>
          <li>
            <h4>
              <span>+100</span>
            </h4>
            <h4>EMPRESAS</h4>
          </li>
          <li>
            <h4>
              <span>+10.000</span>
            </h4>
            <h4>CANDIDATOS</h4>
          </li>
        </ul>
      </DivOurNumbers>
      <DivKenzinho>
        <h2 className="titleDiv3">PORQUE USAR A KENZINHO?</h2>
        <div className="whyKenzinho">
      <div className="divkenzie1">
          <img src={whykenzinho} alt="Pessoas trabalhando" />
        </div>
        <div className="divkenzie2">
          <h3 className="content3">Aqui você encontra vagas que dão match com o seu perfil, vagas filtradas para as tecnologias que você aprendeu!</h3>
        </div>
        </div>
      </DivKenzinho>
    </>
  );
};
