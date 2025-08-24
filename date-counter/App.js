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
    setCount((c) => c + 1);
  }

  function handleMinCount() {
    setCount((c) => c - 1);
  }

  const date = new Date();
  date.setDate(date.getDate() + count);

  return (
    <div className="App">
      <div className="btn">
        <button onClick={handleMinStep}>-</button>
        <p>Step: {step}</p>
        <button onClick={handlePlusStep}>+</button>
      </div>
      <div className="btn">
        <button onClick={handleMinCount}>-</button>
        <p>Count: {count}</p>
        <button onClick={handlePlusCount}>+</button>
      </div>
      <p>
        {count} days from today is {date.toDateString()}
      </p>
    </div>
  );
}
