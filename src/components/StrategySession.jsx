
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
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
    title: "Market perspective",
    text: "Understand the forces shaping Dubai property and how they may relate to your decision.",
  },
  {
    icon: Building2,
    title: "Relevant opportunities",
    text: "Explore projects that fit your budget, timing, lifestyle, and longer-term objectives.",
  },
  {
    icon: MapPinned,
    title: "Location insight",
    text: "Compare communities through connectivity, lifestyle, rental demand, and future potential.",
  },
  {
    icon: Landmark,
    title: "Developer context",
    text: "Understand the project, the developer, the payment plan, and the details that matter.",
  },
  {
    icon: PieChart,
    title: "Return thinking",
    text: "Consider income, growth, holding periods, and possible exit paths before you decide.",
  },
  {
    icon: ShieldCheck,
    title: "Risk awareness",
    text: "Surface the questions and considerations worth understanding before you commit.",
  },
];

export default function StrategySession() {
  return (
    <section className="relative overflow-hidden bg-[#181715] page-padding section-spacing page-intro">
      {/* BACKGROUND GLOW */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(242,192,120,0.12),transparent_45%)]" />

      <div className="container-custom relative">
        <div className="grid items-start gap-12 lg:grid-cols-[480px_1fr] lg:gap-16">
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
            <p className="eyebrow text-[#F2C078]">
              YOUR PROPERTY JOURNEY
            </p>

            <h2 className="display-heading display-heading-lg mt-5 max-w-[560px] text-white">
              Clarity behind every{" "}
              <span className="text-[#F2C078]">
                decision.
              </span>
            </h2>

            <p className="mt-6 max-w-md text-[15px] leading-7 text-white/65 sm:text-base sm:leading-8 lg:text-lg">
              Property decisions are personal. We bring structure,
              perspective, and thoughtful guidance to every stage of
              your Dubai property journey.
            </p>

            <Link
              to="/contact"
              className="btn-gold mt-8 inline-flex items-center gap-2 sm:mt-10"
            >
              Start your strategy session
              <ArrowUpRight size={18} />
            </Link>
          </motion.div>

          {/* RIGHT */}
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
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
                  className="group rounded-[24px] border border-white/10 bg-white/[0.04] p-6 backdrop-blur transition-all duration-500 hover:border-[#F2C078]/40 hover:bg-white/[0.07] sm:rounded-[28px] sm:p-8"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F2C078]/10 transition-colors duration-300 group-hover:bg-[#F2C078]/20 sm:h-14 sm:w-14">
                    <Icon
                      size={24}
                      strokeWidth={1.5}
                      className="text-[#F2C078]"
                    />
                  </div>

                  <h3 className="heading-4 mt-6 text-light sm:mt-8">
                    {item.title}
                  </h3>

                  <p className="small mt-3 leading-relaxed text-white/60 sm:mt-4">
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
