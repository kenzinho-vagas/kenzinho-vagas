import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { AuthContext, IUserContext } from "../AuthContext";
import api from "../../services/api";

interface IProfileContextProps {
  children: React.ReactNode;
}

export interface IProfileContext {
  profileUser: IUserProfile | null;
  setProfileUser: React.Dispatch<React.SetStateAction<IUserProfile | null>>;
  isProfileModal: boolean;
  setProfileModal: React.Dispatch<React.SetStateAction<boolean>>;
  editeProfile: (body: IEditeProfile) => void;
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
  level?: string;
  bio?: string;
  specialty?: string;
}

export const ProfileContext = createContext<IProfileContext>(
  {} as IProfileContext
);

export const ProfileProvider = ({ children }: IProfileContextProps) => {
  const [profileUser, setProfileUser] = useState<IUserProfile | null>(null);
  const [isProfileModal, setProfileModal] = useState<boolean>(false);

  const { loading } = useContext<IUserContext>(AuthContext);

  useEffect(() => {
    async function getProfile() {
      const token = localStorage.getItem("@kenzinhoVagas:accessToken");
      const userId = localStorage.getItem("@kenzinhoVagas:id");

      try {
        api.defaults.headers.authorization = `Bearer ${token}`;
        const { data } = await api.get<IUserProfile>(`/users/${userId}`);
        setProfileUser(data);
      } catch (error) {
        console.log(error);
      }
    }
    getProfile();
  }, [loading]);

  async function editeProfile(body: IEditeProfile) {
    const userId = localStorage.getItem("@kenzinhoVagas:id");
    const token = localStorage.getItem("@kenzinhoVagas:accessToken");

    if (body.bio === "") {
      delete body.bio;
    }
    if (body.level === "") {
      delete body.level;
    }
    if (body.specialty === "") {
      delete body.specialty;
    }

    try {
      api.defaults.headers.authorization = `Bearer ${token}`;

      const { data } = await api.patch(`/users/${userId}`, body);
      setProfileUser(data);
      toast.success("Perfil editado com Sucesso!!");
      setProfileModal(!isProfileModal);
    } catch (error) {
      console.log(error);
      toast.error("Opa! Algo deu errado...");
    }

    try {
      api.defaults.headers.authorization = `Bearer ${token}`;

      const { data } = await api.patch(`/users/${userId}`, body);
      setProfileUser(data);
      toast.success("Perfil editado com Sucesso!!");
      setProfileModal(!isProfileModal);
    } catch (error) {
      console.log(error);
      toast.error("Opa! Algo deu errado...");
    }

    console.log(body);
  }

  return (
    <ProfileContext.Provider
      value={{
        profileUser,
        setProfileUser,
        isProfileModal,
        setProfileModal,
        editeProfile,
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
};
