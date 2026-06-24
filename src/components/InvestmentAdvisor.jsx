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
          className="max-w-4xl"
        >
          <p className="eyebrow">
            MEET THE ADVISORS
          </p>

          <h2 className="heading-2 text-dark mt-6">
            Meet The Advisors
            <br />
            Behind The Decisions
          </h2>

          <p className="sub text-dark-muted mt-6 max-w-2xl">
            Connect with experienced investment advisors who
            help investors evaluate opportunities, understand
            market dynamics, and build long-term strategies in
            Dubai real estate.
          </p>
        </motion.div>

        {/* Advisors Grid */}
        <div className="mt-16 grid gap-8 lg:grid-cols-4">
          {advisors.map((advisor, index) => (
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
                overflow-hidden
                rounded-3xl
                border
                border-black/5
                bg-[#FAFAFA]
              "
            >
              {/* Portrait */}
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={advisor.image}
                  alt={advisor.name}
                  className="
                    h-full
                    w-full
                    object-cover
                    transition-transform
                    duration-700
                    hover:scale-105
                  "
                />

                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black/30
                    via-transparent
                    to-transparent
                  "
                />
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="heading-4 text-dark">
                  {advisor.name}
                </h3>

                <p className="small text-dark-muted mt-2">
                  {advisor.role}
                </p>

                <div className="divider-dark my-6" />

                <div className="space-y-5">
                  <div className="flex gap-3">
                    <Languages
                      size={18}
                      strokeWidth={1.5}
                      className="text-[#D4AF37] mt-1"
                    />

                    <div>
                      <p className="small text-[#D4AF37]">
                        Languages
                      </p>

                      <p className="small text-dark-muted">
                        {advisor.languages.join(" • ")}
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <BriefcaseBusiness
                      size={18}
                      strokeWidth={1.5}
                      className="text-[#D4AF37] mt-1"
                    />

                    <div>
                      <p className="small text-[#D4AF37]">
                        Specialization
                      </p>

                      <p className="small text-dark-muted">
                        {advisor.specialization}
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Clock3
                      size={18}
                      strokeWidth={1.5}
                      className="text-[#D4AF37] mt-1"
                    />

                    <div>
                      <p className="small text-[#D4AF37]">
                        Experience
                      </p>

                      <p className="small text-dark-muted">
                        {advisor.experience}
                      </p>
                    </div>
                  </div>
                </div>

                <Link
                  to={`/agents/${advisor.slug}`}
                  className="
                    mt-8
                    inline-flex
                    items-center
                    gap-2
                    btn-gold
                  "
                >
                  Schedule Consultation

                  <ArrowUpRight
                    size={16}
                    strokeWidth={1.8}
                  />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
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
          className="mt-16 flex justify-center"
        >
          <Link
            to="/agents"
            className="btn-violet"
          >
            View All Advisors
          </Link>
        </motion.div>
      </div>
    </section>
  );
}