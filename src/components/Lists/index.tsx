import { useEffect, useState } from "react"
import { notifyError, notifySuccess } from "../../toast";
import { IJobsProps } from "../Cards"
import { LiCard } from "../../styles/Divs";
import { CardText, CardTitle } from "../../styles/Typography";
import JobDetailsModal from "../JobDetailsModal"
import Case from "../../img/case.png";
import Wage from "../../img/wage.png";
import Xp from "../../img/xp.png";
import Local from "../../img/localization.png";
import Trash from "../../img/d44a483c04e31fce85c33bbac3d611ba.png";
import { api } from "../../services/api";


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
        <div className="containerCards">
            <ul className="cardList">
                {
                    objectArray.map((object: IJobsProps) => (
                        <LiCard key={ object.id }>
                            <CardTitle>Programador {object.specialty }</CardTitle>

                            <div className="cardInfo">
                                <img src={ Case } alt="case" />
                                <CardText>{ object.company_name }</CardText>
                            </div>
                            
                            <div className="cardInfo">
                                <img src={ Xp } alt="xp" />
                                <CardText>{ object.level }</CardText>
                            </div>
                            
                            <div className="cardInfo">
                                <img src={ Local } alt="local" />
                                <CardText>{ object.kind_of_work }</CardText>
                            </div>
                            
                            <div className="cardInfo">
                                <img src={ Wage } alt="wage" />
                                <CardText>{ object.salary }</CardText>
                            </div>

                            {
                                title === "Todas as vagas" 
                                ? (
                                    <button onClick={() => {
                                        setShowModal(true)
                                        setID(object.id)
                                    }} 
                                    type="button" 
                                    className="seeDetails">Ver detalhes</button>
                                  )
                                : (
                                    <img 
                                    src={Trash}
                                    alt="Trash"
                                    onClick={() => {
                                        setDeleteJob(true)
                                        setID(object.id)
                                    }}/>
                                  )
                            }
                        </LiCard>
                    ))
                }
            </ul>

            {
                showModal && <JobDetailsModal 
                jobID={ id }
                setShowModal={setShowModal}/>
            }
        </div>
    )
}

export default Lists