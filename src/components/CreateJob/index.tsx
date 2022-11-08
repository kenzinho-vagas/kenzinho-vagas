import Create from "../../styles/CreateJob";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { JobContext } from "../../contexts/JobContext";
import * as yup from "yup";

export interface INewJobForm {
  company_name: string;
  specialty: string;
  salary: string;
  kind_of_work: string;
  tech: string;
  level: string;
  jobURL: string;
  description: string;
  candidates: [];
}

export interface IEditJobForm {
  company_name?: string;
  specialty?: string;
  salary?: string;
  kind_of_work?: string;
  tech?: string;
  level?: string;
  description?: string;
}

const CreateJob = () => {
  const { NewJob } = useContext(JobContext);
  const formSchema = yup.object().shape({
    company_name: yup.string().required("Campo obrigátorio"),
    specialty: yup.string().required("Campo obrigátorio"),
    salary: yup.string().required("Campo obrigátorio"),
    kind_of_work: yup.string().required("Campo obrigátorio"),
    tech: yup.string().required("Campo obrigátorio"),
    level: yup.string(),
    jobURL: yup.string(),
    description: yup.string().required("Campo obrigátorio"),
    candidates: yup.string(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<INewJobForm>({
    resolver: yupResolver(formSchema),
  });

  const submitForm = (data: INewJobForm) => {
    const tech = data.tech.split(',')
    NewJob(data);
    reset();
  };

  return (
    <Create>
      <div className="divCreate">
        <h3>Criar vaga</h3>
        <div className="divForm">
          <form onSubmit={handleSubmit(submitForm)}>
            <div className="formColumn">
              <label htmlFor="companyName">Nome da empresa</label>
              <input
                type="text"
                id="companyName"
                placeholder="Nome da empresa"
                {...register("company_name")}
              />
              <p>{errors.company_name && errors.company_name.message}</p>
              <label htmlFor="especiality">Especialidade</label>
              <input
                type="text"
                id="especiality"
                placeholder="Front-end, Back-end..."
                {...register("specialty")}
              />
              <p>{errors.specialty && errors.specialty.message}</p>
              <label htmlFor="type">Tipo de vaga</label>
              <input
                type="text"
                id="type"
                placeholder="Presencial, Remota..."
                {...register("kind_of_work")}
              />
              <p>{errors.kind_of_work && errors.kind_of_work.message}</p>
              <label htmlFor="salary">Salário</label>
              <input
                type="currency"
                id="salary"
                placeholder="Somente números"
                inputMode="numeric"
                {...register("salary")}
              />
              <p>{errors.salary && errors.salary.message}</p>
              <label htmlFor="tecnology">Tecnologia</label>
              <input
                type="text"
                id="tecnology"
                placeholder="Ex: React, JavaScript, Html..."
                {...register("tech")}
              />
              <p>{errors.tech && errors.tech.message}</p>
            </div>
            <div className="formColumn">
              <label htmlFor="level">Nível</label>
              <select
                id="level"
                placeholder="Escolha uma opção"
                defaultValue={"default"}
                {...register("level")}
              >
                <option value="default">Selecione uma opção</option>
                <option value="Júnior">Júnior</option>
                <option value="Pleno">Pleno</option>
                <option value="Sênior">Sênior</option>
              </select>
              <p>{errors.level && errors.level.message}</p>
              <label htmlFor="description">Descrição</label>
              <textarea
                id="description"
                cols={30}
                rows={11}
                placeholder="Ex: Atuará em todo o ciclo de vida do sistema (Planejar, arquitetar, desenvolver, testar, implementar, monitorar, documentar, etc.)"
                {...register("description")}
              ></textarea>
              <input
                type="text"
                id="candidates"
                hidden
                value={[]}
                {...register("candidates")}
              />
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
