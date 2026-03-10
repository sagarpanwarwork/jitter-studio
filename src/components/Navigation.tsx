import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

const navItems = ["Work", "Services", "About", "Contact"];

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-6 py-5 md:px-12 lg:px-16"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 3.4, duration: 0.8 }}
      >
        {/* Backdrop blur */}
        <div className="absolute inset-0 bg-background/60 backdrop-blur-md" />

        <button
          onClick={() => scrollTo("hero")}
          className="relative z-10 flex items-center gap-2"
        >
          <span className="font-display text-base font-extrabold uppercase tracking-[0.15em] text-foreground md:text-lg">
            Khalsa
          </span>
          <span className="font-body text-[9px] uppercase tracking-[0.2em] text-primary md:text-[10px]">
            Productions
          </span>
        </button>

        {/* Desktop nav */}
        {!isMobile && (
          <div className="relative z-10 flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item.toLowerCase())}
                className="group relative font-body text-[11px] font-medium uppercase tracking-[0.15em] text-muted-foreground transition-colors duration-300 hover:text-foreground"
              >
                {item}
                <span className="absolute -bottom-1 left-0 h-[1px] w-0 bg-primary transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </div>
        )}

        {/* Mobile hamburger */}
        {isMobile && (
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="relative z-10 flex h-8 w-8 flex-col items-end justify-center gap-1.5"
          >
            <motion.span
              className="block h-[1.5px] bg-foreground"
              animate={{ width: menuOpen ? 24 : 24, rotate: menuOpen ? 45 : 0, y: menuOpen ? 5 : 0 }}
              transition={{ duration: 0.3 }}
              style={{ width: 24 }}
            />
            <motion.span
              className="block h-[1.5px] bg-foreground"
              animate={{ width: menuOpen ? 0 : 16, opacity: menuOpen ? 0 : 1 }}
              transition={{ duration: 0.2 }}
              style={{ width: 16 }}
            />
            <motion.span
              className="block h-[1.5px] bg-foreground"
              animate={{ width: menuOpen ? 24 : 20, rotate: menuOpen ? -45 : 0, y: menuOpen ? -5 : 0 }}
              transition={{ duration: 0.3 }}
              style={{ width: 20 }}
            />
          </button>
        )}
      </motion.nav>

      {/* Mobile fullscreen menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-30 flex flex-col items-center justify-center bg-background/98 backdrop-blur-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            {navItems.map((item, i) => (
              <motion.button
                key={item}
                onClick={() => scrollTo(item.toLowerCase())}
                className="my-3 font-display text-3xl font-extrabold uppercase tracking-[0.1em] text-foreground"
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 40 }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
              >
                {item}
              </motion.button>
            ))}
            <motion.div
              className="mt-8 h-[1px] w-16 bg-primary"
              initial={{ width: 0 }}
              animate={{ width: 64 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
