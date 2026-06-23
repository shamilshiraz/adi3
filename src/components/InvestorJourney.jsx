import React from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Compass,
  ChartColumn,
  Search,
  FileSignature,
  Building2,
  KeyRound,
  ShieldCheck,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Discovery Call",
    description:
      "Understanding your objectives, risk appetite and investment goals.",
    icon: Phone,
  },
  {
    number: "02",
    title: "Investment Strategy",
    description:
      "Building a personalized strategy aligned with your objectives.",
    icon: Compass,
  },
  {
    number: "03",
    title: "Market Analysis",
    description:
      "Reviewing market data, growth indicators and opportunities.",
    icon: ChartColumn,
  },
  {
    number: "04",
    title: "Opportunity Selection",
    description:
      "Shortlisting opportunities that match your investment profile.",
    icon: Search,
  },
  {
    number: "05",
    title: "Reservation",
    description:
      "Securing the selected opportunity with guided support.",
    icon: FileSignature,
  },
  {
    number: "06",
    title: "Purchase",
    description:
      "Managing the transaction process from start to finish.",
    icon: Building2,
  },
  {
    number: "07",
    title: "Handover",
    description:
      "Transitioning ownership and preparing for occupancy.",
    icon: KeyRound,
  },
  {
    number: "08",
    title: "Portfolio Support",
    description:
      "Continued advisory support beyond the purchase.",
    icon: ShieldCheck,
  },
];

export default function InvestorJourney() {
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
      {/* Ambient Glows */}
      <div className="absolute top-0 right-0 h-[700px] w-[700px] rounded-full bg-[#EFBD78]/10 blur-[200px]" />

      <div className="absolute bottom-0 left-0 h-[700px] w-[700px] rounded-full bg-[#301120]/60 blur-[200px]" />

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
            INVESTOR JOURNEY
          </p>

          <h2 className="heading-2 text-light mt-6">
            A Structured Process
            <br />
            Designed Around Investors
          </h2>

          <p className="sub text-muted mt-6 max-w-2xl">
            Every investment follows a clear framework,
            ensuring confidence, transparency and informed
            decision-making from the first conversation to
            long-term portfolio support.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="mt-24">
          <div className="grid lg:grid-cols-4 gap-x-8 gap-y-20">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.number}
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
                    delay: index * 0.05,
                    duration: 0.8,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="relative"
                >
                  {/* Connector */}
                  {index % 4 !== 3 && index !== steps.length - 1 && (
                    <div
                      className="
                        hidden lg:block
                        absolute
                        top-12
                        left-[90px]
                        right-[-30px]
                        h-px
                        bg-white/10
                      "
                    />
                  )}

                  {/* Number */}
                  <div
                    className="
                      text-[5rem]
                      leading-none
                      tracking-[-0.06em]
                      text-white/10
                      font-light
                    "
                  >
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div
                    className="
                      mt-4
                      flex
                      h-14
                      w-14
                      items-center
                      justify-center
                      rounded-2xl
                      bg-white/5
                      border
                      border-white/10
                      backdrop-blur-xl
                    "
                  >
                    <Icon
                      size={22}
                      strokeWidth={1.5}
                      className="text-[#EFBD78]"
                    />
                  </div>

                  {/* Content */}
                  <h3 className="heading-4 text-light mt-6">
                    {step.title}
                  </h3>

                  <p className="small text-muted mt-3">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            delay: 0.2,
            duration: 0.8,
          }}
          className="
            mt-24
            flex
            flex-wrap
            gap-4
          "
        >
          <button className="btn-gold">
            Book Consultation
          </button>

          <button className="btn-violet">
            Speak With An Advisor
          </button>
        </motion.div>
      </div>
    </section>
  );
}