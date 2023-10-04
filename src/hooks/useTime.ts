import React from "react";

export const useTime = () => {
  const [hour, setHour] = React.useState<number>(0);
  const [minute, setMinute] = React.useState<number>(0);
  const [second, setSecond] = React.useState<number>(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date();
      setHour((date.getHours() / 24) * 360);
      setMinute((date.getMinutes() / 24) * 360);
      setSecond((date.getSeconds() / 24) * 360);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return { hour, minute, second };
};
