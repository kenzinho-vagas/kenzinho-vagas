import { useEffect, useState } from "react"
import { toast } from "react-toastify";
import { IJobsProps } from "../Cards"
import JobDetailsModal from "../JobDetailsModal"
import api from "../../services/api"
import { notifyError, notifySuccess } from "../../toast";

interface IListsProps {
    objectArray: IJobsProps[],
    title: string
}

const Lists = ({ objectArray, title }: IListsProps) => {
    const [showModal, setShowModal] = useState<boolean>(false)
    const [deleteJob, setDeleteJob] = useState<boolean>(false)
    const [id, setID] = useState<number>(0)

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
        <>
            <ul>
                {
                    objectArray.map((object: IJobsProps) => (
                        <li key={ object.id }>
                            <h3>{ object.specialty }</h3>
                            <p>{ object.company_name }</p>
                            <p>{ object.level }</p>
                            <p>{ object.kind_of_work }</p>
                            <p>{ object.salary }</p>
                            {
                                title === "Todas as vagas" 
                                ? (
                                    <button onClick={() => {
                                        setShowModal(true)
                                        setID(object.id)
                                    }} type="button">Ver detalhes</button>
                                )
                                : <button 
                                  type="button"
                                  onClick={() => {
                                    setDeleteJob(true)
                                    setID(object.id)
                                  }}>Excluir</button>
                            }
                        </li>
                    ))
                }
            </ul>

            {
                showModal && <JobDetailsModal 
                jobID={ id }
                setShowModal={setShowModal}/>
            }
        </>
    )
}

export default Lists