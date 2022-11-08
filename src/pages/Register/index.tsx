import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./schema";
import { useContext } from "react";
import { AuthContext, IUser } from "../../contexts/AuthContext";
import { FormsLog } from "../../components/FormsLog/style";
import { DivLogin } from "../Login/style";
import { LinkPrimary, LinkSecundary } from "../../styles/Links";
import Header from "../../styles/Header";
import logo from "../../img/logo.png";
import "react-toastify/dist/ReactToastify.css";
import Footer from "../../components/Footer";

export const Register = () => {
  const { registerUser } = useContext(AuthContext);

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
          <LinkSecundary to={"/login"} className="buttonHeaderDesktop">
            Login
          </LinkSecundary>
        </div>
      </Header>
      <DivLogin>
        <div className="contentLogin">
          <FormsLog onSubmit={handleSubmit(registerUser)}>
            <h1 className="title">Cadastro</h1>
            <div className="divFormCad">
              <div>
                <label htmlFor="name">Nome</label>
                <input
                  id="name"
                  type="text"
                  placeholder="Digite seu nome completo"
                  {...register("name")}
                />
                <p className="error">{errors?.name?.message}</p>

                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="text"
                  placeholder="Digite seu email"
                  {...register("email")}
                />
                <p className="error">{errors?.email?.message}</p>

                <label htmlFor="password">Senha</label>
                <input
                  id="password"
                  type="password"
                  placeholder="Digite sua senha"
                  {...register("password")}
                />
                <p className="error">{errors?.password?.message}</p>

                <label htmlFor="confirmPassword">Confirmar senha</label>
                <input
                  id="confirmPassword"
                  type="password"
                  placeholder="Confirme sua senha"
                  {...register("confirmPassword")}
                />
                <p className="error">{errors.confirmPassword?.message}</p>
              </div>
              <div>
                <label htmlFor="bio">Bio</label>
                <input
                  id="bio"
                  type="text"
                  placeholder="Digite sua bio"
                  {...register("bio")}
                />
                <p className="error">{errors.bio?.message}</p>

                <label htmlFor="linkedin">Link do LinkedIn</label>
                <input
                  id="linkedin"
                  type="text"
                  placeholder="Digite seu usuário do LinkedIn"
                  {...register("linkedin")}
                />
                <p className="error">{errors.linkedin?.message}</p>

                <label htmlFor="level">Selecionar nível do cargo</label>
                <select id="level" {...register("level")}>
                  <option value="Junior">Júnior</option>
                  <option value="Pleno">Pleno</option>
                  <option value="Senior">Sênior</option>
                </select>

                <label htmlFor="specialty">Selecionar módulo</label>
                <select id="specialty" {...register("specialty")}>
                  <option value="Front-end">Front-end</option>
                  <option value="Back-End">Back-End</option>
                  <option value="Full-Stack">Full-Stack</option>
                </select>
                <p className="error">{errors.specialty?.message}</p>

                <input
                  type="text"
                  id="isAdmin"
                  hidden
                  value="false"
                  {...register("isAdmin")}
                />
              </div>
            </div>
            <button className="buttonForm1" type="submit">
              Cadastrar
            </button>
          </FormsLog>
        </div>
      </DivLogin>
      <Footer />
    </>
  );
};
