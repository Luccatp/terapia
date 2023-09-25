// state.js
"use client";
import {
  firstStep,
  secondStep,
  signUpSchemaType,
  thirdStep,
  unionSchemaType,
} from "@/lib/validations/sign-up";
import { createContext, useContext, useEffect, useState } from "react";
import { useToast } from "@/components/ui/use-toast";

export const SignUpContext = createContext({});

interface ValueProps {
  // signUpHelper: [
  //   Partial<signUpSchemaType>,
  //   React.Dispatch<Partial<signUpSchemaType>>
  // ];
  step: number;
  changeStep: (step: number) => void;
  saveData: (data: unionSchemaType) => void;
  finishQuestionary: (data: unionSchemaType) => void;
}

export function SignUpProvider({ children }: { children: React.ReactNode }) {
  const signUpHelper = useState<Partial<signUpSchemaType>>({});
  const stepHelper = useState<number>(0);
  const { toast } = useToast();

  const [signUp, setSignUp] = signUpHelper;
  const [step, setStep] = stepHelper;

  const saveData = (data: unionSchemaType) => {
    // const storageSignUp = window.localStorage.getItem("signUp");
    //problema, se o usuario voltar mandar o formulario e der erro 500 (banco de dados), o formulario no local storage vai ser sobrescrito
    // if (storageSignUp) {
    //   const storageSignUpParsed = JSON.parse(storageSignUp)
    //     .signUp as Partial<signUpSchemaType>;

    //   const result = data
    // }
    const newValue = { ...signUp, ...data };
    setSignUp(newValue);
    setStep((prev) => prev + 1);
    window.localStorage.setItem(
      "signUp",
      JSON.stringify({ signUp: newValue, step: step + 1 })
    );
  };

  const finishQuestionary = (data: unionSchemaType) => {
    saveData(data);
    const storageSignUp = window.localStorage.getItem("signUp");

    if (!storageSignUp) return console.log("no data");

    fetch("/api/user/sign-up", {
      method: "POST",
      body: JSON.stringify(JSON.parse(storageSignUp).signUp),
    })
      .then((res) => res.json())
      .then((res) => {
        toast({
          title: res.message ?? "Usuario criado com sucesso",
        });
      })
      .catch((err) => {
        toast({
          title: err.message ?? "Erro ao criar usuario",
          variant: "destructive",
        });
      });
  };

  const changeStep = (step: number) => {
    setStep(step);
    window.localStorage.setItem(
      "signUp",
      JSON.stringify({ signUp, step: step })
    );
  };

  useEffect(() => {
    const data = window.localStorage.getItem("signUp");
    if (data) {
      const { signUp, step } = JSON.parse(data);
      setSignUp(signUp);
      setStep(step);
    }
  }, []);

  const value: ValueProps = {
    saveData,
    step,
    finishQuestionary,
    changeStep,
  };
  return (
    <SignUpContext.Provider value={value}>{children}</SignUpContext.Provider>
  );
}

export function useSignUp() {
  const context = useContext(SignUpContext);
  if (!context) {
    throw new Error("useSignUp must be used within the SignUpProvider");
  }
  return context as ValueProps;
}
