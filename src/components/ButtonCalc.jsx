import React from "react";


function ButtonCalc() {
  const calc = "comum";

  const handleButon = (event) => {
    const { target } = event;
    const { value } = target;

    let valor = value;

    if (valor !== "comum") {
      return (valor = "romano");
    }
  };
  return (
    <button type="button" className="btn" value="comum" onClick={handleButon}>
      {calc}{" "}
    </button>
  );
}

export default ButtonCalc;
