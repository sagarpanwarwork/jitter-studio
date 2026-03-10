import { motion } from "framer-motion";
import AnimatedLetters from "@/components/AnimatedLetters";

const services = [
  {
    number: "01",
    title: "Film Production",
    description: "End-to-end film production from scripting and storyboarding to principal photography and final delivery. We handle the entire creative pipeline.",
  },
  {
    number: "02",
    title: "Brand Films",
    description: "Cinematic brand stories that go beyond typical corporate video. We create films that audiences actually want to watch and share.",
  },
  {
    number: "03",
    title: "Post Production",
    description: "Color grading, VFX, sound design, and editorial. Our post pipeline transforms raw footage into polished, theatrical-grade content.",
  },
  {
    number: "04",
    title: "Motion Design",
    description: "Animated graphics, title sequences, and visual effects that add depth and dynamism to every frame of your project.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="snap-section relative flex items-center justify-center px-6 md:px-12 lg:px-16">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_hsl(36_100%_50%/0.04)_0%,_transparent_50%)]" />

      <div className="relative z-10 mx-auto w-full max-w-5xl">
        {/* Header */}
        <div className="mb-12 text-center md:mb-16 md:text-left">
          <motion.div
            className="mb-4 flex items-center justify-center gap-3 md:justify-start"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="h-[1px] w-6 bg-primary md:w-10" />
            <span className="font-body text-[10px] font-medium uppercase tracking-[0.4em] text-muted-foreground md:text-xs">
              What We Do
            </span>
          </motion.div>

          <h2 className="font-display text-3xl font-extrabold uppercase tracking-tight text-foreground sm:text-4xl md:text-6xl">
            <AnimatedLetters text="Our Services" style="wave" staggerDelay={0.05} />
          </h2>
        </div>

        {/* Services grid */}
        <div className="grid gap-0 divide-y divide-border/30 md:grid-cols-1">
          {services.map((service, i) => (
            <motion.div
              key={service.number}
              className="group relative flex flex-col gap-4 py-8 md:flex-row md:items-start md:gap-12 md:py-10"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Number */}
              <span className="font-display text-3xl font-extrabold text-primary/20 transition-colors duration-500 group-hover:text-primary/60 md:text-4xl md:min-w-[80px]">
                {service.number}
              </span>

              {/* Content */}
              <div className="flex-1">
                <h3 className="mb-3 font-display text-xl font-bold uppercase tracking-tight text-foreground transition-colors duration-300 group-hover:text-primary sm:text-2xl md:text-3xl">
                  {service.title}
                </h3>
                <p className="max-w-lg font-body text-xs leading-relaxed text-muted-foreground sm:text-sm">
                  {service.description}
                </p>
              </div>

              {/* Hover arrow */}
              <motion.span
                className="hidden self-center font-display text-lg text-muted-foreground/0 transition-all duration-300 group-hover:text-primary md:block"
              >
                →
              </motion.span>

              {/* Hover accent line */}
              <div className="absolute bottom-0 left-0 h-[1px] w-0 bg-primary transition-all duration-500 group-hover:w-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
