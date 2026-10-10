
import { motion } from "framer-motion";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Compass,
  Globe2,
  Users,
  Building2,
  Handshake,
} from "lucide-react";
import { Link } from "react-router-dom";
import { founder } from "../data/founder";

const GOLD = "#F2C078";
const DARK = "#0D0D0B";

const principles = [
  {
    icon: Globe2,
    number: "01",
    title: "International perspective",
    text: "A global outlook shaped by different markets, cultures, and investor perspectives.",
  },
  {
    icon: Compass,
    number: "02",
    title: "Purposeful guidance",
    text: "Clear, considered advice shaped around your goals and property ambitions.",
  },
  {
    icon: Handshake,
    number: "03",
    title: "Relationships built on trust",
    text: "A people-first approach focused on meaningful connections and lasting value.",
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

const founderSkills = [
  "Real estate",
  "Strategic marketing",
  "International business",
  "Leadership",
  "Client advisory",
];

const reveal = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const transition = {
  duration: 0.7,
  ease: [0.16, 1, 0.3, 1],
};

function Eyebrow({ children, light = false }) {
  return (
    <p
      className={`text-xs font-medium uppercase tracking-[0.22em] ${
        light ? "text-white/50" : "text-black/45"
      }`}
    >
      {children}
    </p>
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
          <motion.div
            variants={reveal}
            initial="hidden"
            animate="visible"
            transition={transition}
            className="max-w-5xl"
          >
            

            <h1 className="mt-7 text-[clamp(3rem,8vw,7.5rem)] font-medium leading-[0.94] tracking-[-0.065em]">
              Real estate,
              <br />
              guided by{" "}
              <span style={{ color: GOLD }}>perspective.</span>
            </h1>

            <div className="mt-8 grid gap-8 border-t border-white/15 pt-7 sm:mt-10 sm:grid-cols-[1fr_auto] sm:items-end sm:gap-12 sm:pt-8">
              <p className="max-w-2xl text-base leading-7 text-white/60 sm:text-lg sm:leading-8">
                Meet the founder behind ADHIHAVEN and discover a considered
                approach to Dubai real estate—built around people, informed
                decisions, and relationships that last.
              </p>

              <a
                href="#founder"
                className="inline-flex w-fit items-center gap-3 text-sm font-medium transition-colors hover:text-[#F2C078]"
              >
                Discover our story
                <ArrowDownRight size={18} style={{ color: GOLD }} />
              </a>
            </div>
          </motion.div>

          
        </div>
      </section>

      {/* FOUNDER */}
      <section
        id="founder"
        className="scroll-mt-20 bg-[#F7F6F3] px-5 py-16 text-black sm:px-8 sm:py-24 lg:px-12 lg:py-32"
      >
        <div className="container-custom mx-auto grid max-w-7xl items-start gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            transition={transition}
            className="lg:sticky lg:top-24"
          >
            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute -bottom-3 -right-3 h-1/3 w-1/3 rounded-br-[28px]"
                style={{
                  borderBottom: `2px solid ${GOLD}`,
                  borderRight: `2px solid ${GOLD}`,
                }}
              />

              <div className="relative overflow-hidden rounded-[24px] bg-black p-2 sm:rounded-[30px] sm:p-3">
                <img
                  src={founder.image}
                  alt="Abdul Abid, CEO and Founder of ADHIHAVEN"
                  loading="lazy"
                  onError={(event) => {
                    event.currentTarget.onerror = null;
                    event.currentTarget.src =
                      "/abdul-abid-placeholder.svg";
                  }}
                  className="aspect-[4/5] w-full rounded-[18px] object-cover sm:rounded-[22px]"
                />
              </div>
            </div>

            <div className="mt-6 flex items-end justify-between gap-4 border-b border-black/10 pb-5">
              <div>
                <h2 className="text-2xl font-medium tracking-[-0.04em] sm:text-3xl">
                  {founder.name}
                </h2>
                <p
                  className="mt-2 text-xs font-medium uppercase tracking-[0.18em]"
                  style={{ color: "#98703B" }}
                >
                  {founder.role}
                </p>
              </div>

              
            </div>

            
          </motion.div>

          <motion.article
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.12 }}
            transition={{ ...transition, delay: 0.08 }}
            className="lg:pt-3"
          >
            <Eyebrow>THE FOUNDER&apos;S STORY</Eyebrow>

            <h2 className="mt-6 text-[clamp(2.5rem,5.2vw,5rem)] font-medium leading-[1.02] tracking-[-0.06em]">
              Experience.
              <br />
              Insight.
              <br />
              <span style={{ color: "#98703B" }}>Direction.</span>
            </h2>

            <p
              className="mt-8 border-l-2 pl-5 text-lg leading-8 text-black/80 sm:mt-10 sm:text-xl sm:leading-9"
              style={{ borderColor: GOLD }}
            >
              “Real estate is about understanding people first, then helping
              them make decisions with clarity and confidence.”
            </p>

            <div className="mt-8 space-y-5 text-sm leading-7 text-black/65 sm:mt-10 sm:space-y-6 sm:text-base sm:leading-8">
              <p>
                With experience in real estate, sales, and strategic
                marketing, I have built my career around understanding
                markets, connecting with people, and identifying meaningful
                opportunities.
              </p>

              <p>
                Working across different markets, cultures, and industries
                has strengthened my understanding of international real
                estate and the needs of investors from diverse backgrounds.
              </p>

              <p>
                I have also planned and led international real estate
                roadshows and investor events, bringing clients, investors,
                and businesses together to explore opportunities and make
                informed decisions.
              </p>

              <p>
                As CEO and Founder of ADHIHAVEN, my focus is on combining
                real estate knowledge, international perspective, and
                people-first leadership to create a more considered client
                experience.
              </p>
            </div>

            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-3 border-b border-black/20 pb-2 text-sm font-medium transition-colors hover:border-black"
            >
              Connect with our team
              <ArrowUpRight size={17} />
            </Link>
          </motion.article>
        </div>
      </section>

      {/* PRINCIPLES */}
      <section className="bg-[#0D0D0B] px-5 py-16 sm:px-8 sm:py-24 lg:px-12 lg:py-32">
        <div className="container-custom mx-auto max-w-7xl">
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={transition}
            className="max-w-3xl"
          >
            <Eyebrow light>THE ADHIHAVEN STANDARD</Eyebrow>

            <h2 className="mt-6 text-[clamp(2.5rem,6vw,5.5rem)] font-medium leading-[1.02] tracking-[-0.06em]">
              Built on trust.
              <br />
              Driven by{" "}
              <span style={{ color: GOLD }}>understanding.</span>
            </h2>

            <p className="mt-6 max-w-xl text-base leading-7 text-white/55 sm:text-lg sm:leading-8">
              The principles that shape how we approach property, people,
              and every conversation along the way.
            </p>
          </motion.div>

          <div className="mt-12 grid gap-9 sm:mt-16 sm:grid-cols-3 sm:gap-7 lg:gap-12">
            {principles.map((principle, index) => {
              const Icon = principle.icon;

              return (
                <motion.article
                  key={principle.number}
                  variants={reveal}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ ...transition, delay: index * 0.08 }}
                  className="border-t border-white/15 pt-6"
                >
                  <div className="flex items-center justify-between">
                    <Icon
                      size={25}
                      strokeWidth={1.4}
                      style={{ color: GOLD }}
                    />
                    <span className="text-xs tracking-[0.2em] text-white/30">
                      {principle.number}
                    </span>
                  </div>

                  <h3 className="mt-7 text-xl font-medium tracking-[-0.03em] sm:text-2xl">
                    {principle.title}
                  </h3>

                  <p className="mt-4 max-w-sm text-sm leading-7 text-white/55 sm:text-base">
                    {principle.text}
                  </p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* CLIENT JOURNEY */}
      <section className="bg-[#11110F] px-5 py-16 sm:px-8 sm:py-24 lg:px-12 lg:py-32">
        <div className="container-custom mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={transition}
            className="lg:sticky lg:top-28 lg:self-start"
          >
            <Eyebrow light>YOUR NEXT CHAPTER</Eyebrow>

            <h2 className="mt-6 text-[clamp(2.5rem,5vw,4.8rem)] font-medium leading-[1.03] tracking-[-0.06em]">
              A clearer path to your{" "}
              <span style={{ color: GOLD }}>next property.</span>
            </h2>

            <p className="mt-6 max-w-md text-base leading-7 text-white/55">
              Every property journey is different. Start with your goals,
              explore your options, and move forward with a clearer
              understanding of the process.
            </p>

            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-3 text-sm font-medium transition-colors hover:text-[#F2C078]"
            >
              Discuss your plans
              <ArrowRight size={17} style={{ color: GOLD }} />
            </Link>
          </motion.div>

          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute bottom-8 left-[27px] top-8 w-px sm:left-[31px]"
              style={{
                background: `linear-gradient(to bottom, ${GOLD}, rgba(242,192,120,0.12))`,
              }}
            />

            <div className="space-y-10 sm:space-y-12">
              {journey.map((step, index) => {
                const Icon = step.icon;

                return (
                  <motion.article
                    key={step.number}
                    variants={reveal}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ ...transition, delay: index * 0.08 }}
                    className="relative grid grid-cols-[56px_minmax(0,1fr)] gap-5 sm:grid-cols-[64px_minmax(0,1fr)] sm:gap-8"
                  >
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

                      <h3 className="mt-3 text-xl font-medium tracking-[-0.035em] text-white sm:text-2xl lg:text-3xl">
                        {step.title}
                      </h3>

                      <p className="mt-3 max-w-xl text-sm leading-7 text-white/55 sm:mt-4 sm:text-base sm:leading-8">
                        {step.text}
                      </p>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-[#F7F6F3] px-5 py-16 text-black sm:px-8 sm:py-24 lg:px-12 lg:py-28">
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={transition}
          className="container-custom mx-auto flex max-w-7xl flex-col gap-8 sm:flex-row sm:items-end sm:justify-between"
        >
          <div className="max-w-3xl">
            <Eyebrow>LET&apos;S START A CONVERSATION</Eyebrow>

            <h2 className="mt-5 text-[clamp(2.5rem,6vw,5rem)] font-medium leading-[1.02] tracking-[-0.06em]">
              Your next move starts with{" "}
              <span style={{ color: "#" }}>the right conversation.</span>
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-black/60 sm:text-base sm:leading-8">
              Tell us what you are looking for, and let&apos;s explore the
              next steps together.
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
        </motion.div>
      </section>
    </main>
  );
}
