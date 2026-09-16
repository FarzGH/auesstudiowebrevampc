import React from "react";
import ReactDOM from "react-dom/client";
import AboutPage from "@/pages/AboutPage";
import "@/styles/global.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <AboutPage />
  </React.StrictMode>
);
