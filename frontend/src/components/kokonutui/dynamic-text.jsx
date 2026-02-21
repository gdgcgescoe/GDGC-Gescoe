import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const DynamicText = ({
  items = ["Hello", "नमस्ते", "नमस्कार","こんにちは"],
  onCycleComplete,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (currentIndex === items.length - 1) {
        onCycleComplete?.();
      } else {
        setCurrentIndex((prev) => prev + 1);
      }
    }, 700);

    return () => clearTimeout(timeout);
  }, [currentIndex, items.length, onCycleComplete]);

  const textVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
    exit: { y: -20, opacity: 0 },
  };

  return (
    <section
      aria-label="Greetings"
      className="flex items-center justify-center"
    >
      <div className="relative flex h-16 w-80 items-center justify-center overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={textVariants}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute font-extrabold text-3xl text-white whitespace-nowrap"
          >
            {items[currentIndex]}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default DynamicText;
