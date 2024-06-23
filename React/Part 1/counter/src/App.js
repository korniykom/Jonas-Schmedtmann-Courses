import "./App.css";
import { useState } from "react";

function Counter({ step, setStep, counter, setCounter }) {
  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + counter);
  function handleIncreaseStep() {
    setStep((step) => step + 1);
  }
  function handleDecreaseStep() {
    setStep((step) => step - 1);
  }
  function handleIncreaseCount() {
    setCounter((count) => count + step);
  }
  function handleDecreaseCount() {
    setCounter((count) => count - step);
  }
  return (
    <div className="center">
      <div>
        <button onClick={handleDecreaseStep}> - </button>
        <span> Step:{step}</span>
        <button onClick={handleIncreaseStep}> + </button>
      </div>
      <div>
        <button onClick={handleDecreaseCount}>-</button>
        <span> Count: {counter}</span>
        <button onClick={handleIncreaseCount}>+</button>
      </div>
      <p>
        <span>
          {counter === 0
            ? "Today is "
            : counter > 0
            ? `${counter} days from today is `
            : `${Math.abs(counter)} days ago was `}
        </span>
        <span>{date.toDateString()}</span>
      </p>
    </div>
  );
}

function App() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  return (
    <div>
      <Counter
        step={step}
        setStep={setStep}
        counter={count}
        setCounter={setCount}
      />
    </div>
  );
}

export default App;
