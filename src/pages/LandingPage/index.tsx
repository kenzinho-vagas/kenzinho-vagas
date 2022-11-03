import Header from "../../styles/HeaderAdmin";
import { LinkPrimary, LinkSecundary } from "../../styles/Links";
import logo from "../../img/logo.png"
import { DivLanding } from "./style";



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
         <h2>imagem</h2>  
        </div>
        <div className="div2">
            <h1 className="titleLand">AS MELHORES VAGAS PARA PROFISSIONAIS JÚNIOR DE TECNOLOGIA</h1>
            <p>Cadastre-se e comece sua experiência com a Kenzinho</p>
        </div>
    
     </DivLanding>
    </>
  );
};
