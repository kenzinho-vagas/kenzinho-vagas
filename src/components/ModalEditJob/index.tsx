import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext, useEffect, useState } from "react";
import { JobContext, IFormVagas } from "../../contexts/JobContext";
import { INewJobForm } from "../CreateJob";
import { ModalEditStyle } from "../../styles/Modal";
import api from "../../services/api";

const ModalEdit = () => {
    const { NewJob, setEditModal, editId } = useContext(JobContext);
    
    const [job, editJob] = useState<IFormVagas | null>(null)

  const formSchema = yup.object().shape({
    company_name: yup.string().required("Campo obrigátorio"),
    specialty: yup.string().required("Campo obrigátorio"),
    salary: yup.string().required("Campo obrigátorio"),
    kind_of_work: yup.string().required("Campo obrigátorio"),
    tech: yup.string().required("Campo obrigátorio"),
    level: yup.string(),
    jobURL: yup.string(),
    description: yup.string().required("Campo obrigátorio"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<INewJobForm>({
    resolver: yupResolver(formSchema),
  });

  const submitForm = (data: INewJobForm) => {
    NewJob(data);
    };
    
    async function getJob() {
        try {
            const {data} = await api.get<IFormVagas>(`companyJobs/${editId}`)
            console.log(data)
            editJob(data)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        getJob()
    }, [])

  return (
    <div>
      <ModalEditStyle>
        <div className="divForm">
            <button className="btnCloseModal" onClick={() => setEditModal(false)}>X</button>
          <form onSubmit={handleSubmit(submitForm)}>
            <div className="formColumn">
              <label htmlFor="companyName">Nome da empresa</label>
              <input
                value={job?.company_name}
                type="text"
                id="companyName"
                placeholder="Nome da empresa"
                {...register("company_name")}
              />
              <label htmlFor="especiality">Especialidade</label>
                          <input
                              value={job?.specialty}
                type="text"
                id="especiality"
                placeholder="Front-end, Back-end..."
                {...register("specialty")}
              />
              <label htmlFor="type">Tipo de vaga</label>
                          <input
                              value={job?.kind_of_work}
                type="text"
                id="type"
                placeholder="Presencial, Remota..."
                {...register("kind_of_work")}
              />
              <label htmlFor="salary">Salário</label>
                          <input
                              value={job?.salary}
                              type="text" id="salary" placeholder="R$4.500,00" />
              <label htmlFor="tecnology">Tecnologia</label>
                          <input
                type="text"
                id="tecnology"
                placeholder="Ex: React, JavaScript, Html..."
                {...register("tech")}
              />
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
                {...register("description")}
              ></textarea>
              <button type="submit" id="btnSaveJob">
                Editar
              </button>
            </div>
          </form>
        </div>
      </ModalEditStyle>
    </div>
  );
};

export default ModalEdit;
