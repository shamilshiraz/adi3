import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Search,
  Wallet,
  FileSignature,
  FileCheck,
  CalendarClock,
} from "lucide-react";

const steps = [
  {
    title: "Select",
    description:
      "Choose your preferred property and developer.",
    icon: Search,
  },
  {
    title: "Booking Payment",
    description:
      "Pay the booking amount/down payment (typically 10%).",
    icon: Wallet,
  },
  {
    title: "Book your unit",
    description:
      "Sign the Booking Form and complete the required payment (up to 24%, including DLD fees, as per the developer's payment plan).",
    icon: FileSignature,
  },
  {
    title: "Sales Agreement",
    description:
      "Sign the Sales Purchase Agreement (SPA).",
    icon: FileCheck,
  },
  {
    title: "Continue Payments",
    description:
      "Continue making payments according to the developer's payment plan until completion.",
    icon: CalendarClock,
  },
];

// ============================================================
// MOBILE / TABLET VERTICAL TIMELINE
// ============================================================

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
    ["rgba(255,255,255,0.05)", "#D4AF37"]
  );

  const nodeBorder = useTransform(
    scrollYProgress,
    [0, 1],
    ["rgba(255,255,255,0.1)", "#D4AF37"]
  );

  const frontRotateY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, 180]
  );

  const backRotateY = useTransform(
    scrollYProgress,
    [0, 1],
    [-180, 0]
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
      className="relative flex gap-x-5 sm:gap-x-6"
    >
      {/* NODE */}
      <div className="relative flex-none">
        <motion.div
          style={{
            backgroundColor: nodeBg,
            borderColor: nodeBorder,
            perspective: 1000,
          }}
          className="
            relative
            z-10
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-xl
            border
            backdrop-blur-xl
            sm:h-14
            sm:w-14
            sm:rounded-2xl
          "
        >
          <div
            style={{
              position: "relative",
              width: 22,
              height: 22,
              transformStyle: "preserve-3d",
            }}
          >
            {/* FRONT */}
            <motion.div
              style={{
                position: "absolute",
                inset: 0,
                rotateY: frontRotateY,
                transformPerspective: 1000,
                backfaceVisibility: "hidden",
                color: "#D4AF37",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Icon size={22} strokeWidth={1.5} />
            </motion.div>

            {/* BACK */}
            <motion.div
              style={{
                position: "absolute",
                inset: 0,
                rotateY: backRotateY,
                transformPerspective: 1000,
                backfaceVisibility: "hidden",
                color: "#000000",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Icon size={22} strokeWidth={1.5} />
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* CONTENT */}
      <div className="pb-2 pt-1">
        <h3 className="heading-4 text-light">
          {step.title}
        </h3>

        <p className="small mt-3 max-w-md text-muted">
          {step.description}
        </p>
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

  const pathLength = useTransform(
    scrollYProgress,
    [0, 1],
    [0, 1]
  );

  return (
    <div className="relative">
      <div
        ref={timelineRef}
        className="relative mt-16 sm:mt-20"
      >
        {/* TIMELINE SPINE */}
        <div className="absolute left-6 top-0 h-full -translate-x-1/2 sm:left-7">
          <svg
            width="2"
            height="100%"
            preserveAspectRatio="none"
            className="h-full overflow-visible"
          >
            {/* BASE */}
            <line
              x1="1"
              y1="0"
              x2="1"
              y2="100%"
              stroke="rgba(255,255,255,0.08)"
              strokeWidth="1"
            />

            {/* GLOW */}
            <motion.line
              x1="1"
              y1="0"
              x2="1"
              y2="100%"
              stroke="#D4AF37"
              strokeWidth="8"
              strokeLinecap="round"
              style={{
                pathLength,
                opacity: 0.18,
                filter: "blur(8px)",
              }}
            />

            {/* PROGRESS */}
            <motion.line
              x1="1"
              y1="0"
              x2="1"
              y2="100%"
              stroke="#D4AF37"
              strokeWidth="2"
              strokeLinecap="round"
              style={{
                pathLength,
              }}
            />
          </svg>
        </div>

        {/* DECORATIVE GLOW */}
        <motion.div
          style={{
            scaleY: pathLength,
            transformOrigin: "top",
          }}
          className="
            pointer-events-none
            absolute
            left-6
            top-0
            h-full
            w-20
            -translate-x-1/2
            bg-[#D4AF37]/10
            blur-3xl
            sm:left-7
            sm:w-24
          "
        />

        {/* STEPS */}
        <div className="relative flex flex-col gap-y-12 sm:gap-y-14">
          {steps.map((step, index) => (
            <TimelineStepVertical
              key={step.title}
              step={step}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

// ============================================================
// DESKTOP HORIZONTAL TIMELINE
// ============================================================

function InvestorJourneyHorizontal() {
  const targetRef = useRef(null);
  const rowRef = useRef(null);
  const [distance, setDistance] = useState(0);

  const END_PADDING = 96;

  useEffect(() => {
    const measure = () => {
      if (!rowRef.current) return;

      const rowWidth = rowRef.current.scrollWidth;
      const viewportWidth = window.innerWidth;

      setDistance(
        Math.max(
          rowWidth - viewportWidth + END_PADDING,
          0
        )
      );
    };

    measure();

    window.addEventListener("resize", measure);

    return () => {
      window.removeEventListener("resize", measure);
    };
  }, []);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(
    scrollYProgress,
    [0, 0.08, 0.92, 1],
    [0, 0, -distance, -distance]
  );

  const pathLength = useTransform(
    scrollYProgress,
    [0.08, 0.92],
    [0, 1],
    { clamp: true }
  );

  return (
    <section
      ref={targetRef}
      className="relative h-[300vh]"
    >
      <div className="sticky top-0 flex h-screen flex-col overflow-hidden">

        {/* HEADER */}
        <div className="container-custom pt-24">
          <motion.div
            initial={{
              opacity: 0,
              y: 30,
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

            {/* EDITORIAL HEADING */}
            <h2
              className="
                mt-6
                max-w-5xl
                text-[2.8rem]
                font-light
                leading-[1.02]
                tracking-[-0.04em]
                text-white
                sm:text-[4rem]
                lg:text-[4.5rem]
              "
            >
              A Structured Process
              <br />
              <span className="text-white/35">
                Designed Around Investors
              </span>
            </h2>

            <p className="sub mt-6 max-w-2xl text-muted">
              Every investment follows a clear framework,
              ensuring confidence, transparency and informed
              decision-making from the first conversation to
              long-term portfolio support.
            </p>
          </motion.div>
        </div>

        {/* TIMELINE */}
        <div className="flex flex-1 flex-col justify-center overflow-hidden">
          <motion.div
            ref={rowRef}
            style={{ x }}
            className="relative w-max"
          >
            {/* SPINE */}
            <div className="relative h-px w-full">
              <svg
                className="absolute left-0 top-0 h-px w-full"
                height="2"
                preserveAspectRatio="none"
              >
                <line
                  x1="0"
                  y1="1"
                  x2="100%"
                  y2="1"
                  stroke="rgba(255,255,255,0.1)"
                  strokeWidth="1"
                />

                <motion.line
                  x1="0"
                  y1="1"
                  x2="100%"
                  y2="1"
                  stroke="#D4AF37"
                  strokeWidth="1"
                  style={{
                    pathLength,
                  }}
                />
              </svg>
            </div>

            {/* STEPS */}
            <div className="flex gap-x-20 px-4 pt-16">
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
      </div>
    </section>
  );
}

function TimelineStepHorizontal({
  step,
  index,
  total,
  progress,
}) {
  const segment = (0.92 - 0.08) / total;
  const start = 0.08 + index * segment;
  const end = start + segment * 0.6;

  const fill = useTransform(
    progress,
    [start, end],
    [0, 1],
    { clamp: true }
  );

  const opacity = useTransform(
    progress,
    [start, end],
    [0.4, 1],
    { clamp: true }
  );

  const y = useTransform(
    progress,
    [start, end],
    [16, 0],
    { clamp: true }
  );

  const nodeBackground = useTransform(
    fill,
    [0, 1],
    [
      "rgba(212,175,55,0)",
      "rgba(212,175,55,1)",
    ]
  );

  return (
    <motion.div
      style={{ opacity, y }}
      className="relative flex w-[340px] flex-col"
    >
      {/* NODE */}
      <motion.div
        className="
          -mt-[7px]
          mb-10
          h-3.5
          w-3.5
          rounded-full
          border
          border-[#D4AF37]
        "
        style={{
          backgroundColor: nodeBackground,
        }}
      />

      {/* CONTENT */}
      <div className="flex flex-col gap-3">
        <span
          className="
            small
            uppercase
            tracking-wide
            text-[#D4AF37]/70
          "
        >
          {String(index + 1).padStart(2, "0")}
        </span>

        <h3 className="heading-4 text-light">
          {step.title}
        </h3>

        <p className="small mt-1 max-w-md text-muted">
          {step.description}
        </p>
      </div>
    </motion.div>
  );
}

// ============================================================
// MAIN
// ============================================================

export default function InvestorJourney() {
  return (
    <section
      className="
        relative
        bg-black
        page-padding
        section-spacing
      "
    >
      {/* MOBILE / TABLET */}
      <div className="container-custom relative lg:hidden">

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
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

          {/* EDITORIAL HEADING */}
          <h2
            className="
              mt-6
              max-w-5xl
              text-[2.8rem]
              font-light
              leading-[1.02]
              tracking-[-0.04em]
              text-white
              sm:text-[4rem]
            "
          >
            A Structured Process
            <br />
            <span className="text-white/35">
              Designed Around Investors
            </span>
          </h2>

          <p className="sub mt-6 max-w-2xl text-muted">
            Every investment follows a clear framework,
            ensuring confidence, transparency and informed
            decision-making from the first conversation to
            long-term portfolio support.
          </p>
        </motion.div>

        <InvestorJourneyVertical />
      </div>

      {/* DESKTOP */}
      <div className="hidden lg:block">
        <InvestorJourneyHorizontal />
      </div>

      {/* BOTTOM CTA */}
      <div className="container-custom relative">
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
            mt-20
            flex
            flex-wrap
            gap-4
            sm:mt-24
          "
        >
          <button className="btn-gold">
            Book Consultation
          </button>
        </motion.div>
      </div>
    </section>
  );
}
