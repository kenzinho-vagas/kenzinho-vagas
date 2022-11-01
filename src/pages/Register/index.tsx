import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { schema } from "./schema";
import { useContext } from "react";
import { AuthContext, IUser } from "../../contexts/AuthContext";
import { FormsLog } from "../../components/FormsLog/style";
import { DivRegister } from "./style";

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
      <DivRegister>
        <div className="contentCadastro">
          <header>
            <h2>KenzieHub</h2>
            <Link to="/">
              <span className="goback">Voltar</span>
            </Link>
          </header>

          <FormsLog onSubmit={handleSubmit(registerUser)}>
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
              id="contact"
              type="text"
              placeholder="Digite seu usuário do LinkedIn"
              {...register("linkedin")}
            />
            <p className="error">{errors.linkedin?.message}</p>

            <label htmlFor="specialty">Selecionar módulo</label>
            <select id="specialty" {...register("specialty")}>
              <option value="Front-end">Front-end</option>
              <option value="Back-End">Back-End</option>
              <option value="Full-Stack">Full-Stack</option>
            </select>
            <p className="error">{errors.specialty?.message}</p>

            <button className="btnregister" type="submit">
              Cadastrar
            </button>
          </FormsLog>
        </div>
      </DivRegister>
    </>
  );
};
