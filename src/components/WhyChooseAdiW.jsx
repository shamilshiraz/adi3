import React from "react";
import { motion } from "framer-motion";
import {
  Globe,
  Building2,
  Landmark,
  TrendingUp,
} from "lucide-react";

const pillars = [
  {
    icon: Globe,
    title: "Global Reach",
    description:
      "Access investment opportunities across Dubai, London, Riyadh, and emerging international markets.",
  },
  {
    icon: Building2,
    title: "Developer Network",
    description:
      "Direct relationships with leading developers provide priority access to premium inventory.",
  },
  {
    icon: Landmark,
    title: "Advisory Expertise",
    description:
      "Market-driven guidance designed to align opportunities with long-term investment objectives.",
  },
  {
    icon: TrendingUp,
    title: "Growth Focused",
    description:
      "Investment strategies built around capital appreciation, rental yield, and portfolio diversification.",
  },
];

export default function WhyChooseAdhiWhite() {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-white
        px-4
        sm:px-20
        py-28
      "
    >
      {/* Ambient Glow */}
      <div className="absolute top-0 left-0 h-[600px] w-[600px] rounded-full bg-[#EFBD78]/10 blur-[180px]" />

      <div className="relative mx-auto">
        <div className="max-w-3xl">
          <p className="eyebrow text-[#8B6A3E]">
            WHY INVESTORS CHOOSE ADHI
          </p>

          <h2 className="heading-2 mt-6 text-black">
            Trusted Guidance For
            <br />
            Global Property Investments
          </h2>
        </div>

        {/* Editorial Features */}
        <div className="mt-20 grid gap-10 md:grid-cols-2 xl:grid-cols-4">
          {pillars.map((item, index) => {
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
                className="flex items-start gap-5"
              >
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-lg border border-[#EFBD78]/30 bg-[#EFBD78]/10">
                  <Icon
                    size={48}
                    className="text-[#C48A3A]"
                    strokeWidth={1.5}
                  />
                </div>

                <div>
                  <h3 className="text-2xl text-black">
                    {item.title}
                  </h3>

                  <p className="mt-2 leading-relaxed text-black/60">
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