import Candidates from "../../components/Candidates"
import CreateJob from "../../components/CreateJob"
import Header from "../../components/HeaderAdmin"
import JobsAdmin from "../../components/FilterJobsAdmin"
import JobsCreateds from "../../components/JobsCreateds"
import Welcome from "../../components/Welcome"
import { useContext, useEffect } from "react"
import { JobContext } from "../../contexts/JobContext"
import ModalEdit from "../../components/ModalEditJob"
import api from "../../services/api"

const DashboardAdmin = () => {
    const { jobId, editModal } = useContext(JobContext);

    async function isAdmin() {
        const id = localStorage.getItem('@kenzinhoVagas:id')
        try {
            const {data} = await api.get(`users/${id}`)
            console.log(data)
        } catch (error) {
            
        }
    }

    useEffect(() => {
        isAdmin()
    },[])

    return (
        <>
            <Header />
            <Welcome name="Admin"/>
            <CreateJob />
            <JobsAdmin />
            <JobsCreateds />
            {jobId && <Candidates />}
            {editModal && <ModalEdit/>}
        </>
    )
}

export default DashboardAdmin;
