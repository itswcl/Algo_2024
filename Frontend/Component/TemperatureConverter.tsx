/**
 * body {
  font-family: sans-serif;
}

.table {
  display: flex;
}

.temp {
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
}
 */

import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const [c, setC] = useState("");
  const [f, setF] = useState("");

  const handleCOnChange = (e) => {
    const newVal = e.target.value;
    setC(newVal);
    getConverted(newVal, setF, (value) => (value * 9) / 5 + 32);
  };

  const handleEOnChange = (e) => {
    const newVal = e.target.value;
    setF(newVal);
    getConverted(newVal, setC, (value) => ((value - 32) * 5) / 9);
  };

  const getConverted = (value, setFormat, formula) => {
    const number = Number(value);
    const isValid = !Number.isNaN(number);
    setFormat(isValid ? getFormatted(formula(number)) : 1);
  };

  const getFormatted = (value) => {
    const number = Number(value);
    if (Number.isNaN(value)) return "";
    return number.toFixed(2);
  };

  return (
    <div className="table">
      <div className="temp">
        <input type="number" value={c} onChange={handleCOnChange} />
        <label>Celsius</label>
      </div>

      <div>
        <label>=</label>
      </div>

      <div className="temp">
        <input type="number" value={f} onChange={handleEOnChange} />
        <label>Fahrenheit</label>
      </div>
    </div>
  );
}
