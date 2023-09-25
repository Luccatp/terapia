import { type } from "os";
import { z } from "zod";

const VALID_EDUCATION = ["psychologist", "psychiatrist"] as const;

export const firstStep = z.object({
  fullName: z
    .string()
    .min(3, { message: "Seu nome deve ter no minimo 3 caracteres" })
    .max(255, { message: "Seu nome deve ter no maximo 255 caracteres" }),
  email: z.string().email({
    message: "Insira um endereço de e-mail válido",
  }),
  password: z
    .string()
    .min(8, {
      message:
        "Senha deve ter ao menos 8 caracteres, um Maiusculo um minusculo e um numero",
    })
    .max(100)
    .regex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/, {
      message:
        "Senha deve ter ao menos 8 caracteres, um Maiusculo, um minusculo e um numero",
    }),
  birthday: z.coerce
    .date({ required_error: "Preencha esse campo" })
    .max(new Date(`${new Date().getFullYear() - 18}-01-01`), {
      message: "Você precisa ter ao menos 18 anos para se cadastrar",
    }),
});

export const secondStep = z.object({
  zipCode: z
    .string()
    .min(3, { message: "seu CEP deve conter ao minimo 3 caracteres" })
    .max(255),
  state: z
    .string()
    .min(2, {
      message: "Digite o nome completo do seu estado ou sua sigla (ex: RS)",
    })
    .max(255),
  city: z
    .string()
    .min(3, {
      message:
        "Digite o nome da sua cidade, ele deve conter ao menos 3 caracteres",
    })
    .max(255),
  street: z
    .string()
    .min(3, { message: "Sua rua deve ter ao menos 3 caracteres" })
    .max(255),
  number: z
    .string()
    .min(1, { message: "seu numero não pode ser negativo ou 0" })
    .max(6, { message: "seu numero não pode ter mais de 6 digitos" }),
  neighborhood: z
    .string()
    .min(3, { message: "seu bairro deve ter ao menos 3 caracteres" })
    .max(255),
  floorNumber: z
    .string()
    .max(10000, {
      message: "seu numero de apartamento não pode ter mais de 10000 digitos",
    })
    .optional(),
});

export const thirdStep = z.object({
  daysAvailable: z
    .string()
    .array()
    .min(1, { message: "Nos diga ao menos um dia" }),
  expertise: z
    .string()
    .min(1, { message: "Nos informe sua area de expertise" }),
  education: z.enum(VALID_EDUCATION, {
    required_error: "Selecione uma opção",
  }),
  registerNumber: z
    .string()
    .min(11, { message: "Seu numero de registro deve ter 11 digitos" }),
  price: z.string().min(1, { message: "Seu preço deve ser maior que 0" }),
  phoneNumber: z
    .string()
    .min(11, { message: "Seu telefone deve ter 11 digitos" }),
  description: z
    .string()
    .min(20, { message: "Sua descrição deve ter mais de 20 caractéres" }),
});

export const signUpSchema = firstStep.merge(secondStep).merge(thirdStep);

export type firstStepType = z.infer<typeof firstStep>;
export type secondStepType = z.infer<typeof secondStep>;
export type thirdStepType = z.infer<typeof thirdStep>;

export type signUpSchemaType = z.infer<typeof signUpSchema>;

export type unionSchemaType = z.infer<
  typeof firstStep | typeof secondStep | typeof thirdStep
>;
