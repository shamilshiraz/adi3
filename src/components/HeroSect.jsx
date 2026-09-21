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
        min-h-[calc(100svh-72px)]
        sm:min-h-[calc(100svh-80px)]
        overflow-hidden
        bg-cover
        bg-center
        flex
        items-end
        px-4
        sm:px-8
        lg:px-20
        pt-28
        pb-12
        sm:pt-32
        sm:pb-16
        lg:pt-20
        lg:pb-20
      "
      style={{
        backgroundImage: "url('/land.jpg')",
      }}
    >
      {/* Luxury Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/55 to-transparent" />

      {/* Main Content */}
      <div
        className="
          relative
          z-10
          mx-auto
          flex
          w-full
          max-w-[1440px]
          flex-col
          items-start
          justify-end
          gap-8
          lg:flex-row
          lg:items-end
          lg:justify-between
          lg:gap-12
        "
      >
        {/* Left Content */}
        <div className="w-full max-w-4xl text-[#EFBD78]">
          
          <AnimatedText
            text="Building Reliability."
            className="
              max-w-full
              text-[clamp(2.4rem,10vw,3.5rem)]
              sm:text-5xl
              lg:text-6xl
              leading-[1.02]
              overflow-visible
              font-medium
              sm:font-normal
            "
          />

          <AnimatedText
            text="Delivering Excellence."
            className="
              max-w-full
              text-[clamp(2.4rem,10vw,3.5rem)]
              sm:text-5xl
              lg:text-6xl
              leading-[1.05]
              overflow-visible
              font-medium
              sm:font-normal
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
              mt-5
              sm:mt-6
              max-w-2xl
              text-[15px]
              leading-7
              sm:text-lg
              sm:leading-8
              lg:text-xl
              text-white/80
            "
          >
            High-quality infrastructure, construction support, and industrial
            solutions—delivered with precision, innovation, and uncompromising
            safety.
          </motion.p>

          {/* CTA */}
          <div className="flex w-full flex-col gap-3 py-6 sm:w-auto sm:flex-row sm:gap-4 sm:py-8">
            <button
              type="button"
              className="
                w-full
                sm:w-64
                rounded-xl
                bg-white
                px-6
                py-3
                font-medium
                text-black
                transition
                hover:opacity-90
                active:scale-[0.98]
              "
            >
              Book your consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
