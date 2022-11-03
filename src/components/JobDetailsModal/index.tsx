import { useState } from "react";
import { useEffect } from "react";
import { notifyError, notifySuccess } from "../../toast";
import { IJobsProps } from "../Cards";
import api from "../../services/api";


interface IJobDetailsModalProps {
    jobID: number,
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>
}

const JobDetailsModal = ({ jobID, setShowModal }: IJobDetailsModalProps) => {
    const [specificJob, setSpecificJob] = useState<IJobsProps[] | []>([]);
    const [saveJob, setSaveJob] = useState<boolean>(false);

    useEffect(() => {
        async function getSpecificJob() {
            try {
                const { data } = await api.get<IJobsProps[]>(`/companyJobs?id=${jobID}`)
                setSpecificJob(data)
            } catch (error) {
                console.error(error)
            }
        }

        getSpecificJob()
    }, [])

    useEffect(() => {
        async function postSpecificJob() {
            if (saveJob) {
                try {
                    const body = specificJob[0]
                    const userID = localStorage.getItem("@kenzinhoVagas:id");
                    await api.post(`/users/${userID}/jobs`, body)
                    notifySuccess()
                } catch (error) {
                    notifyError()
                }
            }
        }

        postSpecificJob()
    }, [saveJob])

    return (
        <ul>
            {
                specificJob.map((object: IJobsProps) => (
                    <li key={ object.id }>
                        <h3>{ object.specialty }</h3>
                        <ul>
                            {
                                typeof object.tech === "object" && object.tech.map((value, index) => (
                                    <li key={index}>{ value }</li>
                                ))
                            }
                        </ul>
                        <p>{ object.company_name }</p>
                        <p>{ object.level }</p>
                        <p>{ object.kind_of_work }</p>
                        <p>{ object.salary }</p>
                        <p>{ object.description }</p>
                        <button onClick={() => setShowModal(false)}>Fechar</button>
                        <button onClick={() => setSaveJob(true)}>Candidatar</button>
                    </li>
                ))
            }
        </ul>
    )
}

export default JobDetailsModal;