import { Brain } from "lucide-react";
import { FC } from "react";
import { Button } from "../ui/button";
import NavigationLink from "./NavigationLink";
import Link from "next/link";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
  return (
    <nav
      className="flex fixed w-full justify-between items-center px-10 h-16 bg-opacity-30 border-b border-gray-200 backdrop-filter backdrop-blur-lg shadow-sm z-50"
      role="navigation"
    >
      <Brain className="h-8 w-8 stroke-1" />
      <div className="hidden sm:grid grid-flow-col items-center gap-6">
        <NavigationLink href="/sou-terapeuta">Sou Terapeuta</NavigationLink>
        <NavigationLink href="/shrink/login">Sobre Nós</NavigationLink>
        <Link href="/shrink/login">
          <Button variant={"outline"}>Encontre seu terapeuta</Button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
