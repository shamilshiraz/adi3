import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Send,
  UserCheck,
  MessagesSquare,
  FileText,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Submit Inquiry",
    text: "Share your investment goals, budget and preferences through our consultation form.",
    icon: Send,
  },
  {
    number: "02",
    title: "Advisor Assignment",
    text: "We'll match you with an experienced advisor based on your investment objectives.",
    icon: UserCheck,
  },
  {
    number: "03",
    title: "Strategy Session",
    text: "Meet with your advisor to explore opportunities, market insights and tailored recommendations.",
    icon: MessagesSquare,
  },
  {
    number: "04",
    title: "Investment Plan",
    text: "Receive a personalized investment roadmap with recommended projects and next steps.",
    icon: FileText,
  },
];

// One step in the vertical timeline. Each step tracks its own
// scroll progress so its dot can transition from maroon to
// gold right as the drawing spine line reaches it.
function TimelineStep({ step, index }) {
  const Icon = step.icon;
  const stepRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: stepRef,
    offset: ["start 0.85", "start 0.4"],
  });

  const dotBg = useTransform(
    scrollYProgress,
    [0, 1],
    ["#4E0026", "#EFBD78"]
  );
  const iconColor = useTransform(
    scrollYProgress,
    [0, 1],
    ["#EFBD78", "#4E0026"]
  );

  return (
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
        delay: index * 0.08,
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="relative flex gap-x-6 lg:gap-x-8"
    >
      {/* Timeline Dot - sits on the spine, same position mobile through desktop */}
      <div ref={stepRef} className="relative flex-none">
        <motion.div
          style={{ backgroundColor: dotBg }}
          className="
            relative
            z-10
            flex
            h-16
            w-16
            items-center
            justify-center
            rounded-full
            shadow-lg
          "
        >
          <motion.div style={{ color: iconColor }}>
            <Icon size={24} />
          </motion.div>
        </motion.div>
      </div>

      {/* Card */}
      <div
        className="
          mb-8
          flex-1
          rounded-[28px]
          border
          border-[#4E0026]/10
          bg-[#FAFAFA]
          p-8
          transition-all
          duration-500
          hover:-translate-y-2
          hover:border-[#EFBD78]/30
        "
      >
        <span
          className="
            text-sm
            font-semibold
            tracking-[0.25em]
            text-[#D4AF37]
          "
        >
          STEP {step.number}
        </span>

        <h3 className="heading-4 text-[#4E0026] mt-4">{step.title}</h3>

        <p className="small text-[#4E0026]/65 mt-4 leading-relaxed">
          {step.text}
        </p>
      </div>
    </motion.div>
  );
}

export default function ConsultationProcess() {
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
        bg-white
        page-padding
        section-spacing
      "
    >
      <div className="container-custom">
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
          className="max-w-3xl"
        >
          <p className="eyebrow">CONSULTATION PROCESS</p>

          <h2 className="heading-3 text-[#4E0026] mt-6">
            From First Conversation
            <br />
            To Investment Confidence
          </h2>

          <p className="sub text-[#4E0026]/70 mt-6 max-w-2xl">
            A simple, transparent consultation process designed to help you
            make informed real estate investment decisions with expert
            guidance at every stage.
          </p>
        </motion.div>

        {/* Timeline */}
        <div ref={timelineRef} className="relative mt-20">
          {/* Scroll-drawn connector line - always visible, anchored to the
              dot column center (h-16 = 64px, so center sits at 32px) */}
          <svg
            className="absolute left-8 top-0 h-full w-px -translate-x-1/2"
            width="2"
            preserveAspectRatio="none"
            style={{ height: "100%" }}
          >
            {/* Static track, same opacity as the original line */}
            <line
              x1="1"
              y1="0"
              x2="1"
              y2="100%"
              stroke="#4E0026"
              strokeOpacity="0.1"
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

          <div className="flex flex-col">
            {steps.map((step, index) => (
              <TimelineStep key={step.number} step={step} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}