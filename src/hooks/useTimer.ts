import { useEffect, useState } from "react";

export function useTimer() {
  const [countdown, setCountdown] = useState(30);

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      if (countdown > 0) {
        return setCountdown((countdown) => countdown - 1);
      }
      clearInterval(countdownInterval);
    }, 1000);
    return () => clearInterval(countdownInterval);
  }, [countdown]);

  return {
    countdown,
    setCountdown,
  };
}
