import Lottie from "@/components/layout/Lottie";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { FC } from "react";
import SignUp from "@/components/sign-up/SignUp";
import { SignUpProvider } from "@/context/sign-up";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";

interface pageProps {}

const Page: FC<pageProps> = ({}) => {
  return (
    <main className="flex w-full h-screen items-center justify-center">
      <section className="grid w-full h-screen overflow-auto justify-center">
        <SignUpProvider>
          <SignUp />
        </SignUpProvider>
      </section>
      <aside></aside>
    </main>
  );
};

export default Page;
