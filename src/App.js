import React, { useState, useEffect } from "react";

export default function App() {
  const [counter, setCounter] = useState(0);
  const [title, setTitle] = useState("");

  const handleCounter = () => setCounter(c => c + 1);
  const handleTitle = () => setTitle("Functionha academy");

  useEffect(() => {
    console.log("Inside useEffect 1");
    document.title = title;
  }, [title]);
  useEffect(() => {
    console.log("Inside useEffect 2");
    document.title = `You have clicked ${counter} times.`;
  }, [counter]);

  return (
    <div className="container text-center pt-5">
      <button onClick={handleCounter} className="btn btn-primary">
        Count up
      </button>
      <button onClick={handleTitle} className="btn btn-primary">
        Change Title
      </button>
      <h1 className="mt-3">{counter}</h1>
    </div>
  );
}
