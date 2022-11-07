import Candidates from "../../components/Candidates";
import CreateJob from "../../components/CreateJob";
import Header from "../../components/HeaderAdmin";
import JobsAdmin from "../../components/FilterJobsAdmin";
import JobsCreateds from "../../components/JobsCreateds";
import Welcome from "../../components/Welcome";
import { useContext } from "react";
import { JobContext } from "../../contexts/JobContext";
import ModalEdit from "../../components/ModalEditJob";

const DashboardAdmin = () => {
  const { jobId, editModal } = useContext(JobContext);

  const name: string = "vinicius";
  return (
    <>
      <Header />
      <Welcome name={name} />
      <CreateJob />
      <JobsAdmin />
      <JobsCreateds />
      {jobId && <Candidates />}
      {editModal && <ModalEdit />}
    </>
  );
};

export default DashboardAdmin;
