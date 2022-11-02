import Create from "../../styles/CreateJob";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

interface IFormVagas {
  company_name: string;
  especiality: string;
  salary: string;
  kind_of_work: string;
  tech: string;
  level: string;
  jobURL: string;
  description: string;
}

const CreateJob = () => {
  const { register, handleSubmit } = useForm();

  const formSchema = yup.object().shape({
    company_name: yup.string().required("Campo obrigátorio"),
    especiality: yup.string().required("Campo obrigátorio"),
    salary: yup.string().required("Campo obrigátorio"),
    kind_of_work: yup.string().required("Campo obrigátorio"),
    tech: yup.string().required("Campo obrigátorio"),
    level: yup.string().required("Campo obrigátorio"),
    jobURL: yup.string().required("Campo obrigátorio"),
    description: yup.string().required("Campo obrigátorio"),

  });

  return (
    <Create>
      <div className="divCreate">
        <h3>Criar vaga</h3>
        <div className="divForm">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="formColumn">
              <label htmlFor="companyName">Nome da empresa</label>
              <input
                type="text"
                id="companyName"
                placeholder="Nome da empresa"
              />
              <label htmlFor="especiality">Especialidade</label>
              <input
                type="text"
                id="especiality"
                placeholder="Front-end, Back-end..."
              />
              <label htmlFor="type">Tipo de vaga</label>
              <input
                type="text"
                id="type"
                placeholder="Presencial, Remota..."
              />
              <label htmlFor="salary">Salário</label>
              <input type="text" id="salary" placeholder="R$4.500,00" />
              <label htmlFor="tecnology">Tecnologia</label>
              <input
                type="text"
                id="tecnology"
                placeholder="Ex: React, JavaScript, Html..."
              />
            </div>
            <div className="formColumn">
              <label htmlFor="level">Nível</label>
              <select id="level" placeholder="Escolha uma opção">
                <option value="" disabled selected>
                  Selecione uma opção
                </option>
                <option value="junior">Júnior</option>
                <option value="pleno">Pleno</option>
                <option value="senior">Sênior</option>
              </select>
              <label htmlFor="description">Descrição</label>
              <textarea
                id="description"
                cols={30}
                rows={11}
                placeholder="Ex: Atuará em todo o ciclo de vida do sistema (Planejar, arquitetar, desenvolver, testar, implementar, monitorar, documentar, etc.)"
              ></textarea>
              <button type="submit" id="btnSaveJob">
                Criar
              </button>
            </div>
          </form>
        </div>
      </div>
    </Create>
  );
};

export default CreateJob;
