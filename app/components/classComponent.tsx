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
        <button onClick={this.increase}>Increase</button>
      </div>
    );
  }
}

export default ClassComponent;
