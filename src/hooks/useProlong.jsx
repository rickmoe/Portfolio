import { createEffect, createSignal, onCleanup } from "solid-js";

export default function useProlongBoolean(signal, delay) {
  const [prolonged, setProlonged] = createSignal(false);

  createEffect(
    () => {
      // TODO: Ensure this is only running when expected
      if (signal()) {
        setProlonged(true);
      } else {
        const timer = setTimeout(() => setProlonged(false), delay);
        onCleanup(() => clearTimeout(timer));
      }
    },
    { defer: true }
  );

  return prolonged;
}
