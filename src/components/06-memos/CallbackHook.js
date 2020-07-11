import React, { useState, useCallback } from "react";
import "../02-useEffect/effect.css";
import { ShowIncrement } from "./ShowIncrement";

export const CallbackHook = () => {
  const [counter, setcounter] = useState(10);

  //   const increment = () => {
  //     setcounter(counter + 1);
  //   };

  const increment = useCallback(
    (num) => {
      setcounter((c) => c + num);
    },
    [setcounter]
  );

  return (
    <div>
      <h1>UseCallBack Hook: {counter}</h1>
      <hr />

      <ShowIncrement increment={increment} />
    </div>
  );
};
