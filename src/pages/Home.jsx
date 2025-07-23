// src/Home.jsx
import { motion } from "framer-motion";
import TextPressure from "../blocks/TextAnimations/TextPressure/TextPressure";
import { FaGithub, FaTwitch } from "react-icons/fa";

export default function Home({ onStart }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98, filter: "blur(8px)" }}
      animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
      exit={{ opacity: 0, scale: 0.98, filter: "blur(8px)" }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="min-h-screen flex flex-col items-center justify-center px-4 text-center text-white relative"
    >
      {/* Título animado */}
      <div className="w-full max-w-4xl h-[200px] mx-auto flex items-center justify-center mb-12">
        <TextPressure
          text="Mono Zac Guia"
          flex
          alpha={false}
          stroke={false}
          width
          weight
          italic
          textColor="#34d399"
          strokeColor="#000000"
          minFontSize={36}
        />
      </div>

      {/* Botão começar */}
      <motion.button
        whileHover={{ scale: 1.07, boxShadow: "0 0 15px #34d399" }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        onClick={onStart}
        className="bg-emerald-500 rounded-full px-10 py-3 text-xl font-semibold shadow-lg
          hover:bg-gradient-to-r hover:from-emerald-400 hover:to-green-600 text-white
          focus:outline-none focus:ring-4 focus:ring-emerald-300/60
          select-none
          transition-all duration-300 ease-in-out
          mb-12
          "
      >
        Começar
      </motion.button>

      {/* Botões GitHub + Twitch */}
      <div className="flex gap-6 justify-center mb-8">
        <motion.a
          href="https://github.com/Eduardo-Virissimo/zac-guide-data-dragon"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1, color: "#34d399" }}
          className="flex items-center gap-2 text-gray-300 hover:text-emerald-400 transition cursor-pointer font-semibold"
        >
          <FaGithub size={24} />
          GitHub
        </motion.a>

        <motion.a
          href="https://www.twitch.tv/0x527975"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1, color: "#9146FF" }}
          className="flex items-center gap-2 text-gray-300 hover:text-purple-600 transition cursor-pointer font-semibold"
        >
          <FaTwitch size={24} />
          Twitch
        </motion.a>
      </div>

      {/* Versão fixa no canto inferior esquerdo */}
      <p className="fixed bottom-4 left-4 text-gray-500 text-sm select-none">
        v1.0.0
      </p>
    </motion.div>
  );
}
