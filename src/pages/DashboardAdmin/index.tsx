import Candidates from "../../components/Candidates";
import CreateJob from "../../components/CreateJob";
import Header from "../../components/HeaderAdmin";
import JobsAdmin from "../../components/FilterJobsAdmin";
import JobsCreateds from "../../components/JobsCreateds";
import Welcome from "../../components/Welcome";
import { useContext, useEffect } from "react";
import { JobContext } from "../../contexts/JobContext";
import ModalEdit from "../../components/ModalEditJob";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const DashboardAdmin = () => {
  const { jobId, editModal } = useContext(JobContext);
  const [admin, setAdmin] = useState<boolean>(false);

  const navigate = useNavigate();

  async function isAdmin() {
    const id = localStorage.getItem("@kenzinhoVagas:id");
    try {
      const { data } = await api.get(`users/${id}`);
      if (!data.isAdmin) {
        console.log("nao é admin");
        return navigate("/dashboardUser");
      } else {
        setAdmin(true);
      }
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    isAdmin();
  }, []);

  return admin ? (
    <>
      <Header />
      <Welcome name="Admin" />
      <CreateJob />
      <JobsAdmin />
      <JobsCreateds />
      {jobId && <Candidates />}
      {editModal && <ModalEdit />}
    </>
  ) : (
    <h1>Loading...</h1>
  );
};
export default DashboardAdmin;
