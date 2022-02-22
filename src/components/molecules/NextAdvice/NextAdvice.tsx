import Button from "../../atoms/Button/Button";
import diceIcon from "../../../assets/icon-dice.svg";
import cn from "classnames";

import s from "./NextAdvice.module.scss";

type NextAdviceType = {
  className: string;
  isLoading: boolean;
  onClick: () => {};
};

const NextAdvice = ({ className, isLoading, onClick }: NextAdviceType) => {
  return (
    <Button
      onClick={onClick}
      className={cn(className, s.nextAdvice, {
        [s[`nextAdvice--loading`]]: isLoading,
      })}
    >
      <img
        src={diceIcon}
        className={cn(s.icon, {
          [s[`icon--spinning`]]: isLoading,
        })}
        alt="Next Advice"
      />
    </Button>
  );
};

export default NextAdvice;
