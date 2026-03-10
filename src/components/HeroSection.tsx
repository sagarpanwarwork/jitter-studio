import { motion } from "framer-motion";
import AnimatedLetters from "@/components/AnimatedLetters";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="snap-section noise-overlay relative flex items-center justify-center overflow-hidden"
    >
      {/* Radial gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(36_100%_50%/0.06)_0%,_transparent_70%)]" />

      {/* Grid lines */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(hsl(40 20% 95% / 0.3) 1px, transparent 1px),
                          linear-gradient(90deg, hsl(40 20% 95% / 0.3) 1px, transparent 1px)`,
        backgroundSize: '80px 80px',
      }} />

      {/* Floating orbs */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: 200 + i * 100,
            height: 200 + i * 100,
            left: `${10 + i * 20}%`,
            top: `${15 + (i % 2) * 40}%`,
            background: `radial-gradient(circle, hsl(36 100% 50% / ${0.03 + i * 0.01}) 0%, transparent 70%)`,
          }}
          animate={{
            x: [0, 30 * (i % 2 === 0 ? 1 : -1), 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 8 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      <div className="relative z-10 w-full px-6 text-center md:px-12">
        {/* Eyebrow */}
        <motion.div
          className="mb-6 flex items-center justify-center gap-4 md:mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.6, duration: 1 }}
        >
          <span className="h-[1px] w-8 bg-primary md:w-12" />
          <span className="font-body text-[10px] font-medium uppercase tracking-[0.5em] text-muted-foreground md:text-xs">
            Premium Media Production
          </span>
          <span className="h-[1px] w-8 bg-primary md:w-12" />
        </motion.div>

        {/* Main headline */}
        <motion.div
          className="font-display text-[2.5rem] font-extrabold uppercase leading-[0.85] tracking-tight text-foreground sm:text-6xl md:text-7xl lg:text-[8rem] xl:text-[10rem]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.7, duration: 0.3 }}
        >
          <AnimatedLetters
            text="We Craft"
            style="float"
            delay={3.8}
            staggerDelay={0.07}
          />
          <br />
          <span className="text-primary text-glow">
            <AnimatedLetters
              text="Stories"
              style="cascade"
              delay={4.2}
              staggerDelay={0.06}
            />
          </span>
        </motion.div>

        {/* Sub copy */}
        <motion.p
          className="mx-auto mt-6 max-w-xs font-body text-xs leading-relaxed text-muted-foreground sm:max-w-sm sm:text-sm md:mt-10 md:max-w-lg md:text-base"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 5, duration: 1 }}
        >
          From concept to final cut — we produce films, commercials, and digital
          experiences that move audiences and elevate brands.
        </motion.p>

        {/* CTA */}
        <motion.div
          className="mt-10 flex flex-col items-center gap-6 sm:flex-row sm:justify-center md:mt-14"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 5.3, duration: 0.8 }}
        >
          <button
            onClick={() => document.getElementById("work")?.scrollIntoView({ behavior: "smooth" })}
            className="border border-primary bg-primary px-8 py-3 font-display text-[10px] font-bold uppercase tracking-[0.25em] text-primary-foreground transition-all duration-300 hover:bg-transparent hover:text-primary sm:px-10 sm:py-4 sm:text-xs"
          >
            Explore Our Work
          </button>
          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="group font-body text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-foreground sm:text-xs"
          >
            Get in Touch
            <motion.span
              className="ml-2 inline-block"
              animate={{ x: [0, 6, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              →
            </motion.span>
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 5.8, duration: 1 }}
      >
        <motion.div
          className="flex flex-col items-center gap-2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="font-body text-[9px] uppercase tracking-[0.3em] text-muted-foreground">Scroll</span>
          <div className="h-8 w-[1px] bg-gradient-to-b from-primary to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
