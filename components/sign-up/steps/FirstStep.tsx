"use client";
import { Dispatch, FC, use, useEffect } from "react";
import Input from "../../Input";
import { useForm } from "react-hook-form";
import {
  firstStep,
  firstStepType,
  signUpSchemaType,
} from "@/lib/validations/sign-up";
import DatePicker from "../../DatePicker";
import { UploadButton } from "@/lib/uploadthing";
import { Button } from "../../ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSignUp } from "@/context/sign-up";

interface FirstStepProps {}

const FirstStep: FC<FirstStepProps> = ({}) => {
  const {
    register,
    control,
    formState: { errors },
    handleSubmit,
    getValues,
  } = useForm<firstStepType>({
    resolver: zodResolver(firstStep),
  });

  const { saveData } = useSignUp();

  return (
    <div className="flex gap-8 flex-col">
      <h2 className="font-bold text-center w-full">Sobre você</h2>

      <form
        onSubmit={handleSubmit(saveData)}
        className="flex flex-col px-2 sm:px-10 gap-4 md:grid md:grid-cols-2"
      >
        <Input
          register={register}
          name="fullName"
          error={errors.fullName}
          className="md:col-span-2"
          label="nome completo"
          placeholder="Digite seu Nome"
        />
        <Input
          error={errors.email}
          label="email"
          className="md:col-span-2"
          placeholder="Digite seu email"
          type="email"
          register={register}
          name="email"
        />
        <Input
          error={errors.password}
          label="senha"
          type="password"
          className="md:col-span-2"
          placeholder="Digite sua senha"
          register={register}
          name="password"
        />
        <DatePicker control={control} />
        <Button className="col-start-2 row-start-5 bg-primary-foreground hover:bg-primary hover:text-primary-foreground">
          Próximo
        </Button>
      </form>
    </div>
  );
};

export default FirstStep;
