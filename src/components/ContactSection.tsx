import { motion } from "framer-motion";
import AnimatedLetters from "@/components/AnimatedLetters";

const ContactSection = () => {
  return (
    <section id="contact" className="snap-section relative flex flex-col items-center justify-center px-6 md:px-12">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(36_100%_50%/0.05)_0%,_transparent_60%)]" />

      <motion.div
        className="relative z-10 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <motion.div
          className="mb-4 flex items-center justify-center gap-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="h-[1px] w-6 bg-primary md:w-10" />
          <span className="font-body text-[10px] font-medium uppercase tracking-[0.4em] text-muted-foreground md:text-xs">
            Start a Project
          </span>
          <span className="h-[1px] w-6 bg-primary md:w-10" />
        </motion.div>

        <h2 className="font-display text-3xl font-extrabold uppercase tracking-tight text-foreground sm:text-4xl md:text-6xl lg:text-7xl">
          <AnimatedLetters text="Let's Create" style="spin" staggerDelay={0.05} />
          <br />
          <span className="text-primary text-glow">
            <AnimatedLetters text="Together" style="float" delay={0.5} staggerDelay={0.06} />
          </span>
        </h2>

        <motion.p
          className="mx-auto mt-6 max-w-xs font-body text-xs leading-relaxed text-muted-foreground sm:max-w-sm sm:text-sm md:mt-8 md:max-w-md"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          Whether it's a brand film, documentary, or commercial — we'd love to hear
          about your vision. Let's talk about what we can build together.
        </motion.p>

        <motion.div
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-6 md:mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          viewport={{ once: true }}
        >
          <a
            href="mailto:hello@khalsaproductions.com"
            className="w-full border border-primary bg-primary px-8 py-3 text-center font-display text-[10px] font-bold uppercase tracking-[0.25em] text-primary-foreground transition-all duration-300 hover:bg-transparent hover:text-primary sm:w-auto sm:px-10 sm:py-4 sm:text-xs"
          >
            Get in Touch
          </a>
          <a
            href="tel:+911234567890"
            className="w-full border border-border/50 px-8 py-3 text-center font-display text-[10px] font-bold uppercase tracking-[0.25em] text-muted-foreground transition-all duration-300 hover:border-primary/50 hover:text-foreground sm:w-auto sm:px-10 sm:py-4 sm:text-xs"
          >
            Call Us
          </a>
        </motion.div>

        {/* Social links */}
        <motion.div
          className="mt-12 flex items-center justify-center gap-8 md:mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          viewport={{ once: true }}
        >
          {["Instagram", "YouTube", "Vimeo"].map((social) => (
            <a
              key={social}
              href="#"
              className="font-body text-[10px] uppercase tracking-[0.2em] text-muted-foreground transition-colors duration-300 hover:text-primary sm:text-xs"
            >
              {social}
            </a>
          ))}
        </motion.div>
      </motion.div>

      {/* Footer */}
      <div className="absolute bottom-0 left-0 right-0 flex flex-col items-center justify-between gap-2 px-6 py-5 sm:flex-row md:px-12 lg:px-16">
        <motion.span
          className="font-body text-[10px] text-muted-foreground sm:text-xs"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.5 }}
          viewport={{ once: true }}
        >
          © 2025 Khalsa Productions. All rights reserved.
        </motion.span>
        <motion.span
          className="font-body text-[10px] text-muted-foreground sm:text-xs"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.5 }}
          viewport={{ once: true }}
        >
          Punjab / Mumbai / Dubai
        </motion.span>
      </div>
    </section>
  );
};

export default ContactSection;
