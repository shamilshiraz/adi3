import React from "react";
import { motion } from "framer-motion";
import {
  TrendingUp,
  KeyRound,
  Compass,
  Handshake,
  BriefcaseBusiness,
  Search,
  Building2,
  BadgeDollarSign,
  FileCheck,
  HeartHandshake,
} from "lucide-react";

const pillars = [
  {
    icon: TrendingUp,
    title: "Expertise",
    description: "Years of market understanding.",
  },
  {
    icon: KeyRound,
    title: "Access",
    description: "Off-market and early-stage opportunities.",
  },
  {
    icon: Compass,
    title: "Guidance",
    description: "Investment-first recommendations.",
  },
  {
    icon: Handshake,
    title: "Relationships",
    description: "Long-term investor partnerships.",
  },
];

const advantages = [
  {
    icon: BriefcaseBusiness,
    title: "Investment Advisory",
    description: "Strategy before selection.",
  },
  {
    icon: Search,
    title: "Opportunity Identification",
    description: "Market-backed recommendations.",
  },
  {
    icon: Building2,
    title: "Developer Access",
    description: "Direct developer relationships.",
  },
  {
    icon: BadgeDollarSign,
    title: "Negotiation",
    description: "Best available commercial terms.",
  },
  {
    icon: FileCheck,
    title: "Purchase Assistance",
    description: "End-to-end support.",
  },
  {
    icon: HeartHandshake,
    title: "After-Sales Service",
    description: "Support beyond transaction.",
  },
];

export default function WhyChooseAdhi() {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#4E0026]
        px-4
        sm:px-20
        py-28
        text-white
      "
    >
      {/* Ambient Glow */}
      <div className="absolute top-0 left-0 h-[600px] w-[600px] rounded-full bg-[#EFBD78]/10 blur-[180px]" />

      <div className="relative mx-auto ">

      <div className=" mb-16">
        <h2 className="              text-xl
              md:text-3xl
              uppercase
              font-regular
              text-center
              ">

          WHY CHOOSE ADHI
        </h2>
      </div>
        {/* Editorial Pillars */}
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
  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-lg border border-[#EFBD78]/30 bg-white/5">
    <Icon
      size={48}
      className="text-[#EFBD78]"
      strokeWidth={1.5}
    />
  </div>

  <div>
    <h3 className="text-2xl text-white">
      {item.title}
    </h3>

    <p className="mt-2 text-white/70 leading-relaxed">
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