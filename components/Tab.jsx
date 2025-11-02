import React, { useState, useEffect } from "react";
import { motion, useMotionValue, useDragControls, AnimatePresence } from "framer-motion";

function Tab({path}) {
  const [isVisible, setIsVisible] = useState(true);
  const [isMaximized, setIsMaximized] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const controls = useDragControls();

  useEffect(() => {
    if (isMaximized) {
      x.set(0);
      y.set(0);
    }
  }, [isMaximized, x, y]);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        id="tab"
        drag={!isMaximized}
        dragControls={controls}
        dragListener={false} 
        dragMomentum={false}
        style={{
          x,
          y,
          zIndex: 901,
          cursor: isMaximized ? "default" : "grab",
        }}
        layout
        transition={{ type: "spring", stiffness: 140, damping: 20 }}
        className="absolute"
      >
        <motion.div
          layout
          className="bg-primary-dark/90 backdrop-blur-3xl rounded-4xl overflow-hidden"
          style={{
            position: isMaximized ? "fixed" : "absolute",
            top: isMaximized ? 0 : 40,
            left: isMaximized ? 0 : 40,
            width: isMaximized ? "100vw" : "90vw",
            height: isMaximized ? "100vh" : "80vh",
            zIndex: 901,
            transition: "all 0.4s cubic-bezier(.2,.9,.2,1)",
          }}
        >
          <div
            className="flex items-center gap-3 p-4 w-full bg-transparent select-none font-kollektif"
            onPointerDown={(e) => {
              if (!isMaximized) controls.start(e);
            }}
          >
            <div
              id="close"
              onClick={(e) => {
                e.stopPropagation(); 
                setIsVisible(false);
              }}
              className="h-6 w-6 bg-primary rounded-full flex justify-center items-center cursor-pointer hover:scale-110 transition-transform"
            >
              <div className="w-4 h-1 rounded-2xl bg-white"></div>
            </div>

            <div
              id="max"
              onClick={(e) => {
                e.stopPropagation();
                setIsMaximized((prev) => !prev);
              }}
              className="h-6 w-6 bg-green-400 rounded-full flex justify-center items-center cursor-pointer hover:scale-110 transition-transform"
            >
              <div className="w-4 h-4 rounded-2xl bg-white"></div>
            </div>

            <div className="flex-1 text-center text-gray-200 font-medium">
              {path || "My Tab"}
            </div>
          </div>

          // Content Area
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default Tab;
