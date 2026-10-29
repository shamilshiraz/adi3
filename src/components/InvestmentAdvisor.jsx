
import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Languages,
  BriefcaseBusiness,
  Clock3,
  ArrowUpRight,
} from "lucide-react";

import advisors from "../assets/agents.json";

const GOLD = "#F2C078";

export default function InvestmentAdvisors() {
  const reducedMotion = useReducedMotion();

  return (
    <section
      id="advisors"
      className="relative overflow-hidden bg-white page-padding section-spacing"
    >
      <div className="container-custom">
        {/* HEADER */}
        <motion.header
          initial={reducedMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: reducedMotion ? 0 : 0.65,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="max-w-4xl"
        >
          

          <h2 className="display-heading display-heading-lg mt-5 max-w-4xl text-black sm:mt-6">
            Meet the people behind{" "}
            <span style={{ color: GOLD }}>your next move.</span>
          </h2>

          <p className="sub mt-5 max-w-2xl text-dark-muted sm:mt-6">
            Real estate decisions are personal. Our advisors bring market
            knowledge, thoughtful questions, and practical guidance to
            every conversation.
          </p>
        </motion.header>

        {/* ADVISOR CARDS */}
        <div className="mt-8 grid grid-cols-2 items-stretch gap-3 sm:mt-10 sm:gap-5 lg:mt-14 lg:grid-cols-4 lg:gap-6 xl:gap-8">
          {advisors.slice(0, 4).map((advisor, index) => {
            const whatsappMessage = encodeURIComponent(
              `Hi ${advisor.name}, I would like to discuss a Dubai real estate investment opportunity.`
            );

            const whatsappUrl = `https://wa.me/${String(
              advisor.whatsapp ?? ""
            ).replace(/\D/g, "")}?text=${whatsappMessage}`;

            return (
              <motion.article
                key={advisor.id ?? advisor.name}
                initial={
                  reducedMotion
                    ? false
                    : { opacity: 0, y: 24 }
                }
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.12 }}
                transition={{
                  duration: reducedMotion ? 0 : 0.55,
                  delay: reducedMotion ? 0 : index * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group relative flex min-w-0 flex-col overflow-hidden rounded-2xl border border-black/[0.08] bg-white shadow-[0_8px_30px_rgba(0,0,0,0.035)] transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-1 hover:border-[#F2C078]/70 hover:shadow-[0_18px_42px_rgba(0,0,0,0.09)] sm:rounded-3xl"
              >
                {/* PORTRAIT */}
                <div className="relative aspect-[4/5] overflow-hidden bg-[#F5F3EF]">
                  <img
                    src={advisor.image}
                    alt={advisor.name}
                    loading={index === 0 ? "eager" : "lazy"}
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

                  <div
                    className="absolute bottom-0 left-0 h-[3px] w-full origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100"
                    style={{ backgroundColor: GOLD }}
                  />
                </div>

                {/* CARD CONTENT */}
                <div className="flex flex-1 flex-col p-3 sm:p-4 lg:p-5">
                  {/* NAME AND ROLE */}
                  <h3 className="break-words text-sm font-semibold leading-snug tracking-tight text-black sm:text-lg lg:text-xl">
                    {advisor.name}
                  </h3>

                  <p className="mt-1.5 text-[10px] leading-relaxed text-black/55 sm:text-xs lg:text-sm">
                    {advisor.role}
                  </p>

                  <div className="my-3 h-px w-full bg-black/[0.08] sm:my-4" />

                  {/* ADVISOR DETAILS */}
                  <div className="flex-1 space-y-3 sm:space-y-4">
                    {/* LANGUAGES */}
                    <div className="flex min-w-0 items-start gap-2 sm:gap-3">
                      <Languages
                        size={16}
                        strokeWidth={1.6}
                        className="mt-0.5 shrink-0 sm:h-[18px] sm:w-[18px]"
                        style={{ color: GOLD }}
                      />

                      <div className="min-w-0 flex-1">
                        <p className="text-[9px] font-semibold uppercase tracking-[0.12em] text-[#9A713C] sm:text-[10px] lg:text-xs">
                          Languages
                        </p>

                        <p className="mt-1 break-words text-[10px] leading-relaxed text-black/65 sm:text-xs lg:text-sm">
                          {Array.isArray(advisor.languages)
                            ? advisor.languages.join(" · ")
                            : advisor.languages || "Contact for details"}
                        </p>
                      </div>
                    </div>

                    {/* SPECIALIZATION */}
                    <div className="flex min-w-0 items-start gap-2 sm:gap-3">
                      <BriefcaseBusiness
                        size={16}
                        strokeWidth={1.6}
                        className="mt-0.5 shrink-0 sm:h-[18px] sm:w-[18px]"
                        style={{ color: GOLD }}
                      />

                      <div className="min-w-0 flex-1">
                        <p className="text-[9px] font-semibold uppercase tracking-[0.12em] text-[#9A713C] sm:text-[10px] lg:text-xs">
                          Specialization
                        </p>

                        <p className="mt-1 break-words text-[10px] leading-relaxed text-black/65 sm:text-xs lg:text-sm">
                          {advisor.specialization || "Real estate advisory"}
                        </p>
                      </div>
                    </div>

                    {/* EXPERIENCE */}
                    <div className="flex min-w-0 items-start gap-2 sm:gap-3">
                      <Clock3
                        size={16}
                        strokeWidth={1.6}
                        className="mt-0.5 shrink-0 sm:h-[18px] sm:w-[18px]"
                        style={{ color: GOLD }}
                      />

                      <div className="min-w-0 flex-1">
                        <p className="text-[9px] font-semibold uppercase tracking-[0.12em] text-[#9A713C] sm:text-[10px] lg:text-xs">
                          Experience
                        </p>

                        <p className="mt-1 break-words text-[10px] leading-relaxed text-black/65 sm:text-xs lg:text-sm">
                          {advisor.experience || "Contact for details"}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* WHATSAPP CONSULTATION */}
                  <a
  href="/contact"
  aria-label={`Consult ${advisor.name} through the contact form`}
  className="mt-4 flex w-full items-center justify-center gap-1.5 rounded-full px-3 py-2.5 text-[10px] font-medium text-black no-underline transition-all duration-300 hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F2C078] sm:mt-7 sm:gap-2 sm:px-6 sm:py-3 sm:text-sm"
  style={{ backgroundColor: GOLD }}
>
  <span>Consult</span>
  <ArrowUpRight
    size={14}
    className="shrink-0 sm:h-4 sm:w-4"
  />
</a>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* BOTTOM CTA */}
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: reducedMotion ? 0 : 0.55,
            delay: reducedMotion ? 0 : 0.1,
          }}
          className="mt-8 flex justify-center sm:mt-12 lg:mt-16"
        >
          <Link
            to="/agents"
            className="group inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-full border border-black bg-black px-6 py-3 text-sm font-medium text-white transition-colors duration-300 hover:border-[#F2C078] hover:bg-[#F2C078] hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F2C078] focus-visible:ring-offset-2 sm:w-auto sm:px-8"
          >
            <span>Meet all advisors</span>

            <ArrowUpRight
              size={16}
              strokeWidth={1.8}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
