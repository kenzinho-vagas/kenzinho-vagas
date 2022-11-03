import { JobProvider } from "../../contexts/JobContext";
import { DivGrey } from "../../styles/Divs";
import Cards from "../Cards";

interface IJobsProps {
    title: string;
}

const JobsContainer = ({ title }: IJobsProps) => {
    return (
        <DivGrey>
            <h3>{ title }</h3>
            <section className="cards">
                <JobProvider>
                    <Cards title={title}/>
                </JobProvider>
            </section>
        </DivGrey>
    )
}

export default JobsContainer;