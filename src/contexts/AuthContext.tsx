import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../services/api";
import { notifyError } from "../toast";

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
  accessToken: string;
  id: number;
  isAdmin: boolean;
}

export interface IUserContext {
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
      const id = localStorage.getItem("@kenzinhoVagas:id");

      if (token) {
        try {
          api.defaults.headers.authorization = `Bearer ${token}`;
          const { data } = await api.get<IUser>(`/users/${id}`);
          setUser(data);
        } catch (error) {
          console.error(error);
          notifyError();
        }
      }
      setLoading(false);
    }

    loadUser();
  }, [loading]);

  async function loginUser(data: IUser) {
    try {
      const res = await api.post<ILogin>("/login", data);
      const { user: userResponse, accessToken } = res.data;
      const id = userResponse.id.toString();
      api.defaults.headers.authorization = `Bearer ${accessToken}`;
      localStorage.setItem("@kenzinhoVagas:accessToken", accessToken);
      localStorage.setItem("@kenzinhoVagas:id", id);
      userResponse.isAdmin
        ? navigate("/dashboardAdmin", { replace: true })
        : navigate("/dashboardUser", { replace: true });

      setLoading(true);
    } catch (error) {
      console.error(error);
      notifyError();
    }
  }
  async function registerUser(data: IUser) {
    try {
      await api.post<ILogin>("/signup", data);
      toast("Usuário cadastrado com sucesso!");
      navigate("/login");
    } catch (error) {
      console.error(error);
      notifyError();
    }
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
