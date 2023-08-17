import { FC } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface SelectProps {}

const Select: FC<SelectProps> = ({}) => {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Selecione sua formação" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Formações possiveis</SelectLabel>
          <SelectItem value="psicologia">Psicologia</SelectItem>
          <SelectItem value="psiquiatria">Psiquiatria</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default Select;
