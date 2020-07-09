import React, { useEffect } from "react";

export const Message = () => {
  useEffect(() => {
    console.log("componente Mesanje montado");

    return () => {
      console.log("componente Mesanje desmontado");
    };
  }, []);

  return (
    <div>
      <h3>Eres genial</h3>
    </div>
  );
};
