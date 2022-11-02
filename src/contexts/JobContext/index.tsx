import { createContext } from "react";

interface IJobCountextProps {
    children: React.ReactNode;
}

export const JobContext = createContext({})

export const JobProvider = ({children}: IJobCountextProps) => {

    return (
        <JobContext.Provider value={{}}>{children}</JobContext.Provider>
    )
}