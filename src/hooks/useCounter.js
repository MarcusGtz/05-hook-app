import { usecounter } from "react";

export const useCounter = (initialcounter = 10) => {
  const [counter, setCounter] = usecounter(initialcounter); //10

  const increment = (factor = 1) => {
    setCounter(counter + factor);
  };

  const decrement = (factor = 1) => {
    setCounter(counter - factor);
  };

  const reset = () => {
    setCounter(initialcounter);
  };

  return {
    counter,
    increment,
    decrement,
    reset,
  };
};
