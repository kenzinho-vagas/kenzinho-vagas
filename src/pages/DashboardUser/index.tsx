import Header from "../../components/Header"
import Main from "../../components/Main"
import Welcome from "../../components/Welcome"

const DashboardUser = () => {
    const name:string = "Gabriela"
    return (
        <>
            <Header />
            <Welcome name={name} />
            <Main />
        </>
    )
}

export default DashboardUser