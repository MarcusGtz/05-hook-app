import React, { useRef } from "react";
import "../02-useEffect/effect.css";

export const FocusScreen = () => {
  const inputRef = useRef();

  const handleClick = () => {
    // document.querySelector("input").select();
    inputRef.current.select(); //lo mismo que querySelector
  };

  return (
    <div>
      <h1>Focus screen</h1>
      <hr />

      <input ref={inputRef} placeholder="Su combre" className="form-control" />

      <button onClick={handleClick} className="btn btn-outline-primary mt-5">
        Focus
      </button>
    </div>
  );
};
