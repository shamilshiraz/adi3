import React from "react";
import { motion } from "framer-motion";
import {
  Building2,
  ArrowRightLeft,
  Hammer,
  KeyRound,
} from "lucide-react";

const sections = [
  {
    icon: Building2,
    title: "Buy a Property",
    description:
      "Dubai attracts investors worldwide with its strong market growth, tax-friendly environment, world-class lifestyle, and high-quality real estate opportunities. It offers potential for long-term wealth creation, rental income, and a secure investment future.",
  },
  {
    icon: ArrowRightLeft,
    title: "Rent or Sell",
    description:
      "After purchasing a property, you have the flexibility to choose your investment strategy. Generate regular rental income or sell the property later to benefit from capital appreciation and maximize your returns.",
  },
  {
    icon: Hammer,
    title: "Off-Plan Properties",
    description:
      "Invest in properties under construction without paying the full amount upfront. Build ownership through flexible payment plans, then earn rental income or benefit from long-term value appreciation after completion.",
  },
  {
    icon: KeyRound,
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
      {/* Ambient Glow */}
      <div
        className="
          pointer-events-none
          absolute
          left-0
          top-0
          h-[500px]
          w-[500px]
          rounded-full
          bg-[#D4AF37]/[0.06]
          blur-[180px]
        "
      />

      <div className="container-custom relative">

        {/* HEADER */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="max-w-5xl"
        >
          <h2
            className="
              text-[2.8rem]
              font-light
              leading-[1.02]
              tracking-[-0.04em]
              text-black
              sm:text-[4rem]
              lg:text-[4.5rem]
            "
          >
            Why People Choose
            <br />

            <span className="text-black/40">
              Dubai for Investment
            </span>
          </h2>

          <p
            className="
              mt-6
              max-w-3xl
              text-sm
              leading-7
              text-black/55
              sm:text-base
              sm:leading-8
            "
          >
            Dubai continues to attract investors from around the world thanks
            to its stable economy, tax advantages, exceptional infrastructure,
            and globally recognized real estate market. Whether you're looking
            for rental income, long-term appreciation, or a secure investment,
            Dubai offers opportunities for every type of investor.
          </p>
        </motion.div>

        {/* CONTENT */}
        <div
          className="
            mt-16
            grid
            gap-x-10
            gap-y-14
            sm:mt-20
            md:grid-cols-2
            xl:grid-cols-4
            xl:gap-x-8
          "
        >
          {sections.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{
                  opacity: 0,
                  y: 40,
                  filter: "blur(10px)",
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  filter: "blur(0px)",
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
                  flex
                  items-start
                  gap-4
                  sm:gap-5
                "
              >
                {/* ICON */}
                <div
                  className="
                    flex
                    h-14
                    w-14
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    border
                    border-[#D4AF37]/25
                    bg-[#D4AF37]/[0.06]
                    sm:h-16
                    sm:w-16
                  "
                >
                  <Icon
                    size={34}
                    className="text-[#C48A3A]"
                    strokeWidth={1.4}
                  />
                </div>

                {/* TEXT */}
                <div className="min-w-0">
                  <h3
                    className="
                      text-xl
                      font-normal
                      leading-tight
                      tracking-[-0.02em]
                      text-black
                      sm:text-2xl
                    "
                  >
                    {item.title}
                  </h3>

                  <p
                    className="
                      mt-3
                      text-sm
                      leading-6
                      text-black/55
                      sm:text-[15px]
                      sm:leading-7
                    "
                  >
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
