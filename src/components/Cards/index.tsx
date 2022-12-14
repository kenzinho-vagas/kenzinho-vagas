import { useContext, useState } from "react";
import { JobContext } from "../../contexts/JobContextDU";
import Lists from "../Lists";
import NoVacanciesFound from "../NoVacanciesFound";

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
  id?: number;
}

interface ICardsProps {
  title: string;
}

const Cards = ({ title }: ICardsProps) => {
  const { savedJobs, ListFiltred, allJobs, filterValidation } =
    useContext(JobContext);

  return title === "Todas as vagas" ? (
    filterValidation === true ? (
      ListFiltred[0] !== undefined ? (
        <Lists objectArray={ListFiltred} title={title} />
      ) : (
        <NoVacanciesFound />
      )
    ) : (
      <Lists objectArray={allJobs} title={title} />
    )
  ) : (
    <Lists objectArray={savedJobs} title={title} />
  );
};

export default Cards;
