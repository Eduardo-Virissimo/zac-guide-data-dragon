import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Home from "./pages/Home";
import ZacGuide from "./pages/ZacGuide";
import bgImage from "./assets/bg.jpg";

export default function App() {
  const [started, setStarted] = useState(false);

  return (
    <div
  className="relative min-h-screen bg-cover bg-center overflow-hidden"
  style={{ backgroundImage: `url(${bgImage})` }}
>
  <div className="absolute inset-0 bg-black/70 z-0" />
  <AnimatePresence mode="wait">
    {started ? <ZacGuide key="zac" /> : <Home key="home" onStart={() => setStarted(true)} />}
  </AnimatePresence>
</div>

  );
}
