import CreateJob from "../../components/CreateJob"
import Header from "../../components/Header"
import JobsAdmin from "../../components/JobsAdmin"
import JobsCreateds from "../../components/JobsCreateds"
import Welcome from "../../components/Welcome"

const DashboardAdmin = () => {
    const name:string = "vinicius"
    return (
        <>
            <Header />
            <Welcome name={name} />
            <CreateJob />
            <JobsAdmin />
            <JobsCreateds/>
        </>
    )
}

export default DashboardAdmin