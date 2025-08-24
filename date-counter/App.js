import { useState } from "react";
import "./styles.css";

export default function App() {
  const [step, setStep] = useState(5);
  const [count, setCount] = useState(30);

  function handlePlusStep() {
    setStep((s) => s + 1);
  }

  function handleMinStep() {
    setStep((s) => s - 1);
  }

  function handlePlusCount() {
    setCount((c) => c + step);
  }

  function handleMinCount() {
    setCount((c) => c - step);
  }

  function handleReset() {
    setStep(1);
    setCount(0);
  }

  const date = new Date();
  date.setDate(date.getDate() + count);

  return (
    <div className="App">
      <div className="btn">
        <input
          type="range"
          id="step"
          name="step"
          min="0"
          max="10"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />
        {/* <button onClick={handleMinStep}>-</button> */}
        <p>{step}</p>
        {/* <button onClick={handlePlusStep}>+</button> */}
      </div>
      <div className="btn">
        <button onClick={handleMinCount}>-</button>
        <input
          type="text"
          name="input"
          id="input"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        />
        {/* <p>Count: {count}</p> */}
        <button onClick={handlePlusCount}>+</button>
      </div>
      <p>
        {count} days from today is {date.toDateString()}
      </p>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}
