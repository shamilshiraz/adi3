
import { useEffect, useRef, useState } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { Link } from "react-router-dom";
import {
  Search,
  Wallet,
  FileSignature,
  FileCheck,
  CalendarClock,
  ArrowUpRight,
} from "lucide-react";

const GOLD = "#F2C078";

const steps = [
  {
    title: "Explore options",
    description:
      "Compare properties and developers against your goals, budget, and timeline.",
    icon: Search,
  },
  {
    title: "Reserve your preferred unit",
    description:
      "Secure the unit with the required booking amount, based on the selected payment plan.",
    icon: Wallet,
  },
  {
    title: "Confirm the purchase",
    description:
      "Complete the booking form and required initial payments in line with the developer’s agreed schedule.",
    icon: FileSignature,
  },
  {
    title: "Sign the agreement",
    description:
      "Review and sign the Sales Purchase Agreement with the relevant parties.",
    icon: FileCheck,
  },
  {
    title: "Follow your plan",
    description:
      "Stay on track with the agreed payment plan through completion and handover.",
    icon: CalendarClock,
  },
];

/* =========================================================
   MOBILE / TABLET STEP
========================================================= */

function TimelineStepVertical({ step, index, reducedMotion }) {
  const Icon = step.icon;
  const stepRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: stepRef,
    offset: ["start 0.85", "start 0.45"],
  });

  const nodeBackground = useTransform(
    scrollYProgress,
    [0, 1],
    ["#111111", GOLD]
  );

  const nodeBorder = useTransform(
    scrollYProgress,
    [0, 1],
    ["rgba(255,255,255,0.16)", GOLD]
  );

  return (
    <motion.article
      ref={stepRef}
      initial={reducedMotion ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={
        reducedMotion
          ? { duration: 0 }
          : {
              duration: 0.5,
              delay: index * 0.04,
              ease: [0.16, 1, 0.3, 1],
            }
      }
      className="relative flex gap-5 sm:gap-6"
    >
      <div className="relative z-10 shrink-0">
        <motion.div
          style={{
            backgroundColor: nodeBackground,
            borderColor: nodeBorder,
          }}
          className="flex h-12 w-12 items-center justify-center rounded-full border sm:h-14 sm:w-14"
        >
          <Icon
            size={21}
            strokeWidth={1.5}
            style={{ color: "#FFFFFF" }}
          />
        </motion.div>
      </div>

      <div className="min-w-0 flex-1 pb-3 pt-1 sm:pb-5">
        <p className="mb-2 text-[10px] font-medium uppercase tracking-[0.2em] text-[#F2C078] sm:text-xs">
          Step {String(index + 1).padStart(2, "0")}
        </p>

        <h3 className="text-lg font-medium leading-snug tracking-tight text-white sm:text-xl lg:text-2xl">
          {step.title}
        </h3>

        <p className="mt-3 max-w-lg text-sm leading-7 text-white/60 sm:text-base">
          {step.description}
        </p>
      </div>
    </motion.article>
  );
}

/* =========================================================
   MOBILE / TABLET TIMELINE
========================================================= */

function InvestorJourneyVertical({ reducedMotion }) {
  const timelineRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 0.75", "end 0.75"],
  });

  const lineProgress = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div ref={timelineRef} className="relative mt-12 sm:mt-16">
      <div className="absolute bottom-8 left-6 top-0 w-px bg-white/10 sm:left-7" />

      <motion.div
        aria-hidden="true"
        className="absolute left-6 top-0 w-px origin-top bg-[#F2C078] sm:left-7"
        style={{
          height: "100%",
          scaleY: reducedMotion ? 1 : lineProgress,
        }}
      />

      <div className="relative flex flex-col gap-8 sm:gap-10">
        {steps.map((step, index) => (
          <TimelineStepVertical
            key={step.title}
            step={step}
            index={index}
            reducedMotion={reducedMotion}
          />
        ))}
      </div>
    </div>
  );
}

/* =========================================================
   DESKTOP TIMELINE STEP
========================================================= */

function TimelineStepHorizontal({
  step,
  index,
  progress,
  reducedMotion,
}) {
  const Icon = step.icon;

  const start = index / steps.length;
  const end = (index + 1) / steps.length;
  const animationEnd = Math.min(start + 0.12, end);

  const opacity = useTransform(
    progress,
    [start, animationEnd],
    [0.55, 1]
  );

  const y = useTransform(
    progress,
    [start, animationEnd],
    [12, 0]
  );

  const nodeFill = useTransform(
    progress,
    [start, animationEnd],
    ["#111111", GOLD]
  );

  return (
    <motion.article
      style={reducedMotion ? undefined : { opacity, y }}
      className="relative flex w-[250px] shrink-0 flex-col sm:w-[280px] xl:w-[300px]"
    >
      <div className="mb-6 flex items-center gap-3">
        <span className="text-xs font-medium tracking-[0.18em] text-[#F2C078]">
          {String(index + 1).padStart(2, "0")}
        </span>

        <div className="h-px flex-1 bg-white/15" />

        <motion.div
          style={reducedMotion ? undefined : { backgroundColor: nodeFill }}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-[#F2C078]"
        >
          <Icon
            size={18}
            strokeWidth={1.5}
            className="text-white"
          />
        </motion.div>
      </div>

      <h3 className="max-w-[270px] text-xl font-medium leading-snug tracking-tight text-white sm:text-2xl">
        {step.title}
      </h3>

      <p className="mt-4 max-w-[270px] text-sm leading-7 text-white/60 sm:text-base">
        {step.description}
      </p>
    </motion.article>
  );
}

/* =========================================================
   DESKTOP HORIZONTAL TIMELINE
========================================================= */

function InvestorJourneyHorizontal({ reducedMotion }) {
  const sectionRef = useRef(null);
  const viewportRef = useRef(null);
  const rowRef = useRef(null);

  const [distance, setDistance] = useState(0);

  useEffect(() => {
    const viewport = viewportRef.current;
    const row = rowRef.current;

    if (!viewport || !row) return;

    const measure = () => {
      setDistance(
        Math.max(0, row.scrollWidth - viewport.clientWidth)
      );
    };

    measure();

    let resizeObserver;

    if (typeof ResizeObserver !== "undefined") {
      resizeObserver = new ResizeObserver(measure);
      resizeObserver.observe(viewport);
      resizeObserver.observe(row);
    }

    window.addEventListener("resize", measure);

    return () => {
      resizeObserver?.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);

  const sectionHeight = `calc(100vh + ${distance}px)`;

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -distance]
  );

  const lineProgress = useTransform(
    scrollYProgress,
    [0, 1],
    [0, 1]
  );

  return (
    <div
      ref={sectionRef}
      className="relative"
      style={{ height: sectionHeight }}
    >
      <div className="sticky top-0 flex h-screen flex-col overflow-hidden bg-[#0D0D0B]">

        {/* HEADER */}
        <div className="container-custom shrink-0 px-8 pb-8 pt-20 xl:px-12 xl:pt-24">
          <div className="max-w-4xl">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-[#F2C078]">
              THE INVESTOR JOURNEY
            </p>

            <h2
              id="investment-strategies-heading"
              className="display-heading display-heading-lg mt-5 max-w-4xl text-white"
            >
              One strategy built{" "}
              <span className="text-[#F2C078]">
                around your goals.
              </span>
            </h2>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-white/60 sm:text-base sm:leading-8">
              From your first question to long-term portfolio support,
              every step is designed to keep your decisions clear,
              considered, and informed.
            </p>
          </div>
        </div>

        {/* HORIZONTAL TIMELINE */}
        <div
          ref={viewportRef}
          className="flex min-h-0 flex-1 items-center overflow-hidden"
        >
          <motion.div
            ref={rowRef}
            style={{ x: reducedMotion ? 0 : x }}
            className="relative w-max"
          >
            <div className="absolute left-0 top-0 h-px w-full bg-white/15">
              <motion.div
                className="h-full origin-left bg-[#F2C078]"
                style={{
                  scaleX: reducedMotion ? 1 : lineProgress,
                }}
              />
            </div>

            <div className="flex gap-8 px-8 pt-10 xl:gap-12 xl:px-12">
              {steps.map((step, index) => (
                <TimelineStepHorizontal
                  key={step.title}
                  step={step}
                  index={index}
                  progress={scrollYProgress}
                  reducedMotion={reducedMotion}
                />
              ))}

              <div className="w-8 shrink-0 xl:w-12" />
            </div>
          </motion.div>
        </div>

        {/* SCROLL INDICATOR */}
        <div className="container-custom flex shrink-0 items-center justify-between px-8 pb-8 pt-4 xl:px-12">
          <p className="text-[10px] uppercase tracking-[0.2em] text-white/40">
            Scroll to explore the journey
          </p>

          <motion.div
            className="h-px w-24 origin-left bg-[#F2C078]"
            style={{
              scaleX: reducedMotion ? 1 : lineProgress,
            }}
          />
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function InvestorJourney() {
  const reducedMotion = useReducedMotion();

  return (
    <section
      id="process"
      className="relative overflow-hidden bg-[#0D0D0B] py-16 text-white sm:py-20 lg:py-24"
    >
      {/* MOBILE / TABLET */}
      <div className="container-custom px-5 sm:px-8 lg:hidden">
        <motion.header
          initial={reducedMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: reducedMotion ? 0 : 0.6 }}
        >
        

          <h2 className="display-heading display-heading-lg mt-5 max-w-3xl text-white">
            One strategy built{" "}
            <span className="text-[#F2C078]">
              around your goals.
            </span>
          </h2>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-white/60 sm:text-base sm:leading-8">
            From your first question to long-term portfolio support,
            we help you approach each decision with clarity and confidence.
          </p>
        </motion.header>

        <InvestorJourneyVertical reducedMotion={reducedMotion} />
      </div>

      {/* DESKTOP */}
      <div className="hidden lg:block">
        <InvestorJourneyHorizontal reducedMotion={reducedMotion} />
      </div>

      {/* CONSULTATION CTA */}
      <div className="container-custom px-5 sm:px-8">
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: reducedMotion ? 0 : 0.55 }}
          className="mt-12 border-t border-white/10 pt-8 sm:mt-16 sm:pt-10"
        >
          <div className="flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-center">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#F2C078]">
                YOUR NEXT STEP
              </p>

              <h3 className="mt-3 text-xl font-medium tracking-tight text-white sm:text-2xl">
                Ready to explore your options?
              </h3>
            </div>

            <Link
              to="/contact"
              className="inline-flex min-h-12 items-center justify-center gap-3 bg-[#F2C078] px-6 py-3 text-sm font-medium text-black transition-colors duration-300 hover:bg-white"
            >
              Start your consultation
              <ArrowUpRight size={17} strokeWidth={1.6} />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
