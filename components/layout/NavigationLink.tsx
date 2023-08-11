import Link, { LinkProps } from "next/link";
import { FC } from "react";
import { Button } from "../ui/button";

interface NavigationLinkProps extends LinkProps {
  children: React.ReactNode;
}

const NavigationLink: FC<NavigationLinkProps> = ({ children, ...rest }) => {
  return (
    <Link {...rest}>
      <Button variant={"link"}>{children}</Button>
    </Link>
  );
};

export default NavigationLink;
