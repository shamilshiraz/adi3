import React from "react";
import { motion } from "framer-motion";

const sentence = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.04,
    },
  },
};

const letter = {
  hidden: {
    opacity: 0,
    y: 40,
    filter: "blur(12px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

function AnimatedText({ text, className }) {
  return (
    <motion.div
      className={className}
      variants={sentence}
      initial="hidden"
      animate="visible"
    >
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          variants={letter}
          style={{
            display: "inline-block",
            whiteSpace: char === " " ? "pre" : "normal",
          }}
        >
          {char}
        </motion.span>
      ))}
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section
      className="
        relative
        w-full
        min-h-screen
        overflow-hidden
        flex
        items-end
        px-4
        sm:px-20
        py-20
      "
    >
      {/* Background Video */}
      <div className="absolute inset-0 overflow-hidden">
        <iframe
          className="absolute top-1/2 left-1/2 h-[56.25vw] min-h-full w-[177.78vh] min-w-full -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          src="https://www.youtube.com/embed/IdejM6wCkxA?autoplay=1&mute=1&loop=1&playlist=IdejM6wCkxA&controls=0&modestbranding=1&rel=0&iv_load_policy=3&disablekb=1&playsinline=1"
          title="Background Video"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          referrerPolicy="strict-origin-when-cross-origin"
        />
      </div>

      {/* Luxury Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#08050d]/95 via-[#170813]/35 to-transparent" />

      {/* Burgundy Tint */}
      <div className="absolute inset-0 bg-[#3E0029]/10" />

      {/* Main Glow */}
      <div className="absolute top-[-200px] right-[-250px] h-[900px] w-[900px] rounded-full bg-[#3E0029]/20 blur-[180px]" />

      {/* Secondary Glow */}
      <div className="absolute bottom-[-250px] left-[-250px] h-[700px] w-[700px] rounded-full bg-[#7A1F42]/20 blur-[180px]" />

      {/* Extra Ambient Light */}
      <div className="absolute top-1/2 right-1/4 h-[500px] w-[500px] rounded-full bg-[#b54f6c]/10 blur-[140px]" />

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 h-40 w-full bg-gradient-to-t from-[#09050f] to-transparent" />

      <div className="relative z-10 mx-auto flex w-full flex-col items-center justify-between gap-12 lg:flex-row">
        {/* Left Content */}
        <div className="max-w-4xl text-[#EFBD78]">
          <AnimatedText
            text="Building Reliability."
            className="
              text-4xl
              sm:text-5xl
              lg:text-6xl
              leading-[1.05]
              overflow-visible
            "
          />

          <AnimatedText
            text="Delivering Excellence."
            className="
              text-4xl
              sm:text-5xl
              lg:text-6xl
              leading-[1.08]
              overflow-visible
            "
          />

          <motion.p
            initial={{
              opacity: 0,
              y: 20,
              filter: "blur(10px)",
            }}
            animate={{
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
            }}
            transition={{
              delay: 1,
              duration: 0.8,
            }}
            className="
              mt-6
              max-w-2xl
              text-base
              sm:text-lg
              lg:text-xl
              text-white/80
            "
          >
            High-quality infrastructure, construction support, and industrial
            solutions—delivered with precision, innovation, and uncompromising
            safety.
          </motion.p>

          <div className="flex flex-col gap-4 sm:flex-row py-8">
            <div className="btn-gold">Book your consultation</div>
            <div className="btn-violet">Talk to agents</div>
          </div>
        </div>
      </div>
    </section>
  );
}