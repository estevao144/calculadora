import React, { useState } from "react";
import '../styles/calculadoras.css';

function CalcComum() {
  const [results, setResults] = useState([]);
  const [operador, setOperador] = useState('');
  

  // const submitOper = (event) => {
  //   const {target:{value}} = event;
  //   if (value === '+') {
      
  //   }
  // }
  

  const handleResults = ({target:{value}}) => {
    console.log(results);

    setResults(...results, value);

  };


  return (
    <div>
      <h1>Calculadora</h1>
      <div>
        <div className="display-calc">
          <div>{ results }</div>
        </div>
        <div className="operadores">
          <button
          type="button"
          value="+"
          onClick={ operador }>+
          </button>
          
          <button
          type="button"
          value="-"
          onClick={ operador }>-
          </button>

          <button
          type="button"
          value="*"
          onClick={ operador }>*
          </button>

          <button
          type="button"
          value="/"
          onClick={ operador }>/
          </button>
          </div>

        <div className="numbers">
            <div>
          <button className="btn-num" type="button" onClick={handleResults} value='7' >7</button>
          <button className="btn-num" type="button" onClick={handleResults} value='8' >8</button>
          <button className="btn-num" type="button" onClick={handleResults} value='9' >9</button>
          </div>
          
          <div>
          <button className="btn-num" type="button" onClick={handleResults} value='4' >4</button>
          <button className="btn-num" type="button" onClick={handleResults} value='5' >5</button>
          <button className="btn-num" type="button" onClick={handleResults} value='6' >6</button>
          </div>
          <div>
          <button className="btn-num" type="button" onClick={handleResults} value='1' >1</button>
          <button className="btn-num" type="button" onClick={handleResults} value='2' >2</button>
          <button className="btn-num" type="button" onClick={handleResults} value='3' >3</button>
          </div>
          <div>
          <button className="btn-num" type="button" onClick={handleResults} value="0" >0</button>
          <button className="decimal">.</button>
          <button className="resultado">=</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CalcComum;
