import { FC, use } from "react";
import { useSignUp } from "@/context/sign-up";
import { get, useForm } from "react-hook-form";
import { thirdStep, thirdStepType } from "@/lib/validations/sign-up";
import { zodResolver } from "@hookform/resolvers/zod";
import Input from "@/components/Input";
import { Button } from "@/components/ui/button";
import Select from "../Select";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@radix-ui/react-label";
import Checkbox from "@/components/Checkbox";

interface ThirdStepProps {}

const ThirdStep: FC<ThirdStepProps> = ({}) => {
  const {
    register,
    control,
    formState: { errors },
    handleSubmit,
    getValues,
  } = useForm<thirdStepType>({
    resolver: zodResolver(thirdStep),
  });

  const { finishQuestionary } = useSignUp();

  return (
    <form
      onSubmit={handleSubmit(finishQuestionary)}
      className="flex flex-col px-10 gap-4 md:grid md:grid-cols-2"
    >
      <Input
        register={register}
        name={"phoneNumber"}
        error={errors.phoneNumber}
        className="md:col-span-2"
        label="numero de celular"
        placeholder="Digite seu numero de celular"
      />
      <div className="grid gap-2 md:col-span-2">
        <Label htmlFor="description" className="text-gray-700">
          Dias disponiveis para atendimento
        </Label>
        <Checkbox register={register} label="Segunda" name="daysAvailable[0]" />
        <Checkbox register={register} label="Terça" name={"daysAvailable[1]"} />
        <Checkbox
          register={register}
          label="Quarta"
          name={"daysAvailable[2]"}
        />
        <Checkbox
          register={register}
          label="Quinta"
          name={"daysAvailable[3]"}
        />
        <Checkbox register={register} label="Sexta" name={"daysAvailable[4]"} />
        {errors.daysAvailable && (
          <span className="text-red-500 text-xs">
            {getValues("daysAvailable")}
            {errors.daysAvailable.message}
          </span>
        )}
      </div>
      <div className="grid gap-2 md:col-span-2">
        <Label htmlFor="description" className="text-gray-700">
          se discreva como profissional
        </Label>
        <Textarea
          className="resize-none"
          placeholder="Digite a sua descrição"
          id="description"
          {...register("description")}
        />
        {errors.description && (
          <span className="text-red-500 text-xs">
            {errors.description.message}
          </span>
        )}
      </div>
      <Select control={control} />
      <Input
        error={errors.price}
        label="preço"
        type="number"
        className="md:col-span-2"
        placeholder="Digite o preço da sua consulta"
        register={register}
        name="price"
      />
      <Input
        error={errors.registerNumber}
        label={"numero de registro (CRM / CRP)"}
        type="number"
        className="md:col-span-2"
        placeholder="Digite seu numero de registro válido"
        register={register}
        name="registerNumber"
      />
      <Input
        error={errors.expertise}
        label="area de expertise"
        className="md:col-span-2"
        placeholder="Psicopatologia, Psicanalise, etc..."
        register={register}
        name="expertise"
      />
      <Button className="mt-5 col-start-2 bg-primary-foreground hover:bg-primary hover:text-primary-foreground">
        Criar minha conta!
      </Button>
    </form>
  );
};

export default ThirdStep;
