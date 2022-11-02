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
    const [user, setUser] = useState<{level: string}>({level: "Júnior"})

    useEffect(() => {
        async function getAllJobs() {
            try {
                const { data } = await api.get<IJobsProps[]>("/companyJobs")

                const filteredData = data.filter(object => object.level === user.level)
                setAllJobs(filteredData)
            } catch (error) {
                console.error(error)
            }
        }

        getAllJobs()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        async function getSavedJobs() {
            try {
                const userID = 4 //localStorage.getItem("")
                const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imx1YW5AbWFpbC5jb20iLCJpYXQiOjE2NjczOTc4MTgsImV4cCI6MTY2NzQwMTQxOCwic3ViIjoiNCJ9.xdoNbqjZpme6K7QqtiSPeJyB-uXReUKACd8tyLYmkn0" // localStorage.getItem("")
                api.defaults.headers.authorization = `Bearer ${token}`

                const { data } = await api.get<IJobsProps[]>(`/users/${userID}/jobs`)
                setSavedJobs(data)
            } catch (error) {
                console.error(error)
            }
        }

        getSavedJobs()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return title === "Todas as vagas" ? <Lists objectArray={allJobs}/> : <Lists objectArray={savedJobs}/>
}

export default Cards