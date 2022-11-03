import { createContext, useState } from "react";
import { INewJobForm } from "../../components/CreateJob";
import api from "../../services/api";

interface IJobProvider {
  children: React.ReactNode;
}

interface IJobContext {
  jobs: IFormVagas | null;
  NewJob: (data: INewJobForm) => void;
  listJobs: () => void;
  adminJobs: IFormVagas | null | undefined;
}

export interface IFormVagas {
  map(arg0: (elem: IFormVagas) => JSX.Element): import("react").ReactNode;
  company_name: string;
  specialty: string;
  salary: string;
  kind_of_work: string;
  tech: [];
  level: string;
  jobURL: string;
  description: string;
  candidates: [];
}

interface PatchJob {
  tech: [];
  candidates: [];
}

export const JobContext = createContext<IJobContext>({} as IJobContext);

export const JobProvider = ({ children }: IJobProvider) => {
  const [jobs, setJob] = useState<IFormVagas | null>(null);
  const [adminJobs, setAdminJobs] = useState<IFormVagas | null>();

  async function NewJob(data: INewJobForm) {
    try {
      const response = await api.post("users/1/companyJobs ", data);
      const id = response.data.id;
      console.log(id);
      const token = localStorage.getItem("@kenzinhoVagas:accessToken");
      console.log("ResponseData", response.data);
      console.log("Response", response);
      api.defaults.headers.authorization = `Bearer ${token}`;
      const techsJob = response.data.tech.split(" ").join("");
      const techsJobCorrect = techsJob.split(",");
      const candidatesCorrect = response.data.candidates.split("");
      setJob(response.data);

      const DataPath = {
        tech: techsJobCorrect,
        candidates: candidatesCorrect,
      };
      await api.patch<PatchJob | null>(`companyJobs/${id}`, DataPath);
    } catch (error) {
      console.log(error);
    }
  }

  async function listJobs() {
    try {
      const { data } = await api.get<IFormVagas>("/companyJobs");
      setAdminJobs(data);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <JobContext.Provider value={{ NewJob, jobs, listJobs, adminJobs }}>
      {children}
    </JobContext.Provider>
  );
};
