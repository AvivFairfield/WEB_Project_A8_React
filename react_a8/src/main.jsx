import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Homepage from "./pages/Homepage/Homepage.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Homepage />
  </React.StrictMode>,
);
