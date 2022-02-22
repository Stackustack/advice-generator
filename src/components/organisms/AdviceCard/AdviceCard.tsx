import { useQuery } from "react-query";
import axios from "axios";
import cn from "classnames";

import s from "./AdviceCard.module.scss";

import NextAdvice from "../../molecules/NextAdvice/NextAdvice";

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

  const nextAdviceButton = (
    <NextAdvice
      isLoading={isFetching}
      onClick={() => refetch()}
      className={s.nextAdvice}
    />
  );

  if (isError) {
    return (
      <div className={s.adviceCard}>
        <q className={s.q}>Error...</q>
        <div className={s.divider} />
        {nextAdviceButton}
      </div>
    );
  }

  if (isFetching) {
    return (
      <div className={s.adviceCard}>
        <h3 className={cn(s.h3, s.h3Loading)}>Loading...</h3>
        <q className={cn(s.q, s.qLoading)}>Just a second...</q>
        <div className={s.divider} />
        {nextAdviceButton}
      </div>
    );
  }

  return (
    <div className={s.adviceCard}>
      <h3 className={s.h3}>ADVICE #{data.id}</h3>
      <q className={s.q}>{data.advice}</q>
      <div className={s.divider} />
      {nextAdviceButton}
    </div>
  );
};

export default AdviceCard;
