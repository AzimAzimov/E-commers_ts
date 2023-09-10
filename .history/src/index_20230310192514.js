import React from "react";
import { creatRoot } from "react-dom/client";
import { createRoutesFromElements } from "react-router-dom";
import { App } from "./components";


creatRoot(document.getElementById("root")).render(<App />)