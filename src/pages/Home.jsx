// src/Home.jsx
import { motion } from "framer-motion";

export default function Home({ onStart }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98, filter: "blur(8px)" }}
      animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
      exit={{ opacity: 0, scale: 0.98, filter: "blur(8px)" }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="min-h-screen bg-zinc-950 flex flex-col items-center justify-center px-4 text-center text-white"
    >
      <h1 className="text-5xl font-extrabold text-emerald-400 mb-6">Mono Zac Guide</h1>

      <p className="max-w-xl mb-8 text-gray-300 text-lg leading-relaxed">
        Seu guia definitivo para jogar Zac em todas as lanes. Veja builds, runas, spells e mais.
      </p>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        onClick={onStart}
        className="bg-emerald-500 rounded-full px-8 py-3 text-xl font-semibold shadow-lg hover:bg-emerald-600 transition"
      >
        Começar
      </motion.button>
    </motion.div>
  );
}
