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
        px-4
        sm:px-20
        py-28
      "
    >
      {/* Ambient Glow */}
      <div className="absolute top-0 left-0 h-[600px] w-[600px] rounded-full bg-[#EFBD78]/10 blur-[180px]" />

      <div className="relative mx-auto">
        <div className="max-w-4xl">
          <h2 className="heading-2 text-black">
            Why People Choose Dubai for Investment
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-black/60">
            Dubai continues to attract investors from around the world thanks to
            its stable economy, tax advantages, exceptional infrastructure, and
            globally recognized real estate market. Whether you're looking for
            rental income, long-term appreciation, or a secure investment,
            Dubai offers opportunities for every type of investor.
          </p>
        </div>

        <div className="mt-20 grid gap-10 md:grid-cols-2 xl:grid-cols-4">
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
                    size={40}
                    className="text-[#C48A3A]"
                    strokeWidth={1.5}
                  />
                </div>

                <div>
                  <h3 className="text-2xl text-black">{item.title}</h3>

                  <p className="mt-3 leading-relaxed text-black/60">
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