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

// ---------------------------------------------------------------------------
// MOBILE / TABLET — original vertical timeline, unchanged.
// ---------------------------------------------------------------------------

// One step in the vertical timeline. Each step tracks its own
// scroll progress so its node can transition from hollow to
// filled right as the drawing spine line reaches it.
function TimelineStepVertical({ step, index }) {
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
      className="relative flex gap-x-6"
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

function InvestorJourneyVertical() {
  const timelineRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 0.15", "end 0.85"],
  });

  // Drives the pathLength of the SVG line so it "draws"
  // downward as the timeline scrolls through view.
  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div className="relative">
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

        <div className="flex flex-col gap-y-12">
          {steps.map((step, index) => (
            <TimelineStepVertical key={step.title} step={step} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// DESKTOP — horizontal timeline.
// ---------------------------------------------------------------------------

// One step in the horizontal timeline. Instead of tracking its own
// scroll position (which doesn't make sense once the row is being
// translated horizontally by a shared progress value), each node's
// fill state is derived from a slice of that same shared progress -
// it "fills" right as the spine line reaches it.
function TimelineStepHorizontal({ step, index, total, progress }) {
  const Icon = step.icon;

  const start = index / total;
  const end = (index + 0.6) / total;

  const nodeBg = useTransform(
    progress,
    [start, end],
    ["rgba(255,255,255,0.05)", "#EFBD78"]
  );
  const nodeBorder = useTransform(
    progress,
    [start, end],
    ["rgba(255,255,255,0.1)", "#EFBD78"]
  );
  const iconColor = useTransform(
    progress,
    [start, end],
    ["#EFBD78", "#1C0D17"]
  );

  return (
    <div className="relative flex flex-none flex-col items-start">
      {/* Node - sits on the horizontal spine */}
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
      <div className="pt-6 pr-6">
        <h3 className="heading-4 text-light">{step.title}</h3>
        <p className="small text-muted mt-3 max-w-[18rem]">
          {step.description}
        </p>
      </div>
    </div>
  );
}

function InvestorJourneyHorizontal() {
  const targetRef = useRef(null);

  // Drives the whole row's horizontal position across a pinned
  // (sticky) viewport as the user scrolls down through the section.
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-72%"]);

  // Drives the spine's pathLength so it "draws" left-to-right in
  // lockstep with the row translation above.
  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1.5]);

  return (
    <section ref={targetRef} className="relative h-[300vh]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="relative w-max">
          {/* Scroll-drawn connector line - anchored to the node row
              center (h-14 = 56px, so center sits at 28px) */}
          <svg
            className="absolute left-0 top-7 h-px w-full -translate-y-1/2"
            height="2"
            preserveAspectRatio="none"
            style={{ width: "100%" }}
          >
            {/* Static track, same opacity as the original connector */}
            <line
              x1="0"
              y1="1"
              x2="100%"
              y2="1"
              stroke="rgba(255,255,255,0.1)"
              strokeWidth="1"
            />
            {/* Animated draw-on progress line */}
            <motion.line
              x1="0"
              y1="1"
              x2="100%"
              y2="1"
              stroke="#EFBD78"
              strokeWidth="1"
              style={{
                pathLength,
              }}
            />
          </svg>

          <div className="flex gap-x-16 px-4">
            {steps.map((step, index) => (
              <TimelineStepHorizontal
                key={step.title}
                step={step}
                index={index}
                total={steps.length}
                progress={scrollYProgress}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------

export default function InvestorJourney() {
  return (
    <section
      className="
        relative
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

        {/* Mobile / tablet: vertical timeline (unchanged) */}
        <div className="lg:hidden">
          <InvestorJourneyVertical />
        </div>
      </div>

      {/* Desktop: horizontal pinned-scroll timeline - full-bleed, outside
          the max-width container so the row has room to translate across
          the full viewport width */}
      <div className="hidden lg:block">
        <InvestorJourneyHorizontal />
      </div>

      <div className="container-custom relative">
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
