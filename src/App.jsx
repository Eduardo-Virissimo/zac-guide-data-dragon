import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Home from "./pages/Home";
import ZacGuide from "./pages/ZacGuide";

export default function App() {
  const [started, setStarted] = useState(false);

  return (
    <div className="relative min-h-screen overflow-hidden bg-zinc-950">
      <AnimatePresence mode="wait">
        {!started ? (
          <Home key="home" onStart={() => setStarted(true)} />
        ) : (
          <ZacGuide key="zac" />
        )}
      </AnimatePresence>
    </div>
  );
}
