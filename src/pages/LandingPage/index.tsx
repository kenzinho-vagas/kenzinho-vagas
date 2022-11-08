import { LinkPrimary, LinkSecundary } from "../../styles/Links";
import {
  DivKenzinho,
  DivLanding,
  DivOurNumbers,
  DivAllCompanies,
} from "./style";
import { FooterCopyright, FooterLanding } from "./footer";
import { Link } from "react-router-dom";
import { ImInstagram, ImYoutube } from "react-icons/im";
import { FaFacebookSquare, FaTwitter, FaTiktok } from "react-icons/fa";
import { ControlledCarousel as CarouselNumbers } from "./carrosselNumbers";
import { ControlledCarousel as CarouselCompanies } from "./carrosselCompanies";
import group from "../../img/group.png";
import whykenzinho from "../../img/whykenzinho.png";
import logo from "../../img/logo.png";
import Header from "../../styles/HeaderAdmin";

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
            AS MELHORES VAGAS PARA PROFISSIONAIS E ESTUDANTES DE TECNOLOGIA
          </h1>
          <p className="textLand">
            Cadastre-se e comece sua experiência com a Kenzinho
          </p>
        </div>
      </DivLanding>
      <DivAllCompanies>
        <h2 className="titleLand2">EMPRESAS QUE CONTRATAM COM A KENZINHO</h2>
        <CarouselCompanies />
      </DivAllCompanies>
      <DivOurNumbers>
        <h2 className="titleLand2">NOSSOS NÚMEROS</h2>
        <ul className="listNumbers">
          <div className="mobile">
            <CarouselNumbers />
          </div>

          <li className="desktop">
            <h4>
              <span>+1000</span>
            </h4>
            <h4>OPORTUNIDADES</h4>
          </li>
          <li className="desktop">
            <h4>
              <span>+100</span>
            </h4>
            <h4>EMPRESAS</h4>
          </li>
          <li className="desktop">
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
            <h3 className="content3">
              Aqui você encontra vagas que dão match com o seu perfil, vagas
              filtradas para as tecnologias que você aprendeu!
            </h3>
          </div>
        </div>
        <div className="footer" />
      </DivKenzinho>
      <FooterLanding>
        <div className="footerContent">
          <div className="footer1">
            <div className="logoFooter">
              <img src={logo} alt="" />
              <h4>KENZINHO VAGAS</h4>
            </div>
            <p>+55 11 99999-9999</p>
            <p>Rua Lorem Ipsum - PR 201, 2150 - Km 4, Bairro Simply</p>
            <p>CEP 60000-000</p>
          </div>
          <div className="footer2">
            <h5 className="titleFooter">A KENZINHO</h5>
            <ul>
              <li>
                <Link to={"/"}>Sobre a Kenzinho</Link>
              </li>
              <li>
                <Link to={"/"}>Suporte</Link>
              </li>
              <li>
                <Link to={"/"}>Politicas de Privacidade</Link>
              </li>
              <li>
                <Link to={"/"}>Termos de uso</Link>
              </li>
            </ul>
          </div>
          <div className="footer2">
            <h5 className="titleFooter">PARA VOCÊ</h5>
            <ul>
              <li>
                <Link to={"/"}>Vagas em tecnologia</Link>
              </li>
              <li>
                <Link to={"/register"}>Cadastro para acessar vagas</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="followUs">
          <h5 className="titleFooter"> SIGA A KENZINHO</h5>
          <div className="icons">
            <ImInstagram />
            <FaFacebookSquare />
            <FaTwitter />
            <FaTiktok />
            <ImYoutube />
          </div>
        </div>
      </FooterLanding>
      <FooterCopyright>
        <p>© 2022 - 2022 KenzinhoVagas. - Todos os direitos reservados.</p>
      </FooterCopyright>
    </>
  );
};
