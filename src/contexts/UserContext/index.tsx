import { createContext, useEffect, useState } from "react";
import api from "../../services/api";

interface IUserContextProps {
    children: React.ReactNode;
}

export interface IUserContext {
    profileUser: IUserProfile | null;
    setProfileUser: React.Dispatch<React.SetStateAction<IUserProfile | null>>;
    isProfileModal: boolean;
    setProfileModal: React.Dispatch<React.SetStateAction<boolean>>;
    editeProfile: (body: IEditeProfile) => void
}

interface IUserProfile {
    email: string;
    password: string;
    name: string;
    linkedin: string;
    level: string;
    bio: string;
    specialty: string;
    isAdmin: boolean;
    id: number;
    jobs: IJobs[];
}

interface IJobs {
    userId: number;
    company_name: string;
    specialty: string;
    salary: string;
    kind_of_work: string;
    tech: string[];
    level: string;
    jobURL: string;
    description: string;
    id: number;
  }

  export interface IEditeProfile {
    level: string;
    bio: string;
    specialty: string
  }

export const UserContext = createContext<IUserContext>({} as IUserContext)

export const UserProvider = ({children}: IUserContextProps) => {
    const [profileUser, setProfileUser] = useState<IUserProfile | null>(null)
    const [isProfileModal, setProfileModal] = useState<boolean>(false)

    useEffect(() =>{
        async function getProfile () {
            const token = localStorage.getItem("@kenzinhoVagas:accessToken")
            const userId = localStorage.getItem("@kenzinhoVagas:id")

            try {
                api.defaults.headers.authorization = `Bearer ${token}`;
                const {data} = await api.get<IUserProfile>(`/users/${userId}`)
                setProfileUser(data)
            }
            catch (error){
                console.log(error)
                
            }
          
        }
        getProfile()
    }, [])

    async function editeProfile (body: IEditeProfile) {
        const userId = localStorage.getItem("@kenzinhoVagas:id")
        const token = localStorage.getItem("@kenzinhoVagas:accessToken")

        try {
            api.defaults.headers.authorization = `Bearer ${token}`

            const {data} = await api.patch(`/users/${userId}`, body)
            console.log(data)
            setProfileUser(data)
        }

        catch (error) {
            console.log(error)
        }
    }

    return (
        <UserContext.Provider value={{ profileUser, setProfileUser, isProfileModal, setProfileModal, editeProfile }}>
            {children}
        </UserContext.Provider>
    )
}