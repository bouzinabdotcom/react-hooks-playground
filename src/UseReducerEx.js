import React, { useReducer } from "react";
import { Button } from "./Button";

export default function UseReducer() {
  // const [count, setCount] = useState(0);

  function reducer(state, action) {
    switch (action.type) {
      case "INCREMENT":
        return state + 1;
      case "DECREMENT":
        return state - 1;
      default:
        return state;
    }
  }
  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <div>
      <Button
        label="increment"
        onClick={() => dispatch({ type: "INCREMENT" })}
      />
      <h1>{count}</h1>
      <Button
        label="decrement"
        onClick={() => dispatch({ type: "DECREMENT" })}
      />
    </div>
  );
}
