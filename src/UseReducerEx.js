import React, { useReducer, useMemo } from "react";
import { Button } from "./Button";

export default function UseReducer() {
  // const [count, setCount] = useState(0);

  const INCREMENT = "INCREMENT";
  const DECREMENT = "DECREMENT";
  function reducer(state, action) {
    switch (action.type) {
      case INCREMENT:
        return state + action.payload;
      case DECREMENT:
        return state - 1;
      default:
        return state;
    }
  }
  const [count, dispatch] = useReducer(reducer, 0);

  const MemoizedButtonInc = useMemo(
    () => (
      <Button
        label="increment"
        onClick={() => dispatch({ type: INCREMENT, payload: 1 })}
      />
    ),
    []
  );

  const MemoizedButtonDec = useMemo(
    () => (
      <Button label="decrement" onClick={() => dispatch({ type: DECREMENT })} />
    ),
    []
  );

  return (
    <div>
      {MemoizedButtonInc}
      <h1>{count}</h1>
      {MemoizedButtonDec}
    </div>
  );
}
