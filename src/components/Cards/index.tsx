import { useEffect, useState } from "react"
import api from "../../services/api"
import Lists from "../Lists"

export interface IJobsProps {
    company_name: string,
    specialty: string,
    salary: number,
    kind_of_work: string,
    tech: string[],
    level: string,
    jobURL: string,
    description: string,
    userId: number,
    id: number
}

interface ICardsProps {
    title: string
}

const Cards = ({ title }: ICardsProps) => {
    const [allJobs, setAllJobs] = useState<IJobsProps[] | []>([])
    const [savedJobs, setSavedJobs] = useState<IJobsProps[] | []>([])

    useEffect(() => {
        async function getAllJobs() {
            try {
                const { data } = await api.get<IJobsProps[]>("/companyJobs")
                setAllJobs(data)
            } catch (error) {
                console.error(error)
            }
        }

        getAllJobs()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    if (title === "Todas as vagas") {
        return <Lists objectArray={allJobs}/>
    } else {
        return <Lists objectArray={savedJobs}/>
    }
}

export default Cards