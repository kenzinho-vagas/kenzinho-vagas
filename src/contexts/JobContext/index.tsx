import { createContext, useState } from "react";
import { IEditJobForm, INewJobForm } from "../../components/CreateJob";
import api from "../../services/api";

interface IJobProvider {
  children: React.ReactNode;
}

interface IJobContext {
  NewJob: (data: INewJobForm) => void;
  EditJob: (data: INewJobForm) => void;
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

export interface IFormVagas {
  map(arg0: (elem: IFormVagas) => JSX.Element): import("react").ReactNode;
  filter(arg0: (elem: IFormVagas) => boolean): unknown;
  company_name: string;
  specialty: string;
  salary: string;
  kind_of_work: string;
  tech: [];
  level: string;
  jobURL: string;
  description: string;
  candidates: [];
  id?: number;
}

interface PatchJob {
  tech: [];
  candidates: [];
  userId?: number;
  id?: number;
}

export const JobContext = createContext<IJobContext>({} as IJobContext);

export const JobProvider = ({ children }: IJobProvider) => {
  const [adminJobs, setAdminJobs] = useState<IFormVagas | null>();
  const [jobId, setJobId] = useState(null);
  const [candidates, setCandidates] = useState<IFormVagas[]>([]);
  const [editModal, setEditModal] = useState(false);
  const [editId, setEditId] = useState(null);

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
      listJobs()

      const DataPath = {
        tech: techsJobCorrect,
        candidates: candidatesCorrect,
      };
      await api.patch<PatchJob | null>(`companyJobs/${id}`, DataPath);
    } catch (error) {
      console.log(error);
    }
  }

  async function EditJob(data: IEditJobForm) {
    if (data.company_name === "") {
      delete data.company_name;
    }
    if (data.level === "") {
      delete data.level;
    }
    if (data.specialty === "") {
      delete data.specialty;
    }
    if (data.salary === "") {
      delete data.salary;
    }
    if (data.level === "") {
      delete data.level;
    }
    if (data.kind_of_work === "") {
      delete data.kind_of_work;
    }
    if (data.description === "") {
      delete data.description;
    }
    console.log(data);
    try {
      const response = await api.patch(`companyJobs/${editId} `, data);
      const token = localStorage.getItem("@kenzinhoVagas:accessToken");
      api.defaults.headers.authorization = `Bearer ${token}`;
      const techsJob = response.data.tech.split(" ").join("");
      const techsJobCorrect = techsJob.split(",");
      const candidatesCorrect = response.data.candidates.split("");
      listJobs()

      const DataPath = {
        tech: techsJobCorrect,
        candidates: candidatesCorrect,
      };
      await api.patch<PatchJob | null>(`companyJobs/${editId}`, DataPath);
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
      const { data } = await api.get<IFormVagas[]>(`jobs`);
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
    <JobContext.Provider
      value={{
        NewJob,
        listJobs,
        adminJobs,
        jobId,
        candidates,
        getCandidates,
        setJobId,
        editModal,
        setEditModal,
        editId,
        setEditId,
        EditJob,
      }}
    >
      {children}
    </JobContext.Provider>
  );
};
