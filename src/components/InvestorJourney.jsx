import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
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
    title: "Discovery Call",
    description:
      "Understanding your objectives, risk appetite and investment goals.",
    icon: Phone,
  },
  {
    title: "Investment Strategy",
    description:
      "Building a personalized strategy aligned with your objectives.",
    icon: Compass,
  },
  {
    title: "Market Analysis",
    description:
      "Reviewing market data, growth indicators and opportunities.",
    icon: ChartColumn,
  },
  {
    title: "Opportunity Selection",
    description:
      "Shortlisting opportunities that match your investment profile.",
    icon: Search,
  },
  {
    title: "Reservation",
    description:
      "Securing the selected opportunity with guided support.",
    icon: FileSignature,
  },
  {
    title: "Purchase",
    description:
      "Managing the transaction process from start to finish.",
    icon: Building2,
  },
  {
    title: "Handover",
    description:
      "Transitioning ownership and preparing for occupancy.",
    icon: KeyRound,
  },
  {
    title: "Portfolio Support",
    description:
      "Continued advisory support beyond the purchase.",
    icon: ShieldCheck,
  },
];

// One step in the vertical timeline. Each step tracks its own
// scroll progress so its node can transition from hollow to
// filled right as the drawing spine line reaches it.
function TimelineStep({ step, index }) {
  const Icon = step.icon;
  const stepRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: stepRef,
    offset: ["start 0.85", "start 0.4"],
  });

  const nodeBg = useTransform(
    scrollYProgress,
    [0, 1],
    ["rgba(255,255,255,0.05)", "#EFBD78"]
  );
  const nodeBorder = useTransform(
    scrollYProgress,
    [0, 1],
    ["rgba(255,255,255,0.1)", "#EFBD78"]
  );
  const iconColor = useTransform(
    scrollYProgress,
    [0, 1],
    ["#EFBD78", "#1C0D17"]
  );

  return (
    <motion.div
      ref={stepRef}
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
        delay: (index % 4) * 0.05,
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="relative flex gap-x-6 lg:gap-x-8"
    >
      {/* Node - sits on the spine, same position mobile through desktop */}
      <div className="relative flex-none">
        <motion.div
          style={{
            backgroundColor: nodeBg,
            borderColor: nodeBorder,
          }}
          className="
            relative
            z-10
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-2xl
            border
            backdrop-blur-xl
          "
        >
          <motion.div style={{ color: iconColor }}>
            <Icon size={22} strokeWidth={1.5} />
          </motion.div>
        </motion.div>
      </div>

      {/* Content */}
      <div className="pb-2 pt-1">
        <h3 className="heading-4 text-light">{step.title}</h3>
        <p className="small text-muted mt-3 max-w-md">{step.description}</p>
      </div>
    </motion.div>
  );
}

export default function InvestorJourney() {
  const timelineRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 0.15", "end 0.85"],
  });

  // Drives the pathLength of the SVG line so it "draws"
  // downward as the timeline scrolls through view.
  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

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
          <p className="eyebrow">INVESTOR JOURNEY</p>

          <h2 className="heading-2 text-light mt-6">
            A Structured Process
            <br />
            Designed Around Investors
          </h2>

          <p className="sub text-muted mt-6 max-w-2xl">
            Every investment follows a clear framework, ensuring confidence,
            transparency and informed decision-making from the first
            conversation to long-term portfolio support.
          </p>
        </motion.div>

        {/* Timeline */}
        <div ref={timelineRef} className="relative mt-24">
          {/* Scroll-drawn connector line - always visible, anchored to the
              node column center (h-14 = 56px, so center sits at 28px) */}
          <svg
            className="absolute left-7 top-0 h-full w-px -translate-x-1/2"
            width="2"
            preserveAspectRatio="none"
            style={{ height: "100%" }}
          >
            {/* Static track, same opacity as the original connector */}
            <line
              x1="1"
              y1="0"
              x2="1"
              y2="100%"
              stroke="rgba(255,255,255,0.1)"
              strokeWidth="1"
            />
            {/* Animated draw-on progress line */}
            <motion.line
              x1="1"
              y1="0"
              x2="1"
              y2="100%"
              stroke="#EFBD78"
              strokeWidth="1"
              style={{
                pathLength,
              }}
            />
          </svg>

          <div className="flex flex-col gap-y-12 lg:gap-y-16">
            {steps.map((step, index) => (
              <TimelineStep key={step.title} step={step} index={index} />
            ))}
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
          <button className="btn-gold">Book Consultation</button>

          <button className="btn-violet">Speak With An Advisor</button>
        </motion.div>
      </div>
    </section>
  );
}
