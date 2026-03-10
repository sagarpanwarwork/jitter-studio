import { motion } from "framer-motion";

const items = [
  "Brand Films",
  "Documentaries",
  "Commercials",
  "Music Videos",
  "Corporate Films",
  "Event Coverage",
  "Post Production",
  "Motion Graphics",
];

const MarqueeText = () => {
  return (
    <section className="snap-section relative flex items-center overflow-hidden border-y border-border/30">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_left,_hsl(36_100%_50%/0.04)_0%,_transparent_50%)]" />
      
      <div className="w-full overflow-hidden py-6 md:py-8">
        <motion.div
          className="flex whitespace-nowrap"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="animate-marquee flex shrink-0">
            {[...items, ...items].map((item, i) => (
              <span
                key={i}
                className="mx-4 font-display text-3xl font-extrabold uppercase tracking-tight text-foreground/10 transition-colors duration-500 hover:text-primary/40 sm:mx-6 sm:text-5xl md:mx-8 md:text-6xl lg:text-7xl"
              >
                {item}
                <span className="mx-4 text-primary/30 sm:mx-6 md:mx-8">✦</span>
              </span>
            ))}
          </div>
          <div className="animate-marquee flex shrink-0">
            {[...items, ...items].map((item, i) => (
              <span
                key={`dup-${i}`}
                className="mx-4 font-display text-3xl font-extrabold uppercase tracking-tight text-foreground/10 transition-colors duration-500 hover:text-primary/40 sm:mx-6 sm:text-5xl md:mx-6 md:text-6xl lg:text-7xl"
              >
                {item}
                <span className="mx-4 text-primary/30 sm:mx-6 md:mx-8">✦</span>
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MarqueeText;
