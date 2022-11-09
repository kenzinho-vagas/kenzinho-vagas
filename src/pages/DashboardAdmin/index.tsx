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
import { Loading } from "./loading";

const DashboardAdmin = () => {
  const { jobId, editModal, listJobs } = useContext(JobContext);
  const [admin, setAdmin] = useState<boolean>(false);

  const navigate = useNavigate();

  useEffect(() => {
    listJobs();
  }, []);

  async function isAdmin() {
    const id = localStorage.getItem("@kenzinhoVagas:id");
    try {
      const { data } = await api.get(`users/${id}`);
      if (!data.isAdmin) {
        
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
    <Loading>
      <div className="loading"></div>
    </Loading>
  );
};
export default DashboardAdmin;
