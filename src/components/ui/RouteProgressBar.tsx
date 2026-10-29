import React from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ProgressBarProps {
  isLoading: boolean;
}

export const RouteProgressBar: React.FC<ProgressBarProps> = ({ isLoading }) => {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="global-route-progress"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.25, ease: "easeOut" } }}
          className="fixed top-0 left-0 right-0 z-[100] h-[3px] pointer-events-none overflow-hidden bg-transparent"
        >
          {/* Animated gradient progress track */}
          <motion.div
            initial={{ x: "-100%" }}
            animate={{
              x: ["-100%", "-20%", "0%"],
              transition: {
                times: [0, 0.6, 1],
                duration: 0.45,
                ease: [0.16, 1, 0.3, 1],
              },
            }}
            className="w-full h-full bg-gradient-to-r from-[#0B1F3A] via-[#1554A3] to-[#38BDF8] shadow-[0_0_10px_rgba(21,84,163,0.7)]"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};
