import { useEffect, useState } from 'react';

export const useClock = (timeLimit: number) => {
  const [clock, setClock] = useState<NodeJS.Timer | undefined>();

  const [timeNow, setTimeNow] = useState<number>(0);
  const [timeStart, setTimeStart] = useState<number>(0);
  const [savedTime, setSavedTime] = useState<number>(0);

  const countTime = Math.floor((timeNow - timeStart) / 1000);
  const timeRest = timeLimit - countTime - savedTime;

  useEffect(() => {
    if (timeRest <= 0) {
      clearInterval(clock);
    }
  }, [timeRest]);

  const updateTime = () => {
    setTimeNow(new Date().getTime());
  };

  const startHandler = () => {
    if (clock) return restartHandler();

    setTimeStart(new Date().getTime());
    setTimeNow(new Date().getTime());
    setClock(setInterval(updateTime, 1000));
  };

  const restartHandler = () => {
    if (clock) clearInterval(clock);

    setSavedTime(0);
    setTimeStart(0);
    setTimeNow(0);
    setClock(undefined);
  };

  const pauseHandler = () => {
    if (timeRest <= 0) return;

    const newSavedTime = savedTime + countTime;
    setSavedTime(newSavedTime);
    if (clock) clearInterval(clock);
    setTimeStart(0);
    setTimeNow(0);
    setClock(undefined);
  };

  return {
    clock,
    startHandler,
    pauseHandler,
    restartHandler,
    timeRest
  };
};
