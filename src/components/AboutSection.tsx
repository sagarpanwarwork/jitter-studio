import { motion } from "framer-motion";
import AnimatedLetters from "@/components/AnimatedLetters";

const stats = [
  { number: "47", label: "Projects" },
  { number: "12", label: "Countries" },
  { number: "6", label: "Awards" },
];

const AboutSection = () => {
  return (
    <section id="about" className="snap-section flex items-center justify-center px-8">
      <motion.div
        className="mx-auto max-w-3xl text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <motion.p
          className="mb-4 font-body text-xs uppercase tracking-[0.4em] text-muted-foreground"
          initial={{ opacity: 0, letterSpacing: "1em" }}
          whileInView={{ opacity: 1, letterSpacing: "0.4em" }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          About
        </motion.p>
        <h2 className="font-display text-4xl font-extrabold uppercase tracking-tight text-foreground md:text-6xl">
          <AnimatedLetters text="Cinema, Not" style="wave" staggerDelay={0.05} />
          <br />
          <AnimatedLetters text="Software" style="wave" delay={0.4} staggerDelay={0.05} />
        </h2>

        <motion.p
          className="mx-auto mt-8 max-w-xl font-body text-base leading-loose text-muted-foreground"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          Stillpoint is a collective of cinematographers, editors, and visual
          architects. We believe that every frame should carry weight, every cut
          should have purpose, and every project should feel like walking into a
          darkened theater for the first time.
        </motion.p>
        <motion.p
          className="mx-auto mt-6 max-w-xl font-body text-base leading-loose text-muted-foreground"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          Founded in 2019, we've partnered with brands and institutions that
          share our obsession with atmosphere — from Fortune 500 campaigns to
          museum installations that blur the line between film and architecture.
        </motion.p>

        <div className="mt-16 flex justify-center gap-16 md:gap-24">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0, rotate: -20 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{
                duration: 0.6,
                delay: 1 + i * 0.15,
                type: "spring",
                stiffness: 120,
              }}
              viewport={{ once: true }}
            >
              <span className="font-display text-4xl font-extrabold text-foreground md:text-5xl">
                {stat.number}
              </span>
              <p className="mt-2 font-body text-xs uppercase tracking-[0.3em] text-muted-foreground">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
