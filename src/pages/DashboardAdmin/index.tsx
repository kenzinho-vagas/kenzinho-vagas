import CreateJob from "../../components/CreateJob"
import Header from "../../components/Header"
import Welcome from "../../components/Welcome"

const DashboardAdmin = () => {
    const name:string = "vinicius"
    return (
        <>
            <Header />
            <Welcome name={name} />
            <CreateJob/>
        </>
    )
}

export default DashboardAdmin