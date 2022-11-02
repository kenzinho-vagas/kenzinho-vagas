import CreateJob from "../../components/CreateJob"
import Header from "../../components/Header"
import JobsAdmin from "../../components/JobsAdmin"
import Welcome from "../../components/Welcome"

const DashboardAdmin = () => {
    const name:string = "vinicius"
    return (
        <>
            <Header />
            <Welcome name={name} />
            <CreateJob />
            <JobsAdmin/>
        </>
    )
}

export default DashboardAdmin;
