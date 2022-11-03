import { DivCard, DivGrey } from "../../styles/Divs";
import { CardText, CardTitle } from "../../styles/Typography";
import Trash from "../../img/d44a483c04e31fce85c33bbac3d611ba.png";
import Case from "../../img/case.png";
import Wage from "../../img/wage.png";
import Xp from "../../img/xp.png";
import Local from "../../img/localization.png";

const JobCards = () => {
  return (
    <DivGrey>
    <h3>SUAS VAGAS:</h3>
    <div className="cards">
      <div className="containerCards">
        <ul className="cardList">
          <DivCard>
            <CardTitle>Programador Back-end</CardTitle>
            <div className="cardInfo">
              <img src={Case} alt="case" />
              <CardText>Nome da Empresa</CardText>
            </div>
            <div className="cardInfo">
              <img src={Xp} alt="xp" />
              <CardText>Nível: Júnior</CardText>
            </div>
            <div className="cardInfo">
              <img src={Local} alt="local" />
              <CardText>Remoto</CardText>
            </div>
            <div className="cardInfo">
              <img src={Wage} alt="wage" />
              <CardText>R$ 5.000 a R$ 6.000</CardText>
            </div>
            <img src={Trash} alt="Trash" className="trash" />
          </DivCard>
          
        </ul>
      </div>
    </div>
  </DivGrey>
  );
};

export default JobCards;
