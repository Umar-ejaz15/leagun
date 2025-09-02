import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Navigation from "./components/Navigation";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';

import Footer from "./pages/home/components/Footer";

// 👇 Import HeadProvider from react-head
import { HeadProvider } from "react-head";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HeadProvider>
      <BrowserRouter>
        <Navigation />
        <App />
        <Footer />
      </BrowserRouter>
    </HeadProvider>
  </StrictMode>
);
