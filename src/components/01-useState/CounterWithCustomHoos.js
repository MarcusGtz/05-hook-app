import React from "react";
import { useCounter } from "../../hooks/useCounter";
import "./counter.css";

export const CounterWithCustomHoos = () => {
  //destructuring
  const { state, increment, decrement, reset } = useCounter(100);

  return (
    <>
      <h1>Counter with Hook {state}</h1>
      <hr />

      <button onClick={() => increment()} className="btn btn-primary ">
        +1
      </button>
      <button onClick={() => decrement(2)} className="btn btn-primary">
        -1
      </button>
      <button onClick={reset}>Reset</button>
    </>
  );
};
