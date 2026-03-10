import { motion } from "framer-motion";

type AnimationStyle = "float" | "cascade" | "scatter" | "wave" | "spin";

interface AnimatedLettersProps {
  text: string;
  className?: string;
  style?: AnimationStyle;
  delay?: number;
  staggerDelay?: number;
  once?: boolean;
}

const getVariants = (style: AnimationStyle, index: number) => {
  switch (style) {
    case "float":
      return {
        hidden: {
          opacity: 0,
          y: index % 2 === 0 ? 80 : -80,
          x: (index - 5) * 20,
          rotate: (index - 5) * 8,
        },
        visible: { opacity: 1, y: 0, x: 0, rotate: 0 },
      };
    case "cascade":
      return {
        hidden: { opacity: 0, y: -120, rotateX: 90 },
        visible: { opacity: 1, y: 0, rotateX: 0 },
      };
    case "scatter":
      return {
        hidden: {
          opacity: 0,
          x: (Math.random() - 0.5) * 300,
          y: (Math.random() - 0.5) * 300,
          scale: 0,
          rotate: (Math.random() - 0.5) * 180,
        },
        visible: { opacity: 1, x: 0, y: 0, scale: 1, rotate: 0 },
      };
    case "wave":
      return {
        hidden: { opacity: 0, y: 50, scaleY: 0 },
        visible: { opacity: 1, y: 0, scaleY: 1 },
      };
    case "spin":
      return {
        hidden: { opacity: 0, scale: 0, rotate: 180 },
        visible: { opacity: 1, scale: 1, rotate: 0 },
      };
  }
};

const AnimatedLetters = ({
  text,
  className = "",
  style = "float",
  delay = 0,
  staggerDelay = 0.06,
  once = true,
}: AnimatedLettersProps) => {
  const letters = text.split("");

  return (
    <motion.span
      className={`inline-flex flex-wrap justify-center ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.3 }}
      transition={{ staggerChildren: staggerDelay, delayChildren: delay }}
    >
      {letters.map((letter, i) => {
        const variants = getVariants(style, i);
        return (
          <motion.span
            key={`${letter}-${i}`}
            className="inline-block"
            style={{ whiteSpace: letter === " " ? "pre" : undefined }}
            variants={{
              hidden: variants.hidden,
              visible: {
                ...variants.visible,
                transition: {
                  type: "spring",
                  damping: 12,
                  stiffness: 100,
                  duration: 0.8,
                },
              },
            }}
          >
            {letter === " " ? "\u00A0" : letter}
          </motion.span>
        );
      })}
    </motion.span>
  );
};

export default AnimatedLetters;
