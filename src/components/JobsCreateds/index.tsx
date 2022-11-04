import { useContext, useEffect } from 'react'
import { JobContext } from '../../contexts/JobContext'
import ListJobsAdmin from '../../styles/ListJobsAdmin'
import Card from '../CardJobsAdmin'
import { IFormVagas } from '../../contexts/JobContext'


const JobsCreateds = () => {
    const { adminJobs, listJobs } = useContext(JobContext);

    useEffect(() => {
        listJobs()
    }, [adminJobs])

    return (
        <ListJobsAdmin>
            <h2>Vagas criadas</h2>
            <ul>
                {adminJobs && adminJobs.map((elem: IFormVagas) => Card(elem))}
            </ul>
        </ListJobsAdmin>
    )
}

export default JobsCreateds