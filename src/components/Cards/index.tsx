import { useContext } from "react";
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
  id?: number;
}

interface ICardsProps {
  title: string;
}

const Cards = ({ title }: ICardsProps) => {
  const { savedJobs, writtenSearch } = useContext(JobContext);

  return title === "Todas as vagas" ? (
    <Lists objectArray={writtenSearch} title={title} />
  ) : (
    <Lists objectArray={savedJobs} title={title} />
  );
};

export default Cards;
