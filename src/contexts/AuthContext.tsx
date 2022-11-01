import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../services/api";

export interface IUser {
  id: number;
  name: string;
  email: string;
  password: string;
  confirmPassword?: string;
  linkedin?: string;
  level: string;
  bio?: string;
  specialty: string;
  isAdmin: boolean;
  jobs: [];
}

export const AuthContext = createContext<IUserContext>({} as IUserContext);

export interface IAuthContext {
  children: ReactNode;
}

export interface ILogin {
  user: IUser;
  token: string;
}

interface IUserContext {
  user: IUser | null;
  loading: boolean;
  loginUser: (data: IUser) => void;
  registerUser: (data: IUser) => void;
}

export const AuthProvider = ({ children }: IAuthContext) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<IUser>({} as IUser);

  const navigate = useNavigate();

  useEffect(() => {
    async function loadUser() {
      const token = localStorage.getItem("@kenzinhoVagas:accessToken");

      if (token) {
        try {
          api.defaults.headers.authorization = `Bearer ${token}`;
          const { data } = await api.get<IUser>(`/users/`);
          setUser(data);
        } catch (error) {
          console.error(error);
          toast.error("Opa! Algo deu errado...");
        }
      }
      setLoading(false);
    }

    loadUser();
  }, []);

  async function loginUser(data: IUser) {
    try {
      const res = await api.post<ILogin>("/login", data);
      console.log(res);

      const { user: userResponse, token } = res.data;

      api.defaults.headers.authorization = `Bearer ${token}`;

      setUser(userResponse);
      localStorage.setItem("@kenzinhoVagas:accessToken", token);
      user.isAdmin === true
        ? navigate("/dashboardAdmin", { replace: true })
        : navigate("/dashboard", { replace: true });
    } catch (error) {
      console.error(error);
      toast("Algo deu errado! :(");
    }
  }
  async function registerUser(data: IUser) {
    try {
      const res = await api.post<ILogin>("/signup", data);
      console.log(res);
      toast("Usuário cadastrado com sucesso!");
      navigate("/");
    } catch (error) {
      console.error(error);
      toast("Algo deu errado! :(");
    }
    console.log(data);
  }

  return (
    <AuthContext.Provider
      value={{
        loginUser,
        user,
        loading,
        registerUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useUserContext() {
  const context = useContext(AuthContext);

  return context;
}
