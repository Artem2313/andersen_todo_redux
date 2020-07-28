import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./components/App";
import store from "./redux/store";
import { saveState } from "./redux/localStorage";
import "./index.css";

store.subscribe(() => {
  saveState({
    tasks: store.getState().tasks,
  });
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
