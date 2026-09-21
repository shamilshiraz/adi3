import React from "react";
import { motion } from "framer-motion";
import {
  CalendarDays,
  MapPin,
  ArrowUpRight,
} from "lucide-react";

const events = [
  {
    city: "Dubai",
    title: "Dubai Investor Roadshow",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1600&auto=format&fit=crop",
  },
  {
    city: "London",
    title: "London Investment Briefing",
    image:
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=1600&auto=format&fit=crop",
  },
  {
    city: "Mumbai",
    title: "Mumbai Investor Forum",
    image:
      "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?q=80&w=1600&auto=format&fit=crop",
  },
  {
    city: "Riyadh",
    title: "Private Investor Event",
    image:
      "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?q=80&w=1600&auto=format&fit=crop",
  },
];

export default function RoadshowsEvents() {
  return (
    <section className="relative bg-white page-padding py-24 sm:py-28 lg:py-32">
      <div className="container-custom relative">

        {/* HEADER + CAROUSEL */}
        <div className="grid items-start gap-14 lg:grid-cols-[400px_1fr] lg:gap-20 xl:grid-cols-[440px_1fr]">

          {/* LEFT CONTENT */}
          <div className="lg:sticky lg:top-28">
            <motion.div
              initial={{
                opacity: 0,
                y: 30,
                filter: "blur(8px)",
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
            >

              {/* Gold accent */}
              <div className="mb-7 flex items-center gap-4">
                <span className="h-px w-12 bg-[#EFBD78]" />

                <span className="text-xs uppercase tracking-[0.3em] text-[#C48A3A]">
                  ROADSHOWS
                </span>
              </div>

              <h2 className="heading-2 text-black">
                Meet Us
                <br />
                <span className="text-black/40">
                  Around The World
                </span>
              </h2>

              <p className="sub mt-6 max-w-md text-black/60">
                Join exclusive investor roadshows, private briefings
                and curated events across major global markets.
              </p>

              {/* Divider */}
              <div className="my-10 h-px w-full bg-black/10" />

              {/* Stats */}
              <div className="grid grid-cols-3 gap-5">

                <div>
                  <div className="text-2xl font-medium text-black sm:text-3xl">
                    25+
                  </div>

                  <div className="mt-2 text-xs uppercase tracking-[0.12em] text-black/45">
                    Events
                  </div>
                </div>

                <div>
                  <div className="text-2xl font-medium text-black sm:text-3xl">
                    1000+
                  </div>

                  <div className="mt-2 text-xs uppercase tracking-[0.12em] text-black/45">
                    Investors
                  </div>
                </div>

                <div>
                  <div className="text-2xl font-medium text-black sm:text-3xl">
                    4+
                  </div>

                  <div className="mt-2 text-xs uppercase tracking-[0.12em] text-black/45">
                    Countries
                  </div>
                </div>

              </div>

              {/* Scroll indicator */}
              <div className="mt-12 hidden items-center gap-3 lg:flex">
                <div className="flex h-9 w-9 items-center justify-center rounded-full border border-black/15">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#C48A3A]" />
                </div>

                <span className="text-xs uppercase tracking-[0.2em] text-black/45">
                  Scroll to explore
                </span>
              </div>

            </motion.div>
          </div>

          {/* RIGHT VERTICAL CAROUSEL */}
          <div className="relative">

            {/* Top fade */}
            <div
              className="
                pointer-events-none
                absolute
                inset-x-0
                top-0
                z-20
                h-28
                bg-gradient-to-b
                from-white
                via-white/80
                to-transparent
              "
            />

            {/* Bottom fade */}
            <div
              className="
                pointer-events-none
                absolute
                inset-x-0
                bottom-0
                z-20
                h-32
                bg-gradient-to-t
                from-white
                via-white/80
                to-transparent
              "
            />

            {/* Scroll area */}
            <div
              className="
                h-[620px]
                overflow-y-auto
                snap-y
                snap-mandatory
                scroll-smooth
                px-1
                py-20
                space-y-5
                [scrollbar-width:none]
                [&::-webkit-scrollbar]:hidden

                sm:h-[700px]
                sm:py-24

                lg:h-[760px]
                lg:py-28
              "
            >

              {events.map((event, index) => (
                <motion.article
                  key={event.city}
                  initial={{
                    opacity: 0,
                    scale: 0.94,
                    y: 30,
                  }}
                  whileInView={{
                    opacity: 1,
                    scale: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.4,
                  }}
                  transition={{
                    duration: 0.7,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="
                    group
                    relative
                    mx-auto
                    h-[500px]
                    w-full
                    max-w-[900px]
                    shrink-0
                    snap-center
                    overflow-hidden
                    rounded-[24px]

                    sm:h-[560px]

                    lg:h-[620px]
                  "
                >

                  {/* IMAGE */}
                  <img
                    src={event.image}
                    alt={event.city}
                    className="
                      absolute
                      inset-0
                      h-full
                      w-full
                      object-cover
                      transition-transform
                      duration-[1200ms]
                      ease-out
                      group-hover:scale-[1.03]
                    "
                  />

                  {/* DARK CINEMATIC GRADIENT */}
                  <div
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-black
                      via-black/35
                      to-black/5
                    "
                  />

                  {/* GOLD ATMOSPHERE */}
                  <div
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-br
                      from-[#EFBD78]/15
                      via-transparent
                      to-black/20
                    "
                  />

                  {/* EVENT NUMBER */}
                  <div
                    className="
                      absolute
                      left-6
                      top-6
                      flex
                      items-center
                      gap-4

                      sm:left-8
                      sm:top-8
                    "
                  >
                    <span className="text-xs tracking-[0.35em] text-[#EFBD78]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="h-px w-10 bg-[#EFBD78]/70" />
                  </div>

                  {/* CONTENT */}
                  <div
                    className="
                      absolute
                      inset-x-0
                      bottom-0
                      p-6

                      sm:p-8

                      lg:p-10
                    "
                  >

                    {/* LOCATION */}
                    <div className="flex items-center gap-2">
                      <MapPin
                        size={17}
                        strokeWidth={1.5}
                        className="text-[#EFBD78]"
                      />

                      <span
                        className="
                          text-xs
                          uppercase
                          tracking-[0.25em]
                          text-[#EFBD78]
                        "
                      >
                        {event.city}
                      </span>
                    </div>

                    {/* TITLE */}
                    <h3
                      className="
                        mt-4
                        max-w-3xl
                        text-3xl
                        font-normal
                        leading-tight
                        tracking-tight
                        text-white

                        sm:text-4xl

                        lg:text-5xl
                      "
                    >
                      {event.title}
                    </h3>

                    {/* BOTTOM META */}
                    <div
                      className="
                        mt-7
                        flex
                        items-center
                        justify-between
                        border-t
                        border-white/20
                        pt-5
                      "
                    >

                      <div className="flex items-center gap-2 text-white/65">
                        <CalendarDays
                          size={16}
                          strokeWidth={1.5}
                        />

                        <span className="text-xs uppercase tracking-[0.18em]">
                          Upcoming Event
                        </span>
                      </div>

                      <ArrowUpRight
                        size={22}
                        strokeWidth={1.5}
                        className="
                          text-[#EFBD78]
                          transition-transform
                          duration-300
                          group-hover:translate-x-1
                          group-hover:-translate-y-1
                        "
                      />

                    </div>
                  </div>

                </motion.article>
              ))}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
