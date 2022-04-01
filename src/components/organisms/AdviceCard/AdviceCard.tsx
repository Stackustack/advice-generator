import { useQuery } from "react-query";
import axios from "axios";
import cn from "classnames";

import s from "./AdviceCard.module.scss";

import desktopDivider from "../../../assets/pattern-divider-desktop.svg";
import mobileDivider from "../../../assets/pattern-divider-mobile.svg";

import NextAdvice from "../../molecules/NextAdvice/NextAdvice";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
  border-radius: 15px;
  background-color: ${({ theme }) => theme.light.card.bg};
  padding: 40px 20px 80px;
  position: relative;
  margin: 0 10%;
  width: 90%;
  max-width: 600px;

  .dark & {
    background-color: ${({ theme }) => theme.dark.card.bg};
  }
`;

const Header = styled.h3`
  font-weight: 13px;
  font-weight: 800;
  color: ${({ theme }) => theme.light.card.header};
  transition: font-size 1s;

  .dark & {
    color: ${({ theme }) => theme.dark.card.header};
  }
`;

const LoadingHeader = styled(Header)`
  font-size: 30px;
`;

const Quote = styled.q`
  display: block;
  font-size: 28px;
  font-weight: 800;
  color: ${({ theme }) => theme.light.card.quote};
  text-align: center;
  opacity: 1;
  transition: opacity 300ms;

  .dark & {
    color: ${({ theme }) => theme.dark.card.quote};
  }
`;

const LoadingQuote = styled(Quote)`
  opacity: 0.2;
`;

const Divider = styled.div`
  background-image: url(${mobileDivider});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;

  width: 100%;
  height: 0;
  padding-top: calc(16 / 295 * 100%);

  @media (min-width: 600px) {
    background-image: url(${desktopDivider});
    padding-top: calc(16 / 444 * 100%);
  }
`;

const AdviceCard = () => {
  const fetchAdvice = async () => {
    const { data } = await axios.get("https://api.adviceslip.com/advice");
    return data.slip;
  };

  const { data, isError, isFetching, refetch } = useQuery(
    "advice",
    fetchAdvice,
    {
      refetchOnWindowFocus: false,
    }
  );

  if (isError) {
    return (
      <Wrapper>
        <Quote>Error...</Quote>
        <div className={s.divider} />
        <NextAdvice isLoading={isFetching} onClick={() => refetch()} />
      </Wrapper>
    );
  }

  if (isFetching) {
    return (
      <Wrapper>
        <LoadingHeader>Loading...</LoadingHeader>
        <LoadingQuote>Just a second...</LoadingQuote>
        <div className={s.divider} />
        <NextAdvice isLoading={isFetching} onClick={() => refetch()} />
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <Header>ADVICE #{data.id}</Header>
      <Quote>{data.advice}</Quote>
      <Divider />
      <NextAdvice isLoading={isFetching} onClick={() => refetch()} />
    </Wrapper>
  );
};

export default AdviceCard;
