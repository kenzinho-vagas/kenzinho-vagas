import { useState } from "react";
import { useEffect } from "react";
import { IJobsProps } from "../Cards";
import { notifySuccess, notifyError } from "../../toast";
import { DivModal } from "../../styles/Modal";
import { ButtonPurple, ButtonWhite } from "../../styles/Buttons";
import { DivModaldetails } from "./style";
import { IFormVagas } from "../../contexts/JobContext";
import Wage from "../../img/wage.png";
import Local from "../../img/localization.png";
import Xp from "../../img/xp.png";
import Case from "../../img/case.png";
import api from "../../services/api";
import { useContext } from "react";
import { JobContext } from "../../contexts/JobContextDU";

interface IJobDetailsModalProps {
  jobID: number | undefined;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const JobDetailsModal = ({ jobID, setShowModal }: IJobDetailsModalProps) => {
  const [specificJob, setSpecificJob] = useState<IJobsProps[] | []>([]);
  const [saveJob, setSaveJob] = useState<boolean>(false);
  const { savedJobs, setSavedJobs } = useContext(JobContext);

  useEffect(() => {
    async function getSpecificJob() {
      try {
        const { data } = await api.get<IJobsProps[]>(
          `/companyJobs?id=${jobID}`
        );
        setSpecificJob(data);
      } catch (error) {
        console.error(error);
      }
    }

    getSpecificJob();
  }, []);

  useEffect(() => {
    async function postSpecificJob() {
      if (saveJob) {
        try {
          const body = specificJob[0];
          console.log(body);

          if (body.id) {
            delete body.id;
          }
          const userID = localStorage.getItem("@kenzinhoVagas:id");
          body.userId = Number(userID);

          const newData = [
            ...savedJobs,
            {
              company_name: body.company_name,
              description: body.description,
              kind_of_work: body.kind_of_work,
              level: body.level,
              salary: body.salary,
              specialty: body.specialty,
              tech: body.tech,
              userId: body.userId,
              id: body.userId,
              jobURL: body.company_name,
            },
          ];

          const { data } = await api.get<IFormVagas[]>(`/users/${userID}/jobs`);
          console.log(data);
          const alreadyExist = data.findIndex(
            (elem: any) =>
              elem.company_name === body.company_name &&
              elem.kind_of_work === body.kind_of_work &&
              elem.salary === body.salary &&
              elem.specialty === body.specialty
          );
          console.log(alreadyExist);
          if (alreadyExist === -1) {
            await api.post(`/users/${userID}/jobs`, body);
            notifySuccess();
            setSavedJobs(newData);
          } else {
            notifyError();
            console.log("achou");
          }
        } catch (error) {
          console.error(error);
        }
      }
    }
    postSpecificJob();
  }, [saveJob]);

  return (
    <DivModal>
      <div className="containerModal">
        <div className="overlayModal">
          <div className="theModal">
            <DivModaldetails>
              {specificJob.map((object: IJobsProps) => (
                <li key={object.id}>
                  <h3 className="modalTitle">Programador {object.specialty}</h3>
                  <ul className="technologies">
                    {typeof object.tech === "object" &&
                      object.tech.map((value, index) => (
                        <li key={index}>{value}</li>
                      ))}
                  </ul>
                  <div className="infoJobs">
                    <div className="infoJobsDetail">
                      <img src={Case} alt="mala" />
                      <p>{object.company_name}</p>
                    </div>
                    <div className="infoJobsDetail">
                      <img src={Xp} alt="XP" />
                      <p>{object.level}</p>
                    </div>
                    <div className="infoJobsDetail">
                      <img src={Local} alt="Localization" />
                      <p>{object.kind_of_work}</p>
                    </div>
                    <div className="infoJobsDetail">
                      <img src={Wage} alt="coins" />
                      <p>R$ {object.salary}</p>
                    </div>
                  </div>
                  <div className="description">
                    <p>{object.description}</p>
                  </div>
                  <div className="btnModal">
                    <ButtonWhite onClick={() => setShowModal(false)}>
                      Fechar
                    </ButtonWhite>
                    <ButtonPurple onClick={() => setSaveJob(true)}>
                      Candidatar
                    </ButtonPurple>
                  </div>
                </li>
              ))}
            </DivModaldetails>
          </div>
        </div>
      </div>
    </DivModal>
  );
};

export default JobDetailsModal;
