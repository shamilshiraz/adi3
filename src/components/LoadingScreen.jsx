import { motion } from "framer-motion";

const LoadingScreen = () => {
  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black"
      initial={{ y: 0 }}
      exit={{ y: "-100%" }}
      transition={{
        duration: 0.8,
        ease: [0.76, 0, 0.24, 1],
      }}
    >
      <motion.img
        src="/logo.png"
        alt="ADHI Realty"
        className="w-32 sm:w-36 md:w-40"
        initial={{
          opacity: 0,
          scale: 0.9,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        exit={{
          opacity: 0,
          scale: 1.05,
        }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
      />
    </motion.div>
  );
};

export default LoadingScreen;
