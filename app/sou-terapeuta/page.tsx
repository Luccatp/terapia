import Lottie from "@/components/layout/Lottie";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { FC } from "react";
import brainGear from "@/public/lottie/brainGear.json";
import Input from "@/components/Input";
import { Label } from "@radix-ui/react-label";
import SignUp from "@/components/sign-up/SignUp";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <main className="flex w-full h-screen items-center justify-center">
      <section className="grid md:grid-cols-2 w-full justify-center">
        <SignUp />
        <Lottie
          animationData={brainGear}
          className="hidden md:block w-1/2 justify-self-center"
        />
      </section>
      <aside></aside>
    </main>
  );
};

export default page;
