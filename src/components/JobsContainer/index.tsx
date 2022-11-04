import { DivGrey } from "../../styles/Divs";
import Cards from "../Cards";

interface IJobsProps {
  title: string;
}

const JobsContainer = ({ title }: IJobsProps) => {
  return (
    <DivGrey>
      <h3>{title}</h3>
      <section className="cards">
        <Cards title={title} />
      </section>
    </DivGrey>
  );
};

export default JobsContainer;
