import React from "react";
import { Provider } from "mobx-react";
import counterStore from "./src/stores/CounterStore";

// eslint-disable-next-line react/display-name,react/prop-types
export default ({ element }) => (
  <Provider counterStore={counterStore}>{element}</Provider>
);
