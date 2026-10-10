
import { motion, useReducedMotion } from "framer-motion";

const GOLD = "#F2C078";

const LoadingScreen = () => {
  const reducedMotion = useReducedMotion();

  const duration = reducedMotion ? 0.25 : 1;

  return (
    <motion.div
      className="fixed inset-0 z-[99999] flex items-center justify-center overflow-hidden bg-[#030303]"
      initial={{ y: 0 }}
      exit={{
        y: "-100%",
        transition: {
          duration: reducedMotion ? 0.3 : 1.25,
          ease: [0.76, 0, 0.24, 1],
        },
      }}
    >
      {/* DARK CINEMATIC ATMOSPHERE */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration }}
        style={{
          background:
            "radial-gradient(ellipse at center, #19140D 0%, #090807 38%, #030303 75%)",
        }}
      />

      {/* GIANT MOVING LIGHT BEAM */}
      {!reducedMotion && (
        <motion.div
          className="pointer-events-none absolute inset-y-0 w-[45vw]"
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, #F2C07808 35%, #F2C07820 50%, #FFFFFF12 52%, transparent 100%)",
            filter: "blur(22px)",
            transform: "skewX(-18deg)",
          }}
          initial={{ x: "-100vw", opacity: 0 }}
          animate={{
            x: ["-100vw", "100vw"],
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: 2.2,
            delay: 0.15,
            ease: [0.65, 0, 0.35, 1],
          }}
        />
      )}

      {/* GOLD ORBIT */}
      <motion.div
        className="absolute h-[270px] w-[270px] rounded-full border border-[#F2C078]/15 sm:h-[360px] sm:w-[360px] md:h-[430px] md:w-[430px]"
        initial={{
          opacity: 0,
          scale: 0.65,
          rotate: -35,
        }}
        animate={{
          opacity: [0, 0.8, 0.35],
          scale: [0.65, 1, 1.08],
          rotate: 0,
        }}
        transition={{
          duration: reducedMotion ? 0.25 : 1.8,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        <div className="absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-[#F2C078] shadow-[0_0_20px_5px_#F2C07860]" />
      </motion.div>

      {/* SECOND ORBIT */}
      <motion.div
        className="absolute h-[220px] w-[220px] rounded-full border border-white/[0.05] sm:h-[310px] sm:w-[310px] md:h-[370px] md:w-[370px]"
        initial={{ opacity: 0, scale: 1.25 }}
        animate={{ opacity: 1, scale: 1, rotate: 12 }}
        transition={{
          duration: reducedMotion ? 0.25 : 2,
          ease: "easeOut",
        }}
      />

      {/* CENTRAL BRAND */}
      <div className="relative z-10 flex flex-col items-center">
        {/* LOGO REVEAL */}
        <motion.div
          className="relative overflow-hidden"
          initial={
            reducedMotion
              ? false
              : {
                  opacity: 0,
                  scale: 0.7,
                  y: 25,
                  filter: "blur(16px)",
                }
          }
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
            filter: "blur(0px)",
          }}
          transition={{
            duration: reducedMotion ? 0.25 : 1.3,
            delay: reducedMotion ? 0 : 0.2,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <img
            src="/logo.png"
            alt="ADHIHAVEN"
            fetchPriority="high"
            className="relative z-10 w-36 object-contain sm:w-44 md:w-52"
          />

          {/* LIGHT CUT ACROSS THE LOGO */}
          {!reducedMotion && (
            <motion.div
              className="pointer-events-none absolute inset-y-0 z-20 w-1/2"
              style={{
                background:
                  "linear-gradient(100deg, transparent, #F2C07855 45%, #FFFFFFD9 50%, #F2C07866 55%, transparent)",
                filter: "blur(8px)",
                mixBlendMode: "screen",
              }}
              initial={{ left: "-70%" }}
              animate={{ left: ["-70%", "140%"] }}
              transition={{
                duration: 1.1,
                delay: 0.75,
                ease: [0.65, 0, 0.35, 1],
              }}
            />
          )}
        </motion.div>

        {/* GOLD LINE EXPANSION */}
        <motion.div
          className="relative mt-8 h-px w-36 overflow-hidden sm:w-48"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{
            duration: reducedMotion ? 0.25 : 1,
            delay: reducedMotion ? 0 : 0.65,
            ease: [0.16, 1, 0.3, 1],
          }}
          style={{
            background:
              "linear-gradient(90deg, transparent, #F2C078, #FFF0D6, #F2C078, transparent)",
          }}
        />

        {/* BRAND STATEMENT */}
        <motion.p
          className="mt-5 text-center text-[9px] font-medium uppercase tracking-[0.38em] text-white/55 sm:text-[10px] sm:tracking-[0.48em]"
          initial={{ opacity: 0, y: 12, letterSpacing: "0.2em" }}
          animate={{
            opacity: 1,
            y: 0,
            letterSpacing: "0.38em",
          }}
          transition={{
            duration: reducedMotion ? 0.25 : 0.9,
            delay: reducedMotion ? 0 : 0.7,
            ease: "easeOut",
          }}
        >
          A Higher Standard of Living
        </motion.p>
      </div>

      {/* BOTTOM LOADING LINE */}
      <div className="absolute bottom-0 left-0 h-[2px] w-full bg-white/[0.04]">
        <motion.div
          className="h-full origin-left"
          style={{
            background:
              "linear-gradient(90deg, #8E6535, #F2C078, #FFF1D5)",
            boxShadow: "0 0 14px #F2C07865",
          }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{
            duration: reducedMotion ? 0.25 : 2.1,
            delay: reducedMotion ? 0 : 0.15,
            ease: [0.65, 0, 0.35, 1],
          }}
        />
      </div>

      {/* EDGE DETAILS */}
      <motion.div
        className="absolute bottom-7 left-0 right-0 flex items-center justify-center gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: reducedMotion ? 0 : 0.9 }}
      >
        <span className="h-px w-5 bg-[#F2C078]/40" />
        <span className="text-[8px] uppercase tracking-[0.3em] text-white/30">
          Dubai · United Arab Emirates
        </span>
        <span className="h-px w-5 bg-[#F2C078]/40" />
      </motion.div>

      {/* EXIT CURTAIN ACCENT */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[2px] origin-left bg-[#F2C078]"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{
          duration: reducedMotion ? 0.2 : 1.4,
          delay: reducedMotion ? 0 : 0.3,
          ease: [0.16, 1, 0.3, 1],
        }}
      />
    </motion.div>
  );
};

export default LoadingScreen;
