import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
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
        advisor.specialization
          .toLowerCase()
          .includes(query) ||
        advisor.languages
          .join(" ")
          .toLowerCase()
          .includes(query)
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
        py-28
      "
    >
      <div
        className="
          absolute
          top-0
          right-0
          h-[500px]
          w-[500px]
          rounded-full
          bg-[#EFBD78]/10
          blur-[180px]
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

          <h1 className="heading-3 text-[#4E0026] mt-6">
            Meet Our
            <br />
            Investment Advisors
          </h1>

          <p className="sub text-[#4E0026]/70 mt-6 max-w-2xl">
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
          className="mt-14"
        >
          <div
            className="
              flex
              items-center
              gap-4
              rounded-2xl
              border
              border-[#4E0026]/10
              bg-white
              px-5
              py-4
              shadow-sm
            "
          >
            <Search
              size={20}
              className="text-[#4E0026]/40"
            />

            <input
              type="text"
              placeholder="Search advisors, languages or specializations..."
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
              className="
                w-full
                bg-transparent
                outline-none
                text-[#4E0026]
                placeholder:text-[#4E0026]/40
              "
            />
          </div>

          <p className="mt-4 text-sm text-[#4E0026]/60">
            {filteredAgents.length} advisor
            {filteredAgents.length !== 1 && "s"} found
          </p>
        </motion.div>

        {/* GRID */}
        {filteredAgents.length > 0 ? (
          <div
            className="
              mt-12
              grid
              gap-8
              sm:grid-cols-2
              lg:grid-cols-3
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
                  overflow-hidden
                  rounded-[28px]
                  border
                  border-[#4E0026]/8
                  bg-[#FAFAFA]
                  group
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
                <div className="p-6">
                  <h3 className="heading-4 text-[#4E0026]">
                    {advisor.name}
                  </h3>

                  <p className="small text-[#4E0026]/60 mt-2">
                    {advisor.role}
                  </p>

                  <div className="h-px bg-black/5 my-6" />

                  <div className="space-y-5">
                    <div className="flex gap-3">
                      <Languages
                        size={18}
                        className="text-[#D4AF37] mt-1"
                      />

                      <div>
                        <p className="small text-[#D4AF37]">
                          Languages
                        </p>

                        <p className="small text-[#4E0026]/70">
                          {advisor.languages.join(
                            " • "
                          )}
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <BriefcaseBusiness
                        size={18}
                        className="text-[#D4AF37] mt-1"
                      />

                      <div>
                        <p className="small text-[#D4AF37]">
                          Specialization
                        </p>

                        <p className="small text-[#4E0026]/70">
                          {advisor.specialization}
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <Clock3
                        size={18}
                        className="text-[#D4AF37] mt-1"
                      />

                      <div>
                        <p className="small text-[#D4AF37]">
                          Experience
                        </p>

                        <p className="small text-[#4E0026]/70">
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
                    View Profile

                    <ArrowUpRight
                      size={16}
                    />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div
            className="
              mt-16
              rounded-3xl
              border
              border-[#4E0026]/10
              p-12
              text-center
            "
          >
            <h3 className="heading-4 text-[#4E0026]">
              No advisors found
            </h3>

            <p className="text-[#4E0026]/60 mt-3">
              Try searching by name,
              specialization or language.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}