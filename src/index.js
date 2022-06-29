import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App/App";
import reportWebVitals from "./reportWebVitals";
import { sendToVercelAnalytics } from "./vitals";
import AttributionContainer from "./Attribution/Attribution";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <App />
    <AttributionContainer />
  </React.StrictMode>
);

reportWebVitals(sendToVercelAnalytics);
