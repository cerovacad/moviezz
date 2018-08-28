import React from "react";
import { render } from "react-dom";
import "./index.css";
import Router from "./router";
import { Provider } from "react-redux";
import store from "./store/store";

const App = () => (
  <Provider store={store}>
    <div>
      <Router />
    </div>
  </Provider>
);

render(<App />, document.getElementById("root"));
