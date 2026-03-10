import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="snap-section relative flex items-center justify-center overflow-hidden"
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/60 to-background" />

      <div className="relative z-10 px-8 text-center">
        <motion.p
          className="mb-6 font-body text-xs uppercase tracking-[0.4em] text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.6, duration: 1 }}
        >
          A Media Production Studio
        </motion.p>

        <motion.h1
          className="font-display text-5xl font-extrabold uppercase leading-[0.9] tracking-tight text-foreground md:text-8xl lg:text-[10rem]"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.8, duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
        >
          We Build
          <br />
          <span className="text-primary text-glow">Atmospheres</span>
        </motion.h1>

        <motion.p
          className="mx-auto mt-8 max-w-md font-body text-sm leading-relaxed text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 4.2, duration: 1 }}
        >
          Cinematic storytelling for brands that refuse to be ordinary.
          We don't make content — we craft experiences.
        </motion.p>

        <motion.div
          className="mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 4.5, duration: 1 }}
        >
          <button
            onClick={() => document.getElementById("work")?.scrollIntoView({ behavior: "smooth" })}
            className="font-display text-xs font-bold uppercase tracking-[0.3em] text-muted-foreground transition-colors duration-300 hover:text-primary"
          >
            View the work ↓
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
