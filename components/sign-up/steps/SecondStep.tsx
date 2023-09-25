import { FC } from "react";
import { useSignUp } from "@/context/sign-up";
import { useForm } from "react-hook-form";
import { secondStep, secondStepType } from "@/lib/validations/sign-up";
import { zodResolver } from "@hookform/resolvers/zod";
import Input from "@/components/Input";
import { Button } from "@/components/ui/button";

interface SecondStepProps {}

const SecondStep: FC<SecondStepProps> = ({}) => {
  const {
    register,
    control,
    formState: { errors },
    handleSubmit,
    getValues,
  } = useForm<secondStepType>({
    resolver: zodResolver(secondStep),
  });

  const { saveData } = useSignUp();

  return (
    <form
      onSubmit={handleSubmit(saveData)}
      className="flex flex-col px-10 gap-4 md:grid md:grid-cols-2"
    >
      <Input
        register={register}
        name={"zipCode"}
        error={errors.zipCode}
        className="md:col-span-2"
        label="CEP"
        placeholder="Digite seu CEP"
      />
      <Input
        register={register}
        name={"city"}
        error={errors.city}
        className="md:col-span-2"
        label="cidade"
        placeholder="Digite sua o nome da sua cidade"
      />
      <Input
        error={errors.neighborhood}
        label="bairro"
        className="md:col-span-2"
        placeholder="Digite seu bairro"
        register={register}
        name="neighborhood"
      />
      <Input
        error={errors.state}
        label="estado"
        className="md:col-span-2"
        placeholder="Digite seu estado"
        register={register}
        name="state"
      />
      <Input
        error={errors.street}
        label="logradouro (nome da rua)"
        className="md:col-span-2"
        placeholder="Digite sua rua"
        register={register}
        name="street"
      />
      <Input
        error={errors.number}
        label="numero"
        className="md:col-span-2"
        placeholder="Digite o numero do seu predio / casa"
        register={register}
        name="number"
      />
      <Input
        error={errors.floorNumber}
        label="numero do andar"
        className="md:col-span-2"
        placeholder="Digite o numero do seu apartamento"
        register={register}
        name="floorNumber"
        optional
      />
      <Button className="col-start-2 bg-primary-foreground hover:bg-primary hover:text-primary-foreground">
        Próximo
      </Button>
    </form>
  );
};

export default SecondStep;
