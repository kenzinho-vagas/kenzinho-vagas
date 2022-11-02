import { createContext } from "react";

interface IUserCountextProps {
    children: React.ReactNode;
}

export const UserContext = createContext({})

export const UserProvider = ({children}: IUserCountextProps) => {

    return (
        <UserContext.Provider value={{}}>{children}</UserContext.Provider>
    )
}