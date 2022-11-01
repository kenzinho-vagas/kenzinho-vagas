import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { DivLogin } from "./style";
import { schema } from "./schema";
import { useContext } from "react";
import { AuthContext, IUser } from "../../contexts/AuthContext";
import { FormsLog } from "../../components/FormsLog/style";

export const Login = () => {
  const { loginUser } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUser>({
    resolver: yupResolver(schema),
  });

  return (
    <DivLogin>
      <div className="contentLogin">
        <h1>Kenzinho Vagas</h1>

        <FormsLog onSubmit={handleSubmit(loginUser)}>
          <h3>Login</h3>

          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="Insira seu e-mail"
            {...register("email")}
          />
          <p className="error">{errors.email?.message}</p>

          <label htmlFor="password">Senha</label>
          <input
            type="password"
            placeholder="Insira sua senha"
            {...register("password")}
          />
          <p className="error">{errors.password?.message}</p>
          <button className="botao">Entrar</button>
          <p className="account">Ainda não possui uma conta?</p>
          <Link to="/register">
            <p className="botao2">Cadastre-se</p>
          </Link>
        </FormsLog>
      </div>
    </DivLogin>
  );
};
