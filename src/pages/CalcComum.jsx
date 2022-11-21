import React, { useState } from "react";
import "../styles/calculadoras.css";

// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/eval
function CalcComum() {
  const [results, setResults] = useState('0');
  const [expression, setExpression] = useState('');
  
 
  console.log(`results: ${results}, expression: ${expression}`);
  const btnIgual = () => {
    setResults(eval(`${results}`));
  };

  const btnClear = () => {
    setExpression('');
    setResults('');
    
  };
  
  const handleResults = ({ target: { value } }) => {
    setResults(results+ value);
  };

  return (
    <div className="h-100 d-flex align-items-center justify-content-center">
      <div className="calculator card">
        <input
          type="text"
          className="calculator-screen z-depth-1"
          disabled={true}
          placeholder={results}
        />

        <div className="calculator-keys">
          <button
            type="button"
            className="operator btn btn-info"
            value="+"
            onClick={handleResults}
          >
            +
          </button>

          <button
            type="button"
            className="operator btn btn-info"
            value="-"
            onClick={handleResults}
          >
            -
          </button>

          <button
            type="button"
            className="operator btn btn-info"
            value="*"
            onClick={handleResults}
          >
            &times;
          </button>

          <button
            type="button"
            className="operator btn btn-info"
            value="/"
            onClick={handleResults}
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
          <button className="decimal function btn btn-secondary" value="." onClick={handleResults}>.</button>
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
