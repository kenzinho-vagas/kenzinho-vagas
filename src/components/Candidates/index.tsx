import { useContext, useEffect } from "react";
import { JobContext } from "../../contexts/JobContext";
import StyleCandidates from "../../styles/Candidates";
import CardCandidates from "../CardCandidates";
import { IFormVagas } from "../../contexts/JobContext";
import Email from "../../img/email.png";
import Level from "../../img/level.png";
import Linkedin from "../../img/linkedin.png";
import Stack from "../../img/stack.png";

const Candidates = () => {
  const { jobId, getCandidates, candidates  } = useContext(JobContext);
  
  useEffect(() => {
    getCandidates();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [jobId]);

  return (
    <StyleCandidates>
      <h3>Candidatos</h3>
      <div className="candidates">
        <ul>
          {candidates.length ?
            candidates.map((elem: IFormVagas) => <CardCandidates elem={elem} />) :
            (
             <h2>No momento não há candidatos</h2>
            )}
        </ul>
      </div>
    </StyleCandidates>
  );
};

export default Candidates;