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
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl"
        >
          <p className="eyebrow">MEET THE ADVISORS</p>

          <h2 className="heading-2 text-dark mt-6">
            Meet The Advisors
            <br />
            Behind The Decisions
          </h2>

          <p className="sub text-dark-muted mt-6 max-w-2xl">
            Connect with experienced investment advisors who help investors
            evaluate opportunities, understand market dynamics, and build
            long-term strategies in Dubai real estate.
          </p>
        </motion.div>

        {/* Advisors Grid */}
        <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-8 items-stretch">
          {advisors.slice(0, 4).map((advisor, index) => (
            <motion.div
              key={advisor.id}
              initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.08,
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="overflow-hidden rounded-2xl lg:rounded-3xl border border-black/5 bg-[#FAFAFA] h-full flex flex-col"
            >
              {/* Portrait */}
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={advisor.image}
                  alt={advisor.name}
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              </div>

              {/* Content */}
              <div className="p-3 lg:p-5 flex flex-col flex-1">
                <h3 className="text-sm lg:text-xl font-medium text-dark leading-tight">
                  {advisor.name}
                </h3>

                <p className="text-[11px] lg:text-sm text-dark-muted mt-1">
                  {advisor.role}
                </p>

                <div className="divider-dark my-3 lg:my-5" />

                <div className="space-y-2 lg:space-y-4 flex-1">
                  <div className="flex gap-2">
                    <Languages
                      size={14}
                      strokeWidth={1.5}
                      className="text-[#D4AF37] mt-0.5 lg:mt-1 flex-shrink-0 lg:w-[18px] lg:h-[18px]"
                    />
                    <div className="min-w-0">
                      <p className="text-[10px] lg:text-xs text-[#D4AF37] uppercase tracking-wide">
                        Languages
                      </p>
                      <p className="text-[10px] lg:text-sm text-dark-muted leading-snug break-words">
                        {advisor.languages.join(" • ")}
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <BriefcaseBusiness
                      size={14}
                      strokeWidth={1.5}
                      className="text-[#D4AF37] mt-0.5 lg:mt-1 flex-shrink-0 lg:w-[18px] lg:h-[18px]"
                    />
                    <div className="min-w-0">
                      <p className="text-[10px] lg:text-xs text-[#D4AF37] uppercase tracking-wide">
                        Specialization
                      </p>
                      <p className="text-[10px] lg:text-sm text-dark-muted leading-snug break-words">
                        {advisor.specialization}
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Clock3
                      size={14}
                      strokeWidth={1.5}
                      className="text-[#D4AF37] mt-0.5 lg:mt-1 flex-shrink-0 lg:w-[18px] lg:h-[18px]"
                    />
                    <div className="min-w-0">
                      <p className="text-[10px] lg:text-xs text-[#D4AF37] uppercase tracking-wide">
                        Experience
                      </p>
                      <p className="text-[10px] lg:text-sm text-dark-muted leading-snug">
                        {advisor.experience}
                      </p>
                    </div>
                  </div>
                </div>

                <a
                  href={advisor.contact}
                  className="mt-4 lg:mt-6 w-full inline-flex items-center justify-center gap-1.5 lg:gap-2 rounded-xl bg-[#341222] px-2 lg:px-4 py-2 lg:py-3 text-[10px] lg:text-sm text-white hover:bg-[#4a1930] transition"
                >
                  <span className="truncate">Consult</span>
                  <ArrowUpRight
                    size={14}
                    strokeWidth={1.8}
                    className="lg:w-4 lg:h-4"
                  />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-12 lg:mt-16 flex justify-center"
        >
          <Link to="/agents" className="btn-violet">
            View All Advisors
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
