// Para ver las dimenciones depues de que cargan los componentes
import React, { useLayoutEffect, useRef, useState } from "react";
import "./layout.css";
import { useFetch } from "../../hooks/useFetch";
import { useCounterPara03 } from "../../hooks/useCounter-para-03";

export const Layout = () => {
  const { counter, increment, decrement } = useCounterPara03(1);

  const { data } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );

  const { quote } = !!data && data[0];
  //console.log(author, quote, series);

  const pTag = useRef();
  const [boxSize, setboxSize] = useState({});

  useLayoutEffect(() => {
    setboxSize(pTag.current.getBoundingClientRect());
  }, [quote]);

  return (
    <div>
      <h1>LayoutEffect</h1>
      <hr />

      <blockquote className="blockquote text-right">
        <p className="mb-0" ref={pTag}>
          {quote}
        </p>
      </blockquote>

      <pre>
        {
          //Json por que quiero renderizar este objeto
          JSON.stringify(boxSize, null, 3)
        }
      </pre>

      <button onClick={increment} className="btn btn-primary">
        Next
      </button>
      <br />
      <br />
      {counter > 1 && (
        <button onClick={decrement} className="btn btn-primary">
          Preview
        </button>
      )}
    </div>
  );
};
