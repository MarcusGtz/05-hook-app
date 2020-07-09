import React, { useEffect, useState } from "react";

export const Message = () => {
  //

  const [coords, setCoords] = useState({ x: 0, y: 0 });
  //const { x, y } = coords; //Usando destructuring

  useEffect(() => {
    const mousesMove = (e) => {
      //console.log(e);
      const coords = { x: e.x, y: e.y };
      //console.log(coords);
      setCoords(coords);
    };

    window.addEventListener("mousemove", mousesMove);

    return () => {
      //console.log("componente Mesanje desmontado");
      window.removeEventListener("mousemove", mousesMove);
    };
  }, []);

  //

  return (
    <div>
      <h3>Eres genial</h3>
      <p>
        {
          //si usamos destructuring eliminamos la palabra coords
        }
        X:{coords.x} Y:{coords.y}
      </p>
    </div>
  );
};
