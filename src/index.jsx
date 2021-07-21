import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/App";
import { GlobalStyle } from "./global-styles.styles";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
