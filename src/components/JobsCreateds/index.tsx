import { useContext, useEffect } from "react";
import { JobContext } from "../../contexts/JobContext";
import { IFormVagas } from "../../contexts/JobContext";
import ListJobsAdmin from "../../styles/ListJobsAdmin";
import Card from "../CardJobsAdmin";

const JobsCreateds = () => {
  const { adminJobs, listJobs, listFilteredAdmin, filterValidationAdmin } =
    useContext(JobContext);

  useEffect(() => {
    listJobs();
  }, []);

  return (
    <ListJobsAdmin>
      <h2>Vagas criadas</h2>
      <ul>
        {filterValidationAdmin === true
          ? listFilteredAdmin !== undefined
            ? listFilteredAdmin &&
              listFilteredAdmin.map((elem: IFormVagas) => Card(elem))
            : adminJobs && adminJobs.map((elem: IFormVagas) => Card(elem))
          : adminJobs && adminJobs.map((elem: IFormVagas) => Card(elem))}
      </ul>
    </ListJobsAdmin>
  );
};

export default JobsCreateds;
