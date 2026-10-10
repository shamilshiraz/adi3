
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Quote } from "lucide-react";
import { Link } from "react-router-dom";
import { founder } from "../data/founder";

const GOLD = "#F2C078";

export default function FounderSpotlight() {
  const reduceMotion = useReducedMotion();

  const reveal = {
    hidden: reduceMotion ? { opacity: 1 } : { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reduceMotion ? 0 : 0.7,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section
      id="founder"
      className="relative overflow-hidden bg-[#FAFAFA] text-black"
    >
      <div className="page-padding py-16 sm:py-20 lg:py-28">
        <div className="container-custom">
          {/* SECTION LABEL */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={reveal}
            className="mb-10 flex items-center gap-3 sm:mb-14"
          >
            
            <h2
            id="dubai-market-heading"
            className="
              display-heading display-heading-lg
              mt-5 max-w-4xl text-black
            "
          >
            The founder behind{" "}
            <span style={{ color: GOLD }}>ADHIHAVEN.</span>
          </h2>
            
          </motion.div>

          <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 xl:gap-28">
            {/* FOUNDER IMAGE */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={reveal}
              className="relative mx-auto w-full max-w-[460px] lg:mx-0"
            >
              <div className="relative overflow-hidden rounded-[4px] bg-neutral-200">
                <img
                  src={founder.image}
                  alt={`Portrait of ${founder.name}, ${founder.role}`}
                  onError={(event) => {
                    event.currentTarget.onerror = null;
                    event.currentTarget.src =
                      "/abdul-abid-placeholder.svg";
                  }}
                  className="aspect-[4/4.8] w-full object-cover object-center"
                  loading="lazy"
                />

                {/* IMAGE OVERLAY */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-black/5" />

                {/* FOUNDER DETAILS */}
                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7 lg:p-8">
                  <p className="text-2xl font-medium tracking-tight text-white sm:text-3xl">
                    {founder.name}
                  </p>

                  <div className="mt-3 flex items-center gap-3">
                    <span
                      className="h-px w-8"
                      style={{ backgroundColor: GOLD }}
                    />
                    <p
                      className="text-[10px] font-medium uppercase tracking-[0.2em] sm:text-xs"
                      style={{ color: GOLD }}
                    >
                      {founder.role}
                    </p>
                  </div>
                </div>
              </div>

              {/* DECORATIVE GOLD CORNER */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-3 -right-3 -z-0 h-24 w-24 border-b border-r sm:-bottom-4 sm:-right-4 sm:h-32 sm:w-32"
                style={{ borderColor: GOLD }}
              />
            </motion.div>

            {/* FOUNDER STORY */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={{
                ...reveal,
                visible: {
                  ...reveal.visible,
                  transition: {
                    ...reveal.visible.transition,
                    delay: reduceMotion ? 0 : 0.12,
                  },
                },
              }}
              className="relative pt-2 lg:pt-0"
            >
              <Quote
                size={30}
                strokeWidth={1.2}
                className="mb-6"
                style={{ color: GOLD }}
                aria-hidden="true"
              />

              <h2 className="max-w-2xl text-3xl font-medium leading-[1.12] tracking-[-0.045em] sm:text-4xl md:text-5xl xl:text-[60px]">
                Real estate is about more than property. It&apos;s about{" "}
                <span style={{ color: "#F2C078" }}>
                  the right perspective.
                </span>
              </h2>

              <p className="mt-6 max-w-xl text-sm leading-7 text-black/65 sm:mt-8 sm:text-base sm:leading-8">
                {founder.intro}
              </p>

              <p className="mt-4 max-w-xl text-sm leading-7 text-black/50 sm:text-base sm:leading-8">
                His work across international markets and investor events
                has shaped an approach grounded in perspective, trust,
                and advice that helps people move forward with confidence.
              </p>

              {/* SIGNATURE CTA */}
              <div className="mt-8 sm:mt-10">
                <Link
                  to="/about"
                  className="group inline-flex min-h-12 w-full items-center justify-between gap-5 border-b border-black/20 pb-4 text-sm font-medium transition-colors duration-300 hover:border-[#B88A47] sm:w-auto sm:justify-start"
                >
                  <span>Discover Abdul&apos;s story</span>

                  <span
                    className="flex h-9 w-9 items-center justify-center rounded-full transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    style={{ backgroundColor: GOLD }}
                  >
                    <ArrowUpRight size={18} />
                  </span>
                </Link>
              </div>

              <p className="mt-8 text-[10px] uppercase tracking-[0.18em] text-black/35 sm:mt-10 sm:text-xs">
                A personal approach to property investment
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
