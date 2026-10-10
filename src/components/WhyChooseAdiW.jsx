
import { motion, useReducedMotion } from "framer-motion";
import {
  Building2,
  ArrowRightLeft,
  Hammer,
  KeyRound,
  ArrowUpRight,
} from "lucide-react";

const GOLD = "#F2C078";
const ease = [0.16, 1, 0.3, 1];

const opportunities = [
  {
    number: "01",
    
    title: "Buy with\na plan.",
    description:
      "Approach Dubai property with a clear strategy shaped around your budget, long-term goals, and lifestyle.",
    icon: Building2,
  },
  {
    number: "02",
    
    title: "Rent or sell.\nYour choice.",
    description:
      "Explore rental income, continued ownership, or a future sale based on your priorities and circumstances.",
    icon: ArrowRightLeft,
  },
  {
    number: "03",
    
    title: "Invest in\nwhat's next.",
    description:
      "Discover new developments, staged payment plans, and project timelines before making your decision.",
    icon: Hammer,
  },
  {
    number: "04",
    
    title: "Find your\nnext address.",
    description:
      "Consider completed properties for immediate occupancy, potential leasing, or your wider portfolio.",
    icon: KeyRound,
  },
];

export default function WhyChooseAdhiWhite() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="dubai-opportunities"
      aria-labelledby="dubai-market-heading"
      className="relative overflow-hidden bg-white text-black page-padding section-spacing"
    >
      <div className="container-custom">
        {/* EDITORIAL INTRODUCTION */}
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: reduceMotion ? 0 : 0.7,
              ease,
            }}
            className="lg:col-span-8"
          >
            

            <h2
              id="dubai-market-heading"
              className="max-w-4xl text-4xl font-medium leading-[1.06] tracking-[-0.055em] sm:text-5xl md:text-6xl lg:text-7xl"
            >
              Dubai offers more
              <br className="hidden sm:block" /> than one way to{" "}
              <span style={{ color: GOLD }}>move forward.</span>
            </h2>
          </motion.div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: reduceMotion ? 0 : 0.7,
              delay: reduceMotion ? 0 : 0.12,
              ease,
            }}
            className="flex flex-col justify-end lg:col-span-4 lg:pb-2"
          >
            <p className="max-w-md text-sm leading-7 text-black/60 sm:text-base sm:leading-8">
              Whether you're buying, selling, renting, or exploring
              new developments, the right approach starts with
              understanding what matters to you.
            </p>


          </motion.div>
        </div>

        {/* ASYMMETRIC EDITORIAL LAYOUT */}
        <div className="mt-14 grid grid-cols-1 gap-x-12 sm:grid-cols-2 lg:mt-20 lg:grid-cols-12 lg:gap-x-14">
          {opportunities.map((item, index) => {
            const Icon = item.icon;
            const isOffset = index % 2 === 1;

            return (
              <motion.article
                key={item.number}
                initial={
                  reduceMotion
                    ? false
                    : {
                        opacity: 0,
                        y: 28,
                      }
                }
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: reduceMotion ? 0 : 0.65,
                  delay: reduceMotion ? 0 : index * 0.08,
                  ease,
                }}
                className={[
                  "group relative min-w-0 border-t border-black/15 py-7 sm:py-9 lg:col-span-5 lg:py-10",
                  isOffset ? "lg:col-start-8 lg:mt-24" : "lg:col-start-2",
                ].join(" ")}
              >
                {/* NUMBER AND ICON */}
                <div className="flex items-start justify-between">
                  <span
                    className="text-[56px] font-light leading-none tracking-[-0.08em] sm:text-7xl lg:text-[88px]"
                    style={{ color: GOLD }}
                  >
                    {item.number}
                  </span>

                  <span className="mt-2 flex h-11 w-11 items-center justify-center rounded-full border border-black/15 transition-all duration-300 group-hover:border-[#B88A47] group-hover:bg-[#B88A47] group-hover:text-white">
                    <Icon
                      size={19}
                      strokeWidth={1.35}
                      className="transition-transform duration-300 group-hover:rotate-[-8deg]"
                    />
                  </span>
                </div>

                {/* TITLE */}
               

                <h3 className="mt-5 whitespace-pre-line text-3xl font-medium leading-[1.08] tracking-[-0.045em] sm:text-4xl lg:text-[42px]">
                  {item.title}
                </h3>

                <p className="mt-5 max-w-md text-sm leading-7 text-black/60 sm:text-base sm:leading-8">
                  {item.description}
                </p>

                

                {/* FINE GOLD DETAIL */}
                <div
                  aria-hidden="true"
                  className="absolute left-0 top-0 h-px w-12 transition-all duration-500 group-hover:w-24"
                  style={{ backgroundColor: GOLD }}
                />
              </motion.article>
            );
          })}
        </div>

        {/* SECTION FOOTER */}
        
      </div>
    </section>
  );
}
