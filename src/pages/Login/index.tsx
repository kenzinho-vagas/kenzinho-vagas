import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from "react-router-dom";
import { DivLogin } from "./style";
import { schema } from "./schema";
import { useContext } from "react";
import { AuthContext, IUser } from "../../contexts/AuthContext";
import { FormsLog } from "../../components/FormsLog/style";
import { LinkPrimary, LinkSecundary } from "../../styles/Links";
import Header from "../../styles/Header";
import logo from "../../img/logo.png";
import "react-toastify/dist/ReactToastify.css";
import Footer from "../../components/Footer";

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
    <>
      <Header>
        <img src={logo} alt="Logo Kenzinho" />
        <div className="rightHeader">
          <LinkPrimary to={"/"} className="buttonHeaderDesktop">
            Sobre Nós
          </LinkPrimary>
          <LinkSecundary to={"/"} className="buttonHeaderDesktop">
            Inicio
          </LinkSecundary>
        </div>
      </Header>
      <DivLogin>
        <div className="contentLogin">
          <FormsLog onSubmit={handleSubmit(loginUser)}>
            <h1 className="title">LOGIN</h1>

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
            <button className="buttonForm1">Entrar</button>
            <p className="account">Ainda não possui uma conta?</p>
            <Link to="/register">
              <p className="buttonForm2">Cadastre-se</p>
            </Link>
          </FormsLog>
        </div>
      </DivLogin>
      <Footer />
    </>
  );
};
