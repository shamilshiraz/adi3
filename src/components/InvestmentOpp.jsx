
"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  TrendingUp,
  Coins,
  Crown,
  Landmark,
  Building2,
  Globe,
  ArrowUpRight,
} from "lucide-react";

const GOLD = "#F2C078";
const ease = [0.16, 1, 0.3, 1];

const opportunities = [
  {
    icon: Building2,
    number: "01",
    title: "Off-Plan Investments",
    subtitle: "Early access to selected launches",
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1600&q=85",
    thesis:
      "Explore selected developments earlier in their lifecycle, with staged payment plans and a clear view of the project journey.",
    risk: "Moderate to High",
    investor: "Long-Term Investors",
  },
  {
    icon: Globe,
    number: "02",
    title: "International Diversification",
    subtitle: "Build a broader property portfolio",
    image:
      "https://images.unsplash.com/photo-1448630360428-65456885c650?auto=format&fit=crop&w=1600&q=85",
    thesis:
      "Consider property across carefully chosen markets to broaden your portfolio and balance your long-term objectives.",
    risk: "Moderate",
    investor: "Global Investors",
  },
  {
    icon: TrendingUp,
    number: "03",
    title: "Capital Appreciation",
    subtitle: "Positioned for long-term growth",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=85",
    thesis:
      "Focus on communities shaped by infrastructure, connectivity, and sustained demand over a longer investment horizon.",
    risk: "Moderate",
    investor: "Growth-Focused Investors",
  },
  {
    icon: Coins,
    number: "04",
    title: "Rental Yield",
    subtitle: "Property designed around income",
    image:
      "https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=1600&q=85",
    thesis:
      "Explore properties with rental demand and practical fundamentals for investors who value recurring income.",
    risk: "Low to Moderate",
    investor: "Income Investors",
  },
  {
    icon: Crown,
    number: "05",
    title: "Luxury Wealth Preservation",
    subtitle: "Scarce assets for long-term value",
    image:
      "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1600&q=85",
    thesis:
      "Consider distinctive residences where location, quality, and scarcity support a long-term wealth strategy.",
    risk: "Low",
    investor: "High-Net-Worth Individuals",
  },
  {
    icon: Landmark,
    number: "06",
    title: "Golden Visa Opportunities",
    subtitle: "Property aligned with relocation goals",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1600&q=85",
    thesis:
      "Explore property options that support wider relocation planning and the UAE residency conversation.",
    risk: "Moderate",
    investor: "International Investors",
  },
];

export default function InvestmentStrategiesCarousel() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      aria-labelledby="investment-strategies-heading"
      className="
        relative isolate overflow-hidden
        bg-[#080808] py-16 text-white
        sm:py-20 lg:py-28
      "
    >
      {/* Brand-consistent ambient glow */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute -right-40 top-10 -z-10
          h-[400px] w-[400px] rounded-full
          bg-[#F2C078]/[0.06] blur-[140px]
          sm:h-[500px] sm:w-[500px]
        "
      />

      {/* Section heading */}
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{
          duration: reduceMotion ? 0 : 0.7,
          ease,
        }}
        className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-20"
      >
        <div className="max-w-4xl">
          <div className="flex items-center gap-3">
          </div>

          <h2
            id="investment-strategies-heading"
            className="
              display-heading display-heading-lg
              mt-5 max-w-4xl text-white
            "
          >
            One strategy built
            {" "}
            <span style={{ color: GOLD }}>
             for your goals.
            </span>
          </h2>

          <div
            aria-hidden="true"
            className="mt-6 h-px w-14"
            style={{ backgroundColor: GOLD }}
          />

          <p
            className="
              mt-6 max-w-2xl text-sm leading-7 text-white/60
              sm:text-base sm:leading-8
            "
          >
            Every investor has different priorities. Explore pathways
            built around growth, income, lifestyle, wealth preservation,
            or long-term relocation goals.
          </p>
        </div>
      </motion.div>

      {/* Horizontal investment cards */}
      <div
        id="strategies"
        className="mt-10 sm:mt-14 lg:mt-16"
      >
        <div
          className="
            flex snap-x snap-mandatory gap-4
            overflow-x-auto overscroll-x-contain
            px-5 pb-8
            [scrollbar-width:none]
            [-ms-overflow-style:none]
            [&::-webkit-scrollbar]:hidden
            sm:gap-5 sm:px-8
            lg:gap-6 lg:px-20
          "
          aria-label="Investment strategies"
          tabIndex={0}
        >
          {opportunities.map((item, index) => {
            const Icon = item.icon;
            const isFirst = index === 0;

            return (
              <motion.article
                key={item.number}
                initial={
                  reduceMotion
                    ? false
                    : { opacity: 0, y: 20 }
                }
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: reduceMotion ? 0 : 0.6,
                  delay: reduceMotion ? 0 : index * 0.06,
                  ease,
                }}
                className={`
                  group relative flex h-[470px] shrink-0
                  snap-start flex-col justify-end
                  overflow-hidden border border-white/10
                  bg-[#111111]
                  ${isFirst
                    ? "w-[calc(100vw-40px)] sm:w-[500px] lg:w-[540px]"
                    : "w-[calc(100vw-56px)] sm:w-[380px] lg:w-[400px]"
                  }
                  sm:h-[500px]
                `}
              >
                {/* Image */}
                <img
                  src={item.image}
                  alt=""
                  loading={index < 2 ? "eager" : "lazy"}
                  decoding="async"
                  className="
                    absolute inset-0 h-full w-full object-cover
                    transition-transform duration-700 ease-out
                    group-hover:scale-[1.04]
                    motion-reduce:transition-none
                  "
                />

                {/* Readability overlay */}
                <div
                  aria-hidden="true"
                  className="
                    absolute inset-0
                    bg-gradient-to-b
                    from-black/20 via-black/25 to-black/95
                  "
                />

                {/* Signature gold edge */}
                <div
                  aria-hidden="true"
                  className="absolute bottom-0 left-0 top-0 w-px bg-[#F2C078]/60"
                />

                {/* Number */}
                <div className="absolute left-5 top-5 flex items-center gap-3 sm:left-7 sm:top-7">
                  <span
                    className="text-xs tracking-[0.2em]"
                    style={{ color: GOLD }}
                  >
                    {item.number}
                  </span>

                  <span className="h-px w-7 bg-[#F2C078]/60" />
                </div>

                {/* Icon */}
                <div className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center border border-white/20 bg-black/30 backdrop-blur-md sm:right-7 sm:top-7">
                  <Icon
                    aria-hidden="true"
                    size={19}
                    strokeWidth={1.4}
                    style={{ color: GOLD }}
                  />
                </div>

                {/* Card content */}
                <div className="relative z-10 p-5 sm:p-7">
                  <p
                    className="
                      text-[9px] font-medium uppercase
                      leading-5 tracking-[0.18em]
                      sm:text-[10px] sm:tracking-[0.2em]
                    "
                    style={{ color: GOLD }}
                  >
                    {item.subtitle}
                  </p>

                  <h3
                    className={`
                      mt-3 max-w-md font-medium
                      leading-[1.12] tracking-[-0.03em]
                      text-white
                      ${isFirst
                        ? "text-3xl sm:text-4xl"
                        : "text-2xl sm:text-3xl"
                      }
                    `}
                  >
                    {item.title}
                  </h3>

                  <p className="mt-4 max-w-lg text-xs leading-6 text-white/70 sm:text-sm sm:leading-7">
                    {item.thesis}
                  </p>

                  {/* Investment metadata */}
                  <div className="mt-5 flex flex-wrap items-center gap-2">
                    <span className="border border-white/20 bg-black/30 px-2.5 py-1.5 text-[9px] leading-4 text-white/80 sm:px-3 sm:text-[10px]">
                      {item.risk} Risk
                    </span>

                    <span className="hidden border border-white/20 bg-black/30 px-3 py-1.5 text-[10px] leading-4 text-white/80 sm:inline-block">
                      {item.investor}
                    </span>

                    <ArrowUpRight
                      aria-hidden="true"
                      size={18}
                      strokeWidth={1.4}
                      style={{ color: GOLD }}
                      className="
                        ml-auto transition-transform duration-300
                        group-hover:-translate-y-0.5
                        group-hover:translate-x-0.5
                        motion-reduce:transition-none
                      "
                    />
                  </div>
                </div>
              </motion.article>
            );
          })}

          <div aria-hidden="true" className="w-1 shrink-0 sm:w-4" />
        </div>
      </div>

      {/* Swipe hint */}
      <div className="mx-auto mt-1 flex max-w-[1440px] items-center gap-4 px-5 sm:px-8 lg:px-20">
        <div className="h-px flex-1 bg-white/10" />

        <p className="shrink-0 text-[9px] uppercase tracking-[0.2em] text-white/40 sm:text-[10px]">
          Swipe to explore
        </p>

        <div className="h-px w-8 bg-[#F2C078]/60" />
      </div>
    </section>
  );
}
