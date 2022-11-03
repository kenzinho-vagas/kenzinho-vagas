import { createContext, useEffect, useState } from "react";
import { notifyError, notifySuccess } from "../../toast";
import { IJobsProps } from "../../components/Cards";
import api from "../../services/api";

interface IJobCountextProps {
    children: React.ReactNode;
}

interface IJobContextProps {
    allJobs: IJobsProps[],
    savedJobs: IJobsProps[],
    showModal: boolean,
    id: number, 
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>, 
    setDeleteJob: React.Dispatch<React.SetStateAction<boolean>>, 
    setID: React.Dispatch<React.SetStateAction<number>>
}

export const JobContext = createContext<IJobContextProps>({} as IJobContextProps) 

export const JobProvider = ({children}: IJobCountextProps) => {
    const [allJobs, setAllJobs] = useState<IJobsProps[] | []>([]);
    const [savedJobs, setSavedJobs] = useState<IJobsProps[] | []>([]);
    const [user, setUser] = useState<{level: string}>({level: "Júnior"}); // mudar

    const [showModal, setShowModal] = useState<boolean>(false);
    const [deleteJob, setDeleteJob] = useState<boolean>(false);
    const [id, setID] = useState<number>(0);

    useEffect(() => {
        async function getAllJobs() {
            try {
                const { data } = await api.get<IJobsProps[]>("/companyJobs")

                const filteredData = data.filter((object: IJobsProps) => object.level === user.level)
                setAllJobs(filteredData)

            } catch (error) {
                console.error(error)
            }
        }

        getAllJobs()
    }, [allJobs])

    useEffect(() => {
        async function getSavedJobs() {
            try {
                const userID = localStorage.getItem("@kenzinhoVagas:userID");
                const token = localStorage.getItem("@kenzinhoVagas:accessToken")
                api.defaults.headers.authorization = `Bearer ${token}`

                const { data } = await api.get<IJobsProps[]>(`/users/${userID}/jobs`)
                setSavedJobs(data)

            } catch (error) {
                console.error(error)
            }
        }

        getSavedJobs()
    }, [savedJobs])

    useEffect(() => {
        async function deleteSpecificJob() {
            if (deleteJob) {
                try {
                    await api.delete(`/jobs/${id}`)
                    notifySuccess()
                } catch (error) {
                    notifyError()
                }
            }
        }

        deleteSpecificJob()
    }, [deleteJob, id])

    return (
        <JobContext.Provider value={{ allJobs, savedJobs, showModal, id, setShowModal, setDeleteJob, setID }}>
            {children}
        </JobContext.Provider>
    )
}