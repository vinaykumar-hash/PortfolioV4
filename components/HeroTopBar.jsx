import React from "react";
import { motion } from "framer-motion";

function HeroTopBar() {
  return (
    <div
      className="sticky top-0 text-black bg-transparent flex justify-center items-center pt-4 pb-4"
      style={{ zIndex: 2 }}
    >
      <motion.div
        initial={{
          opacity: 1,
          backdropFilter: "blur(0px)",
          WebkitBackdropFilter: "blur(0px)", // Safari support
        }}
        animate={{
          opacity: 1,
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
        }}
        transition={{
          duration: 1.2,
          ease: "easeInOut",
        }}
        className="text-white/40 font-kollektif tracking-wide text-xl bg-white/5 pt-4 pb-4 pl-80 pr-80 rounded-4xl border border-white/10"
      >
        vinaychoudhary.dev
      </motion.div>
    </div>
  );
}

export default HeroTopBar;
