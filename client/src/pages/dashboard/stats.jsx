import React, { useEffect } from "react";
import { useAppContext } from "../../context/appContext";
import StatsContainer from "../../components/stats-container";
import ChartsContainer from "../../components/charts-container";
import Loading from "../../components/loading";

const Stats = () => {
  const { showStats, isLoading, monthlyApplications } = useAppContext();

  useEffect(() => {
    showStats();
  }, []);

  if (isLoading) {
    return <Loading center />;
  }

  return (
    <>
      <StatsContainer />
      {monthlyApplications.length > 0 && <ChartsContainer />}
    </>
  );
};

export default Stats;
