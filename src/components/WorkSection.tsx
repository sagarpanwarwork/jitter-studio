import { motion } from "framer-motion";
import AnimatedLetters from "@/components/AnimatedLetters";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";

const projects = [
  { title: "Ember", subtitle: "Brand Film — Torch Industries", category: "Commercial", year: "2025", image: project1 },
  { title: "Meridian", subtitle: "Documentary — Discovery Channel", category: "Documentary", year: "2024", image: project2 },
  { title: "Horizon", subtitle: "Campaign — Luxury Automotive", category: "Brand Film", year: "2024", image: project3 },
  { title: "Genesis", subtitle: "Music Video — Atlantic Records", category: "Music Video", year: "2023", image: project4 },
];

const WorkSection = () => {
  return (
    <>
      <section id="work" className="snap-section relative flex items-center justify-center">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_hsl(36_100%_50%/0.04)_0%,_transparent_60%)]" />
        <motion.div
          className="relative z-10 px-6 text-center md:px-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
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
              Selected Work
            </span>
            <span className="h-[1px] w-6 bg-primary md:w-10" />
          </motion.div>

          <h2 className="font-display text-4xl font-extrabold uppercase tracking-tight text-foreground sm:text-5xl md:text-7xl">
            <AnimatedLetters text="Our Portfolio" style="scatter" staggerDelay={0.06} />
          </h2>

          <motion.p
            className="mx-auto mt-6 max-w-sm font-body text-xs leading-relaxed text-muted-foreground sm:text-sm md:max-w-md"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            viewport={{ once: true }}
          >
            Every project is a collaboration. Here's a glimpse at the stories
            we've helped bring to life.
          </motion.p>
        </motion.div>
      </section>

      {projects.map((project, index) => (
        <section
          key={project.title}
          className="snap-section relative flex items-end overflow-hidden"
        >
          {/* Image with zoom */}
          <motion.div
            className="absolute inset-0"
            initial={{ scale: 1.2, opacity: 0.6 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 2, ease: [0.25, 0.1, 0.25, 1] }}
            viewport={{ once: true }}
          >
            <img
              src={project.image}
              alt={`${project.title} — ${project.subtitle}`}
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </motion.div>

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/40 to-transparent" />

          {/* Content */}
          <motion.div
            className="relative z-10 w-full px-6 pb-10 md:px-12 md:pb-20 lg:px-16 lg:pb-24"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                {/* Category tag */}
                <motion.span
                  className="mb-3 inline-block border border-primary/30 px-3 py-1 font-body text-[9px] uppercase tracking-[0.3em] text-primary md:text-[10px]"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  {project.category}
                </motion.span>

                {/* Number */}
                <motion.span
                  className="mb-1 block font-body text-[10px] uppercase tracking-[0.3em] text-muted-foreground md:text-xs"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  {String(index + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
                </motion.span>

                {/* Title */}
                <h3 className="font-display text-5xl font-extrabold uppercase tracking-tight text-foreground sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl">
                  <AnimatedLetters
                    text={project.title}
                    style="float"
                    delay={0.4}
                    staggerDelay={0.06}
                  />
                </h3>

                {/* Subtitle */}
                <motion.p
                  className="mt-2 font-body text-xs text-muted-foreground sm:text-sm"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  viewport={{ once: true }}
                >
                  {project.subtitle}
                </motion.p>
              </div>

              <motion.div
                className="flex items-center gap-4 md:flex-col md:items-end md:gap-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <span className="font-display text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground md:text-sm">
                  {project.year}
                </span>
                <span className="hidden h-[1px] w-12 bg-primary md:block" />
              </motion.div>
            </div>
          </motion.div>
        </section>
      ))}
    </>
  );
};

export default WorkSection;
