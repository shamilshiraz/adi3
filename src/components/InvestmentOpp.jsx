"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  TrendingUp,
  Coins,
  Crown,
  Landmark,
} from "lucide-react";

const opportunities = [
  {
    icon: TrendingUp,
    title: "Capital Appreciation",
    subtitle: "Emerging growth districts",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=80",
    thesis:
      "Focused on communities positioned for long-term value growth through infrastructure expansion and increasing demand.",
    risk: "Moderate",
    investor: "Growth-Focused Investors",
  },
  {
    icon: Coins,
    title: "Rental Yield",
    subtitle: "Income-focused investments",
    image:
      "https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=1400&q=80",
    thesis:
      "Designed for investors seeking consistent rental income and strong occupancy potential.",
    risk: "Low to Moderate",
    investor: "Income Investors",
  },
  {
    icon: Crown,
    title: "Luxury Wealth Preservation",
    subtitle: "Ultra-prime assets",
    image:
      "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1400&q=80",
    thesis:
      "Premium residences offering scarcity, prestige and long-term capital preservation.",
    risk: "Low",
    investor: "High-Net-Worth Individuals",
  },
  {
    icon: Landmark,
    title: "Golden Visa Opportunities",
    subtitle: "Residency-linked investments",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1400&q=80",
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
        bg-[#4E0026]
        py-24
        px-4
      "
    >

      <div className="relative">
        <motion.div
          className="lg:px-20"
          initial={{
            opacity: 0,
            y: 30,
            filter: "blur(12px)",
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
          }}
          viewport={{ once: true }}
        >
          <p className="eyebrow">
            FEATURED INVESTMENT OPPORTUNITIES
          </p>

          <h2 className="heading-2 text-light mt-6 max-w-4xl">
            Investment Strategies
            <br />
            Tailored To Different Objectives
          </h2>

          <p className="sub text-muted mt-6 max-w-2xl">
            Every investor has different priorities.
            Explore opportunities aligned with growth,
            income generation, wealth preservation and
            residency objectives.
          </p>
        </motion.div>

        <div className="mt-16 sm:px-6 lg:px-20">
          <div
            className="
              flex
              gap-8
              overflow-x-auto
              snap-x
              snap-mandatory
              scroll-smooth
              pb-6
              [-webkit-overflow-scrolling:touch]
            "
          >
            {opportunities.map((item, i) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{
                    opacity: 0,
                    y: 30,
                    filter: "blur(10px)",
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)",
                  }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.8,
                    delay: i * 0.08,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="
                    relative
                    snap-center
                    flex-shrink-0
                    w-[350px]
                    sm:w-[380px]
                    h-[480px]
                    sm:h-[540px]
                    overflow-hidden
                    rounded-[32px]
                    group
                  "
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="
                      absolute inset-0
                      h-full w-full
                      object-cover
                      transition-transform
                      duration-700
                      group-hover:scale-105
                    "
                  />

                  <div
                    className="
                      absolute inset-0
                      bg-gradient-to-t
                      from-[#0A0608]
                      via-[#0A0608]/40
                      to-transparent
                    "
                  />

                  <div
                    className="
                      absolute inset-0
                      bg-gradient-to-br
                      from-[#EFBD78]/10
                      to-transparent
                    "
                  />

                  <div
                    className="
                      absolute
                      bottom-0
                      left-0
                      right-0
                      sm:p-8
                      px-4
                      py-5
                    "
                  >
                    <div className="flex items-center gap-3">
                      <Icon
                        size={20}
                        className="text-[#EFBD78]"
                      />

                      <span className="text-xs uppercase tracking-[0.2em] text-[#EFBD78]">
                        {item.subtitle}
                      </span>
                    </div>

                    <h3 className="mt-5 text-3xl text-white">
                      {item.title}
                    </h3>

                    <p className="mt-4 text-white/75 leading-relaxed">
                      {item.thesis}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      <span className="rounded-full border border-white/10 bg-white/10 px-3 py-2 text-xs text-white">
                        {item.risk} Risk
                      </span>

                      <span className="rounded-full border border-white/10 bg-white/10 px-3 py-2 text-xs text-white">
                        {item.investor}
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
