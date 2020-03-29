import React, { useState, useLayoutEffect, useRef, useCallback } from "react";
import { Button } from "./Button";

export default function App() {
  const [counter, setCounter] = useState(0);

  const [divData, setDivData] = useState({});
  const divRef = useRef();

  const onClick = useCallback(n => setCounter(c => c + n), [setCounter]);

  // const listOfCount = [1, 4, 6, 10, 50];
  const [listOfCount, setListOfCount] = useState([1]);

  useLayoutEffect(() => {
    setDivData(divRef.current.getBoundingClientRect());
  }, [listOfCount]);

  const handleAddButton = () => {
    setListOfCount([...listOfCount, 100]);
  };

  return (
    <div className="container text-center pt-5">
      <Button label="Add More" onClick={handleAddButton} />
      <div ref={divRef}>
        {listOfCount.map(count => (
          <>
            <Button onClick={onClick} label={count} key={count} n={count} />
            <br />
          </>
        ))}
      </div>
      <h1 className="mt-3">{counter}</h1>
      {/* <pre style={{ textAlign: "left" }}>
        {JSON.stringify(divData, null, 2)}
      </pre> */}
    </div>
  );
}
