import React from "react";
import { inject, observer } from "mobx-react";
// eslint-disable-next-line no-unused-vars
import { CounterStore } from "../stores/CounterStore";

@inject("counterStore")
@observer
class Index extends React.PureComponent<{ counterStore: CounterStore }> {
  render() {
    return (
      <>
        <h1>Count is {this.props.counterStore.count}</h1>
        <button onClick={this.props.counterStore.increment}>+1</button>
        <button onClick={this.props.counterStore.decrement}>-1</button>
      </>
    );
  }
}

export default Index;
