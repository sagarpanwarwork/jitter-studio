import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="snap-section flex items-center justify-center px-8"
    >
      <motion.div
        className="mx-auto max-w-3xl text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <p className="mb-4 font-body text-xs uppercase tracking-[0.4em] text-muted-foreground">
          About
        </p>
        <h2 className="font-display text-4xl font-extrabold uppercase tracking-tight text-foreground md:text-6xl">
          Cinema, Not Software
        </h2>
        <p className="mx-auto mt-8 max-w-xl font-body text-base leading-loose text-muted-foreground">
          Stillpoint is a collective of cinematographers, editors, and visual
          architects. We believe that every frame should carry weight, every cut
          should have purpose, and every project should feel like walking into a
          darkened theater for the first time.
        </p>
        <p className="mx-auto mt-6 max-w-xl font-body text-base leading-loose text-muted-foreground">
          Founded in 2019, we've partnered with brands and institutions that
          share our obsession with atmosphere — from Fortune 500 campaigns to
          museum installations that blur the line between film and architecture.
        </p>

        <div className="mt-16 flex justify-center gap-16 md:gap-24">
          {[
            { number: "47", label: "Projects" },
            { number: "12", label: "Countries" },
            { number: "6", label: "Awards" },
          ].map((stat) => (
            <div key={stat.label}>
              <span className="font-display text-4xl font-extrabold text-foreground md:text-5xl">
                {stat.number}
              </span>
              <p className="mt-2 font-body text-xs uppercase tracking-[0.3em] text-muted-foreground">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
