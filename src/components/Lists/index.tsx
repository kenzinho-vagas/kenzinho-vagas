import { useState } from "react"
import { IJobsProps } from "../Cards"
import JobDetailsModal from "../JobDetailsModal"

interface IListsProps {
    objectArray: IJobsProps[]
}

const Lists = ({ objectArray }: IListsProps) => {
    const [showModal, setShowModal] = useState<boolean>(false)
    const [id, setID] = useState<number>(0)

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
                            <button onClick={() => {
                                setShowModal(true)
                                setID(object.id)
                            }}>Ver detalhes</button>
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