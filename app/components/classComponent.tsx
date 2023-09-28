// A class component requries you to extend from React.Component and create a render function that returns a React element.
// It must have the render() method returning JSX or TSX (which is syntactically similar to HTML).
// The class component is instantiated and different lifecycle method is kept alive and is run and invoked at depending on the phase of the class component.
// Also known as Stateful components as they implement logic and state.
// React lifecycle methods (componentDidMount, componentDidUpdate, componentWillUnmount) can be used in class components.
// It requires you to initialize state in the constructor and bind event handlers.
// It requires different syntax inside a class to implement hooks.
// Constructor is used as it needs to store state.

"use client";

import React from "react";

interface State {
  count: number;
}

interface Props {}

class ClassComponent extends React.Component<{}, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      count: 0,
    };
    this.increase = this.increase.bind(this);
  }

  increase() {
    this.setState({ count: this.state.count + 1 });
  }

  render(): React.ReactNode {
    return (
      <div>
        <h1>Class Component</h1>
        <p>Count: {this.state.count}</p>
        <button
          className="border-white border-2 rounded-md p-2"
          onClick={this.increase}
        >
          Increase
        </button>
      </div>
    );
  }
}

export default ClassComponent;
