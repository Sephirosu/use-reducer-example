import { useReducer } from "react";
const initialState = { count: 0, step: 1 };
const reducer = (state, action) => {
  switch (action.type) {
    case "plus": {
      return { ...state, count: state.count + state.step };
    }
    case "minus": {
      return { ...state, count: state.count - state.step };
    }
    case "steps": {
      return { ...state, step: action.payload };
    }
    case "running": {
      return { ...state, step: action.payload };
    }
    case "reset": {
      return initialState;
    }
    default:
      throw new Error("Unknown Error");
  }
};

export default function App() {
  // const [count, setCount] = useState(0);
  // const [step, setStep] = useState(1);

  const [state, dispatch] = useReducer(reducer, initialState);

  const { count, step } = state;

  const plus = () => {
    // setCount((count) => count + step);
    dispatch({ type: "plus" });
  };

  const minus = () => {
    // setCount((count) => count - step);
    dispatch({ type: "minus" });
  };

  const steps = (e) => {
    dispatch({ type: "steps", payload: Number(e.target.value) });
    // setStep(Number(e.target.value));
  };

  const running = (e) => {
    dispatch({ type: "running", payload: Number(e.target.value) });
    // setCount(Number(e.target.value));
  };

  const reset = () => {
    dispatch({ type: "reset" });
    // setCount(0);
    // setStep(1);
  };

  return (
    <div>
      <input
        type="range"
        min="0"
        max="10"
        value={step}
        onChange={steps}
      ></input>
      <div>{step}</div>
      <div>
        <button onClick={plus}>PLUS</button>
      </div>
      <input value={count} onChange={running}></input>
      <div>
        <button onClick={minus}>MINUS</button>
      </div>
      <div>
        <button onClick={reset}>RESET</button>
      </div>
    </div>
  );
}
