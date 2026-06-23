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
        overflow-hidden
        bg-[#4E0026]
        page-padding
        section-spacing
      "
    >
      <div className="absolute top-0 left-0 h-[600px] w-[600px] rounded-full bg-[#EFBD78]/10 blur-[180px]" />

      <div className="container-custom relative">
        <div className="grid lg:grid-cols-[500px_1fr] gap-20">
          {/* Left */}
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
            className="lg:sticky lg:top-32 h-fit"
          >
            <p className="eyebrow">
              ROADSHOWS & EVENTS
            </p>

            <h2 className="heading-2 text-light mt-6">
              Meet Us
              <br />
              Around The World
            </h2>

            <p className="sub text-muted mt-6">
              Join exclusive investor events,
              roadshows and private briefings
              hosted across key international
              markets.
            </p>

            <div className="mt-12 grid grid-cols-3 gap-6">
              <div>
                <div className="heading-3 text-light">
                  25+
                </div>

                <div className="small text-muted">
                  Investor Events
                </div>
              </div>

              <div>
                <div className="heading-3 text-light">
                  1000+
                </div>

                <div className="small text-muted">
                  Attendees
                </div>
              </div>

              <div>
                <div className="heading-3 text-light">
                  4+
                </div>

                <div className="small text-muted">
                  Countries
                </div>
              </div>
            </div>

            <button className="btn-gold mt-10">
              View Events
            </button>
          </motion.div>

          {/* Right */}
          <div className="space-y-6">
            {events.map((event, index) => (
              <motion.div
                key={event.city}
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
                  relative
                  overflow-hidden
                  rounded-3xl
                  h-[340px]
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
                  "
                />

                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black/80
                    via-black/20
                    to-transparent
                  "
                />

                <div
                  className="
                    absolute
                    inset-x-0
                    bottom-0
                    p-8
                  "
                >
                  <div className="flex items-center gap-2 text-[#EFBD78]">
                    <MapPin size={16} />
                    <span className="small">
                      {event.city}
                    </span>
                  </div>

                  <h3 className="heading-4 text-light mt-4">
                    {event.title}
                  </h3>

                  <div className="mt-6 flex items-center gap-6">
                    <div className="flex items-center gap-2 text-white/70">
                      <CalendarDays size={16} />
                      <span className="small">
                        Upcoming Event
                      </span>
                    </div>

                    <ArrowUpRight
                      size={18}
                      className="text-[#EFBD78]"
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