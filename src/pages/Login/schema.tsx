import * as yup from "yup";

export const schema = yup.object({
    email: yup
      .string()
      .email("Digite um email cadastrado.")
      .required("O email é obrigatório."),
    password: yup.string().required("Senha é obrigatória."),
  });