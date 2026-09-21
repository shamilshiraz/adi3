import React from "react";
import { motion } from "framer-motion";
import {
  TrendingUp,
  KeyRound,
  Compass,
  Handshake,
} from "lucide-react";

const pillars = [
  {
    icon: TrendingUp,
    title: "Property Advice",
    description:
      "Get trusted guidance from experienced real estate professionals.",
  },
  {
    icon: KeyRound,
    title: "Market Opportunities",
    description:
      "Find properties that match your budget and investment goals.",
  },
  {
    icon: Compass,
    title: "Offers & Payment Plans",
    description:
      "Explore investment opportunities with suitable payment structures.",
  },
  {
    icon: Handshake,
    title: "End-to-End Support",
    description:
      "From property selection to handover, we're with you every step.",
  },
];

export default function WhyChooseAdhi() {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-black
        px-5
        py-20
        text-white
        sm:px-8
        sm:py-24
        lg:px-20
        lg:py-28
      "
    >
      {/* AMBIENT GOLD GLOW */}
      <div
        className="
          pointer-events-none
          absolute
          -left-40
          top-0
          h-[450px]
          w-[450px]
          rounded-full
          bg-[#D4AF37]/10
          blur-[160px]
          sm:h-[600px]
          sm:w-[600px]
          sm:blur-[180px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          right-[-150px]
          h-[350px]
          w-[350px]
          rounded-full
          bg-[#D4AF37]/5
          blur-[140px]
        "
      />

      <div className="relative mx-auto max-w-[1440px]">

        {/* SECTION HEADER */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="text-center"
        >
          <p
            className="
              text-[10px]
              font-medium
              uppercase
              tracking-[0.3em]
              text-[#D4AF37]
              sm:text-xs
            "
          >
            THE ADHI DIFFERENCE
          </p>

          <h2
            className="
              mt-4
              text-2xl
              font-medium
              uppercase
              tracking-tight
              text-white
              sm:text-3xl
              lg:text-4xl
            "
          >
            Why Choose ADHI
          </h2>

          <div className="mx-auto mt-5 h-px w-12 bg-[#D4AF37]" />

          <p
            className="
              mx-auto
              mt-6
              max-w-2xl
              text-sm
              leading-7
              text-white/60
              sm:text-base
              sm:leading-8
            "
          >
            A strategic approach to Dubai real estate,
            built around clarity, opportunity, and long-term
            investor relationships.
          </p>
        </motion.div>

        {/* PILLARS */}
        <div
          className="
            mt-14
            grid
            grid-cols-1
            gap-5
            sm:mt-16
            sm:grid-cols-2
            sm:gap-6
            lg:mt-20
            lg:grid-cols-4
            lg:gap-8
          "
        >
          {pillars.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{
                  opacity: 0,
                  y: 35,
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
                  duration: 0.7,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/[0.03]
                  p-6
                  transition-all
                  duration-500
                  hover:border-[#D4AF37]/40
                  hover:bg-white/[0.05]
                  sm:p-7
                  lg:p-8
                "
              >
                {/* GOLD TOP LINE */}
                <div
                  className="
                    absolute
                    left-0
                    top-0
                    h-px
                    w-0
                    bg-[#D4AF37]
                    transition-all
                    duration-500
                    group-hover:w-full
                  "
                />

                {/* ICON */}
                <div
                  className="
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-xl
                    border
                    border-[#D4AF37]/30
                    bg-[#D4AF37]/5
                    transition-all
                    duration-500
                    group-hover:border-[#D4AF37]/60
                    group-hover:bg-[#D4AF37]/10
                    sm:h-14
                    sm:w-14
                  "
                >
                  <Icon
                    size={25}
                    strokeWidth={1.4}
                    className="
                      text-[#D4AF37]
                      transition-transform
                      duration-500
                      group-hover:scale-110
                    "
                  />
                </div>

                {/* CONTENT */}
                <div className="mt-6">
                  <h3
                    className="
                      text-lg
                      font-medium
                      leading-tight
                      text-white
                      sm:text-xl
                    "
                  >
                    {item.title}
                  </h3>

                  <p
                    className="
                      mt-3
                      text-sm
                      leading-6
                      text-white/55
                      sm:leading-7
                    "
                  >
                    {item.description}
                  </p>
                </div>

                {/* NUMBER */}
                <span
                  className="
                    absolute
                    bottom-5
                    right-6
                    text-[10px]
                    tracking-[0.2em]
                    text-white/15
                  "
                >
                  0{index + 1}
                </span>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
