import React, { createContext, useContext, useEffect, useState } from "react";
import { notifyError, notifySuccess } from "../../toast";
import { IJobsProps } from "../../components/Cards";
import api from "../../services/api";

interface IJobCountextProps {
  children: React.ReactNode;
}

export interface IJobContext {
  allJobs: IJobsProps[];
  savedJobs: IJobsProps[];
  showModal: boolean;
  id: number;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  setDeleteJob: React.Dispatch<React.SetStateAction<boolean>>;
  setID: React.Dispatch<React.SetStateAction<number>>;
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  writtenSearch: IJobsProps[];
}

export const JobContext = createContext<IJobContext>({} as IJobContext);

export const JobProvider = ({ children }: IJobCountextProps) => {
  const [allJobs, setAllJobs] = useState<IJobsProps[] | []>([]);
  const [savedJobs, setSavedJobs] = useState<IJobsProps[] | []>([]);

  const [showModal, setShowModal] = useState<boolean>(false);
  const [deleteJob, setDeleteJob] = useState<boolean>(false);
  const [id, setID] = useState<number>(0);

  const [search, setSearch] = useState("");

  const writtenSearch = allJobs.filter(
    (vacancies) =>
      vacancies.company_name.toLowerCase().includes(search.toLowerCase()) ||
      vacancies.specialty.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    async function getAllJobs() {
      const token = localStorage.getItem("@kenzinhoVagas:accessToken");

      if (token) {
        try {
          const { data } = await api.get<IJobsProps[]>("/companyJobs");

          setAllJobs(data);
        } catch (error) {
          console.error(error);
        }
      }
    }

    getAllJobs();
  }, []);

  useEffect(() => {
    async function getSavedJobs() {
      try {
        const userID = localStorage.getItem("@kenzinhoVagas:id");
        const token = localStorage.getItem("@kenzinhoVagas:accessToken");
        api.defaults.headers.authorization = `Bearer ${token}`;

        const { data } = await api.get<IJobsProps[]>(`/users/${userID}/jobs`);
        setSavedJobs(data);
      } catch (error) {
        console.error(error);
      }
    }

    getSavedJobs();
  }, [savedJobs]);

  useEffect(() => {
    async function deleteSpecificJob() {
      if (deleteJob) {
        try {
          await api.delete(`/jobs/${id}`);
          notifySuccess();
        } catch (error) {
          notifyError();
        }
      }
    }

    deleteSpecificJob();
  }, [deleteJob, id]);

  return (
    <JobContext.Provider
      value={{
        allJobs,
        savedJobs,
        showModal,
        id,
        setShowModal,
        setDeleteJob,
        setID,
        search,
        setSearch,
        writtenSearch,
      }}
    >
      {children}
    </JobContext.Provider>
  );
};
