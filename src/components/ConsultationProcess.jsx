
import { useRef } from "react";
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
    title: "Tell us what matters",
    text: "Share your goals, budget, timing, and preferences through a short consultation form.",
    icon: Send,
  },
  {
    number: "02",
    title: "Meet the right advisor",
    text: "We connect you with an advisor whose experience fits your questions and objectives.",
    icon: UserCheck,
  },
  {
    number: "03",
    title: "Have a useful conversation",
    text: "Explore market context, relevant opportunities, and practical considerations together.",
    icon: MessagesSquare,
  },
  {
    number: "04",
    title: "Leave with a clear next step",
    text: "Take away a considered direction, potential opportunities, and an actionable path forward.",
    icon: FileText,
  },
];

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
    ["#181715", "#F2C078"]
  );

  const iconColor = useTransform(
    scrollYProgress,
    [0, 1],
    ["#F2C078", "#181715"]
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
      className="relative flex gap-x-5 sm:gap-x-6 lg:gap-x-8"
    >
      {/* Timeline icon */}
      <div ref={stepRef} className="relative z-10 flex-none">
        <motion.div
          style={{ backgroundColor: dotBg }}
          className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-[#F2C078]/25 shadow-lg sm:h-16 sm:w-16"
        >
          <motion.div style={{ color: iconColor }}>
            <Icon size={22} className="sm:hidden" />
            <Icon size={24} className="hidden sm:block" />
          </motion.div>
        </motion.div>
      </div>

      {/* Timeline card */}
      <div className="mb-8 min-w-0 flex-1 rounded-2xl border border-black/10 bg-[#FAFAFA] p-5 transition-all duration-500 hover:-translate-y-1 hover:border-[#F2C078]/50 sm:rounded-[28px] sm:p-8 md:p-9">
        <span className="text-xs font-semibold tracking-[0.2em] text-[#B88A4A] sm:text-sm sm:tracking-[0.25em]">
          STEP {step.number}
        </span>

        <h3 className="heading-4 mt-3 text-black sm:mt-4">
          {step.title}
        </h3>

        <p className="small mt-3 leading-relaxed text-black/65 sm:mt-4">
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

  const pathLength = useTransform(
    scrollYProgress,
    [0, 1],
    [0, 1]
  );

  return (
    <section className="relative overflow-hidden bg-white page-padding section-spacing">
      <div className="container-custom">
        {/* Section heading */}
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
          

          <h2 className="heading-3 mt-5 max-w-2xl text-black sm:mt-6">
            A clearer path to your next{" "}
            <span className="text-[#F2C078]">
              property decision.
            </span>
          </h2>

          <p className="sub mt-5 max-w-2xl leading-relaxed text-black/70 sm:mt-6">
            From your first conversation to your next move, receive
            thoughtful guidance shaped around your goals, priorities,
            and Dubai property market.
          </p>
        </motion.div>

        {/* Animated timeline */}
        <div
          ref={timelineRef}
          className="relative mt-12 sm:mt-16 lg:mt-20"
        >
          {/* Timeline track */}
          <svg
            className="pointer-events-none absolute left-6 top-0 h-full w-px -translate-x-1/2 sm:left-8"
            width="2"
            preserveAspectRatio="none"
            style={{ height: "100%" }}
          >
            <line
              x1="1"
              y1="0"
              x2="1"
              y2="100%"
              stroke="#181715"
              strokeOpacity="0.12"
              strokeWidth="1"
            />

            <motion.line
              x1="1"
              y1="0"
              x2="1"
              y2="100%"
              stroke="#F2C078"
              strokeWidth="2"
              style={{ pathLength }}
            />
          </svg>

          <div className="flex flex-col">
            {steps.map((step, index) => (
              <TimelineStep
                key={step.number}
                step={step}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
