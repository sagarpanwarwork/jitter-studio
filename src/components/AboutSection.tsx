import { motion } from "framer-motion";
import AnimatedLetters from "@/components/AnimatedLetters";

const stats = [
  { number: "120+", label: "Projects Delivered" },
  { number: "8+", label: "Years Experience" },
  { number: "15", label: "Team Members" },
  { number: "25+", label: "Clients Worldwide" },
];

const AboutSection = () => {
  return (
    <section id="about" className="snap-section relative flex items-center justify-center px-6 md:px-12 lg:px-16">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_hsl(36_100%_50%/0.04)_0%,_transparent_60%)]" />

      <div className="relative z-10 mx-auto max-w-5xl">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
          {/* Left - Content */}
          <div>
            <motion.div
              className="mb-4 flex items-center gap-3"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <span className="h-[1px] w-6 bg-primary md:w-10" />
              <span className="font-body text-[10px] font-medium uppercase tracking-[0.4em] text-muted-foreground md:text-xs">
                Who We Are
              </span>
            </motion.div>

            <h2 className="font-display text-3xl font-extrabold uppercase tracking-tight text-foreground sm:text-4xl md:text-5xl lg:text-6xl">
              <AnimatedLetters text="Built on" style="wave" staggerDelay={0.05} />
              <br />
              <span className="text-primary">
                <AnimatedLetters text="Passion" style="wave" delay={0.3} staggerDelay={0.06} />
              </span>
            </h2>

            <motion.p
              className="mt-6 font-body text-xs leading-loose text-muted-foreground sm:text-sm md:mt-8 md:text-base"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
            >
              Khalsa Productions was born from a simple belief — great stories deserve 
              great craft. We're a collective of filmmakers, editors, colorists, and 
              creative directors who treat every project like it's our magnum opus.
            </motion.p>

            <motion.p
              className="mt-4 font-body text-xs leading-loose text-muted-foreground sm:text-sm md:text-base"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              viewport={{ once: true }}
            >
              From pre-production planning to final delivery, we bring an obsessive 
              attention to detail and a collaborative spirit that turns ambitious 
              visions into unforgettable visual experiences.
            </motion.p>

            <motion.div
              className="mt-8 h-[1px] w-16 bg-primary"
              initial={{ width: 0 }}
              whileInView={{ width: 64 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              viewport={{ once: true }}
            />
          </div>

          {/* Right - Stats */}
          <div className="grid grid-cols-2 gap-6 md:gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="group border border-border/30 p-5 transition-colors duration-500 hover:border-primary/30 md:p-6"
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 0.5,
                  delay: 0.8 + i * 0.1,
                  type: "spring",
                  stiffness: 120,
                }}
                viewport={{ once: true }}
              >
                <span className="font-display text-2xl font-extrabold text-foreground transition-colors duration-300 group-hover:text-primary sm:text-3xl md:text-4xl">
                  {stat.number}
                </span>
                <p className="mt-2 font-body text-[10px] uppercase tracking-[0.2em] text-muted-foreground sm:text-xs">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
