"use client";
import { FC } from "react";
import LottieReact, { LottieComponentProps } from "lottie-react";

interface LottieProps extends LottieComponentProps {}

const Lottie: FC<LottieProps> = ({ ...rest }) => {
  return <LottieReact {...rest} />;
};

export default Lottie;
