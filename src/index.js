import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { JsonProvider } from "./Utilities/Context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <JsonProvider>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </JsonProvider>
);
