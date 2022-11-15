import React, { useState } from "react";
import "../styles/calculadoras.css";

// dica do Denny, ler sobre Eval()
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/eval
function CalcComum() {
  const [results, setResults] = useState(0);
  const [operador, setOperador] = useState("");
  const [number1, setNumber1] = useState("");

  const submitOper = ({ target: { value } }) => {
    setOperador(value);
    setNumber1(Number(results));
    setResults(0);
    btnIgual();
  };

  console.log(`number 1:${number1}, operador escolhido: ${operador}`);

  const btnIgual = () => {
    let total = 0;
    if (operador === "+") {
      total = Number(results) + Number(number1);
    } else if (operador === "-") {
      total = Number(results) - Number(number1);
    } else if (operador === "*") {
      total = Number(results) * Number(number1);
    } else if (operador === "/") {
      total = Number(results) / Number(number1);
    }
    setResults(Number(total));
  };

  const btnClear = () => {
    setNumber1("");
    setResults(0);
    setOperador("");
  };

  const handleResults = ({ target: { value } }) => {
    setNumber1(results);
    if (results === 0) {
      setResults(value);
    } else {
      setResults(results + value);
    }
  };

  return (
    <div>
      <h1>Calculadora</h1>
      <div className="calculator card">
        <input
          type="text"
          className="calculator-screen z-depth-1"
          disabled={true}
          placeholder={results}
        />

        <div class="calculator-keys">
          <button
            type="button"
            className="operator btn btn-info"
            value="+"
            onClick={submitOper}
          >
            +
          </button>

          <button
            type="button"
            className="operator btn btn-info"
            value="-"
            onClick={submitOper}
          >
            -
          </button>

          <button
            type="button"
            className="operator btn btn-info"
            value="*"
            onClick={submitOper}
          >
            &times;
          </button>

          <button
            type="button"
            className="operator btn btn-info"
            value="/"
            onClick={submitOper}
          >
            &divide;
          </button>

          <button
            className="btn btn-light waves-effect"
            type="button"
            onClick={handleResults}
            value="7"
          >
            7
          </button>
          <button
            className="btn btn-light waves-effect"
            type="button"
            onClick={handleResults}
            value="8"
          >
            8
          </button>
          <button
            className="btn btn-light waves-effect"
            type="button"
            onClick={handleResults}
            value="9"
          >
            9
          </button>

          <button
            className="btn btn-light waves-effect"
            type="button"
            onClick={handleResults}
            value="4"
          >
            4
          </button>
          <button
            className="btn btn-light waves-effect"
            type="button"
            onClick={handleResults}
            value="5"
          >
            5
          </button>
          <button
            className="btn btn-light waves-effect"
            type="button"
            onClick={handleResults}
            value="6"
          >
            6
          </button>

          <button
            className="btn btn-light waves-effect"
            type="button"
            onClick={handleResults}
            value="1"
          >
            1
          </button>
          <button
            className="btn btn-light waves-effect"
            type="button"
            onClick={handleResults}
            value="2"
          >
            2
          </button>
          <button
            className="btn btn-light waves-effect"
            type="button"
            onClick={handleResults}
            value="3"
          >
            3
          </button>

          <button
            className="btn btn-light waves-effect"
            type="button"
            onClick={handleResults}
            value="0"
          >
            0
          </button>
          <button className="decimal function btn btn-secondary">.</button>
          <button
            className="all-clear function btn btn-danger btn-sm"
            onClick={btnClear}
          >
            AC
          </button>
          <button
            className="equal-sign operator btn btn-default"
            onClick={btnIgual}
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default CalcComum;
