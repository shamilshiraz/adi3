
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSect = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      aria-labelledby="hero-title"
      className="relative isolate flex min-h-[calc(100svh-72px)] overflow-hidden bg-black sm:min-h-[calc(100svh-80px)]"
    >
      {/* Background image */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-30 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/land.jpg')" }}
      />

      {/* Contrast overlays */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 bg-black/35"
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-r from-black/80 via-black/45 to-black/10"
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-t from-black/75 via-transparent to-black/15"
      />

      {/* Hero content */}
      <div className="mx-auto flex w-full max-w-[1600px] items-end px-5 pb-14 pt-28 sm:px-8 sm:pb-20 sm:pt-32 lg:items-center lg:px-16 lg:py-28 xl:px-20">
        <motion.div
          initial={
            shouldReduceMotion
              ? false
              : { opacity: 0, y: 24 }
          }
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.75,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="w-full max-w-[1000px]"
        >
          {/* Eyebrow */}
          <div className="mb-6 flex items-center gap-3 sm:mb-8">
          </div>

          {/* Main heading */}
          <h1
            id="hero-title"
            className="display-heading max-w-[950px] text-[clamp(2.75rem,7.5vw,6.75rem)] text-white"
          >
            Invest in Dubai
            <span className="mt-2 block text-[#EFBD78]">
              with clarity.
            </span>
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-[580px] text-sm leading-7 text-white/85 sm:mt-8 sm:text-base sm:leading-8 lg:text-lg">
            ADHIHAVEN brings together local market perspective,
            carefully selected opportunities, and personal guidance
            to help you approach your next Dubai property decision
            with confidence.
          </p>

          
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSect;
