import React from "react";
import { creatRoot } from "react-router-dom/client";
import { App } from "./components";


creatRoot(document.getElementById("root")).render(<App />)