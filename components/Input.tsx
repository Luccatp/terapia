"use client";
import { Label } from "@radix-ui/react-label";
import { FC } from "react";
import {
  InputProps as ShadcUIInputProps,
  Input as ShadcInput,
} from "@/components/ui/input";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { FieldError, UseFormRegister } from "react-hook-form";

interface InputProps extends ShadcUIInputProps {
  label: string;
  register: UseFormRegister<any>;
  name: string;
  className?: string;
  error?: FieldError;
  optional?: boolean;
}

const PasswordInput = ({
  label,
  type = "text",
  className,
  register,
  name,
  error,
  ...rest
}: InputProps) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="flex gap-4">
      <ShadcInput
        {...register(name)}
        className="rounded-xl"
        {...rest}
        id={label}
        type={showPassword ? "text" : type}
      />
      <div className="text-gray-700 text-sm">
        {!showPassword ? (
          <Eye
            className="hover:cursor-pointer"
            onClick={() => setShowPassword(!showPassword)}
          />
        ) : (
          <EyeOff
            className="hover:cursor-pointer"
            onClick={() => setShowPassword(!showPassword)}
          />
        )}
      </div>
    </div>
  );
};

const Input: FC<InputProps> = ({
  label,
  type = "text",
  className,
  error,
  register,
  name,
  optional,
  ...rest
}) => {
  return (
    <div className={`grid w-full items-center gap-1.5 ${className}`}>
      <Label className="text-gray-700" htmlFor={label}>
        {label} {optional && <span className="mr-2 text-xs">opcional</span>}
      </Label>
      <div className="flex flex-col gap-1">
        {type === "password" ? (
          <PasswordInput
            register={register}
            name={name}
            className="rounded-xl relative"
            {...rest}
            label={label}
            type={type}
          />
        ) : (
          <ShadcInput
            className="rounded-xl relative"
            {...register(name)}
            {...rest}
            id={label}
            type={type}
          />
        )}
        {error && <span className="text-red-500 text-xs">{error.message}</span>}
      </div>
    </div>
  );
};

export default Input;
