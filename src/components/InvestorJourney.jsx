import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Search,
  Wallet,
  FileSignature,
  FileCheck,
  CalendarClock,
} from "lucide-react";

const GOLD = "#D4AF37";

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
// MOBILE / TABLET
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
    ["rgba(255,255,255,0.04)", GOLD]
  );

  const nodeBorder = useTransform(
    scrollYProgress,
    [0, 1],
    ["rgba(255,255,255,0.12)", GOLD]
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
        y: 30,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        delay: index * 0.05,
        duration: 0.7,
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
            <motion.div
              style={{
                position: "absolute",
                inset: 0,
                rotateY: frontRotateY,
                transformPerspective: 1000,
                backfaceVisibility: "hidden",
                color: GOLD,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Icon size={22} strokeWidth={1.5} />
            </motion.div>

            <motion.div
              style={{
                position: "absolute",
                inset: 0,
                rotateY: backRotateY,
                transformPerspective: 1000,
                backfaceVisibility: "hidden",
                color: "#000",
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
        {/* SPINE */}
        <div className="absolute left-6 top-0 h-full -translate-x-1/2 sm:left-7">
          <svg
            width="2"
            height="100%"
            preserveAspectRatio="none"
            className="h-full overflow-visible"
          >
            <line
              x1="1"
              y1="0"
              x2="1"
              y2="100%"
              stroke="rgba(255,255,255,0.08)"
              strokeWidth="1"
            />

            <motion.line
              x1="1"
              y1="0"
              x2="1"
              y2="100%"
              stroke={GOLD}
              strokeWidth="8"
              strokeLinecap="round"
              style={{
                pathLength,
                opacity: 0.15,
                filter: "blur(8px)",
              }}
            />

            <motion.line
              x1="1"
              y1="0"
              x2="1"
              y2="100%"
              stroke={GOLD}
              strokeWidth="2"
              strokeLinecap="round"
              style={{
                pathLength,
              }}
            />
          </svg>
        </div>

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
// DESKTOP
// ============================================================

function TimelineStepHorizontal({
  step,
  index,
  total,
  progress,
}) {
  const Icon = step.icon;

  const segment = (0.88 - 0.12) / total;
  const start = 0.12 + index * segment;
  const end = start + segment * 0.65;

  const fill = useTransform(
    progress,
    [start, end],
    [0, 1],
    { clamp: true }
  );

  const opacity = useTransform(
    progress,
    [start, end],
    [0.45, 1],
    { clamp: true }
  );

  const y = useTransform(
    progress,
    [start, end],
    [15, 0],
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
      style={{
        opacity,
        y,
      }}
      className="
        relative
        flex
        w-[300px]
        flex-col
        xl:w-[340px]
      "
    >
      {/* NODE */}
      <motion.div
        style={{
          backgroundColor: nodeBackground,
        }}
        className="
          relative
          z-10
          -mt-[7px]
          mb-8
          flex
          h-3.5
          w-3.5
          items-center
          justify-center
          rounded-full
          border
          border-[#D4AF37]
        "
      />

      {/* CONTENT */}
      <div className="flex flex-col gap-3">

        <div className="flex items-center gap-3">
          <span
            className="
              text-[10px]
              uppercase
              tracking-[0.2em]
              text-[#D4AF37]
            "
          >
            {String(index + 1).padStart(2, "0")}
          </span>

          <Icon
            size={17}
            strokeWidth={1.4}
            className="text-[#D4AF37]"
          />
        </div>

        <h3 className="heading-4 text-light">
          {step.title}
        </h3>

        <p className="small max-w-[290px] text-muted">
          {step.description}
        </p>
      </div>
    </motion.div>
  );
}

function InvestorJourneyHorizontal() {
  const targetRef = useRef(null);
  const rowRef = useRef(null);
  const [distance, setDistance] = useState(0);

  useEffect(() => {
    const measure = () => {
      if (!rowRef.current) return;

      const rowWidth = rowRef.current.scrollWidth;
      const viewportWidth = window.innerWidth;

      setDistance(
        Math.max(rowWidth - viewportWidth + 100, 0)
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
    [0, 0.12, 0.88, 1],
    [0, 0, -distance, -distance]
  );

  const pathLength = useTransform(
    scrollYProgress,
    [0.12, 0.88],
    [0, 1],
    {
      clamp: true,
    }
  );

  return (
    <div
      ref={targetRef}
      className="
        relative
        h-[250vh]
      "
    >
      <div
        className="
          sticky
          top-0
          flex
          h-screen
          flex-col
          overflow-hidden
        "
      >

        {/* HEADER
            IMPORTANT:
            No whileInView here.
            This guarantees the header is always visible.
        */}
        <div
          className="
            container-custom
            shrink-0
            px-5
            pt-20
            sm:px-8
            lg:px-20
            lg:pt-24
          "
        >
          <div className="max-w-4xl">

            <p
              className="
                text-[10px]
                font-medium
                uppercase
                tracking-[0.3em]
                text-[#D4AF37]
                sm:text-xs
              "
            >
              INVESTOR JOURNEY
            </p>

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

            <p
              className="
                mt-6
                max-w-2xl
                text-sm
                leading-7
                text-white/55
                sm:text-base
                sm:leading-8
              "
            >
              Every investment follows a clear framework,
              ensuring confidence, transparency and informed
              decision-making from the first conversation to
              long-term portfolio support.
            </p>
          </div>
        </div>

        {/* HORIZONTAL TIMELINE */}
        <div
          className="
            flex
            min-h-0
            flex-1
            items-center
            overflow-hidden
          "
        >
          <motion.div
            ref={rowRef}
            style={{ x }}
            className="relative w-max"
          >
            {/* SPINE */}
            <div className="relative h-px w-full">

              <svg
                className="
                  absolute
                  left-0
                  top-0
                  h-px
                  w-full
                  overflow-visible
                "
                height="2"
                preserveAspectRatio="none"
              >
                {/* TRACK */}
                <line
                  x1="0"
                  y1="1"
                  x2="100%"
                  y2="1"
                  stroke="rgba(255,255,255,0.1)"
                  strokeWidth="1"
                />

                {/* GOLD PROGRESS */}
                <motion.line
                  x1="0"
                  y1="1"
                  x2="100%"
                  y2="1"
                  stroke={GOLD}
                  strokeWidth="1.5"
                  style={{
                    pathLength,
                  }}
                />
              </svg>

            </div>

            {/* STEPS */}
            <div
              className="
                flex
                gap-x-16
                px-5
                pt-14
                lg:gap-x-20
                lg:px-20
              "
            >
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
    </div>
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
        overflow-hidden
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
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
          }}
        >

          <p
            className="
              text-[10px]
              font-medium
              uppercase
              tracking-[0.3em]
              text-[#D4AF37]
              sm:text-xs
            "
          >
            INVESTOR JOURNEY
          </p>

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

          <p
            className="
              mt-6
              max-w-2xl
              text-sm
              leading-7
              text-white/55
              sm:text-base
              sm:leading-8
            "
          >
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

      {/* CTA */}
      <div className="container-custom relative">

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
          }}
          className="
            mt-16
            flex
            sm:mt-20
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
