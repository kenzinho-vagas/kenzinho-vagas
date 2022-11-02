import { JobContext } from "./JobContext"
import { UserContext } from "./UserContext"


interface IContextProps {
    children: React.ReactNode
}

const Contexts = ({children}: IContextProps) => {
    return (
        <JobContext>
            <UserContext>
                {children}
            </UserContext>
        </JobContext>
    )
}

export default Contexts