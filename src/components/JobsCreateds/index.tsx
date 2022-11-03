import { useEffect, useState } from 'react'
import { api } from '../../services/api'
import ListJobsAdmin from '../../styles/ListJobsAdmin'
import Card from '../CardJobsAdmin'


const JobsCreateds = () => {
    interface IJobs {
            map(arg0: (elem: IJobs) => JSX.Element): import("react").ReactNode
            userId: number;
            company_name: string;
            specialty: string;
            salary: string;
            kind_of_work: string;
            tech: string[];
            level: string;
            jobURL: string;
            description: string;
            id: number;
    }

    const [adminJobs, setAdminJobs] = useState<IJobs | null>()
    async function listJobs() {
        try {
            const {data} = await api.get<IJobs>('/companyJobs')
            console.log(data)
            setAdminJobs(data)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        listJobs()
    }, [])

    return (
        <ListJobsAdmin>
            <h2>Vagas criadas</h2>
            <ul>
                {adminJobs && adminJobs.map((elem: IJobs) => Card(elem))}
            </ul>
        </ListJobsAdmin>
    )
}

export default JobsCreateds