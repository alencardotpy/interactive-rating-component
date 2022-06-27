import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App/App";
import reportWebVitals from "./reportWebVitals";
import { sendToVercelAnalytics } from "./vitals";
import { BrowserRouter } from "react-router-dom";
import AttributionContainer from "./Attribution/Attribution";

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
      <AttributionContainer />
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById("root")
);

reportWebVitals(sendToVercelAnalytics);
