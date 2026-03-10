import { motion } from "framer-motion";
import AnimatedLetters from "@/components/AnimatedLetters";

const ContactSection = () => {
  return (
    <section id="contact" className="snap-section flex flex-col items-center justify-center px-8">
      <motion.div
        className="text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <motion.p
          className="mb-4 font-body text-xs uppercase tracking-[0.4em] text-muted-foreground"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Start a Project
        </motion.p>
        <h2 className="font-display text-4xl font-extrabold uppercase tracking-tight text-foreground md:text-7xl">
          <AnimatedLetters text="Let's Build" style="spin" staggerDelay={0.06} />
          <br />
          <span className="text-primary text-glow">
            <AnimatedLetters text="Something" style="float" delay={0.5} staggerDelay={0.07} />
          </span>
        </h2>
        <motion.p
          className="mx-auto mt-8 max-w-md font-body text-sm leading-relaxed text-muted-foreground"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          viewport={{ once: true }}
        >
          We take on a limited number of projects each year to ensure every one
          receives our full attention. If you're ready, we are.
        </motion.p>
        <motion.a
          href="mailto:hello@stillpoint.studio"
          className="mt-12 inline-block border border-primary bg-primary px-10 py-4 font-display text-xs font-bold uppercase tracking-[0.3em] text-primary-foreground transition-all duration-300 hover:bg-transparent hover:text-primary"
          initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.6, delay: 1.3, type: "spring", stiffness: 150 }}
          viewport={{ once: true }}
        >
          Contact Us
        </motion.a>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between px-8 py-6 md:px-16">
        <motion.span
          className="font-body text-xs text-muted-foreground"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 1.5 }}
          viewport={{ once: true }}
        >
          © 2025 Stillpoint
        </motion.span>
        <motion.span
          className="font-body text-xs text-muted-foreground"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 1.5 }}
          viewport={{ once: true }}
        >
          Los Angeles / London / Tokyo
        </motion.span>
      </div>
    </section>
  );
};

export default ContactSection;
