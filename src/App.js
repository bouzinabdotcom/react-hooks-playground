import React, { useState, useEffect, useRef, useCallback } from "react";
import { Button } from "./Button";

export default function App() {
  const [counter, setCounter] = useState(0);
  const [title, setTitle] = useState("");

  const amountRef = useRef();
  // const reachMaxRef = useRef(false);

  // const handleCounter = () => {
  //   if (!reachMaxRef.current) {
  //     if (counter >= 10) reachMaxRef.current = true;
  //     else setCounter(c => c + (parseInt(amountRef.current.value) || 1));
  //   } else console.log("You reached max clicks!");
  // };
  const handleTitle = () => setTitle("Functionha academy");

  useEffect(() => {
    // console.log("Inside useEffect 1");
    document.title = title;
  }, [title]);
  useEffect(() => {
    // console.log("Inside useEffect 2");
    setTitle("");
    document.title = `You have clicked ${counter} times.`;
  }, [counter]);

  useEffect(() => {
    amountRef.current.focus();
  });

  const onClick = useCallback(n => setCounter(c => c + n), [setCounter]);

  const listOfCount = [2, 4, 6, 10, 50];

  return (
    <div className="container text-center pt-5">
      <input ref={amountRef} />
      <br />
      <Button counterFn={onClick} label="Count Up" n={1} />
      {listOfCount.map(count => (
        <Button counterFn={onClick} label={count} key={count} n={count} />
      ))}

      <button onClick={handleTitle} className="btn btn-primary mt-3 ml-3">
        Change Title
      </button>
      <h1 className="mt-3">{counter}</h1>
    </div>
  );
}
