import React from "react";
import Home from "./pages/home/Home";
import { Analytics } from "@vercel/analytics/react";
import ScrollToTop from "./ScrollToTop";

const App = () => {
  return (
    <div>
      <Analytics />
      <ScrollToTop />
      <Home />
    </div>
  );
};

export default App;
