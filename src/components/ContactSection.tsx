import { motion } from "framer-motion";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="snap-section flex flex-col items-center justify-center px-8"
    >
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <p className="mb-4 font-body text-xs uppercase tracking-[0.4em] text-muted-foreground">
          Start a Project
        </p>
        <h2 className="font-display text-4xl font-extrabold uppercase tracking-tight text-foreground md:text-7xl">
          Let's Build
          <br />
          <span className="text-primary text-glow">Something</span>
        </h2>
        <p className="mx-auto mt-8 max-w-md font-body text-sm leading-relaxed text-muted-foreground">
          We take on a limited number of projects each year to ensure every one
          receives our full attention. If you're ready, we are.
        </p>
        <a
          href="mailto:hello@stillpoint.studio"
          className="mt-12 inline-block border border-primary bg-primary px-10 py-4 font-display text-xs font-bold uppercase tracking-[0.3em] text-primary-foreground transition-all duration-300 hover:bg-transparent hover:text-primary"
        >
          Contact Us
        </a>
      </motion.div>

      {/* Footer */}
      <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between px-8 py-6 md:px-16">
        <span className="font-body text-xs text-muted-foreground">
          © 2025 Stillpoint
        </span>
        <span className="font-body text-xs text-muted-foreground">
          Los Angeles / London / Tokyo
        </span>
      </div>
    </section>
  );
};

export default ContactSection;
