import React from "react";
import { motion } from "framer-motion";
import {
  TrendingUp,
  Building2,
  MapPinned,
  Landmark,
  PieChart,
  ShieldCheck,
  ArrowUpRight,
} from "lucide-react";

const benefits = [
  {
    icon: TrendingUp,
    title: "Market Insights",
    text: "Understand current market trends, pricing movements and investment opportunities across Dubai.",
  },
  {
    icon: Building2,
    title: "Investment Options",
    text: "Discover projects that align with your budget, timeline and long-term financial objectives.",
  },
  {
    icon: MapPinned,
    title: "Area Recommendations",
    text: "Compare communities based on rental demand, capital growth and future infrastructure.",
  },
  {
    icon: Landmark,
    title: "Developer Recommendations",
    text: "Gain access to trusted developers with proven delivery records and premium projects.",
  },
  {
    icon: PieChart,
    title: "ROI Guidance",
    text: "Estimate rental yields, appreciation potential and exit strategies for every opportunity.",
  },
  {
    icon: ShieldCheck,
    title: "Risk Considerations",
    text: "Identify potential risks and receive practical guidance before making any investment decision.",
  },
];

export default function StrategySession() {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#4E0026]
        page-padding
        section-spacing
      "
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(239,189,120,0.18),transparent_45%)]" />

      <div className="container-custom relative">
        <div className="grid lg:grid-cols-[480px_1fr] gap-16 items-start">
          {/* LEFT */}
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
            className="lg:sticky lg:top-28"
          >
            <p className="eyebrow">
              STRATEGY SESSION
            </p>

            <h2 className="heading-3 text-light mt-6">
              Your Dubai
              <br />
              Investment
              <br />
              Strategy Session
            </h2>

            <p className="sub text-white/70 mt-6 max-w-md">
              A personalized consultation designed to
              help you evaluate opportunities, understand
              the market, and avoid costly investment
              mistakes.
            </p>

            <button className="btn-gold mt-10 inline-flex items-center gap-2">
              Book Your Session

              <ArrowUpRight size={18} />
            </button>
          </motion.div>

          {/* RIGHT */}
          <div className="grid gap-6 sm:grid-cols-2">
            {benefits.map((item, index) => {
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
                    group
                    rounded-[28px]
                    border
                    border-white/10
                    bg-white/5
                    backdrop-blur
                    p-8
                    transition-all
                    duration-500
                    hover:border-[#EFBD78]/40
                    hover:bg-white/8
                  "
                >
                  <div
                    className="
                      flex
                      h-14
                      w-14
                      items-center
                      justify-center
                      rounded-2xl
                      bg-[#EFBD78]/15
                    "
                  >
                    <Icon
                      size={24}
                      className="text-[#EFBD78]"
                    />
                  </div>

                  <h3 className="heading-4 text-light mt-8">
                    {item.title}
                  </h3>

                  <p className="small text-white/65 mt-4 leading-relaxed">
                    {item.text}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}