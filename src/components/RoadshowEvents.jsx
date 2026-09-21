import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  CalendarDays,
  MapPin,
  ArrowUpRight,
  ChevronDown,
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
  const [selectedEvent, setSelectedEvent] = useState("all");

  const filteredEvents =
    selectedEvent === "all"
      ? events
      : events.filter((event) => event.city === selectedEvent);

  return (
    <section
      className="
        relative
        overflow-hidden
        bg-white
        px-5
        py-20
        sm:px-8
        sm:py-24
        lg:px-20
        lg:py-32
      "
    >
      {/* SUBTLE GOLD GLOW */}
      <div
        className="
          pointer-events-none
          absolute
          -right-40
          top-20
          h-[450px]
          w-[450px]
          rounded-full
          bg-[#D4AF37]/5
          blur-[160px]
        "
      />

      <div className="relative mx-auto max-w-[1440px]">

        <div
          className="
            grid
            items-start
            gap-12
            lg:grid-cols-[420px_1fr]
            lg:gap-20
            xl:grid-cols-[480px_1fr]
            xl:gap-24
          "
        >

          {/* LEFT CONTENT */}
          <div
            className="
              lg:sticky
              lg:top-28
              lg:h-fit
            "
          >
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
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
              }}
            >

              {/* EYEBROW */}
              <p
                className="
                  text-[10px]
                  font-medium
                  uppercase
                  tracking-[0.3em]
                  text-[#D4AF37]
                  sm:text-xs
                "
              >
                ROADSHOWS & EVENTS
              </p>

              {/* HEADING */}
              <h2
                className="
                  mt-5
                  max-w-xl
                  text-[2.8rem]
                  font-light
                  leading-[1.02]
                  tracking-[-0.04em]
                  text-black
                  sm:text-[4rem]
                  lg:text-[4.5rem]
                "
              >
                Meet Us
                <br />
                <span className="text-black/35">
                  Around The World
                </span>
              </h2>

              {/* DESCRIPTION */}
              <p
                className="
                  mt-6
                  max-w-md
                  text-sm
                  leading-7
                  text-black/60
                  sm:text-base
                  sm:leading-8
                "
              >
                Join exclusive investor roadshows,
                private briefings and curated events
                hosted across major global markets.
              </p>

              {/* DIVIDER */}
              <div className="my-8 h-px w-full bg-black/10 sm:my-10" />

              {/* STATS */}
              <div className="grid grid-cols-3 gap-4 sm:gap-6">

                <div>
                  <div
                    className="
                      text-2xl
                      font-light
                      tracking-tight
                      text-black
                      sm:text-3xl
                    "
                  >
                    25+
                  </div>

                  <div
                    className="
                      mt-2
                      text-[9px]
                      uppercase
                      tracking-[0.12em]
                      text-black/45
                      sm:text-[10px]
                    "
                  >
                    Investor Events
                  </div>
                </div>

                <div>
                  <div
                    className="
                      text-2xl
                      font-light
                      tracking-tight
                      text-black
                      sm:text-3xl
                    "
                  >
                    1000+
                  </div>

                  <div
                    className="
                      mt-2
                      text-[9px]
                      uppercase
                      tracking-[0.12em]
                      text-black/45
                      sm:text-[10px]
                    "
                  >
                    Attendees
                  </div>
                </div>

                <div>
                  <div
                    className="
                      text-2xl
                      font-light
                      tracking-tight
                      text-black
                      sm:text-3xl
                    "
                  >
                    4+
                  </div>

                  <div
                    className="
                      mt-2
                      text-[9px]
                      uppercase
                      tracking-[0.12em]
                      text-black/45
                      sm:text-[10px]
                    "
                  >
                    Countries
                  </div>
                </div>

              </div>

              {/* EVENT DROPDOWN */}
              <div className="mt-10">

                <label
                  htmlFor="event-select"
                  className="
                    mb-3
                    block
                    text-[10px]
                    font-medium
                    uppercase
                    tracking-[0.25em]
                    text-black/45
                  "
                >
                  Explore Events
                </label>

                <div className="relative">

                  <select
                    id="event-select"
                    value={selectedEvent}
                    onChange={(e) =>
                      setSelectedEvent(e.target.value)
                    }
                    className="
                      w-full
                      appearance-none
                      rounded-full
                      border
                      border-black/10
                      bg-white
                      px-5
                      py-4
                      pr-12
                      text-sm
                      font-medium
                      text-black
                      outline-none
                      transition-all
                      duration-300
                      hover:border-[#D4AF37]/60
                      focus:border-[#D4AF37]
                      focus:ring-1
                      focus:ring-[#D4AF37]/20
                    "
                  >

                    {/* ALL EVENTS */}
                    <option value="all">
                      All Events
                    </option>

                    {/* LOOP THROUGH EVENTS */}
                    {events.map((event) => (
                      <option
                        key={event.city}
                        value={event.city}
                      >
                        {event.city} — {event.title}
                      </option>
                    ))}

                  </select>

                  <ChevronDown
                    size={18}
                    strokeWidth={1.5}
                    className="
                      pointer-events-none
                      absolute
                      right-5
                      top-1/2
                      -translate-y-1/2
                      text-[#D4AF37]
                    "
                  />

                </div>

              </div>

            </motion.div>
          </div>

          {/* RIGHT EVENTS */}
         {/* RIGHT VERTICAL EVENT CAROUSEL */}
<div
  className="
    h-[520px]
    overflow-y-auto
    snap-y
    snap-mandatory
    scroll-smooth
    space-y-6
    pr-1
    [scrollbar-width:none]
    [&::-webkit-scrollbar]:hidden
    sm:h-[600px]
    lg:h-[680px]
  "
>
  {filteredEvents.map((event, index) => (
    <motion.article
      key={event.city}
      initial={{
        opacity: 0,
        y: 30,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        delay: index * 0.08,
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="
        group
        relative
        h-[500px]
        snap-start
        overflow-hidden
        bg-black
        sm:h-[580px]
        lg:h-[640px]
      "
    >
      {/* IMAGE */}
      <img
        src={event.image}
        alt={event.title}
        className="
          absolute
          inset-0
          h-full
          w-full
          object-cover
          transition-transform
          duration-[1200ms]
          ease-out
          group-hover:scale-105
        "
      />

      {/* DARK GRADIENT */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-t
          from-black
          via-black/35
          to-transparent
        "
      />

      {/* GOLD EDGE */}
      <div
        className="
          absolute
          left-0
          top-0
          h-full
          w-px
          bg-[#D4AF37]/70
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
          gap-3
          sm:left-8
          sm:top-8
        "
      >
        <span
          className="
            text-[10px]
            tracking-[0.3em]
            text-[#D4AF37]
            sm:text-xs
          "
        >
          {String(index + 1).padStart(2, "0")}
        </span>

        <span
          className="
            h-px
            w-8
            bg-[#D4AF37]/60
          "
        />
      </div>

      {/* EVENT CONTENT */}
      <div
        className="
          absolute
          bottom-0
          left-0
          right-0
          p-6
          sm:p-8
          lg:p-10
        "
      >
        {/* LOCATION */}
        <div className="flex items-center gap-2">
          <MapPin
            size={16}
            strokeWidth={1.5}
            className="text-[#D4AF37]"
          />

          <span
            className="
              text-[10px]
              uppercase
              tracking-[0.25em]
              text-[#D4AF37]
              sm:text-xs
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
            font-light
            leading-[1.05]
            tracking-[-0.03em]
            text-white
            sm:text-4xl
            lg:text-5xl
          "
        >
          {event.title}
        </h3>

        {/* BOTTOM LINE */}
        <div
          className="
            mt-8
            flex
            items-center
            justify-between
            border-t
            border-white/20
            pt-5
          "
        >
          <div className="flex items-center gap-2">
            <CalendarDays
              size={16}
              strokeWidth={1.5}
              className="text-white/60"
            />

            <span
              className="
                text-[10px]
                uppercase
                tracking-[0.15em]
                text-white/60
                sm:text-xs
              "
            >
              Upcoming Event
            </span>
          </div>

          <ArrowUpRight
            size={22}
            strokeWidth={1.5}
            className="
              text-[#D4AF37]
              transition-all
              duration-300
              group-hover:-translate-y-1
              group-hover:translate-x-1
            "
          />
        </div>
      </div>
    </motion.article>
  ))}
</div>

            {/* NO EVENTS */}
            {filteredEvents.length === 0 && (
              <div
                className="
                  flex
                  min-h-[300px]
                  items-center
                  justify-center
                  border
                  border-black/10
                  text-center
                "
              >
                <p className="text-black/50">
                  No events found.
                </p>
              </div>
            )}

          </div>

        </div>

      </div>

    </section>
  );
}
