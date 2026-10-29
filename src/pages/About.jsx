
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Compass,
  Globe2,
  Building2,
  Handshake,
} from "lucide-react";
import { Link } from "react-router-dom";

const GOLD = "#F2C078";
const GOLD_DARK = "#98703B";
const DARK = "#0D0D0B";
const LIGHT = "#F7F6F3";

const principles = [
  {
    number: "01",
    title: "International perspective",
    text: "A global outlook shaped by different markets, cultures, and investor perspectives.",
    icon: Globe2,
  },
  {
    number: "02",
    title: "Purposeful guidance",
    text: "Clear, considered advice shaped around your goals and property ambitions.",
    icon: Compass,
  },
  {
    number: "03",
    title: "Relationships built on trust",
    text: "A people-first approach focused on meaningful connections and lasting value.",
    icon: Handshake,
  },
];

const journey = [
  {
    number: "01",
    title: "Understand your goals",
    text: "Start with your priorities, investment objectives, preferred location, and long-term vision.",
    icon: Compass,
  },
  {
    number: "02",
    title: "Explore the right opportunities",
    text: "Review suitable properties and compare the details that matter to your decision.",
    icon: Building2,
  },
  {
    number: "03",
    title: "Make an informed decision",
    text: "Move forward with clear information, considered guidance, and an understanding of the next steps.",
    icon: ArrowUpRight,
  },
];

const transition = {
  duration: 0.65,
  ease: [0.16, 1, 0.3, 1],
};

function Eyebrow({ children, light = false }) {
  return (
    <p
      className={`text-[10px] font-medium uppercase tracking-[0.22em] sm:text-xs ${
        light ? "text-white/50" : "text-black/50"
      }`}
    >
      {children}
    </p>
  );
}

function Reveal({ children, className = "", delay = 0 }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{
        ...transition,
        duration: reduceMotion ? 0 : transition.duration,
        delay: reduceMotion ? 0 : delay,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function AboutPage() {
  return (
    <main className="overflow-hidden bg-[#0D0D0B] text-white">

      {/* HERO */}
      <section className="relative isolate overflow-hidden px-5 pb-20 pt-32 sm:px-8 sm:pb-28 sm:pt-40 lg:px-12 lg:pb-32 lg:pt-48">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-40 -top-20 -z-10 h-[360px] w-[360px] rounded-full blur-[130px] sm:h-[560px] sm:w-[560px]"
          style={{ backgroundColor: `${GOLD}18` }}
        />

        <div className="container-custom mx-auto max-w-7xl">
          <Reveal>
            <div className="flex items-center gap-3">
              <span
                className="h-px w-8"
                style={{ backgroundColor: GOLD }}
              />
              <Eyebrow light>ABOUT ADHIHAVEN</Eyebrow>
            </div>

            <h1 className="mt-8 max-w-6xl text-[clamp(3rem,8vw,7.5rem)] font-medium leading-[0.94] tracking-[-0.065em]">
              Real estate,
              <br />
              guided by{" "}
              <span style={{ color: GOLD }}>perspective.</span>
            </h1>

            <div className="mt-10 grid gap-7 border-t border-white/15 pt-7 sm:grid-cols-[1fr_auto] sm:items-end sm:gap-12 sm:pt-8">
              <p className="max-w-2xl text-base leading-8 text-white/65 sm:text-lg">
                A considered approach to Dubai real estate, built
                around people, informed decisions, and relationships
                that last.
              </p>

              <a
                href="#founder"
                className="inline-flex w-fit items-center gap-3 text-sm font-medium transition-colors hover:text-[#F2C078]"
              >
                Discover our philosophy
                <ArrowDownRight size={18} style={{ color: GOLD }} />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FOUNDER PHILOSOPHY — NO IMAGE OR NAME */}
      <section
        id="founder"
        className="scroll-mt-16 bg-[#F7F6F3] px-5 py-16 text-black sm:px-8 sm:py-24 lg:px-12 lg:py-28"
      >
        <div className="container-custom mx-auto max-w-7xl">

          {/* Heading */}
          <Reveal>
            <Eyebrow>THE THINKING BEHIND ADHIHAVEN</Eyebrow>

            <div className="mt-7 grid gap-7 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:gap-16">
              <h2 className="text-[clamp(2.8rem,6.5vw,6.5rem)] font-medium leading-[0.98] tracking-[-0.065em]">
                Experience.
                <br />
                Insight.
                <br />
                <span style={{ color: GOLD_DARK }}>Direction.</span>
              </h2>

              <p
                className="max-w-xl border-l-2 py-1 pl-5 text-lg leading-8 text-black/75 sm:text-xl sm:leading-9"
                style={{ borderColor: GOLD }}
              >
                Real estate is about understanding people first,
                then helping them make decisions with clarity
                and confidence. <br></br>- <i><b>FOUNDER, ADHIHAVEN</b></i>
              </p>
            </div>
          </Reveal>

          {/* Story */}
          <Reveal delay={0.08} className="mt-12 sm:mt-16">
            <div className="grid gap-8 border-t border-black/15 pt-8 sm:grid-cols-2 sm:gap-10 lg:grid-cols-3 lg:gap-12 lg:pt-10">

              <article>
                <p
                  className="text-xs font-medium uppercase tracking-[0.18em]"
                  style={{ color: GOLD_DARK }}
                >
                  01 / Experience
                </p>

                <h3 className="mt-4 text-xl font-medium tracking-tight sm:text-2xl">
                  Understanding the market
                </h3>

                <p className="mt-4 text-sm leading-7 text-black/70 sm:text-base sm:leading-8">
                  Experience across real estate, sales, and strategic
                  marketing has shaped an approach focused on
                  understanding markets, connecting with people,
                  and identifying meaningful opportunities.
                </p>
              </article>

              <article>
                <p
                  className="text-xs font-medium uppercase tracking-[0.18em]"
                  style={{ color: GOLD_DARK }}
                >
                  02 / Perspective
                </p>

                <h3 className="mt-4 text-xl font-medium tracking-tight sm:text-2xl">
                  Seeing the bigger picture
                </h3>

                <p className="mt-4 text-sm leading-7 text-black/70 sm:text-base sm:leading-8">
                  Exposure to different markets, cultures, and
                  international investor events has strengthened
                  an understanding of diverse investor priorities
                  and the context behind every property decision.
                </p>
              </article>

              <article>
                <p
                  className="text-xs font-medium uppercase tracking-[0.18em]"
                  style={{ color: GOLD_DARK }}
                >
                  03 / Leadership
                </p>

                <h3 className="mt-4 text-xl font-medium tracking-tight sm:text-2xl">
                  Putting people first
                </h3>

                <p className="mt-4 text-sm leading-7 text-black/70 sm:text-base sm:leading-8">
                  This philosophy guides ADHIHAVEN's approach to
                  property: thoughtful guidance, informed decisions,
                  meaningful relationships, and a client experience
                  grounded in trust.
                </p>
              </article>

            </div>
          </Reveal>

          {/* Closing statement */}
          <Reveal delay={0.1} className="mt-12 sm:mt-16">
            <div className="flex flex-col gap-5 border-t border-black/15 pt-7 sm:flex-row sm:items-center sm:justify-between sm:pt-8">
              <div>
                <h3 className="text-xl font-medium tracking-tight sm:text-2xl">
                  A more considered approach to property.
                </h3>
                <p className="mt-2 text-sm leading-7 text-black/60 sm:text-base">
                  Perspective, trust, and long-term value.
                </p>
              </div>

              <Link
                to="/contact"
                className="group inline-flex w-fit shrink-0 items-center gap-4 border-b border-black/20 pb-3 text-sm font-medium transition-colors hover:border-[#98703B]"
              >
                Connect with our team
                <span
                  className="flex h-9 w-9 items-center justify-center rounded-full transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  style={{ backgroundColor: GOLD }}
                >
                  <ArrowUpRight size={18} />
                </span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* PRINCIPLES */}
      <section className="bg-[#0D0D0B] px-5 py-16 sm:px-8 sm:py-24 lg:px-12 lg:py-32">
        <div className="container-custom mx-auto max-w-7xl">
          <Reveal className="max-w-3xl">
            <Eyebrow light>THE ADHIHAVEN STANDARD</Eyebrow>

            <h2 className="mt-6 text-[clamp(2.5rem,6vw,5.5rem)] font-medium leading-[1.02] tracking-[-0.06em]">
              Built on trust.
              <br />
              Driven by{" "}
              <span style={{ color: GOLD }}>understanding.</span>
            </h2>

            <p className="mt-6 max-w-xl text-base leading-8 text-white/60 sm:text-lg">
              The principles that shape how we approach property,
              people, and every conversation along the way.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-9 sm:mt-16 sm:grid-cols-3 sm:gap-7 lg:gap-12">
            {principles.map((principle, index) => {
              const Icon = principle.icon;

              return (
                <Reveal key={principle.number} delay={index * 0.08}>
                  <article className="h-full border-t border-white/15 pt-6">
                    <div className="flex items-center justify-between">
                      <Icon
                        size={25}
                        strokeWidth={1.4}
                        style={{ color: GOLD }}
                      />
                      <span className="text-xs tracking-[0.2em] text-white/40">
                        {principle.number}
                      </span>
                    </div>

                    <h3 className="mt-7 text-xl font-medium tracking-tight sm:text-2xl">
                      {principle.title}
                    </h3>

                    <p className="mt-4 max-w-sm text-sm leading-7 text-white/60 sm:text-base">
                      {principle.text}
                    </p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* CLIENT JOURNEY */}
      <section className="bg-[#11110F] px-5 py-16 sm:px-8 sm:py-24 lg:px-12 lg:py-32">
        <div className="container-custom mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">

          <Reveal className="lg:self-start">
            <Eyebrow light>YOUR NEXT CHAPTER</Eyebrow>

            <h2 className="mt-6 text-[clamp(2.5rem,5vw,4.8rem)] font-medium leading-[1.03] tracking-[-0.06em]">
              A clearer path to your{" "}
              <span style={{ color: GOLD }}>next property.</span>
            </h2>

            <p className="mt-6 max-w-md text-base leading-8 text-white/60">
              Every property journey is different. Start with your
              goals, explore your options, and move forward with a
              clearer understanding of the process.
            </p>

            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-3 text-sm font-medium transition-colors hover:text-[#F2C078]"
            >
              Discuss your plans
              <ArrowRight size={17} style={{ color: GOLD }} />
            </Link>
          </Reveal>

          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute bottom-8 left-7 top-8 w-px sm:left-8"
              style={{
                background: `linear-gradient(to bottom, ${GOLD}, rgba(242,192,120,0.12))`,
              }}
            />

            <div className="space-y-10 sm:space-y-12">
              {journey.map((step, index) => {
                const Icon = step.icon;

                return (
                  <Reveal key={step.number} delay={index * 0.08}>
                    <article className="relative grid grid-cols-[56px_minmax(0,1fr)] gap-5 sm:grid-cols-[64px_minmax(0,1fr)] sm:gap-8">
                      <div
                        className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border border-[#F2C078]/50 sm:h-16 sm:w-16"
                        style={{ backgroundColor: GOLD }}
                      >
                        <Icon size={24} strokeWidth={1.5} color={DARK} />
                      </div>

                      <div className="pt-1">
                        <p
                          className="text-xs font-semibold tracking-[0.2em]"
                          style={{ color: GOLD }}
                        >
                          STEP {step.number}
                        </p>

                        <h3 className="mt-3 text-xl font-medium tracking-tight sm:text-2xl lg:text-3xl">
                          {step.title}
                        </h3>

                        <p className="mt-3 max-w-xl text-sm leading-7 text-white/60 sm:mt-4 sm:text-base sm:leading-8">
                          {step.text}
                        </p>
                      </div>
                    </article>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-[#F7F6F3] px-5 py-16 text-black sm:px-8 sm:py-24 lg:px-12 lg:py-28">
        <Reveal className="container-custom mx-auto flex max-w-7xl flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-3xl">
            <Eyebrow>LET&apos;S START A CONVERSATION</Eyebrow>

            <h2 className="mt-5 text-[clamp(2.5rem,6vw,5rem)] font-medium leading-[1.02] tracking-[-0.06em]">
              Your next move starts with{" "}
              <span style={{ color: "#98703B" }}>
                the right conversation.
              </span>
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-8 text-black/65 sm:text-base">
              Tell us what you are looking for, and let&apos;s explore
              the next steps together.
            </p>
          </div>

          <Link
            to="/contact"
            className="inline-flex min-h-12 w-full shrink-0 items-center justify-center gap-3 rounded-full px-6 py-3 text-sm font-medium text-black transition duration-300 hover:-translate-y-0.5 hover:brightness-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 sm:w-auto"
            style={{ backgroundColor: GOLD, outlineColor: GOLD }}
          >
            Start a conversation
            <ArrowUpRight size={18} />
          </Link>
        </Reveal>
      </section>
    </main>
  );
}
