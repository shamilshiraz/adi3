import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Languages,
  BriefcaseBusiness,
  Clock3,
  ArrowUpRight,
} from "lucide-react";

import advisors from "../assets/agents.json";

export default function InvestmentAdvisors() {
  return (
    <section className="relative overflow-hidden bg-white page-padding section-spacing">
      <div className="container-custom">

        {/* ================================
            HEADER
        ================================= */}
        <motion.div
          initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="max-w-4xl"
        >
          <p className="eyebrow">MEET THE ADVISORS</p>

          <h2 className="heading-2 text-dark mt-5 sm:mt-6">
            Meet The Advisors
            <br />
            Behind The Decisions
          </h2>

          <p className="sub text-dark-muted mt-5 sm:mt-6 max-w-2xl">
            Connect with experienced investment advisors who help investors
            evaluate opportunities, understand market dynamics, and build
            long-term strategies in Dubai real estate.
          </p>
        </motion.div>

        {/* ================================
            ADVISORS GRID
        ================================= */}
        <div
          className="
            mt-8
            sm:mt-10
            lg:mt-12
            grid
            grid-cols-2
            lg:grid-cols-4
            gap-3
            sm:gap-5
            lg:gap-8
            items-stretch
          "
        >
          {advisors.slice(0, 4).map((advisor, index) => (
            <motion.div
              key={advisor.id}
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
              className="
                group
                relative
                flex
                h-full
                min-w-0
                flex-col
                overflow-hidden
                rounded-[22px]
                sm:rounded-[24px]
                lg:rounded-[28px]

                border
                border-[#D4AF37]/25

                bg-white

                shadow-[0_8px_30px_rgba(0,0,0,0.05)]

                transition-all
                duration-500

                hover:-translate-y-1
                hover:border-[#D4AF37]/60
                hover:shadow-[0_18px_50px_rgba(0,0,0,0.10)]
              "
            >

              {/* Subtle inner border */}
              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  z-20
                  rounded-[22px]
                  sm:rounded-[24px]
                  lg:rounded-[28px]
                  border
                  border-black/[0.04]
                "
              />

              {/* ================================
                  PORTRAIT
              ================================= */}
              <div className="relative aspect-[4/5] overflow-hidden bg-neutral-100">

                <img
                  src={advisor.image}
                  alt={advisor.name}
                  className="
                    h-full
                    w-full
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-[1.03]
                  "
                />

                {/* Image gradient */}
                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black/20
                    via-transparent
                    to-white/5
                    pointer-events-none
                  "
                />
              </div>

              {/* Gold accent */}
              <div
                className="
                  h-[2px]
                  w-full
                  shrink-0
                  bg-gradient-to-r
                  from-transparent
                  via-[#D4AF37]/70
                  to-transparent
                "
              />

              {/* ================================
                  CONTENT
              ================================= */}
              <div className="flex flex-1 min-w-0 flex-col p-3 sm:p-5">

                {/* Name */}
                <h3
                  className="
                    text-[15px]
                    sm:text-lg
                    lg:text-xl
                    font-medium
                    leading-tight
                    text-black
                  "
                >
                  {advisor.name}
                </h3>

                {/* Role */}
                <p
                  className="
                    mt-1
                    text-[10px]
                    sm:text-xs
                    lg:text-sm
                    leading-tight
                    text-black/55
                  "
                >
                  {advisor.role}
                </p>

                {/* Divider */}
                <div className="divider-dark my-3 sm:my-4 lg:my-5" />

                {/* Information */}
                <div className="flex-1 space-y-3 sm:space-y-4">

                  {/* Languages */}
                  <div className="flex min-w-0 gap-2 sm:gap-3">
                    <Languages
                      size={15}
                      strokeWidth={1.5}
                      className="
                        mt-0.5
                        shrink-0
                        text-[#D4AF37]
                        sm:h-[18px]
                        sm:w-[18px]
                      "
                    />

                    <div className="min-w-0 flex-1">
                      <p
                        className="
                          text-[9px]
                          sm:text-[10px]
                          lg:text-xs
                          uppercase
                          tracking-wide
                          text-[#D4AF37]
                        "
                      >
                        Languages
                      </p>

                      <p
                        className="
                          mt-0.5
                          text-[10px]
                          sm:text-xs
                          lg:text-sm
                          leading-snug
                          text-black/55
                          break-words
                        "
                      >
                        {advisor.languages.join(" • ")}
                      </p>
                    </div>
                  </div>

                  {/* Specialization */}
                  <div className="flex min-w-0 gap-2 sm:gap-3">
                    <BriefcaseBusiness
                      size={15}
                      strokeWidth={1.5}
                      className="
                        mt-0.5
                        shrink-0
                        text-[#D4AF37]
                        sm:h-[18px]
                        sm:w-[18px]
                      "
                    />

                    <div className="min-w-0 flex-1">
                      <p
                        className="
                          text-[9px]
                          sm:text-[10px]
                          lg:text-xs
                          uppercase
                          tracking-wide
                          text-[#D4AF37]
                        "
                      >
                        Specialization
                      </p>

                      <p
                        className="
                          mt-0.5
                          text-[10px]
                          sm:text-xs
                          lg:text-sm
                          leading-snug
                          text-black/55
                          break-words
                        "
                      >
                        {advisor.specialization}
                      </p>
                    </div>
                  </div>

                  {/* Experience */}
                  <div className="flex min-w-0 gap-2 sm:gap-3">
                    <Clock3
                      size={15}
                      strokeWidth={1.5}
                      className="
                        mt-0.5
                        shrink-0
                        text-[#D4AF37]
                        sm:h-[18px]
                        sm:w-[18px]
                      "
                    />

                    <div className="min-w-0 flex-1">
                      <p
                        className="
                          text-[9px]
                          sm:text-[10px]
                          lg:text-xs
                          uppercase
                          tracking-wide
                          text-[#D4AF37]
                        "
                      >
                        Experience
                      </p>

                      <p
                        className="
                          mt-0.5
                          text-[10px]
                          sm:text-xs
                          lg:text-sm
                          leading-snug
                          text-black/55
                        "
                      >
                        {advisor.experience}
                      </p>
                    </div>
                  </div>
                </div>

                {/* ================================
                    CONSULT BUTTON
                ================================= */}
                <a
  href={`https://wa.me/${advisor.whatsapp}?text=${encodeURIComponent(
    `Hi ${advisor.name}, I would like to discuss a Dubai real estate investment opportunity.`
  )}`}
  target="_blank"
  rel="noopener noreferrer"
                  className="
                    mt-4
                    sm:mt-5
                    lg:mt-6

                    w-full

                    inline-flex
                    items-center
                    justify-center
                    gap-1.5
                    sm:gap-2

                    rounded-full

                    border
                    border-black

                    bg-black

                    px-2
                    sm:px-4

                    py-2.5
                    sm:py-3

                    text-[10px]
                    sm:text-xs
                    lg:text-sm

                    text-white

                    transition-all
                    duration-300

                    hover:border-[#D4AF37]
                    hover:bg-[#D4AF37]
                    hover:text-black
                  "
                >
                  <span>Consult</span>

                  <ArrowUpRight
                    size={14}
                    strokeWidth={1.8}
                    className="sm:h-4 sm:w-4"
                  />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ================================
            BOTTOM CTA
        ================================= */}
        <motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{
    delay: 0.2,
    duration: 0.8,
  }}
  className="
    mt-8
    sm:mt-10
    lg:mt-16
    flex
    justify-center
  "
>
  <Link
    to="/agents"
    className="
      btn-violet
      w-full
      sm:w-auto
      rounded-full
      px-6
      sm:px-8
    "
  >
    <span>View All Advisors</span>

    <ArrowUpRight
      size={16}
      strokeWidth={1.8}
    />
  </Link>
</motion.div>
      </div>
    </section>
  );
}
