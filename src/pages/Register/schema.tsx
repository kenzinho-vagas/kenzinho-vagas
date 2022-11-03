import * as yup from "yup";

export const schema = yup.object({
  name: yup.string().required("Nome é obrigatório."),
  email: yup.string().email().required("Email é obrigatório."),
  password: yup
    .string()
    .required("É obrigatório cadastrar uma senha.")
    .matches(/[A-Z]/, "Deve conter ao menos 1 letra maiúscula")
    .matches(/([a-z])/, "Deve conter ao menos 1 letra minúscula")
    .matches(/(\d)/, "Deve conter ao menos 1 número")
    .matches(/(\W)|_/, "Deve conter ao menos 1 caracter especial")
    .matches(/.{8,}/, "Deve conter ao menos 8 dígitos"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "As duas senhas devem ser iguais."),

  bio: yup.string().required("Bio é obrigatória."),
  linkedin: yup.string().required("Cadastre seu usuário LinkedIn."),
  specialty: yup.string().required(),
  isAdmin: yup.bool(),
});
