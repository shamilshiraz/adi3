import React from "react";
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
    title: "Buy a Property",
    description:
      "Dubai attracts investors worldwide with its strong market growth, tax-friendly environment, world-class lifestyle, and high-quality real estate opportunities. It offers potential for long-term wealth creation, rental income, and a secure investment future.",
  },
  {
    icon: ArrowRightLeft,
    number: "02",
    title: "Rent or Sell",
    description:
      "After purchasing a property, you have the flexibility to choose your investment strategy. Generate regular rental income or sell the property later to benefit from capital appreciation and maximize your returns.",
  },
  {
    icon: Hammer,
    number: "03",
    title: "Off-Plan Properties",
    description:
      "Invest in properties under construction without paying the full amount upfront. Build ownership through flexible payment plans, then earn rental income or benefit from long-term value appreciation after completion.",
  },
  {
    icon: KeyRound,
    number: "04",
    title: "Ready Properties",
    description:
      "Ready properties give you immediate ownership and access. Complete the purchase, receive your keys, move in, or start earning rental income right away without waiting for construction.",
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
          <h2
            className="
              text-[3rem]
              font-light
              leading-[0.98]
              tracking-[-0.045em]
              text-black
              sm:text-[4.5rem]
              lg:text-[5.5rem]
            "
          >
            Why People Choose
            <br />
            <span className="text-black/35">
              Dubai for Investment
            </span>
          </h2>

          <div className="mt-8 flex items-center gap-4">
            <span className="h-px w-16 bg-[#D4AF37]" />

            <span
              className="
                text-[10px]
                uppercase
                tracking-[0.3em]
                text-[#B8862C]
              "
            >
              THE DUBAI ADVANTAGE
            </span>
          </div>

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
            Dubai continues to attract investors from around the world thanks
            to its stable economy, tax advantages, exceptional infrastructure,
            and globally recognized real estate market.
          </p>
        </motion.div>

        {/* ================= LIST ================= */}

        <div className="mt-20 sm:mt-28">

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
