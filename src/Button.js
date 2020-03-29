import React, { useRef } from "react";

export const Button = ({ onClick, label, n }) => {
  const renderRef = useRef(0);
  console.log(renderRef.current++);
  return (
    <button onClick={() => onClick(n)} className="btn btn-primary m-3">
      {label}
    </button>
  );
};
