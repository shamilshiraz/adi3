import { motion } from "framer-motion";
import {
  Building2,
  ArrowRightLeft,
  Hammer,
  KeyRound,
  ArrowUpRight,
} from "lucide-react";

const sections = [
  {
    icon: Building2,
    number: "01",
     title: "Buy with a plan",
    description:
       "Dubai offers a dynamic market for long-term ownership, rental income, and lifestyle-led decisions. We help you approach the purchase with a clear plan.",
  },
  {
    icon: ArrowRightLeft,
    number: "02",
     title: "Rent or sell with flexibility",
    description:
       "Choose a path that fits your priorities—generate rental income, hold for the long term, or sell when the timing and opportunity are right.",
  },
  {
    icon: Hammer,
    number: "03",
     title: "Explore off-plan opportunity",
    description:
       "Consider new developments with staged payment plans and a longer ownership horizon, supported by a clear view of the project and its timeline.",
  },
  {
    icon: KeyRound,
    number: "04",
     title: "Move into ready property",
    description:
       "Ready homes offer immediate access—move in, begin leasing, or add an income-producing asset to your portfolio without waiting for construction.",
  },
];

export default function WhyChooseAdhiWhite() {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-white
        page-padding
        section-spacing
      "
    >
      {/* Very subtle gold atmosphere */}
      <div
        className="
          pointer-events-none
          absolute
          -right-40
          top-0
          h-[500px]
          w-[500px]
          rounded-full
          bg-[#D4AF37]/[0.035]
          blur-[150px]
        "
      />

      <div className="container-custom relative">

        {/* ================= HEADER ================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
          }}
         className="max-w-5xl"
        >
          <p className="eyebrow">THE DUBAI MARKET</p>
         <h2
   className="display-heading display-heading-lg text-black"
>
             Why investors choose
            <br />
            <span className="text-black/35">
               Dubai
            </span>
          </h2>

      

          <p
            className="
              mt-7
              max-w-2xl
              text-sm
              leading-7
              text-black/55
              sm:text-base
              sm:leading-8
            "
          >
             A globally connected market, strong infrastructure, and a
             lifestyle people want to be part of make Dubai a compelling place
             to consider for your next property decision.
          </p>
        </motion.div>

        {/* ================= LIST ================= */}

        <div className="mt-12 sm:mt-20 lg:mt-24">

          {sections.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  delay: index * 0.08,
                  duration: 0.8,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="
                  group
                  relative
                  border-t
                  border-black/10
                  py-10
                  sm:py-14
                  lg:py-16
                "
              >
                {/* Gold progress line */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.08 + 0.2,
                    duration: 0.8,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="
                    absolute
                    left-0
                    top-0
                    h-px
                    w-20
                    origin-left
                    bg-[#D4AF37]
                  "
                />

                <div
                  className="
                    grid
                    gap-8
                    lg:grid-cols-[100px_1fr_1.2fr_80px]
                    lg:items-start
                  "
                >

                  {/* NUMBER */}
                  <div
                    className="
                      flex
                      items-center
                      gap-3
                    "
                  >
                    <span
                      className="
                        text-xs
                        font-medium
                        tracking-[0.2em]
                        text-[#B8862C]
                      "
                    >
                      {item.number}
                    </span>

                    <div className="h-px w-8 bg-[#D4AF37]/40 lg:hidden" />
                  </div>

                  {/* TITLE + ICON */}
                  <div className="flex items-start gap-5">

                    <div
                      className="
                        mt-1
                        shrink-0
                        text-[#C48A3A]
                        transition-transform
                        duration-500
                        group-hover:translate-x-1
                      "
                    >
                      <Icon
                        size={32}
                        strokeWidth={1.25}
                      />
                    </div>

                    <h3
                      className="
                        max-w-md
                        text-2xl
                        font-light
                        leading-tight
                        tracking-[-0.025em]
                        text-black
                        sm:text-3xl
                        lg:text-4xl
                      "
                    >
                      {item.title}
                    </h3>

                  </div>

                  {/* DESCRIPTION */}
                  <p
                    className="
                      max-w-xl
                      text-sm
                      leading-7
                      text-black/50
                      sm:text-base
                      sm:leading-8
                    "
                  >
                    {item.description}
                  </p>

                  {/* ARROW */}
                  <div
                    className="
                      hidden
                      justify-end
                      lg:flex
                    "
                  >
                    <ArrowUpRight
                      size={24}
                      strokeWidth={1.2}
                      className="
                        text-black/20
                        transition-all
                        duration-500
                        group-hover:-translate-y-1
                        group-hover:translate-x-1
                        group-hover:text-[#C48A3A]
                      "
                    />
                  </div>

                </div>
              </motion.div>
            );
          })}

          {/* Bottom border */}
          <div className="border-t border-black/10" />

        </div>

      </div>
    </section>
  );
}
