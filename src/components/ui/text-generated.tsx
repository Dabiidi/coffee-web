import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface textProps {
  text: string;
}
const containerVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut",
      delayChildren: 0.3,
      staggerChildren: 0.1,
    },
  },
};

export const TextAnimation = ({ text }: textProps) => {
  const [animationCount, setAnimationCount] = useState(0);
  const words: string[] = text.split(" ");
  const interval: number = 0.5;

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationCount((prevCount) => (prevCount + 1) % words.length);
    }, (words.length * interval + 1) * 500);

    return () => clearTimeout(timer);
  }, [animationCount]);

  return (
    <div>
      {words.map((word: string, index: number) => (
        <motion.span
          key={index}
          variants={containerVariants}
          initial={index === animationCount ? "visible" : "hidden"}
          animate={index === animationCount ? "visible" : "hidden"}
          style={{ display: "inline-block", marginRight: "5px" }}
        >
          {word}
        </motion.span>
      ))}
    </div>
  );
};
