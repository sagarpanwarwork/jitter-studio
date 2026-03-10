import { motion } from "framer-motion";

const navItems = ["Work", "About", "Contact"];

const Navigation = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-8 py-6 md:px-16"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 3.4, duration: 0.8 }}
    >
      <button
        onClick={() => scrollTo("hero")}
        className="font-display text-lg font-extrabold uppercase tracking-[0.2em] text-foreground"
      >
        Stillpoint
      </button>

      <div className="flex items-center gap-10">
        {navItems.map((item) => (
          <button
            key={item}
            onClick={() => scrollTo(item.toLowerCase())}
            className="font-display text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground transition-colors duration-300 hover:text-primary"
          >
            {item}
          </button>
        ))}
      </div>
    </motion.nav>
  );
};

export default Navigation;
