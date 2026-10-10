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
    <section
      className="
        relative
        overflow-hidden
        bg-black
        page-padding
        section-spacing
        page-intro
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
        
<h2
  className="display-heading display-heading-lg max-w-[560px] text-white"
>
            A clearer strategy
              <br />
              for your Dubai property
            </h2>

            <p
  className="
    mt-6
    max-w-md
    text-[15px]
    leading-7
    text-white/70

    sm:text-base
    sm:leading-8

    lg:text-lg
  "
>
              A focused conversation to help you understand the market, compare
              opportunities, and choose your next step with confidence.
            </p>

            <Link
              to="/contact"
              className="btn-gold mt-10 inline-flex items-center gap-2"
            >
              Start your strategy session

              <ArrowUpRight size={18} />
            </Link>
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
