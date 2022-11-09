import { LinkPrimary, LinkSecundary } from "../../styles/Links";
import logo from "../../img/logo.png";
import Header from "../../styles/Header";
import { About } from "../../styles/AboutUs/style";

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
      <About>
        <div className="divUs">
          <img
            src="https://ca.slack-edge.com/TQZR39SET-U03GKQ6NN9X-c3986ee4da0f-512"
            alt="Luiza"
          />
          <img
            src="https://ca.slack-edge.com/TQZR39SET-U03F5PBCN48-7bed12321a89-512"
            alt="Luan"
          />

          <img
            src="https://ca.slack-edge.com/TQZR39SET-U03E9DWR7BQ-972981e2d260-512"
            alt="Neto"
          />

          <img
            src="https://ca.slack-edge.com/TQZR39SET-U03DF2RNFDM-b739c236b678-512"
            alt="Gabriela"
          />

          <img
            src="https://ca.slack-edge.com/TQZR39SET-U03CJMKLF9N-b381177e2ad5-512"
            alt="Vinicius"
          />

          <img
            src="https://ca.slack-edge.com/TQZR39SET-U03EJBM7LGL-288bf6a1ea22-512"
            alt="Daniel"
          />

          <img
            src="https://ca.slack-edge.com/TQZR39SET-U03FFUSG32S-5792ca1b147c-512"
            alt="Natalia"
          />
        </div>
        <div className="textAbout">
          <h2>NOSSO TIME</h2>
          <h3>
            Nosso objetivo foi criar um site para estudantes e profissionais da
            área de tecnologia, para você se cadastrar em vagas que combinam com
            seu perfil.
          </h3>
          <h3>
            Nossa equipe trabalha duro para proporcionar uma excelente
            experiência para o usuário!
          </h3>
          <ul>
            <li>Luiza Barros - Tech Lider</li>
            <li>Luan Rodrigues - Scrum Master</li>
            <li>Neto Milfort - Product Owner</li>
            <li>Gabriela Marchiori - Quality Assurance</li>
            <li>Daniel Alves - Quality Assurance </li>
            <li>Vinicius Pacheco - Quality Assurance</li>
            <li>Natalia Pereira - Quality Assurance </li>
          </ul>
        </div>
      </About>
    </>
  );
};
