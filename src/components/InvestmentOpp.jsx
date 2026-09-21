"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  TrendingUp,
  Coins,
  Crown,
  Landmark,
  Building2,
  Globe,
  ArrowUpRight,
} from "lucide-react";

const opportunities = [
  {
    icon: Building2,
    number: "01",
    title: "Off-Plan Investments",
    subtitle: "Early-stage developer launches",
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1600&q=85",
    thesis:
      "Access pre-launch and off-plan developments with attractive payment plans and strong appreciation potential before completion.",
    risk: "Moderate to High",
    investor: "Long-Term Investors",
  },
  {
    icon: Globe,
    number: "02",
    title: "International Diversification",
    subtitle: "Global property portfolio",
    image:
      "https://images.unsplash.com/photo-1448630360428-65456885c650?auto=format&fit=crop&w=1600&q=85",
    thesis:
      "Diversify your real estate holdings across key global markets to balance risk and capture international growth opportunities.",
    risk: "Moderate",
    investor: "Global Investors",
  },
  {
    icon: TrendingUp,
    number: "03",
    title: "Capital Appreciation",
    subtitle: "Emerging growth districts",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=85",
    thesis:
      "Focused on communities positioned for long-term value growth through infrastructure expansion and increasing demand.",
    risk: "Moderate",
    investor: "Growth-Focused Investors",
  },
  {
    icon: Coins,
    number: "04",
    title: "Rental Yield",
    subtitle: "Income-focused investments",
    image:
      "https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=1600&q=85",
    thesis:
      "Designed for investors seeking consistent rental income and strong occupancy potential.",
    risk: "Low to Moderate",
    investor: "Income Investors",
  },
  {
    icon: Crown,
    number: "05",
    title: "Luxury Wealth Preservation",
    subtitle: "Ultra-prime assets",
    image:
      "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1600&q=85",
    thesis:
      "Premium residences offering scarcity, prestige and long-term capital preservation.",
    risk: "Low",
    investor: "High-Net-Worth Individuals",
  },
  {
    icon: Landmark,
    number: "06",
    title: "Golden Visa Opportunities",
    subtitle: "Residency-linked investments",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1600&q=85",
    thesis:
      "Strategic investment opportunities aligned with UAE residency and relocation planning.",
    risk: "Moderate",
    investor: "International Investors",
  },
];

export default function InvestmentStrategiesCarousel() {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-black
        py-20
        sm:py-24
        lg:py-32
      "
    >
      {/* SUBTLE GOLD ATMOSPHERE */}
      <div
        className="
          pointer-events-none
          absolute
          -right-40
          top-20
          h-[500px]
          w-[500px]
          rounded-full
          bg-[#D4AF37]/5
          blur-[180px]
        "
      />

      <div className="relative">

        {/* HEADER */}
        <motion.div
          initial={{
            opacity: 0,
            y: 35,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.9,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="
            mx-auto
            max-w-[1440px]
            px-5
            sm:px-8
            lg:px-20
          "
        >
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between lg:gap-20">

            <div className="max-w-4xl">

              <div className="flex items-center gap-4">
                <span className="h-px w-10 bg-[#D4AF37]" />

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
                  Investment Opportunities
                </p>
              </div>

              <h2
                className="
                  mt-6
                  max-w-4xl
                  text-4xl
                  font-medium
                  leading-[0.98]
                  tracking-[-0.035em]
                  text-white
                  sm:text-5xl
                  lg:text-7xl
                "
              >
                Different strategies.
                <br />
                <span className="text-white/35">
                  One informed decision.
                </span>
              </h2>

            </div>

            <p
              className="
                mt-7
                max-w-md
                text-sm
                leading-7
                text-white/50
                lg:mb-2
                lg:mt-0
                lg:text-base
              "
            >
              Explore investment approaches built around
              different objectives — from capital growth and
              rental income to wealth preservation and
              residency planning.
            </p>

          </div>
        </motion.div>

        {/* STRATEGY RAIL */}
        <div className="mt-14 sm:mt-18 lg:mt-20">

          <div
            className="
              flex
              snap-x
              snap-mandatory
              gap-4
              overflow-x-auto
              px-5
              pb-8
              [scrollbar-width:none]
              [-ms-overflow-style:none]
              [&::-webkit-scrollbar]:hidden
              sm:gap-6
              sm:px-8
              lg:px-20
            "
          >

            {opportunities.map((item, index) => {
              const Icon = item.icon;
              const isFirst = index === 0;

              return (
                <motion.article
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
                    amount: 0.15,
                  }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.06,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className={`
                    group
                    relative
                    h-[520px]
                    shrink-0
                    snap-start
                    overflow-hidden
                    border
                    border-white/10
                    bg-[#111]
                    ${
                      isFirst
                        ? "w-[calc(100vw-40px)] sm:w-[520px] lg:w-[580px]"
                        : "w-[calc(100vw-64px)] sm:w-[400px] lg:w-[440px]"
                    }
                  `}
                >

                  {/* IMAGE */}
                  <img
                    src={item.image}
                    alt={item.title}
                    className="
                      absolute
                      inset-0
                      h-full
                      w-full
                      object-cover
                      transition-transform
                      duration-[1200ms]
                      ease-out
                      group-hover:scale-105
                    "
                  />

                  {/* DARK CINEMATIC GRADIENT */}
                  <div
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-b
                      from-black/10
                      via-black/15
                      to-black/95
                    "
                  />

                  {/* LEFT EDGE GOLD */}
                  <div
                    className="
                      absolute
                      bottom-0
                      left-0
                      top-0
                      w-px
                      bg-[#D4AF37]/50
                    "
                  />

                  {/* NUMBER */}
                  <div
                    className="
                      absolute
                      left-6
                      top-6
                      flex
                      items-center
                      gap-3
                      sm:left-8
                      sm:top-8
                    "
                  >
                    <span
                      className="
                        text-xs
                        tracking-[0.25em]
                        text-[#D4AF37]
                      "
                    >
                      {item.number}
                    </span>

                    <span className="h-px w-8 bg-[#D4AF37]/50" />
                  </div>

                  {/* ICON */}
                  <div
                    className="
                      absolute
                      right-6
                      top-6
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      border
                      border-white/20
                      bg-black/20
                      backdrop-blur-md
                      sm:right-8
                      sm:top-8
                    "
                  >
                    <Icon
                      size={18}
                      strokeWidth={1.4}
                      className="text-[#D4AF37]"
                    />
                  </div>

                  {/* CONTENT */}
                  <div
                    className="
                      absolute
                      bottom-0
                      left-0
                      right-0
                      p-6
                      sm:p-8
                    "
                  >

                    {/* SUBTITLE */}
                    <p
                      className="
                        text-[9px]
                        font-medium
                        uppercase
                        tracking-[0.22em]
                        text-[#D4AF37]
                        sm:text-[10px]
                      "
                    >
                      {item.subtitle}
                    </p>

                    {/* TITLE */}
                    <h3
                      className={`
                        mt-3
                        max-w-xl
                        font-medium
                        leading-[1]
                        tracking-[-0.025em]
                        text-white
                        ${
                          isFirst
                            ? "text-3xl sm:text-4xl"
                            : "text-2xl sm:text-3xl"
                        }
                      `}
                    >
                      {item.title}
                    </h3>

                    {/* DESCRIPTION */}
                    <p
                      className="
                        mt-4
                        max-w-xl
                        text-xs
                        leading-6
                        text-white/65
                        sm:text-sm
                        sm:leading-7
                      "
                    >
                      {item.thesis}
                    </p>

                    {/* META */}
                    <div className="mt-5 flex items-center gap-2">

                      <span
                        className="
                          border
                          border-white/15
                          bg-black/30
                          px-3
                          py-1.5
                          text-[9px]
                          uppercase
                          tracking-[0.12em]
                          text-white/70
                          backdrop-blur-md
                        "
                      >
                        {item.risk} Risk
                      </span>

                      <span
                        className="
                          hidden
                          border
                          border-white/15
                          bg-black/30
                          px-3
                          py-1.5
                          text-[9px]
                          uppercase
                          tracking-[0.12em]
                          text-white/70
                          backdrop-blur-md
                          sm:block
                        "
                      >
                        {item.investor}
                      </span>

                      <ArrowUpRight
                        size={17}
                        className="
                          ml-auto
                          text-[#D4AF37]
                          transition-transform
                          duration-300
                          group-hover:-translate-y-1
                          group-hover:translate-x-1
                        "
                      />

                    </div>

                  </div>

                </motion.article>
              );
            })}

            {/* END SPACING */}
            <div className="w-1 shrink-0 sm:w-4 lg:w-12" />

          </div>

        </div>

        {/* BOTTOM NOTE */}
        <div
          className="
            mx-auto
            mt-2
            flex
            max-w-[1440px]
            items-center
            gap-4
            px-5
            sm:px-8
            lg:px-20
          "
        >
          <div className="h-px flex-1 bg-white/10" />

          <p
            className="
              shrink-0
              text-[9px]
              uppercase
              tracking-[0.2em]
              text-white/30
              sm:text-[10px]
            "
          >
            Swipe to explore
          </p>

          <div className="h-px w-8 bg-[#D4AF37]/40" />
        </div>

      </div>
    </section>
  );
}
