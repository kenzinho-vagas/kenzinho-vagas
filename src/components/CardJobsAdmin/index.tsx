import Level from "../../img/level.png";
import Type from "../../img/type.png";
import Salary from "../../img/salary.png";
import Company from "../../img/company.png";
import BtnCloseJob from "../../img/closeJob.png";
import { ButtonPurple } from "../../styles/Buttons";
import { IFormVagas, JobContext } from "../../contexts/JobContext";
import { useContext } from "react";
import { v4 as uuid } from "uuid";

const Card = (elem: IFormVagas) => {
  const { setJobId, setEditModal, setEditId, DelJob, getCandidates } =
    useContext(JobContext);

  const salary = Number(elem.salary);
  return (
    <li
      key={uuid()}
      onClick={() => {
        setJobId(elem.id);
        getCandidates();
      }}
    >
      <button
        className="btnDeleteJob"
        onClick={() => {
          DelJob(elem.id);
        }}
      >
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
        {salary.toLocaleString("pt-br", { style: "currency", currency: "BRL" })}
      </p>
      <div className="buttonsJob">
        <ButtonPurple
          onClick={() => {
            setEditModal(true);
            setEditId(elem.id);
          }}
        >
          Editar
        </ButtonPurple>
        <ButtonPurple
          onClick={(e) => {
            setJobId(elem.id);
          }}
        >
          Candidatos
        </ButtonPurple>
      </div>
    </li>
  );
};

export default Card;
