import Cards from "../Cards"

interface IJobsProps {
    title: string
}

const JobsContainer = ({ title }: IJobsProps) => {
    return (
        <section>
            <h2>{ title }</h2>
            <Cards title={title}/>
        </section>
    )
}

export default JobsContainer