import { FC } from "react";
import { Button } from "./ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Calendar } from "./ui/calendar";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import {
  Control,
  Controller,
  ControllerProps,
  UseFormRegister,
} from "react-hook-form";
import ptBR from "date-fns/locale/pt-BR";
import { firstStepType, signUpSchemaType } from "@/lib/validations/sign-up";
import { cn } from "@/lib/utils";
import { error } from "console";

interface DatePickerProps {
  control: Control<firstStepType>;
}

const DatePicker: FC<DatePickerProps> = ({ control }) => {
  return (
    <div className="flex flex-col gap-2 md:self-end">
      <Label htmlFor="birthday" className="text-gray-600">
        Data de nascimento
      </Label>
      <Controller
        control={control}
        name="birthday"
        render={({ field, fieldState }) => (
          <div className="relative">
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-[280px] justify-start text-left font-normal",
                    !field.value && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {field.value ? (
                    format(field.value, "dd/MMM/yyyy", { locale: ptBR })
                  ) : (
                    <span>Selecione uma data</span>
                  )}
                </Button>
                {}
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  locale={ptBR}
                  mode="single"
                  onSelect={(d) => field.onChange(d)}
                  selected={field.value}
                  initialFocus
                  captionLayout="dropdown-buttons"
                  fromYear={new Date().getFullYear() - 100}
                  toYear={new Date().getFullYear() - 18}
                />
              </PopoverContent>
            </Popover>
            {fieldState.error && (
              <span className="text-red-500 text-xs absolute top-11 left-0">
                {fieldState.error.message}
              </span>
            )}
          </div>
        )}
      />
    </div>
  );
};

export default DatePicker;
