import CreateJob from "../../components/CreateJob"
import Header from "../../components/Header"
import Welcome from "../../components/Welcome"


const DashboardUser = () => {
    const name:string = 'Gabriela'
    return (
        <>
            <Header />
            <Welcome name={name} />
            <CreateJob/>
        </>
    )
}

export default DashboardUser