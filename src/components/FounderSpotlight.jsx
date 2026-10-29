
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";

const GOLD = "#F2C078";

export default function FounderSpotlight() {
  const reduceMotion = useReducedMotion();

  const reveal = {
    hidden: reduceMotion ? { opacity: 1 } : { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reduceMotion ? 0 : 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section
      id="founder"
      className="relative overflow-hidden bg-[#FAFAFA] text-black"
    >
      {/* Subtle background detail */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,.12) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,.12) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage:
            "linear-gradient(to right, transparent, black, transparent)",
        }}
      />

      <div className="page-padding relative py-20 sm:py-28 lg:py-36">
        <div className="container-custom">

          {/* SECTION LABEL */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={reveal}
            className="flex items-center gap-3"
          >
            <span
              className="h-px w-8"
              style={{ backgroundColor: GOLD }}
            />
            <p
              className="text-[10px] uppercase tracking-[0.24em] sm:text-xs"
              style={{ color: "#A77B3E" }}
            >
              The philosophy behind ADHIHAVEN
            </p>
          </motion.div>

          {/* MAIN EDITORIAL LAYOUT */}
          <div className="mt-12 grid items-center gap-12 lg:mt-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">

            {/* FOUNDER'S POINT OF VIEW */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={reveal}
            >
              <p className="mb-5 text-sm text-black/45 sm:text-base">
                A different way to think about property.
              </p>

              <h2 className="max-w-4xl text-4xl font-medium leading-[1.04] tracking-[-0.055em] sm:text-5xl md:text-6xl lg:text-7xl xl:text-[88px]">
                Property is what you buy.
                <span
                  className="mt-2 block"
                  style={{ color: GOLD }}
                >
                  Perspective is what you invest in.
                </span>
              </h2>

              <div
                className="mt-8 max-w-xl border-l pl-5 sm:mt-10 sm:pl-7"
                style={{ borderColor: `${GOLD}CC` }}
              >
                <p className="text-sm leading-7 text-black/65 sm:text-base sm:leading-8">
                  The right property decision begins long before
                  a transaction. It starts with understanding the
                  opportunity, questioning the obvious, and seeing
                  the bigger picture.
                </p>
              </div>
            </motion.div>

            {/* ABSTRACT INVESTMENT COMPASS */}
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, scale: 0.94 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: reduceMotion ? 0 : 1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="relative mx-auto flex aspect-square w-full max-w-[390px] items-center justify-center"
            >
              {/* Orbit rings */}
              <div
                aria-hidden="true"
                className="absolute inset-[7%] rounded-full border"
                style={{ borderColor: `${GOLD}70` }}
              />
              <div
                aria-hidden="true"
                className="absolute inset-[19%] rounded-full border"
                style={{ borderColor: `${GOLD}99` }}
              />
              <div
                aria-hidden="true"
                className="absolute inset-[32%] rounded-full border"
                style={{ borderColor: `${GOLD}CC` }}
              />

              {/* Compass crosshair */}
              <div
                aria-hidden="true"
                className="absolute h-px w-full"
                style={{ backgroundColor: `${GOLD}80` }}
              />
              <div
                aria-hidden="true"
                className="absolute h-full w-px"
                style={{ backgroundColor: `${GOLD}80` }}
              />

              {/* Center point */}
              <div
                className="relative z-10 flex h-24 w-24 flex-col items-center justify-center rounded-full sm:h-28 sm:w-28"
                style={{
                  backgroundColor: "#FAFAFA",
                  border: `1px solid ${GOLD}`,
                  boxShadow: `0 0 60px ${GOLD}25`,
                }}
              >
                <span
                  className="text-3xl font-light tracking-[-0.08em] sm:text-4xl"
                  style={{ color: "#A77B3E" }}
                >
                  A.
                </span>
                <span className="mt-1 text-[8px] uppercase tracking-[0.22em] text-black/50">
                  Perspective
                </span>
              </div>

              {/* Compass markers */}
              <span
                className="absolute top-[3%] text-[9px] tracking-[0.2em]"
                style={{ color: "#A77B3E" }}
              >
                VISION
              </span>
              <span className="absolute bottom-[3%] text-[9px] tracking-[0.2em] text-black/45">
                LONG-TERM VALUE
              </span>
              <span className="absolute left-[-1%] top-1/2 -translate-y-1/2 text-[9px] tracking-[0.15em] text-black/45">
                INSIGHT
              </span>
              <span className="absolute right-[-1%] top-1/2 -translate-y-1/2 text-[9px] tracking-[0.15em] text-black/45">
                TRUST
              </span>

              {/* Gold marker */}
              <div
                aria-hidden="true"
                className="absolute right-[18%] top-[19%] h-3 w-3 rounded-full"
                style={{
                  backgroundColor: GOLD,
                  boxShadow: `0 0 24px ${GOLD}80`,
                }}
              />
            </motion.div>
          </div>

          {/* BOTTOM STORY */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              ...reveal,
              visible: {
                ...reveal.visible,
                transition: {
                  ...reveal.visible.transition,
                  delay: reduceMotion ? 0 : 0.15,
                },
              },
            }}
            className="mt-16 border-t border-black/10 pt-7 sm:mt-20 sm:pt-9 lg:mt-24"
          >
            <div className="grid gap-8 md:grid-cols-[0.7fr_1.3fr] md:items-end md:gap-12">
              <div>
                <p className="text-[10px] uppercase tracking-[0.22em] text-black/45 sm:text-xs">
                  What guides every decision
                </p>
                <h3 className="mt-4 max-w-sm text-2xl font-medium leading-tight tracking-[-0.04em] sm:text-3xl">
                  Look beyond the obvious.
                </h3>
              </div>

              <div>
                <p className="max-w-2xl text-sm leading-7 text-black/55 sm:text-base sm:leading-8">
                  Markets change. Opportunities evolve. But a
                  considered decision always begins with clarity.
                  That belief shapes the way ADHIHAVEN approaches
                  property, investment, and the people behind them.
                </p>

                <div className="mt-7 flex items-center gap-3">
                  <span
                    className="flex h-10 w-10 items-center justify-center rounded-full"
                    style={{
                      backgroundColor: GOLD,
                      color: "#11110F",
                    }}
                  >
                    <ArrowDownRight size={19} />
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.18em] text-black/50 sm:text-xs">
                    Perspective. Trust. Long-term value.
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
