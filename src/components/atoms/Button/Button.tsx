import { ReactNode } from "react";
import cn from "classnames";
import s from "./Button.module.scss";

type ButtonTypes = {
  onClick?: () => void;
  children: ReactNode;
  className?: string;
};

const Button = ({ onClick, children, className }: ButtonTypes) => {
  return (
    <button className={cn(s.button, className)} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
