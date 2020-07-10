import React from "react";
import "../02-useEffect/effect.css";
import { useFetch } from "../../hooks/useFetch";
import { useCounterPara03 } from "../../hooks/useCounter-para-03";

export const MultipleCustomHooks = () => {
  const { counter, increment, decrement } = useCounterPara03(1);

  const { loading, data } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );

  const { author, quote, series } = !!data && data[0];
  //console.log(author, quote, series);

  return (
    <div>
      <h1>Breaking Bad</h1>
      <hr />

      {loading ? (
        <div className="alert alert-info text-center">loading..</div>
      ) : (
        <blockquote className="blockquote text-right">
          <p className="mb-0">{quote}</p>
          <h6 className="mb-0">Serie: {series}</h6>
          <footer className="blockquote-footer">{author}</footer>
        </blockquote>
      )}
      <button onClick={increment} className="btn btn-primary">
        Next
      </button>
      <br />
      <br />
      <button onClick={decrement} className="btn btn-primary">
        Preview
      </button>
    </div>
  );
};
