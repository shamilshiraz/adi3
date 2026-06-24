
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
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1200&auto=format&fit=crop",
  },
  {
    city: "London",
    title: "London Investment Briefing",
    image:
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=1200&auto=format&fit=crop",
  },
  {
    city: "Mumbai",
    title: "Mumbai Investor Forum",
    image:
      "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?q=80&w=1200&auto=format&fit=crop",
  },
  {
    city: "Riyadh",
    title: "Private Investor Event",
    image:
      "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function RoadshowsEvents() {
  return (
    <section
      className="
        relative
        bg-[#fff]
        page-padding
        py-32
      "
    >
      <div className="container-custom relative">
        <div
          className="
            grid
            lg:grid-cols-[480px_1fr]
            gap-16
            lg:gap-24
            items-start
          "
        >
          {/* LEFT STICKY */}
          <div
            className="
              lg:sticky
              lg:top-32
              h-fit
            "
          >
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
            >
              <p className="eyebrow">
                ROADSHOWS & EVENTS
              </p>

              <h2 className="heading-3 text-[#4e0026] mt-6">
                Meet Us
                <br />
                Around The World
              </h2>

              <p className="sub text-[#4e0026] mt-6">
                Join exclusive investor roadshows,
                private briefings and curated events
                hosted across major global markets.
              </p>

              <div className="divider-light my-10" />

              <div className="grid grid-cols-3 gap-6">
                <div>
                  <div className="heading-3 text-">
                    25+
                  </div>

                  <div className="small text- mt-2">
                    Investor Events
                  </div>
                </div>

                <div>
                  <div className="heading-3 text-">
                    1000+
                  </div>

                  <div className="small text- mt-2">
                    Attendees
                  </div>
                </div>

                <div>
                  <div className="heading-3 text-">
                    4+
                  </div>

                  <div className="small text- mt-2">
                    Countries
                  </div>
                </div>
              </div>

              <button className="btn-gold mt-10">
                View Events
              </button>
            </motion.div>
          </div>

          {/* RIGHT SCROLLING CARDS */}
          <div className="space-y-10">
            {events.map((event, index) => (
              <motion.div
                key={event.city}
                initial={{
                  opacity: 0,
                  y: 50,
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
                  relative
                  overflow-hidden
                  rounded-[32px]
                  h-[460px]
                  group
                "
              >
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
                    duration-700
                    group-hover:scale-105
                  "
                />

                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black
                    via-black/30
                    to-transparent
                  "
                />

                <div
                  className="
                    absolute
                    inset-x-0
                    bottom-0
                    p-10
                  "
                >
                  <div className="flex items-center gap-2 text-[#EFBD78]">
                    <MapPin size={16} />

                    <span className="small">
                      {event.city}
                    </span>
                  </div>

                  <h3 className="heading-4 text-light mt-5">
                    {event.title}
                  </h3>

                  <div className="mt-8 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-white/70">
                      <CalendarDays size={16} />

                      <span className="small">
                        Upcoming Event
                      </span>
                    </div>

                    <ArrowUpRight
                      size={20}
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
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
