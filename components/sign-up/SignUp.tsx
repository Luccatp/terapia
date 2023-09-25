"use client";
import { FC } from "react";
import { Card } from "../ui/card";
import { ScrollArea } from "../ui/scroll-area";
import { useSignUp } from "@/context/sign-up";
import { FirstStep, SecondStep } from "./steps";
import ThirdStep from "./steps/ThirdStep";
import { UploadButton, UploadDropzone } from "@/lib/uploadthing";
import { Loader2 } from "lucide-react";
import { useToast } from "../ui/use-toast";

interface signUpProps {}

const SignUp: FC<signUpProps> = ({}) => {
  const { step, changeStep } = useSignUp();
  const { toast } = useToast();

  return (
    <div className="flex flex-col justify-center gap-10 mt-20">
      <div className="flex justify-center items-center gap-5">
        <circle
          className={`border-2 border-primary flex justify-center items-center h-10 w-10 rounded-full ${
            step === 0 && "bg-primary-foreground text-white"
          }`}
        >
          <span>1</span>
        </circle>
        <circle className="bg-primary-foreground h-1 w-1 rounded-full"></circle>
        <circle className="bg-primary-foreground h-1 w-1 rounded-full"></circle>
        <circle className="bg-primary-foreground h-1 w-1 rounded-full"></circle>
        <circle
          className={`border-2 border-primary flex justify-center items-center h-10 w-10 rounded-full ${
            step === 1 && "bg-primary-foreground text-white"
          }`}
        >
          <span>2</span>
        </circle>
        <circle className="bg-primary-foreground h-1 w-1 rounded-full"></circle>
        <circle className="bg-primary-foreground h-1 w-1 rounded-full"></circle>
        <circle className="bg-primary-foreground h-1 w-1 rounded-full"></circle>
        <circle
          className={`border-2 border-primary flex justify-center items-center h-10 w-10 rounded-full ${
            step === 2 && "bg-primary-foreground text-white"
          }`}
        >
          <span>3</span>
        </circle>
      </div>
      <Card className="flex flex-col items-center gap-10 justify-self-center py-5 h-[26rem] self-center">
        <ScrollArea className="w-full md:min-w-[40rem] h-full">
          {step === 0 && <FirstStep />}
          {step === 1 && <SecondStep />}
          {step === 2 && <ThirdStep />}
          {step === 3 && (
            <div className="flex flex-col items-center justify-evenly h-80 w-full">
              <div className="flex flex-col gap-2 items-center">
                <h2 className="font-bold">
                  Adicione uma imagem para o seu perfil
                </h2>
                <span>
                  Os usuarios que adicionam imagem tem uma aceitação melhor do
                  publico
                </span>
              </div>
              <UploadButton
                className="bg-gray-400 px-4 rounded-2xl hover:cursor-pointer hover:bg-gray-300"
                endpoint="imageUploader"
                content={{
                  button: "Clique aqui para adicionar uma imagem",
                }}
                onClientUploadComplete={(data) => {
                  fetch("/api/user/upload-image", {
                    method: "POST",
                    body: JSON.stringify({
                      image: data,
                      email: JSON.parse(window.localStorage.getItem("signUp")!)
                        .email,
                    }),
                  })
                    .then((res) => res.json())
                    .then((res) => {
                      toast({
                        title: res.message ?? "Imagem adicionada com sucesso",
                      });
                    })
                    .catch((err) => {
                      toast({
                        variant: "destructive",
                        title: err.message ?? "Erro ao adicionar imagem",
                      });
                    });
                }}
              />
            </div>
          )}
        </ScrollArea>
      </Card>
    </div>
  );
};

export default SignUp;
