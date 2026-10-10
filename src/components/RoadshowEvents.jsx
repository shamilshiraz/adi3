
import { useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  CalendarDays,
  MapPin,
  ArrowUpRight,
  Globe2,
} from "lucide-react";

const GOLD = "#F2C078";

const events = [
  {
    city: "Dubai",
    country: "United Arab Emirates",
    title: "Dubai Investment Roadshow",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1800&q=85",
  },
  {
    city: "London",
    country: "United Kingdom",
    title: "London Investor Meet",
    image:
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1800&q=85",
  },
  {
    city: "Mumbai",
    country: "India",
    title: "Mumbai Property Showcase",
    image:
      "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=1800&q=85",
  },
  {
    city: "Riyadh",
    country: "Saudi Arabia",
    title: "Riyadh Investment Forum",
    image:
      "https://images.unsplash.com/photo-1586724237569-f3d0c1dee8c6?auto=format&fit=crop&w=1800&q=85",
  },
];

export default function RoadshowsEvents() {
  const scrollRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="roadshows"
      className="relative overflow-hidden bg-[#0D0D0B] text-white"
    >
      <div className="page-padding py-16 sm:py-20 lg:py-28">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-start lg:gap-16 xl:gap-24">
          {/* INTRODUCTION */}
          <div className="lg:sticky lg:top-24">
            <motion.div
              initial={
                shouldReduceMotion ? false : { opacity: 0, y: 20 }
              }
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-6 flex items-center gap-3">
                
            
              </div>

              <h2 className="max-w-xl text-4xl font-medium leading-[1.08] tracking-[-0.045em] sm:text-5xl xl:text-6xl">
                Meet us where{" "}
                <span style={{ color: GOLD }}>
                  opportunities
                </span>{" "}
                happen.
              </h2>
              <span
                  className="h-px w-9"
                  style={{ backgroundColor: GOLD }}
                />

              <p className="mt-6 max-w-md text-sm leading-7 text-neutral-600 sm:text-base sm:leading-8">
                Connect with our team at investor roadshows and
                property events across key international markets.
                Explore opportunities and start a conversation
                with our advisors.
              </p>

              <Link
                to="/roadshows"
                className="group mt-8 inline-flex min-h-12 items-center gap-4 border-b border-black/20 pb-3 text-sm font-medium transition-colors duration-300 hover:border-[#B88A47]"
              >
                Explore all events
                <ArrowUpRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>

              <div className="mt-12 grid grid-cols-3 border-t border-neutral-200 pt-7 sm:mt-16 sm:pt-8">
                {[
                  { value: "25+", label: "Events" },
                  { value: "1000+", label: "Investors" },
                  { value: "4+", label: "Countries" },
                ].map((stat) => (
                  <div key={stat.label} className="min-w-0 pr-2">
                    <p className="text-xl font-medium tracking-tight sm:text-2xl">
                      {stat.value}
                    </p>
                    <p className="mt-2 text-[10px] uppercase tracking-[0.1em] text-neutral-500 sm:text-xs sm:tracking-[0.14em]">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* VERTICAL SCROLLING EVENTS */}
          <div className="min-w-0">
            <div
              ref={scrollRef}
              className="events-scroll flex max-h-[70vh] flex-col gap-5 overflow-x-hidden overflow-y-auto overscroll-y-contain pr-2 sm:max-h-[75vh] sm:gap-6 sm:pr-3 lg:max-h-[min(760px,82vh)]"
              aria-label="Event locations"
              tabIndex={0}
            >
              {events.map((event, index) => (
                <motion.article
                  key={event.city}
                  initial={
                    shouldReduceMotion ? false : { opacity: 0, y: 18 }
                  }
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{
                    once: true,
                    amount: 0.1,
                    root: scrollRef,
                  }}
                  transition={{
                    duration: shouldReduceMotion ? 0 : 0.45,
                  }}
                  className="group relative isolate min-h-[360px] shrink-0 snap-start overflow-hidden bg-neutral-900 sm:min-h-[420px] lg:min-h-[460px]"
                >
                  <img
                    src={event.image}
                    alt={`${event.city} cityscape`}
                    loading={index === 0 ? "eager" : "lazy"}
                    decoding="async"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-black/5" />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />

                  {/* CARD HEADER */}
                  <div className="absolute inset-x-0 top-0 flex items-center justify-between p-5 sm:p-7">
                    <span className="border border-white/30 bg-black/20 px-3 py-2 text-[10px] font-medium uppercase tracking-[0.17em] text-white backdrop-blur-sm sm:text-xs">
                      Global Event
                    </span>

                    <span className="text-sm tracking-[0.15em] text-white/80">
                      {String(index + 1).padStart(2, "0")}
                      <span className="text-white/45">
                        {" "}/ {String(events.length).padStart(2, "0")}
                      </span>
                    </span>
                  </div>

                  {/* CARD CONTENT */}
                  <div className="absolute inset-x-0 bottom-0 p-5 sm:p-8 lg:p-9">
                    <div className="mb-4 flex items-center gap-2 text-xs text-white/80 sm:text-sm">
                      <MapPin
                        size={15}
                        className="shrink-0"
                        style={{ color: GOLD }}
                      />
                      <span>{event.country}</span>
                    </div>

                    <h3 className="text-3xl font-medium leading-tight tracking-[-0.035em] text-white sm:text-4xl lg:text-5xl">
                      {event.city}
                    </h3>

                    <p className="mt-2 text-sm text-white/80 sm:text-base">
                      {event.title}
                    </p>

                    <div className="mt-6 flex items-center justify-between gap-4 border-t border-white/25 pt-5">
                      <span className="flex items-center gap-2 text-xs text-white/80 sm:text-sm">
                        <CalendarDays
                          size={15}
                          className="shrink-0"
                          style={{ color: GOLD }}
                        />
                        Event enquiries
                      </span>

                      <Link
                        to="/contact"
                        aria-label={`Enquire about ${event.city} events`}
                        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-black transition-all duration-300 hover:scale-105 hover:bg-white sm:h-12 sm:w-12"
                        style={{ backgroundColor: GOLD }}
                      >
                        <ArrowUpRight size={20} />
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>

            {/* SCROLL INDICATOR */}
            <div className="mt-5 flex items-center justify-between gap-3">
              <p className="text-[10px] uppercase tracking-[0.14em] text-neutral-400 sm:text-xs sm:tracking-[0.18em]">
                Discover our global reach
              </p>

              <div className="flex shrink-0 items-center gap-2 text-neutral-500">
                <Globe2 size={15} />
                <span className="text-xs">Scroll to explore</span>
                <span aria-hidden="true" className="text-lg leading-none">
                  ↓
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .events-scroll {
          scroll-behavior: smooth;
          scroll-snap-type: y proximity;
          scrollbar-width: thin;
          scrollbar-color: #d6c5a9 transparent;
          -webkit-overflow-scrolling: touch;
        }

        .events-scroll:focus-visible {
          outline: 2px solid #d6c5a9;
          outline-offset: 4px;
        }

        .events-scroll::-webkit-scrollbar {
          width: 4px;
        }

        .events-scroll::-webkit-scrollbar-track {
          background: transparent;
        }

        .events-scroll::-webkit-scrollbar-thumb {
          background: #d6c5a9;
          border-radius: 999px;
        }

        @media (prefers-reduced-motion: reduce) {
          .events-scroll {
            scroll-behavior: auto;
          }

          .events-scroll *,
          .events-scroll *::before,
          .events-scroll *::after {
            animation-duration: 0.01ms !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </section>
  );
}
