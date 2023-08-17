"use client";
import { Label } from "@radix-ui/react-label";
import { FC } from "react";
import {
  InputProps as ShadcUIInputProps,
  Input as ShadcInput,
} from "@/components/ui/input";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

interface InputProps extends ShadcUIInputProps {
  label: string;
  type?: "text" | "password" | "email" | "number";
  className?: string;
}

const PasswordInput = ({
  label,
  type = "text",
  className,
  ...rest
}: InputProps) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <>
      <ShadcInput
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
    </>
  );
};

const Input: FC<InputProps> = ({
  label,
  type = "text",
  className,
  ...rest
}) => {
  return (
    <div className={`grid w-full items-center gap-1.5 ${className}`}>
      <Label className="text-gray-700" htmlFor={label}>
        {label}
      </Label>
      <div className="flex  items-center gap-4">
        {type === "password" ? (
          <PasswordInput
            className="rounded-xl"
            {...rest}
            label={label}
            type={type}
          />
        ) : (
          <ShadcInput className="rounded-xl" {...rest} id={label} type={type} />
        )}
      </div>
    </div>
  );
};

export default Input;
