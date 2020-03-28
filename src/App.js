import React, { useState } from "react";

export default function App() {
  const [counter, setCounter] = useState(0);

  return (
    <div className="container text-center pt-5">
      <button
        onClick={() => setCounter(c => c + 1)}
        className="btn btn-primary"
      >
        Count up
      </button>
      <h1 className="mt-3">{counter}</h1>
    </div>
  );
}
