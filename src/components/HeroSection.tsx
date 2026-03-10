import { motion } from "framer-motion";
import AnimatedLetters from "@/components/AnimatedLetters";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="snap-section relative flex items-center justify-center overflow-hidden"
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/60 to-background" />

      {/* Floating ambient particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-1 w-1 rounded-full bg-primary/20"
          style={{
            left: `${15 + i * 15}%`,
            top: `${20 + (i % 3) * 25}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.6, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 4 + i * 0.5,
            repeat: Infinity,
            delay: i * 0.8,
            ease: "easeInOut",
          }}
        />
      ))}

      <div className="relative z-10 px-8 text-center">
        <motion.p
          className="mb-6 font-body text-xs uppercase tracking-[0.4em] text-muted-foreground"
          initial={{ opacity: 0, letterSpacing: "0.8em" }}
          animate={{ opacity: 1, letterSpacing: "0.4em" }}
          transition={{ delay: 3.6, duration: 1.2, ease: "easeOut" }}
        >
          A Media Production Studio
        </motion.p>

        <motion.div
          className="font-display text-5xl font-extrabold uppercase leading-[0.9] tracking-tight text-foreground md:text-8xl lg:text-[10rem]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.7, duration: 0.3 }}
        >
          <AnimatedLetters
            text="We Build"
            style="float"
            delay={3.8}
            staggerDelay={0.07}
          />
          <br />
          <span className="text-primary text-glow">
            <AnimatedLetters
              text="Atmospheres"
              style="cascade"
              delay={4.2}
              staggerDelay={0.05}
            />
          </span>
        </motion.div>

        <motion.p
          className="mx-auto mt-8 max-w-md font-body text-sm leading-relaxed text-muted-foreground"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 5, duration: 1 }}
        >
          Cinematic storytelling for brands that refuse to be ordinary.
          We don't make content — we craft experiences.
        </motion.p>

        <motion.div
          className="mt-12"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 5.3, duration: 0.8, type: "spring" }}
        >
          <button
            onClick={() => document.getElementById("work")?.scrollIntoView({ behavior: "smooth" })}
            className="group relative font-display text-xs font-bold uppercase tracking-[0.3em] text-muted-foreground transition-colors duration-300 hover:text-primary"
          >
            <span>View the work</span>
            <motion.span
              className="ml-2 inline-block"
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              ↓
            </motion.span>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
