import { createContext, useState } from "react";
import { INewJobForm } from "../../components/CreateJob";
import { api } from "../../services/api";

interface IJobProvider {
  children: React.ReactNode;
}

interface IJobContext {
  jobs: IFormVagas | null;
  NewJob: (data: INewJobForm) => void;
}

export interface ITechs {
  name: string;
}

interface IFormVagas {
  company_name: string;
  specialty: string;
  salary: string;
  kind_of_work: string;
  tech: ITechs[];
  level: string;
  jobURL: string;
  description: string;
}

export const JobContext = createContext<IJobContext>({} as IJobContext);

export const JobProvider = ({ children }: IJobProvider) => {
  const [jobs, setJob] = useState<IFormVagas | null>(null);

  async function NewJob(data: INewJobForm) {
    try {
      const response = await api.post("users/1/companyJobs ", data);
      console.log(response);
      const { jobs: jobResponse, token } = response.data;
      api.defaults.headers.authorization = `Bearer ${token}`;
      setJob(jobResponse);
      console.log(jobResponse);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <JobContext.Provider value={{ NewJob, jobs }}>
      {children}
    </JobContext.Provider>
  );
};
