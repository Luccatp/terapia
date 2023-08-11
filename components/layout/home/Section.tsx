import { FC } from "react";

interface SectionProps extends React.HTMLProps<HTMLDivElement> {
  children: React.ReactNode;
}

const Section: FC<SectionProps> = ({ children, className, ...rest }) => {
  return (
    <section
      {...rest}
      className={`px-10 sm:px-20 lg:px-36 w-full ${className}`}
    >
      {children}
    </section>
  );
};

export default Section;
