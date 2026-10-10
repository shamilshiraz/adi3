
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  Search,
  Languages,
  BriefcaseBusiness,
  Clock3,
  ArrowUpRight,
} from "lucide-react";

import advisors from "../assets/agents.json";

const GOLD = "#F2C078";
const BACKGROUND = "#181715";
const CARD_BACKGROUND = "#141311";

export default function Agents() {
  const [search, setSearch] = useState("");

  const filteredAgents = useMemo(() => {
    const query = search.trim().toLowerCase();

    if (!query) return advisors;

    return advisors.filter((advisor) => {
      return (
        advisor.name?.toLowerCase().includes(query) ||
        advisor.role?.toLowerCase().includes(query) ||
        advisor.specialization?.toLowerCase().includes(query) ||
        advisor.languages?.join(" ").toLowerCase().includes(query)
      );
    });
  }, [search]);

  return (
    <section
      className="relative overflow-hidden page-padding bg-[#181715] text-white pb-20 pt-32 sm:pb-24 sm:pt-36 lg:pb-28 lg:pt-40"
    >
      {/* BACKGROUND GLOW */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-16 h-[300px] w-[300px] rounded-full blur-[140px] sm:h-[500px] sm:w-[500px] sm:blur-[180px]"
        style={{ backgroundColor: `${GOLD}19` }}
      />

      <div className="container-custom relative">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 35, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="max-w-4xl"
        >
          <p className="eyebrow" style={{ color: GOLD }}>
            THE ADHIHAVEN ADVISORY TEAM
          </p>

          <h1 className="display-heading display-heading-lg mt-5 max-w-4xl text-white sm:mt-6">
            Meet the people behind{" "}
            <span style={{ color: GOLD }}>your next move.</span>
          </h1>

          <p className="sub mt-5 max-w-2xl text-white/65 sm:mt-6">
            Speak with people who listen first, bring useful market context,
            and help you evaluate Dubai property with a clearer point of view.
          </p>
        </motion.div>

        {/* SEARCH */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.7 }}
          className="mt-10 sm:mt-14"
        >
          <div className="flex items-center gap-3 rounded-2xl border border-white/15 bg-white/[0.04] px-4 py-3.5 shadow-[0_16px_60px_rgba(0,0,0,0.2)] transition-colors focus-within:border-[#F2C078]/60 sm:px-5 sm:py-4">
            <Search
              size={20}
              className="shrink-0 text-white/45"
            />

            <input
              type="text"
              placeholder="Search advisors, languages or specializations..."
              aria-label="Search advisors, languages or specializations"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              className="w-full min-w-0 bg-transparent text-sm text-white outline-none placeholder:text-white/40 sm:text-base"
            />

            {search && (
              <button
                type="button"
                onClick={() => setSearch("")}
                className="shrink-0 text-xs text-white/55 transition-colors hover:text-white"
                aria-label="Clear search"
              >
                Clear
              </button>
            )}
          </div>

          <p className="mt-3 text-xs text-white/45 sm:mt-4 sm:text-sm">
            {filteredAgents.length} advisor
            {filteredAgents.length !== 1 ? "s" : ""} found
          </p>
        </motion.div>

        {/* ADVISOR GRID */}
        {filteredAgents.length > 0 ? (
          <div className="mt-8 grid grid-cols-2 gap-3 sm:mt-10 sm:gap-5 lg:mt-12 lg:grid-cols-3 lg:gap-8 xl:grid-cols-4">
            {filteredAgents.map((advisor, index) => (
              <motion.article
                key={advisor.id ?? advisor.name}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: Math.min(index * 0.04, 0.4),
                  duration: 0.55,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group flex h-full min-w-0 flex-col overflow-hidden rounded-[20px] border border-white/10 shadow-[0_16px_45px_rgba(0,0,0,0.22)] transition-colors duration-300 hover:border-[#F2C078]/40 sm:rounded-[28px]"
                style={{ backgroundColor: CARD_BACKGROUND }}
              >
                {/* ADVISOR IMAGE */}
                <div className="relative aspect-square overflow-hidden bg-white/[0.03] sm:aspect-[4/5]">
                  <img
                    src={advisor.image}
                    alt={advisor.name}
                    loading={index < 4 ? "eager" : "lazy"}
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent"
                  />
                </div>

                {/* ADVISOR DETAILS */}
                <div className="flex flex-1 flex-col p-3 sm:p-5 lg:p-6">
                  <h2 className="break-words text-[15px] font-medium text-white sm:text-lg lg:text-xl">
                    {advisor.name}
                  </h2>

                  <p className="mt-1.5 break-words text-[11px] leading-snug text-white/55 sm:text-sm sm:leading-tight lg:text-base">
                    {advisor.role}
                  </p>

                  <div className="my-3 h-px bg-white/10 sm:my-5" />

                  <div className="space-y-3 sm:space-y-5">
                    {/* LANGUAGES */}
                    <div className="flex min-w-0 gap-2 sm:gap-3">
                      <Languages
                        size={16}
                        className="mt-0.5 shrink-0 sm:h-[18px] sm:w-[18px]"
                        style={{ color: GOLD }}
                      />

                      <div className="min-w-0">
                        <p
                          className="text-[10px] leading-none sm:text-xs"
                          style={{ color: GOLD }}
                        >
                          Languages
                        </p>

                        <p className="mt-1 break-words text-[10px] leading-snug text-white/65 sm:text-sm sm:leading-tight">
                          {advisor.languages?.join(" • ") || "Not specified"}
                        </p>
                      </div>
                    </div>

                    {/* SPECIALIZATION */}
                    <div className="flex min-w-0 gap-2 sm:gap-3">
                      <BriefcaseBusiness
                        size={16}
                        className="mt-0.5 shrink-0 sm:h-[18px] sm:w-[18px]"
                        style={{ color: GOLD }}
                      />

                      <div className="min-w-0">
                        <p
                          className="text-[10px] leading-none sm:text-xs"
                          style={{ color: GOLD }}
                        >
                          Specialization
                        </p>

                        <p className="mt-1 break-words text-[10px] leading-snug text-white/65 sm:text-sm sm:leading-tight">
                          {advisor.specialization || "Real estate"}
                        </p>
                      </div>
                    </div>

                    {/* EXPERIENCE */}
                    <div className="flex min-w-0 gap-2 sm:gap-3">
                      <Clock3
                        size={16}
                        className="mt-0.5 shrink-0 sm:h-[18px] sm:w-[18px]"
                        style={{ color: GOLD }}
                      />

                      <div className="min-w-0">
                        <p
                          className="text-[10px] leading-none sm:text-xs"
                          style={{ color: GOLD }}
                        >
                          Experience
                        </p>

                        <p className="mt-1 break-words text-[10px] leading-snug text-white/65 sm:text-sm sm:leading-tight">
                          {advisor.experience || "Not specified"}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* WHATSAPP CONSULTATION */}
                  <a
                    href={`https://wa.me/${String(advisor.whatsapp || "").replace(/\D/g, "")}?text=${encodeURIComponent(
                      `Hi ${advisor.name}, I would like to discuss a Dubai real estate opportunity.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Consult ${advisor.name} on WhatsApp`}
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
            ))}
          </div>
        ) : (
          <div className="mt-12 rounded-3xl border border-white/10 p-8 text-center sm:mt-16 sm:p-12">
            <h2 className="heading-4 text-white">
              No advisors found
            </h2>

            <p className="mt-3 text-sm text-white/55">
              Try searching by name, specialization, or language.
            </p>

            <button
              type="button"
              onClick={() => setSearch("")}
              className="mt-5 rounded-full px-5 py-2.5 text-sm font-medium text-black transition hover:brightness-110"
              style={{ backgroundColor: GOLD }}
            >
              Show all advisors
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
