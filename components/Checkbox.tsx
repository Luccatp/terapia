"use client";

import { Checkbox as ShadcnCheckbox } from "@/components/ui/checkbox";
import { FieldValues, Path, UseFormRegister } from "react-hook-form";

interface CheckboxProps {
  label: string;
  className?: string;
  name: string;
  register: UseFormRegister<any>;
}

function Checkbox({ name, label, className, register }: CheckboxProps) {
  return (
    <div className="flex items-center space-x-2">
      <ShadcnCheckbox value={label} id={name} {...register(name)} />
      <label
        htmlFor={name}
        className={`text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ${className}`}
      >
        {label}
      </label>
    </div>
  );
}

export default Checkbox;
