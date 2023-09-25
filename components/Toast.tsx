"use client";
import { FC } from "react";

interface ToastProps {
  message: string;
  status: "success" | "error";
}

const Toast: FC<ToastProps> = ({ message, status }) => {
  return <div>Toast</div>;
};

export default Toast;
