import Button from "../../atoms/Button/Button";
import diceIcon from "../../../assets/icon-dice.svg";
import cn from "classnames";

import s from "./NextAdvice.module.scss";
import styled from "styled-components";

type NextAdviceType = {
  isLoading: boolean;
  onClick: () => {};
};

const StyledButton = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  background-color: ${({ theme }) => theme.light.button.bg};
  border-radius: 40px;
  transition: all 0.2s ease-in-out;

  position: absolute;
  bottom: -40px;

  &:hover {
    background-color: ${({ theme }) => theme.light.button.bgHover};
    border-radius: 30px;
  }

  .dark & {
    background-color: ${({ theme }) => theme.dark.button.bg};

    &:hover {
      background-color: ${({ theme }) => theme.dark.button.bgHover};
    }
  }
`;

const NextAdvice = ({ isLoading, onClick }: NextAdviceType) => {
  return (
    <StyledButton
      onClick={onClick}
      className={cn(s.nextAdvice, {
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
    </StyledButton>
  );
};

export default NextAdvice;
