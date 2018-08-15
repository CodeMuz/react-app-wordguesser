// Do this once before any other code in your app
import "babel-polyfill";

import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import App from "./app/App";
import "./index.css";
import reducer from "./reducers";
import registerServiceWorker from "./registerServiceWorker";

// dev tools middleware
const composeSetup =
  process.env.NODE_ENV !== "production" &&
  typeof window === "object" &&
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose;

/* eslint-disable no-underscore-dangle */
export const store = createStore(reducer, composeSetup(applyMiddleware(thunk)));
/* eslint-enable */

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root") as HTMLElement
);
registerServiceWorker();
