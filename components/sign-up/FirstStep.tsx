import { Dispatch, FC } from "react";
import Input from "../Input";
import { actionTypes } from "./reducer";
import { ISIGN_UP } from "@/lib/constants/index";

interface FirstStepProps {
  dispatch: Dispatch<actionTypes>;
  state: ISIGN_UP[0];
}

const FirstStep: FC<FirstStepProps> = ({ state, dispatch }) => {
  return (
    <>
      <Input
        label="nome completo"
        placeholder="Digite seu Nome"
        value={state?.name}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          dispatch({ type: "SET_VALUE_0", payload: { name: e.target.value } })
        }
      />
      <Input
        label="idade"
        placeholder="Digite sua idade"
        type="number"
        value={state?.age}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          dispatch({
            type: "SET_VALUE_0",
            payload: { age: Number.parseInt(e.target.value) },
          })
        }
      />
      <Input
        label="email"
        placeholder="Digite seu email"
        type="email"
        className="md:col-span-2"
        value={state?.email}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          dispatch({
            type: "SET_VALUE_0",
            payload: { email: e.target.value },
          })
        }
      />
      <Input
        label="senha"
        type="password"
        className="md:col-span-2"
        placeholder="Digite sua senha"
        value={state?.password}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          dispatch({
            type: "SET_VALUE_0",
            payload: { password: e.target.value },
          })
        }
      />
      <Input
        label="Valor da consulta"
        placeholder="0,00R$"
        value={state?.price}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          dispatch({
            type: "SET_VALUE_0",
            payload: { price: e.target.value },
          })
        }
      />
    </>
  );
};

export default FirstStep;
