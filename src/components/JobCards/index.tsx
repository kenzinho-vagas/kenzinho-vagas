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
      <ul>
        <DivCard>
          <CardTitle>Programador Back-end</CardTitle>
          <div className="cardInfo">
            <img src={Case} alt="trash" />
            <CardText>Nome da Empresa</CardText>
          </div>
          <div className="cardInfo">
            <img src={Xp} alt="trash" />
            <CardText>Nível: Júnior</CardText>
          </div>
          <div className="cardInfo">
            <img src={Local} alt="trash" />
            <CardText>Remoto</CardText>
          </div>
          <div className="cardInfo">
            <img src={Wage} alt="trash" />
            <CardText>R$ 5.000 a R$ 6.000</CardText>
          </div>
          <img src={Trash} alt="trash" className="Trash" />
        </DivCard>
      </ul>
    </DivGrey>
  );
};

export default JobCards;
