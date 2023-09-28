// Functional Component

// A functional component is just a plain JavaScript function that accepts props as an argument and returns a React element (jsx or tsx).
// There is no render method and no state. Instead, you can use the useState hook to add state to a functional component.
// Functional components run from top to bottom and once the function is returned, it can't be kept alive.
// Also known as Stateless components as they simply accept data and display them in some form, they are mainly responsible for rendering UI.
// React lifecycle methods (componentDidMount, componentDidUpdate, componentWillUnmount) cannot be used in functional components.
// Hooks can be easily used in fuctional components to make them stateful.
// Constructor is not required in functional components.

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
      <button
        className="border-white border-2 rounded-md p-2"
        onClick={increase}
      >
        Increase
      </button>
    </div>
  );
};

export default FunctionalComponent;
