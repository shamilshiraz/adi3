import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  Search,
  Languages,
  BriefcaseBusiness,
  Clock3,
  ArrowUpRight,
} from "lucide-react";

import advisors from "../assets/agents.json";

export default function Agents() {
  const [search, setSearch] = useState("");

  const filteredAgents = useMemo(() => {
    if (!search.trim()) return advisors;

    const query = search.toLowerCase();

    return advisors.filter((advisor) => {
      return (
        advisor.name.toLowerCase().includes(query) ||
        advisor.role.toLowerCase().includes(query) ||
        advisor.specialization.toLowerCase().includes(query) ||
        advisor.languages.join(" ").toLowerCase().includes(query)
      );
    });
  }, [search]);

  return (
    <section
      className="
        relative
        overflow-hidden
        bg-white
        page-padding
        py-20
        sm:py-24
        lg:py-28
      "
    >
      {/* BACKGROUND GLOW */}
      <div
        className="
          absolute
          top-0
          right-0
          h-[300px]
          w-[300px]
          sm:h-[500px]
          sm:w-[500px]
          rounded-full
          bg-[#EFBD78]/10
          blur-[140px]
          sm:blur-[180px]
          pointer-events-none
        "
      />

      <div className="container-custom relative">

        {/* HEADER */}
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
            filter: "blur(10px)",
          }}
          animate={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
          }}
          transition={{
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="max-w-4xl"
        >
          <p className="eyebrow">
            OUR ADVISORS
          </p>

          <h1 className="heading-3 text-black mt-5 sm:mt-6">
            Meet Our
            <br />
            Investment Advisors
          </h1>

          <p className="sub text-black/70 mt-5 sm:mt-6 max-w-2xl">
            Work directly with experienced advisors who help
            investors identify opportunities, evaluate
            developments, and build long-term wealth through
            Dubai real estate.
          </p>
        </motion.div>

        {/* SEARCH */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.15,
            duration: 0.8,
          }}
          className="mt-10 sm:mt-14"
        >
          <div
            className="
              flex
              items-center
              gap-3
              sm:gap-4
              rounded-2xl
              border
              border-black/10
              bg-white
              px-4
              sm:px-5
              py-3.5
              sm:py-4
              shadow-sm
            "
          >
            <Search
              size={20}
              className="shrink-0 text-black/40"
            />

            <input
              type="text"
              placeholder="Search advisors, languages or specializations..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="
                min-w-0
                w-full
                bg-transparent
                outline-none
                text-sm
                sm:text-base
                text-black
                placeholder:text-black/40
              "
            />
          </div>

          <p className="mt-3 sm:mt-4 text-xs sm:text-sm text-black/60">
            {filteredAgents.length} advisor
            {filteredAgents.length !== 1 && "s"} found
          </p>
        </motion.div>

        {/* GRID */}
        {filteredAgents.length > 0 ? (
          <div
            className="
              mt-8
              sm:mt-10
              lg:mt-12
              grid
              grid-cols-2
              gap-3
              sm:gap-5
              lg:grid-cols-3
              lg:gap-8
              xl:grid-cols-4
            "
          >
            {filteredAgents.map((advisor, index) => (
              <motion.div
                key={advisor.id}
                initial={{
                  opacity: 0,
                  y: 40,
                  filter: "blur(10px)",
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  filter: "blur(0px)",
                }}
                transition={{
                  delay: index * 0.05,
                  duration: 0.7,
                }}
                className="
                  min-w-0
                  h-full
                  overflow-hidden
                  rounded-2xl
                  sm:rounded-[28px]
                  border
                  border-black/8
                  bg-[#FAFAFA]
                  group
                  flex
                  flex-col
                "
              >

                {/* IMAGE */}
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
                      group-hover:scale-105
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

                {/* CONTENT */}
                <div
                  className="
                    min-w-0
                    flex
                    flex-1
                    flex-col
                    p-3
                    sm:p-5
                    lg:p-6
                  "
                >

                  {/* NAME */}
                  <h3
                    className="
                      text-sm
                      sm:text-lg
                      lg:text-xl
                      font-medium
                      leading-tight
                      text-black
                    "
                  >
                    {advisor.name}
                  </h3>

                  {/* ROLE */}
                  <p
                    className="
                      mt-1.5
                      sm:mt-2
                      text-[10px]
                      sm:text-sm
                      leading-snug
                      text-black/60
                    "
                  >
                    {advisor.role}
                  </p>

                  {/* DIVIDER */}
                  <div className="my-4 sm:my-6 h-px bg-black/5" />

                  {/* DETAILS */}
                  <div className="space-y-3 sm:space-y-5">

                    {/* LANGUAGES */}
                    <div className="flex min-w-0 gap-2 sm:gap-3">
                      <Languages
                        size={16}
                        className="
                          mt-0.5
                          shrink-0
                          text-[#D4AF37]
                          sm:h-[18px]
                          sm:w-[18px]
                        "
                      />

                      <div className="min-w-0">
                        <p
                          className="
                            text-[9px]
                            sm:text-sm
                            text-[#D4AF37]
                          "
                        >
                          Languages
                        </p>

                        <p
                          className="
                            break-words
                            text-[9px]
                            sm:text-sm
                            leading-snug
                            text-black/70
                          "
                        >
                          {advisor.languages.join(" • ")}
                        </p>
                      </div>
                    </div>

                    {/* SPECIALIZATION */}
                    <div className="flex min-w-0 gap-2 sm:gap-3">
                      <BriefcaseBusiness
                        size={16}
                        className="
                          mt-0.5
                          shrink-0
                          text-[#D4AF37]
                          sm:h-[18px]
                          sm:w-[18px]
                        "
                      />

                      <div className="min-w-0">
                        <p
                          className="
                            text-[9px]
                            sm:text-sm
                            text-[#D4AF37]
                          "
                        >
                          Specialization
                        </p>

                        <p
                          className="
                            break-words
                            text-[9px]
                            sm:text-sm
                            leading-snug
                            text-black/70
                          "
                        >
                          {advisor.specialization}
                        </p>
                      </div>
                    </div>

                    {/* EXPERIENCE */}
                    <div className="flex min-w-0 gap-2 sm:gap-3">
                      <Clock3
                        size={16}
                        className="
                          mt-0.5
                          shrink-0
                          text-[#D4AF37]
                          sm:h-[18px]
                          sm:w-[18px]
                        "
                      />

                      <div className="min-w-0">
                        <p
                          className="
                            text-[9px]
                            sm:text-sm
                            text-[#D4AF37]
                          "
                        >
                          Experience
                        </p>

                        <p
                          className="
                            break-words
                            text-[9px]
                            sm:text-sm
                            leading-snug
                            text-black/70
                          "
                        >
                          {advisor.experience}
                        </p>
                      </div>
                    </div>

                  </div>

                  {/* WHATSAPP BUTTON */}
                  <a
                    href={`https://wa.me/${advisor.whatsapp}?text=${encodeURIComponent(
                      `Hi ${advisor.name}, I would like to discuss a Dubai real estate investment opportunity.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      mt-auto
                      pt-5
                      sm:pt-8
                      w-full
                      inline-flex
                      items-center
                      justify-center
                      gap-1.5
                      sm:gap-2
                      rounded-full
                      bg-black
                      px-2
                      sm:px-6
                      py-2
                      sm:py-3
                      text-[10px]
                      sm:text-sm
                      font-medium
                      text-white
                      no-underline
                      transition-all
                      duration-300
                      hover:bg-[#D4AF37]
                      hover:text-black
                    "
                  >
                    <span className="text-white">
                      Consult
                    </span>

                    <ArrowUpRight
                      size={14}
                      className="
                        shrink-0
                        text-white
                        sm:h-4
                        sm:w-4
                      "
                    />
                  </a>

                </div>
              </motion.div>
            ))}
          </div>
        ) : (

          /* NO RESULTS */
          <div
            className="
              mt-12
              sm:mt-16
              rounded-3xl
              border
              border-black/10
              p-8
              sm:p-12
              text-center
            "
          >
            <h3 className="heading-4 text-black">
              No advisors found
            </h3>

            <p className="mt-3 text-sm text-black/60">
              Try searching by name, specialization or language.
            </p>
          </div>

        )}
      </div>
    </section>
  );
}
