import { DivCard, DivGrey } from "../../styles/Divs";
import { CardText, CardTitle } from "../../styles/Typography";
import Case from "../../img/case.png";
import Wage from "../../img/wage.png";
import Xp from "../../img/xp.png";
import Local from "../../img/localization.png";

const NewJobCards = () => {
  return (
    <DivGrey>
      <h3>NOVAS VAGAS:</h3>
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
          <button className="seeDetails">VER DETALHES</button>
        </DivCard>
      </ul>
    </DivGrey>
  );
};

export default NewJobCards;
