import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const LoadingCurtain = ({ onComplete }: { onComplete: () => void }) => {
  const [show, setShow] = useState(true);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    const timer = setTimeout(() => {
      setShow(false);
      setTimeout(onComplete, 800);
    }, 3200);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.65, 0, 0.35, 1] }}
        >
          {/* Top line accent */}
          <motion.div
            className="absolute top-0 left-0 h-[2px] bg-primary"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 2.8, ease: [0.65, 0, 0.35, 1] }}
          />

          {/* Logo mark */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <motion.span
              className="block font-display text-xl font-extrabold uppercase tracking-[0.5em] text-foreground md:text-2xl"
              initial={{ letterSpacing: "1em" }}
              animate={{ letterSpacing: "0.5em" }}
              transition={{ delay: 0.5, duration: 1.5, ease: "easeOut" }}
            >
              Khalsa
            </motion.span>
            <motion.span
              className="block text-center font-body text-[10px] uppercase tracking-[0.4em] text-primary md:text-xs"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
            >
              Productions
            </motion.span>
          </motion.div>

          {/* Counter */}
          <motion.div
            className="absolute bottom-12 right-8 font-display text-6xl font-extrabold text-muted/30 md:bottom-16 md:right-16 md:text-8xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {String(count).padStart(3, "0")}
          </motion.div>

          {/* Bottom loading bar */}
          <div className="absolute bottom-8 left-8 right-8 md:left-16 md:right-16">
            <div className="h-[1px] w-full bg-muted/20">
              <motion.div
                className="h-full bg-primary"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 2.8, ease: [0.65, 0, 0.35, 1] }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingCurtain;
