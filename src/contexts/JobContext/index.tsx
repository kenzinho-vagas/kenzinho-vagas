import { createContext, useEffect, useState } from "react";
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
  jobId: number | null;
  getCandidates: () => void;
  candidates: IFormVagas[];
  setJobId: any;
  setEditModal: any;
  editModal: boolean;
  editId: number | null;
  setEditId: any;
}

export interface ITechs {
  name: string;
}

export interface IFormVagas {
  map(arg0: (elem: IFormVagas) => JSX.Element): import("react").ReactNode;
  filter(arg0: (elem: IFormVagas) => boolean): unknown;
  company_name: string;
  specialty: string;
  salary: string;
  kind_of_work: string;
  tech: ITechs[];
  level: string;
  jobURL: string;
  description: string;
  userId?: number;
  id?: number;
}

export const JobContext = createContext<IJobContext>({} as IJobContext);

export const JobProvider = ({ children }: IJobProvider) => {
  const [jobs, setJob] = useState<IFormVagas | null>(null);
  const [adminJobs, setAdminJobs] = useState<IFormVagas | null>();
  const [jobId, setJobId] = useState(null)
  const [candidates, setCandidates] = useState<IFormVagas[]>([]);
  const [editModal, setEditModal] = useState(false)
  const [editId, setEditId] = useState(null)
  
  async function NewJob(data: INewJobForm) {
    try {
      const response = await api.post("users/1/companyJobs ", data);
      const { jobs: jobResponse, token } = response.data;
      api.defaults.headers.authorization = `Bearer ${token}`;
      setJob(jobResponse);
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

  async function getCandidates() {
    try {
      const { data } = await api.get<IFormVagas []>(`jobs`);
      const job = await api.get<IFormVagas>(`companyJobs/${jobId}`);
      const candidate = data.filter(
        (elem: IFormVagas) =>
          elem.description === job.data.description &&
          elem.jobURL === job.data.jobURL
      );
      setCandidates(candidate);
    } catch (error) {
      console.error(error);
    }
  }


  return (
    <JobContext.Provider value={{ NewJob, jobs, listJobs, adminJobs, jobId, candidates, getCandidates, setJobId, editModal, setEditModal, editId, setEditId }}>
      {children}
    </JobContext.Provider>
  );
};
