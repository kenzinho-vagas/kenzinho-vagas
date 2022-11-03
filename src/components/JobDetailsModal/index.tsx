import { useState } from "react";
import { useEffect } from "react";
import { IJobsProps } from "../Cards";
import { notifyError, notifySuccess } from "../../toast";
import { api } from "../../services/api";
import { DivModal } from "../../styles/Modal";
import { ButtonPurple, ButtonWhite } from "../../styles/Buttons";
import Wage from "../../img/wage.png";
import Local from "../../img/localization.png";
import Xp from "../../img/xp.png";
import Case from "../../img/case.png";
import { DivModaldetails } from "./style";
interface IJobDetailsModalProps {
  jobID: number;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const JobDetailsModal = ({ jobID, setShowModal }: IJobDetailsModalProps) => {
  const [specificJob, setSpecificJob] = useState<IJobsProps[] | []>([]);
  const [saveJob, setSaveJob] = useState<boolean>(false);

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    async function postSpecificJob() {
      if (saveJob) {
        try {
          const body = specificJob[0];
          const userID = 3; //localStorage.getItem("")
          await api.post(`/users/${userID}/jobs`, body);
          notifySuccess();
        } catch (error) {
          notifyError();
        }
      }
    }

    postSpecificJob();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [saveJob]);

  return (
    <DivModal>
      <div className="containerModal">
        <div className="overlayModal">
          <div className="modal">
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
                      <p>{object.salary}</p>
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
