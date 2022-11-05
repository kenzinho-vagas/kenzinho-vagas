import Candidates from "../../components/Candidates";
import CreateJob from "../../components/CreateJob";
import Header from "../../components/HeaderAdmin";
import JobsAdmin from "../../components/FilterJobsAdmin";
import JobsCreateds from "../../components/JobsCreateds";
import Welcome from "../../components/Welcome";

const DashboardAdmin = () => {

    const name:string = "vinicius"
    return (
        <>
            <Header />
            <Welcome name={name} />
            <CreateJob />
            <JobsAdmin />
            <JobsCreateds />
            <Candidates/>
        </>
    )
}

export default DashboardAdmin;
