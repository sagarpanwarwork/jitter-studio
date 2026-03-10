import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const LoadingCurtain = ({ onComplete }: { onComplete: () => void }) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
      setTimeout(onComplete, 600);
    }, 3000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-background"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <motion.div
            className="bg-primary"
            initial={{ width: "60px", height: "2px" }}
            animate={{ width: "100vw", height: "100vh" }}
            transition={{ duration: 2.8, ease: [0.65, 0, 0.35, 1] }}
          />
          <motion.span
            className="absolute font-display text-sm uppercase tracking-[0.4em] text-background"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
          >
            Stillpoint
          </motion.span>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingCurtain;
