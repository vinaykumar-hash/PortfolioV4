import React, { useState } from 'react'
import FolderName from './FolderName'
import { motion } from "framer-motion";

function Dock() {
  const [showBar, setShowBar] = useState(false);

  return (
    <motion.div style={{zIndex:900}}
      key="dock"
      initial={{ opacity: 0, y: 100, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 100, scale: 0.9 }}
      transition={{
        type: "spring",
        stiffness: 80,
        damping: 12,
        duration: 0.8,
      }}
      onAnimationComplete={() => setShowBar(true)} // trigger bar after dock anim
      className="fixed bottom-10 left-1/2 -translate-x-1/2 z-50"
    >
      <div className="absolute bottom-10 w-full">
        <div className="w-full flex justify-center items-center relative">
          <motion.div
                initial={{ backdropFilter: "blur(0px)", opacity: 0, scale: 0.95 }}
                animate={{ backdropFilter: "blur(50px)", opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="bg-black/20 flex justify-center items-center gap-10 px-20 py-8 rounded-4xl border border-white/10"
                style={{ zIndex: 999 }}
                >
                <FolderName name={"Projects"} />
                <FolderName name={"Achievements"} />
                <FolderName name={"About Me"} />
                <FolderName name={"Gallery"} />
                </motion.div>


          <motion.div
            initial={{ opacity: 0, filter: "blur(0px)" }}
            animate={{
              opacity: showBar ? 1 : 0,
              filter: showBar ? "blur(20px)" : "blur(0px)",
            }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="absolute bg-primary w-100 h-4 translate-y-10 -z-10 rounded-full"
          ></motion.div>
        </div>
      </div>
    </motion.div>
  )
}

export default Dock
