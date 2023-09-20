import { useEffect, useState } from "react";

export const useProlong = (input: boolean, delayMs: number) => {
  const [prolonged, setProlonged] = useState(input);

  useEffect(() => {
    if (input) setProlonged(true);
    else {
      const timer = setTimeout(() => setProlonged(false), delayMs);

      return () => clearTimeout(timer);
    }
  }, [input]);

  return prolonged;
};
