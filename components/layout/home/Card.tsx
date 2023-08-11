import { FC } from "react";
import { Card as ShadcnCard } from "@/components/ui/card";

interface CardProps {
  icon: React.ReactNode;
  text: string;
  title: string;
}

const Card: FC<CardProps> = ({ icon, text, title }) => {
  return (
    <ShadcnCard className="p-4 flex flex-col gap-2 lg:min-h-[14rem]">
      <div className="flex gap-2 items-center ">
        {icon}
        <h3 className="font-semibold">{title}</h3>
      </div>
      <p>{text}</p>
    </ShadcnCard>
  );
};

export default Card;
