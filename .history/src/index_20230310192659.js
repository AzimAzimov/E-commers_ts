// import React from "react";
// import { creatRoot } from "react-dom/client";

import { App } from "./components";


// creatRoot(document.getElementById("root")).render(<App />)

import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();