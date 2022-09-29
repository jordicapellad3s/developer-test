import React from "react";
import * as ReactDOM from "react-dom/client";
import "./styles.css";
import App from "./app.js";

const container = document.getElementById("app");
const root = ReactDOM.createRoot(container);

root.render(<App />);
