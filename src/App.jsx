import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Home from "./pages/Home";
import ZacGuide from "./pages/ZacGuide";
import bgImage from "./assets/bg.jpg";

export default function App() {
  const [started, setStarted] = useState(false);

  return (
    <div
      className="relative w-full h-screen bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="absolute inset-0 bg-black/70 z-0" />
      <AnimatePresence mode="wait">
        {started ? (
          <motion.div
            key="zac"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="relative z-10 w-full h-full"
          >
            <ZacGuide />
          </motion.div>
        ) : (
          <motion.div
            key="home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="relative z-10 w-full h-full"
          >
            <Home onStart={() => setStarted(true)} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
