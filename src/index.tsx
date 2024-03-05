import { StrictMode } from "react";
import * as ReactDOMClient from "react-dom/client";
import { applyMiddleware, combineReducers, createStore } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import App from "./App";

import { LoginReducer } from "./store/reducers/loginreducer";
const rootReducer = combineReducers({ login: LoginReducer });
const store = createStore(rootReducer, applyMiddleware(thunk));
const rootElement = document.getElementById("root");
const root = ReactDOMClient.createRoot(rootElement);

root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
