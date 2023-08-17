import {
  createClinicSchemaType,
  createUserSchemaType,
} from "../validations/user";

export interface ISIGN_UP {
  0: createUserSchemaType;
  1: createClinicSchemaType;
}

export const SIGN_UP: ISIGN_UP = {
  0: {
    name: "",
    email: "",
    password: "",
    age: 0,
    daysAvailable: [],
    description: "",
    expertise: [],
    fieldOfStudy: "",
    image: "",
    price: "",
    registerNumber: "",
    verified: false,
  },
  1: {
    city: "",
    neighborhood: "",
    number: "",
    state: "",
    street: "",
    zipCode: "",
  },
};

export const weekOptions = [
  { value: "segunda", label: "Segunda" },
  { value: "terca", label: "Terça" },
  { value: "quarta", label: "Quarta" },
  { value: "quinta", label: "Quinta" },
  { value: "sexta", label: "Sexta" },
  { value: "sabado", label: "Sabado" },
  { value: "domingo", label: "Domingo" },
];
