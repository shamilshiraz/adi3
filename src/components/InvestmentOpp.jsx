import React from "react";
import { motion } from "framer-motion";
import {
  TrendingUp,
  Coins,
  Crown,
  Landmark,
  ArrowUpRight,
} from "lucide-react";

const opportunities = [
  {
    icon: TrendingUp,
    title: "Capital Appreciation",
    subtitle: "Emerging growth districts.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=80",
    thesis:
      "Focused on communities positioned for long-term value growth through infrastructure expansion, population growth, and increasing demand.",
    risk: "Moderate",
    investor: "Growth-Focused Investors",
  },
  {
    icon: Coins,
    title: "Rental Yield",
    subtitle: "Income-focused investments.",
    image:
      "https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=1400&q=80",
    thesis:
      "Designed for investors seeking consistent rental income and strong occupancy potential in established communities.",
    risk: "Low to Moderate",
    investor: "Income Investors",
  },
  {
    icon: Crown,
    title: "Luxury Wealth Preservation",
    subtitle: "Ultra-prime assets.",
    image:
      "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1400&q=80",
    thesis:
      "Premium residences in sought-after locations offering scarcity, prestige, and long-term capital preservation.",
    risk: "Low",
    investor: "High-Net-Worth Individuals",
  },
  {
    icon: Landmark,
    title: "Golden Visa Opportunities",
    subtitle: "Residency-linked investments.",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1400&q=80",
    thesis:
      "Strategic investment opportunities aligned with UAE residency objectives and long-term relocation planning.",
    risk: "Moderate",
    investor: "International Investors",
  },
];

export default function InvestmentOpportunities() {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#1C0D17]
        page-padding
        section-spacing
      "
    >
      {/* Ambient Glow */}
      <div className="absolute top-0 right-0 h-[600px] w-[600px] rounded-full bg-[#EFBD78]/10 blur-[180px]" />

      <div className="container-custom relative">
        {/* Header */}
        <motion.div
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
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="max-w-4xl"
        >
          <p className="eyebrow">
            FEATURED INVESTMENT OPPORTUNITIES
          </p>

          <h2 className="heading-2 text-light mt-6">
            Investment Strategies
            <br />
            Tailored To Different Objectives
          </h2>

          <p className="sub text-muted mt-6 max-w-2xl">
            Every investor has different priorities. We help
            identify opportunities aligned with growth,
            income generation, wealth preservation, and
            residency objectives.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="mt-16 space-y-6">
          {opportunities.map((item, index) => {
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
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.08,
                  duration: 0.8,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="
                  glass-card
                  overflow-hidden
                "
              >
                <div className="grid lg:grid-cols-[420px_1fr]">
                  {/* Image */}
                  <div className="relative h-[300px] lg:h-full">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="
                        absolute
                        inset-0
                        h-full
                        w-full
                        object-cover
                      "
                    />

                    <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="p-8 lg:p-12">
                    <div className="flex items-center gap-3">
                      <Icon
                        size={22}
                        className="text-[#EFBD78]"
                        strokeWidth={1.5}
                      />

                      <span className="small text-muted">
                        Investment Category
                      </span>
                    </div>

                    <h3 className="heading-4 text-light mt-6">
                      {item.title}
                    </h3>

                    <p className="sub text-muted mt-2">
                      {item.subtitle}
                    </p>

                    <div className="divider-light my-8" />

                    <div>
                      <p className="small text-[#EFBD78]">
                        Investment Thesis
                      </p>

                      <p className="sub text-muted mt-3">
                        {item.thesis}
                      </p>
                    </div>

                    <div className="mt-8 grid md:grid-cols-2 gap-6">
                      <div>
                        <p className="small text-[#EFBD78]">
                          Risk Profile
                        </p>

                        <p className="sub text-light mt-2">
                          {item.risk}
                        </p>
                      </div>

                      <div>
                        <p className="small text-[#EFBD78]">
                          Investor Type
                        </p>

                        <p className="sub text-light mt-2">
                          {item.investor}
                        </p>
                      </div>
                    </div>

                    <button className="mt-10 btn-secondary">
                      Learn More
                      <ArrowUpRight
                        size={16}
                        className="ml-2"
                      />
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}