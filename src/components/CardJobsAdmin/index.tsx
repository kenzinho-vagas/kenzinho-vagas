import Level from "../../img/level.png";
import Type from "../../img/type.png";
import Salary from "../../img/salary.png";
import Company from "../../img/company.png";
import BtnCloseJob from "../../img/closeJob.png";
import { ButtonPrimary } from "../../styles/Buttons";
import { IFormVagas } from '../../contexts/JobContext'

const Card = (elem:IFormVagas) => {
    const salary = Number(elem.salary)
  return (
    <li>
      <button className="btnDeleteJob">
        <img src={BtnCloseJob} alt="Botao excluir vaga" />
      </button>
      <h3> {elem.specialty}</h3>
      <p>
        <img src={Company} alt="Empresa" /> {elem.company_name}
      </p>
      <p>
        <img src={Level} alt="Nivel" />
        Nível: {elem.level}
      </p>
      <p>
        <img src={Type} alt="Tipo" />
        {elem.kind_of_work}
      </p>
      <p>
        <img src={Salary} alt="Salario" />
        {salary.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}
      </p>
      <div className="buttonsJob">
        <ButtonPrimary>Editar</ButtonPrimary>
        <ButtonPrimary>Candidatos</ButtonPrimary>
      </div>
    </li>
  );
};

export default Card;
