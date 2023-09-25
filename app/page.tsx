import NavigationLink from "@/components/layout/NavigationLink";
import Section from "@/components/layout/home/Section";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Brain, BrainCog, Smile } from "lucide-react";
import Link from "next/link";
import Card from "@/components/layout/home/Card";
import Lottie from "@/components/layout/Lottie";
import { BrainEngine, LocationDot, brainOutline } from "@/lib/lottieExports";

export default function Home() {
  return (
    <div className="flex flex-col">
      <main className="">
        <Section className="flex flex-col items-center mt-10 justify-center h-screen">
          <div className="grid auto-rows-auto gap-4 md:grid-cols-2 md:grid-rows-3">
            <div className="md:row-span-2 md:self-center md:gap-2 md:grid">
              <h1 className="text-5xl font-bold text-center text-gray-800 lg:text-7xl">
                Saúde Mental é a da sua vida
              </h1>
              <h2 className="hidden sm:block text-center lg:text-xl">
                Tome controle da sua vida hoje!
              </h2>
            </div>
            <Button className="h-12 sm:text-lg">
              Encontre seu terapeuta <ArrowUpRight className="ml-4" />
            </Button>
            <Lottie
              animationData={BrainEngine}
              className="w-48 row-start-2 justify-self-center md:row-span-3 md:row-start-1 md:col-start-2 md:w-4/5"
            />
          </div>
        </Section>
        <Section className="grid grid-flow-row gap-8 bg-accent-foreground py-10 lg:grid-flow-col">
          <div className="flex flex-col gap-4">
            <h2 className="text-5xl">
              Ache a pessoa que irá te guiar pela sua jornada
            </h2>
            <span className="text-3xl font-extralight">
              Nós te ajudamos com essa tarefa
            </span>
            <Lottie
              animationData={brainOutline}
              className="h-64 sm:hidden lg:block self-start"
            />
          </div>
          <div className=" grid grid-flow-row gap-3 lg:grid-cols-2">
            <Card
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed"
              title="Lorem ipsum dolor sit amet"
              icon={<Smile className="h-8 w-8 stroke-1" />}
            />
            <Card
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed"
              title="Lorem ipsum dolor sit amet"
              icon={<Smile className="h-8 w-8 stroke-1" />}
            />
            <Card
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed"
              title="Lorem ipsum dolor sit amet"
              icon={<Smile className="h-8 w-8 stroke-1" />}
            />
            <Card
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed"
              title="Lorem ipsum dolor sit amet"
              icon={<Smile className="h-8 w-8 stroke-1" />}
            />
          </div>
        </Section>
        <Section className="grid grid-rows-2 pt-36 pb-20 bg-accent-foreground sm:grid-cols-2 sm:grid-rows-1">
          <div className="flex flex-col gap-4">
            <h2 className="text-4xl sm:text-5xl">
              Os melhores profissionais na palma da sua mão
            </h2>
            <span className="text-3xl font-extralight">
              Você tem a oportunidade de olhar uma gama de profissionais e
              julgar qual é o mais qualificado para você
            </span>
          </div>
          <Lottie animationData={LocationDot} className="h-64 sm:self-center" />
        </Section>
        <Section className="flex flex-col mt-28 gap-10 items-center">
          <div className="flex flex-col items-center gap-4">
            <h2 className="text-6xl text-center">
              A sua qualidade de vida depende somente de você
            </h2>
            <span>
              Esperamos que você tome a melhor decisão e estamos aqui para
              auxilia-lo nesse caminho
            </span>
          </div>
          <Button className="text-4xl px-20 py-10">Junte-se a nós</Button>
        </Section>
      </main>
      <footer className="mt-40 h-64 bg-accent-foreground"></footer>
    </div>
  );
}
