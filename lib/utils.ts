import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface GenericAction<Type = string, Payload = any> {
  type: Type;
  payload: Payload;
}
