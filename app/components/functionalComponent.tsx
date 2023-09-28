"use client";

import React, { useState } from "react";

const FunctionalComponent = () => {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Functional Component</h1>
      <p>Count: {count}</p>
      <button onClick={increase}>Increase</button>
    </div>
  );
};

export default FunctionalComponent;
