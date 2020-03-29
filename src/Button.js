import React, { useRef } from "react";

export const Button = React.memo(({ onClick, label, n }) => {
  const renderRef = useRef(0);
  console.log(renderRef.current++);
  return (
    <button onClick={() => onClick(n)} className="btn btn-primary m-3">
      {label}
    </button>
  );
});
