import { FC } from "react";
import {
  Select as ShadcnSelect,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Control, Controller } from "react-hook-form";
import { thirdStepType } from "@/lib/validations/sign-up";
import { Label } from "../ui/label";

interface SelectProps {
  control: Control<thirdStepType>;
}

const Select: FC<SelectProps> = ({ control }) => {
  return (
    <Controller
      control={control}
      name="education"
      render={({ field, fieldState }) => (
        <div>
          <Label htmlFor="education" className="text-gray-700">
            Formação
          </Label>
          <ShadcnSelect onValueChange={field.onChange} {...field}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Selecione sua formação" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Formações possiveis</SelectLabel>
                <SelectItem value="psychologist">Psicologia</SelectItem>
                <SelectItem value="psychiatrist">Psiquiatria</SelectItem>
              </SelectGroup>
            </SelectContent>
          </ShadcnSelect>
          {fieldState.error && (
            <span className="text-red-500 text-xs">
              {fieldState.error.message}
            </span>
          )}
        </div>
      )}
    />
  );
};

export default Select;
