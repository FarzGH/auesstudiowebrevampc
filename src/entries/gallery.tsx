import React from "react";
import ReactDOM from "react-dom/client";
import GalleryPage from "@/pages/GalleryPage";
import "@/styles/global.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <GalleryPage />
  </React.StrictMode>
);
