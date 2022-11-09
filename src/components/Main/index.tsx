import Filters from "../Filters";
import JobsContainer from "../JobsContainer";

const Main = () => {
    return (
        <main>
            <JobsContainer title="Vagas Salvas"/>
            <Filters />
            <JobsContainer title="Todas as vagas"/>
        </main>
    )
}

export default Main;