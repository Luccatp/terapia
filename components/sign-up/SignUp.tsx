"use client";
import { ChangeEvent, FC, Reducer, useReducer, useState } from "react";
import { Card } from "../ui/card";
import Input from "../Input";
import { SIGN_UP, weekOptions } from "@/lib/constants";
import reducer, { actionTypes } from "./reducer";
import { Label } from "../ui/label";

interface signUpProps {}

const SignUp: FC<signUpProps> = ({}) => {
  const [state, dispatch] = useReducer(reducer, SIGN_UP);
  const [step, setStep] = useState<0 | 1>(0);

  return (
    <Card className="flex flex-col items-center gap-10 justify-self-center px-10 py-5 h-3/4 self-center overflow-auto scroll">
      <h2 className="font-bold">Sobre você</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <Input label="aa" />
      </div>
    </Card>
  );
};

export default SignUp;
