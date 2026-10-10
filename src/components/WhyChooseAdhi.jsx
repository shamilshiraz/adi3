
import { motion, useReducedMotion } from "framer-motion";
import {
  TrendingUp,
  KeyRound,
  Compass,
  Handshake,
  ArrowUpRight,
} from "lucide-react";

const GOLD = "#F2C078";

const pillars = [
  {
    icon: TrendingUp,
    title: "Practical Guidance",
    description:
      "Understand the opportunity, the numbers, and the next step before you commit.",
  },
  {
    icon: KeyRound,
    title: "Curated Opportunities",
    description:
      "Explore properties selected around your goals, budget, and timeline.",
  },
  {
    icon: Compass,
    title: "Smarter Payment Planning",
    description:
      "Compare payment structures and plan your investment with greater visibility.",
  },
  {
    icon: Handshake,
    title: "Support Through Handover",
    description:
      "Stay supported from your first conversation through purchase, handover, and beyond.",
  },
];

const ease = [0.16, 1, 0.3, 1];

export default function WhyChooseAdhi() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      aria-labelledby="why-adhi-heading"
      className="
        relative isolate overflow-hidden
        bg-[#080808] text-white
        page-padding py-16
        sm:py-20 lg:py-28
      "
    >
      {/* Consistent ADHIHAVEN ambient lighting */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute -left-40 top-0 -z-10
          h-[400px] w-[400px] rounded-full
          bg-[#F2C078]/[0.07] blur-[140px]
          sm:h-[520px] sm:w-[520px]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute -bottom-40 -right-40 -z-10
          h-[380px] w-[380px] rounded-full
          bg-[#F2C078]/[0.04] blur-[140px]
        "
      />

      <div className="relative mx-auto w-full max-w-[1440px]">
        {/* Section heading */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: reduceMotion ? 0 : 0.7,
            ease,
          }}
          className="max-w-3xl"
        >
          
<h2
            id="why-adhi-heading"
            className="
              display-heading display-heading-lg
              mt-5 max-w-4xl text-white
            "
          >
            Clarity behind every{" "}
            <span style={{ color: GOLD }}>decision.</span>
          </h2>
          

          <div
            aria-hidden="true"
            className="mt-6 h-px w-14"
            style={{ backgroundColor: GOLD }}
          />

          <p
            className="
              mt-6 max-w-2xl
              text-sm leading-7 text-white/65
              sm:text-base sm:leading-8
            "
          >
            Property decisions are personal. We bring structure,
            perspective, and thoughtful guidance to every stage of
            the journey.
          </p>
        </motion.div>

        {/* Feature cards */}
        <div
          className="
            mt-10 grid grid-cols-1 gap-4
            sm:mt-12 sm:grid-cols-2 sm:gap-5
            lg:mt-16 lg:grid-cols-4 lg:gap-5
            xl:gap-6
          "
        >
          {pillars.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.title}
                initial={
                  reduceMotion
                    ? false
                    : { opacity: 0, y: 22 }
                }
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: reduceMotion ? 0 : 0.6,
                  delay: reduceMotion ? 0 : index * 0.08,
                  ease,
                }}
                className="
                  group relative flex min-h-[250px]
                  flex-col overflow-hidden
                  rounded-xl border border-white/10
                  bg-white/[0.025]
                  p-6 pb-14
                  transition-colors duration-300
                  hover:border-[#F2C078]/40
                  hover:bg-white/[0.04]
                  sm:min-h-[265px] sm:p-7 sm:pb-14
                  lg:min-h-[285px]
                  motion-reduce:transition-none
                "
              >
                {/* Gold top line */}
                <div
                  aria-hidden="true"
                  className="
                    absolute left-0 top-0 h-px w-0
                    bg-[#F2C078]
                    transition-[width] duration-500
                    group-hover:w-full
                    motion-reduce:transition-none
                  "
                />

                {/* Icon */}
                <div
                  className="
                    flex h-12 w-12 shrink-0
                    items-center justify-center
                    rounded-lg border border-[#F2C078]/30
                    bg-[#F2C078]/[0.06]
                    transition-colors duration-300
                    group-hover:bg-[#F2C078]/[0.12]
                    sm:h-[52px] sm:w-[52px]
                    motion-reduce:transition-none
                  "
                >
                  <Icon
                    aria-hidden="true"
                    size={23}
                    strokeWidth={1.5}
                    style={{ color: GOLD }}
                    className="
                      transition-transform duration-300
                      group-hover:-translate-y-0.5
                      motion-reduce:transition-none
                    "
                  />
                </div>

                {/* Card content */}
                <div className="mt-6 flex-1">
                  <h3
                    className="
                      text-lg font-medium leading-snug
                      tracking-[-0.02em] text-white
                      sm:text-xl
                    "
                  >
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-white/60">
                    {item.description}
                  </p>
                </div>

                {/* Card numbering */}
                <div
                  aria-hidden="true"
                  className="
                    absolute bottom-5 left-6 right-6
                    flex items-center justify-between
                    sm:left-7 sm:right-7
                  "
                >
                  <span className="text-[10px] font-medium tracking-[0.2em] text-white/35">
                    0{index + 1}
                  </span>

                  <ArrowUpRight
                    size={16}
                    strokeWidth={1.4}
                    style={{ color: GOLD }}
                    className="
                      opacity-50 transition-all duration-300
                      group-hover:translate-x-0.5
                      group-hover:-translate-y-0.5
                      group-hover:opacity-100
                      motion-reduce:transition-none
                    "
                  />
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
