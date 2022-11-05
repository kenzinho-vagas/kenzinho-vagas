import { useContext, useState } from "react";
import { JobContext } from "../../contexts/JobContextDU";
import Lists from "../Lists";

export interface IJobsProps {
  company_name: string;
  specialty: string;
  salary: number;
  kind_of_work: string;
  tech: string[];
  level: string;
  jobURL: string;
  description: string;
  userId: number;
  id: number;
}

interface ICardsProps {
  title: string;
}

const Cards = ({ title }: ICardsProps) => {
  const { savedJobs, ListFiltred, allJobs, teste } = useContext(JobContext);

  const [vazio, setVazio] = useState<[]>([]);

  return title === "Todas as vagas" ? (
    teste === true ? (
      ListFiltred[0] !== undefined ? (
        <Lists objectArray={ListFiltred} title={title} />
      ) : (
        // console.log("deu certo pra caralho")
        <Lists objectArray={vazio} title={title} />
      )
    ) : (
      <Lists objectArray={allJobs} title={title} />
    )
  ) : (
    <Lists objectArray={savedJobs} title={title} />
  );

  // return title === "Todas as vagas" ? (
  //   ListFiltred[0] !== undefined ? (
  //     <Lists objectArray={ListFiltred} title={title} />
  //   ) : (
  //     <Lists objectArray={allJobs} title={title} />
  //   )
  // ) : (
  //   <Lists objectArray={savedJobs} title={title} />
  // );

  // return title === "Todas as vagas" ? (
  //   <Lists objectArray={writtenSearch} title={title} />
  // ) : (
  //   <Lists objectArray={savedJobs} title={title} />
  // );
};

export default Cards;
