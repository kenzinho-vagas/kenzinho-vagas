import React, { createContext, useEffect, useState } from "react";
import { notifyError, notifySuccess } from "../../toast";
import { IJobsProps } from "../../components/Cards";
import api from "../../services/api";
import { AuthContext } from "../AuthContext";
import { useContext } from "react";
import { IFormVagas } from "../../contexts/JobContext";

interface IJobCountextProps {
  children: React.ReactNode;
}

export interface IJobContext {
  allJobs: IJobsProps[];
  savedJobs: IJobsProps[];
  setSavedJobs: React.Dispatch<React.SetStateAction<IJobsProps[]>>;
  showModal: boolean;
  id: number | undefined;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  setDeleteJob: React.Dispatch<React.SetStateAction<boolean>>;
  ListFiltred: IJobsProps[] | [];
  filterSelect: (object: IFilterObjectUser) => void;
  filterValidation: boolean;
  writtenSearch: (search: string) => void;
  setID: React.Dispatch<React.SetStateAction<number | undefined>>;
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  saveJob: boolean;
  setSaveJob: React.Dispatch<React.SetStateAction<boolean>>;
  setSpecificJob: React.Dispatch<React.SetStateAction<IJobsProps[] | []>>;
  specificJob: IJobsProps[] | [];
  deleteSpecificJob: (id: number | undefined) => void;
}

interface IFilterObjectUser {
  tech: string;
  salary: string;
  type: string;
}

export const JobContext = createContext<IJobContext>({} as IJobContext);

export const JobProvider = ({ children }: IJobCountextProps) => {
  const [allJobs, setAllJobs] = useState<IJobsProps[] | []>([]);
  const [savedJobs, setSavedJobs] = useState<IJobsProps[] | []>([]);
  const { loading } = useContext(AuthContext);

  const [showModal, setShowModal] = useState<boolean>(false);
  const [deleteJob, setDeleteJob] = useState<boolean>(false);
  const [id, setID] = useState<number | undefined>(0);

  const [search, setSearch] = useState("");

  const [ListFiltred, setListFiltred] = useState<IJobsProps[] | []>([]);
  const [filterValidation, setFilterValidation] = useState(false);

  const [saveJob, setSaveJob] = useState<boolean>(false);
  const [specificJob, setSpecificJob] = useState<IJobsProps[] | []>([]);

  useEffect(() => {
    async function postSpecificJob() {
      if (saveJob) {
        try {
          const body = specificJob[0];
          
          if (body.id) {
            delete body.id;
          }
          const userID = localStorage.getItem("@kenzinhoVagas:id");
          body.userId = Number(userID);
          const { data } = await api.get<IFormVagas[]>(`/users/${userID}/jobs`);
          
          const alreadyExist = data.findIndex(
            (elem: any) =>
              elem.company_name === body.company_name &&
              elem.kind_of_work === body.kind_of_work &&
              elem.salary === body.salary &&
              elem.specialty === body.specialty
          );
          
          if (alreadyExist === -1) {
            await api.post(`/users/${userID}/jobs`, body);
            notifySuccess();
            getSavedJobs();
            setSaveJob(false);
          } else {
            notifyError();
            
          }
        } catch (error) {
          console.error(error);
        }
      }
    }
    postSpecificJob();
  }, [saveJob]);


  const writtenSearch = (search: string) => {
    const resultSearch = allJobs.filter(
      (vacancies) =>
        vacancies.company_name
          .toLowerCase()
          .split(" ")
          .filter((value) => value !== "")
          .join("")
          .includes(
            search
              .toLowerCase()
              .split(" ")
              .filter((value) => value !== "")
              .join("")
          ) ||
        vacancies.specialty
          .toLowerCase()
          .split(" ")
          .filter((value) => value !== "")
          .join("")
          .includes(
            search
              .toLowerCase()
              .split(" ")
              .filter((value) => value !== "")
              .join("")
          )
    );
    setListFiltred(resultSearch);
    setFilterValidation(true);
  };

  const filterSelect = (object: IFilterObjectUser) => {
    if (object.salary === "" && object.type === "") {
      const resultFiltred = allJobs.filter((element) => {
        return element.tech.join(",").includes(object.tech) === true;
      });

      setListFiltred(resultFiltred);
    } else if (object.tech === "" && object.type === "") {
      const resultFiltred = allJobs.filter((element) => {
        return (
          +element.salary >= +object.salary &&
          +element.salary <= +object.salary + 5000
        );
      });

      setListFiltred(resultFiltred);
    } else if (object.tech === "" && object.salary === "") {
      const resultFiltred = allJobs.filter((element) => {
        return element.kind_of_work === object.type;
      });

      setListFiltred(resultFiltred);
    } else if (object.tech === "") {
      const resultFiltred = allJobs.filter((element) => {
        return (
          +element.salary >= +object.salary &&
          +element.salary <= +object.salary + 5000 &&
          element.kind_of_work === object.type
        );
      });

      setListFiltred(resultFiltred);
    } else if (object.salary === "") {
      const resultFiltred = allJobs.filter((element) => {
        return (
          element.tech.join(",").includes(object.tech) === true &&
          element.kind_of_work === object.type
        );
      });

      setListFiltred(resultFiltred);
    } else if (object.type === "") {
      const resultFiltred = allJobs.filter((element) => {
        return (
          +element.salary >= +object.salary &&
          +element.salary <= +object.salary + 5000 &&
          element.tech.join(",").includes(object.tech) === true
        );
      });

      setListFiltred(resultFiltred);
    } else {
      const resultFiltred = allJobs.filter((element) => {
        return (
          +element.salary >= +object.salary &&
          +element.salary <= +object.salary + 5000 &&
          element.tech.join(",").includes(object.tech) === true &&
          element.kind_of_work === object.type
        );
      });

      setListFiltred(resultFiltred);
    }

    return setFilterValidation(true);
  };

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
  }, [loading]);

  async function getSavedJobs() {
    try {
      const userID = localStorage.getItem("@kenzinhoVagas:id");
      const token = localStorage.getItem("@kenzinhoVagas:accessToken");
      api.defaults.headers.authorization = `Bearer ${token}`;

      const { data } = await api.get<IJobsProps[]>(`/users/${userID}/jobs`);
      console.log("67");
      setSavedJobs(data);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    getSavedJobs();
  }, [loading]);

  async function deleteSpecificJob(id: number | undefined) {
    try {
      await api.delete(`/jobs/${id}`);
      notifySuccess();
      getSavedJobs();
      const delJob = savedJobs.filter((job) => job.id !== id);
      setSavedJobs(delJob);
    } catch (error) {
      notifyError();
    }
  }

  return (
    <JobContext.Provider
      value={{
        allJobs,
        savedJobs,
        setSavedJobs,
        showModal,
        id,
        setShowModal,
        setDeleteJob,
        setID,
        ListFiltred,
        filterSelect,
        filterValidation,
        writtenSearch,
        search,
        setSearch,
        saveJob,
        setSaveJob,
        setSpecificJob,
        specificJob,
        deleteSpecificJob,
      }}
    >
      {children}
    </JobContext.Provider>
  );
};
