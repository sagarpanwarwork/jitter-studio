import { motion } from "framer-motion";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";

const projects = [
  {
    title: "Ember",
    subtitle: "Brand Film — Torch Industries",
    year: "2025",
    image: project1,
  },
  {
    title: "Meridian",
    subtitle: "Documentary — National Geographic",
    year: "2024",
    image: project2,
  },
  {
    title: "Void",
    subtitle: "Installation — MoMA PS1",
    year: "2024",
    image: project3,
  },
  {
    title: "Fathom",
    subtitle: "Commercial — Omega Watches",
    year: "2023",
    image: project4,
  },
];

const WorkSection = () => {
  return (
    <>
      {/* Section header */}
      <section
        id="work"
        className="snap-section flex items-center justify-center"
      >
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <p className="mb-4 font-body text-xs uppercase tracking-[0.4em] text-muted-foreground">
            Selected Projects
          </p>
          <h2 className="font-display text-5xl font-extrabold uppercase tracking-tight text-foreground md:text-7xl">
            The Work
          </h2>
        </motion.div>
      </section>

      {/* Full-bleed project cards */}
      {projects.map((project, index) => (
        <section
          key={project.title}
          className="snap-section relative flex items-end overflow-hidden"
        >
          {/* Background image */}
          <motion.div
            className="absolute inset-0"
            initial={{ scale: 1.1 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1.5, ease: [0.25, 0.1, 0.25, 1] }}
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
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />

          {/* Content */}
          <motion.div
            className="relative z-10 w-full px-8 pb-16 md:px-16 md:pb-24"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="flex items-end justify-between">
              <div>
                <span className="mb-2 block font-body text-xs uppercase tracking-[0.3em] text-muted-foreground">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-6xl font-extrabold uppercase tracking-tight text-foreground md:text-8xl lg:text-9xl">
                  {project.title}
                </h3>
                <p className="mt-2 font-body text-sm text-muted-foreground">
                  {project.subtitle}
                </p>
              </div>
              <span className="hidden font-display text-sm font-bold uppercase tracking-[0.2em] text-muted-foreground md:block">
                {project.year}
              </span>
            </div>
          </motion.div>
        </section>
      ))}
    </>
  );
};

export default WorkSection;
