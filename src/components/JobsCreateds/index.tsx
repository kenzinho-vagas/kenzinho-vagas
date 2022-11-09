import { useContext, useEffect } from "react";
import { JobContext } from "../../contexts/JobContext";
import { IFormVagas } from "../../contexts/JobContext";
import ListJobsAdmin from "../../styles/ListJobsAdmin";
import Card from "../CardJobsAdmin";
import NoVacanciesFound from "../NoVacanciesFound";

const JobsCreateds = () => {
  const { adminJobs, listJobs, listFilteredAdmin, filterValidationAdmin } =
    useContext(JobContext);

  return (
    <ListJobsAdmin>
      <h2>Vagas criadas</h2>
      <ul>
        {filterValidationAdmin === true ? (
          listFilteredAdmin[0] !== undefined ? (
            
            listFilteredAdmin.map((elem: IFormVagas) => Card(elem))
          ) : (
            <NoVacanciesFound />
          )
        ) : (
          adminJobs && adminJobs.map((elem: IFormVagas) => Card(elem))
        )}
      </ul>
    </ListJobsAdmin>
  );
};

export default JobsCreateds;
