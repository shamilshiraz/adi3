"use client";

import React, { useMemo, useRef, useState } from "react";
import {
  motion,
  AnimatePresence,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import {
  Search,
  MapPin,
  CalendarDays,
  ArrowUpRight,
  ArrowUpDown,
  ChevronDown,
  SlidersHorizontal,
} from "lucide-react";

const roadshows = [
  {
    title: "Dubai Marina Investment Roadshow",
    text: "Discover premium waterfront residences and investment opportunities.",
    img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1800&q=85",
    location: "Dubai Marina",
    date: "2026-08-14",
  },
  {
    title: "Downtown Dubai Property Showcase",
    text: "Explore iconic developments near Burj Khalifa.",
    img: "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=1800&q=85",
    location: "Downtown Dubai",
    date: "2026-09-02",
  },
  {
    title: "Palm Jumeirah Luxury Event",
    text: "Ultra-luxury beachfront villas and residences.",
    img: "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1800&q=85",
    location: "Palm Jumeirah",
    date: "2026-07-19",
  },
  {
    title: "Business Bay Investor Meet",
    text: "Connect with leading developers and investors.",
    img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1800&q=85",
    location: "Business Bay",
    date: "2026-03-05",
  },
  {
    title: "Dubai Hills Estate Preview",
    text: "Family-focused communities and golf-course living.",
    img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1800&q=85",
    location: "Dubai Hills",
    date: "2026-02-21",
  },
  {
    title: "Off-Plan Property Roadshow",
    text: "Get first access to Dubai's newest launches.",
    img: "https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=1800&q=85",
    location: "Dubai Marina",
    date: "2026-10-11",
  },
];

const locations = [
  "All locations",
  ...Array.from(new Set(roadshows.map((event) => event.location))),
];

/* =========================================================
   DATE HELPERS
========================================================= */

function parseLocalDate(iso) {
  const [year, month, day] = iso.split("-").map(Number);
  return new Date(year, month - 1, day);
}

function getLocalISODate() {
  const now = new Date();

  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

function formatDate(iso) {
  return parseLocalDate(iso).toLocaleDateString("en-US", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

function formatDateParts(iso) {
  const date = parseLocalDate(iso);

  return {
    day: date.toLocaleDateString("en-US", {
      day: "2-digit",
    }),
    month: date.toLocaleDateString("en-US", {
      month: "short",
    }),
    year: date.toLocaleDateString("en-US", {
      year: "numeric",
    }),
  };
}

/* =========================================================
   HERO
========================================================= */

function EventsHero() {
  const heroRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? ["0%", "0%"] : ["0%", "10%"]
  );

  const imageScale = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? [1.05, 1.05] : [1.05, 1.12]
  );

  return (
    <section
      ref={heroRef}
      className="
        relative
        min-h-[68svh]
        overflow-hidden
        bg-black
        sm:min-h-[72svh]
        lg:min-h-[78svh]
      "
    >
      {/* CINEMATIC IMAGE */}
      <motion.div
        className="absolute inset-[-6%]"
        style={{
          y: imageY,
          scale: imageScale,
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=2200&q=90"
          alt="Dubai skyline at dusk"
          className="h-full w-full object-cover object-center"
        />
      </motion.div>

      {/* CINEMATIC OVERLAY */}
      <div
        className="
          absolute
          inset-0
          bg-black/35
        "
      />

      {/* LEFT READABILITY GRADIENT */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-r
          from-black/80
          via-black/40
          to-black/10
        "
      />

      {/* BOTTOM GRADIENT */}
      <div
        className="
          absolute
          inset-x-0
          bottom-0
          h-[55%]
          bg-gradient-to-t
          from-black
          via-black/45
          to-transparent
        "
      />

      {/* CONTENT */}
      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-[68svh]
          max-w-[1440px]
          items-end
          px-5
          pb-24

          sm:min-h-[72svh]
          sm:px-8
          sm:pb-28

          lg:min-h-[78svh]
          lg:px-20
          lg:pb-32
        "
      >
        <motion.div
          initial={
            shouldReduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 35,
                }
          }
          animate={
            shouldReduceMotion
              ? {}
              : {
                  opacity: 1,
                  y: 0,
                }
          }
          transition={{
            duration: 1,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="max-w-4xl"
        >
          {/* EYEBROW */}
          <div className="mb-5 flex items-center gap-3 sm:mb-7">
            <span className="h-px w-8 bg-[#D4AF37]" />

            
          </div>

          {/* TITLE */}
          <h1
            className="
              max-w-4xl
              text-[3.8rem]
              font-light
              leading-[0.94]
              tracking-[-0.055em]
              text-white

              sm:text-[5.5rem]
              lg:text-[7.5rem]
              xl:text-[8rem]
            "
          >
            Roadshows
          </h1>

          {/* DESCRIPTION */}
          <p
            className="
              mt-6
              max-w-xl
              text-sm
              leading-7
              text-white/70

              sm:mt-7
              sm:text-base
              sm:leading-8

              lg:text-lg
            "
          >
            Private roadshows, property showcases and investment gatherings
            across Dubai's most sought-after destinations.
          </p>
        </motion.div>
      </div>

      {/* SCROLL INDICATOR */}
      <motion.div
        initial={
          shouldReduceMotion
            ? false
            : {
                opacity: 0,
              }
        }
        animate={
          shouldReduceMotion
            ? {}
            : {
                opacity: 1,
              }
        }
        transition={{
          delay: 1.2,
          duration: 0.8,
        }}
        className="
          absolute
          bottom-8
          right-5
          z-10
          hidden
          items-center
          gap-3
          sm:flex
          lg:bottom-10
          lg:right-20
        "
      >
        <span
          className="
            text-[9px]
            uppercase
            tracking-[0.28em]
            text-white/45
          "
        >
          Scroll to explore
        </span>

        <motion.div
          animate={
            shouldReduceMotion
              ? {}
              : {
                  y: [0, 7, 0],
                }
          }
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="h-8 w-px bg-white/35"
        />
      </motion.div>
    </section>
  );
}

/* =========================================================
   FILTER BAR
========================================================= */

function FilterBar({
  search,
  setSearch,
  location,
  setLocation,
  sortOrder,
  toggleSort,
  resultCount,
}) {
  return (
    <section className="relative z-30 -mt-10 px-5 sm:-mt-14 sm:px-8 lg:px-20">
      <div className="mx-auto max-w-[1440px]">
        <div
          className="
            rounded-[24px]
            border
            border-white/10
            bg-[#111]/90
            p-3
            shadow-[0_25px_80px_rgba(0,0,0,0.35)]
            backdrop-blur-2xl

            sm:rounded-[28px]
            sm:p-4
          "
        >
          <div
            className="
              grid
              gap-2

              lg:grid-cols-[minmax(0,1fr)_220px_190px]
            "
          >
            {/* SEARCH */}
            <div className="relative">
              <Search
                size={17}
                strokeWidth={1.5}
                className="
                  pointer-events-none
                  absolute
                  left-4
                  top-1/2
                  -translate-y-1/2
                  text-white/35
                "
              />

              <input
                type="search"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search events, locations..."
                aria-label="Search events"
                className="
                  h-14
                  w-full
                  rounded-[16px]
                  border
                  border-white/10
                  bg-white/[0.045]
                  pl-11
                  pr-4
                  text-sm
                  text-white
                  outline-none
                  transition-all
                  duration-300
                  placeholder:text-white/30

                  hover:border-white/20
                  focus:border-[#D4AF37]/60
                  focus:bg-white/[0.07]
                  focus:ring-1
                  focus:ring-[#D4AF37]/20
                "
              />
            </div>

            {/* LOCATION */}
            <div className="relative">
              <MapPin
                size={16}
                strokeWidth={1.5}
                className="
                  pointer-events-none
                  absolute
                  left-4
                  top-1/2
                  z-10
                  -translate-y-1/2
                  text-[#D4AF37]/70
                "
              />

              <select
                value={location}
                onChange={(event) => setLocation(event.target.value)}
                aria-label="Filter by location"
                className="
                  h-14
                  w-full
                  appearance-none
                  rounded-[16px]
                  border
                  border-white/10
                  bg-white/[0.045]
                  pl-11
                  pr-10
                  text-sm
                  text-white
                  outline-none
                  transition-all
                  duration-300
                  cursor-pointer

                  hover:border-white/20
                  focus:border-[#D4AF37]/60
                  focus:ring-1
                  focus:ring-[#D4AF37]/20
                "
              >
                {locations.map((loc) => (
                  <option
                    key={loc}
                    value={loc}
                    className="bg-[#111] text-white"
                  >
                    {loc}
                  </option>
                ))}
              </select>

              <ChevronDown
                size={16}
                strokeWidth={1.5}
                className="
                  pointer-events-none
                  absolute
                  right-4
                  top-1/2
                  -translate-y-1/2
                  text-white/35
                "
              />
            </div>

            {/* SORT */}
            <button
              type="button"
              onClick={toggleSort}
              aria-label={`Sort events by ${
                sortOrder === "soonest" ? "latest" : "soonest"
              } date`}
              className="
                flex
                h-14
                items-center
                justify-center
                gap-2
                rounded-[16px]
                border
                border-white/10
                bg-white/[0.045]
                px-5
                text-sm
                text-white/80
                outline-none
                transition-all
                duration-300

                hover:border-[#D4AF37]/40
                hover:bg-[#D4AF37]/[0.06]
                hover:text-white

                focus:border-[#D4AF37]/60
                focus:ring-1
                focus:ring-[#D4AF37]/20
              "
            >
              <ArrowUpDown
                size={16}
                strokeWidth={1.5}
                className="text-[#D4AF37]"
              />

              <span>
                {sortOrder === "soonest"
                  ? "Soonest first"
                  : "Latest first"}
              </span>
            </button>
          </div>

          {/* RESULT SUMMARY */}
          <div
            className="
              flex
              items-center
              justify-between
              px-2
              pt-3
              sm:px-3
            "
          >
            <div className="flex items-center gap-2">
              <SlidersHorizontal
                size={12}
                strokeWidth={1.5}
                className="text-[#D4AF37]"
              />

              <p className="text-[10px] uppercase tracking-[0.18em] text-white/35">
                {resultCount}{" "}
                {resultCount === 1 ? "event" : "events"} available
              </p>
            </div>

            {(search || location !== "All locations") && (
              <button
                type="button"
                onClick={() => {
                  setSearch("");
                  setLocation("All locations");
                }}
                className="
                  text-[10px]
                  uppercase
                  tracking-[0.16em]
                  text-white/40
                  transition-colors
                  hover:text-[#D4AF37]
                  focus:outline-none
                  focus:text-[#D4AF37]
                "
              >
                Clear filters
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   DATE BADGE
========================================================= */

function DateBadge({ date, past = false }) {
  const parts = formatDateParts(date);

  return (
    <div
      className={`
        absolute
        left-5
        top-5
        z-20
        min-w-[68px]
        overflow-hidden
        rounded-[14px]
        border
        backdrop-blur-xl
        sm:left-6
        sm:top-6

        ${
          past
            ? "border-white/10 bg-black/50"
            : "border-white/15 bg-black/35"
        }
      `}
    >
      <div className="border-b border-white/10 px-3 py-1.5 text-center">
        <span
          className={`
            text-[9px]
            font-medium
            uppercase
            tracking-[0.2em]
            ${
              past
                ? "text-white/40"
                : "text-[#D4AF37]"
            }
          `}
        >
          {parts.month}
        </span>
      </div>

      <div className="px-3 py-2 text-center">
        <span
          className={`
            block
            text-xl
            font-light
            leading-none
            ${
              past
                ? "text-white/60"
                : "text-white"
            }
          `}
        >
          {parts.day}
        </span>

        <span className="mt-1 block text-[8px] text-white/35">
          {parts.year}
        </span>
      </div>
    </div>
  );
}

/* =========================================================
   EVENT CARD
========================================================= */

function RoadshowCard({
  item,
  index,
  past = false,
  shouldReduceMotion,
}) {
  return (
    <motion.article
      layout
      initial={
        shouldReduceMotion
          ? false
          : {
              opacity: 0,
              y: 30,
            }
      }
      animate={{
        opacity: 1,
        y: 0,
      }}
      exit={
        shouldReduceMotion
          ? undefined
          : {
              opacity: 0,
              y: 15,
            }
      }
      transition={{
        duration: shouldReduceMotion ? 0 : 0.7,
        delay: shouldReduceMotion ? 0 : index * 0.06,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={`
        group
        relative
        min-h-[470px]
        overflow-hidden
        rounded-[24px]
        border
        bg-[#101010]
        outline-none
        transition-all
        duration-700

        sm:min-h-[500px]
        sm:rounded-[28px]

        ${
          past
            ? "border-white/[0.07] opacity-65"
            : "border-white/[0.10] hover:-translate-y-1 hover:border-[#D4AF37]/35 hover:shadow-[0_25px_70px_rgba(0,0,0,0.35)]"
        }
      `}
    >
      {/* IMAGE */}
      <motion.img
        src={item.img}
        alt={`${item.title} — ${item.location}`}
        loading={index < 3 ? "eager" : "lazy"}
        className={`
          absolute
          inset-0
          h-full
          w-full
          object-cover
          transition-all
          duration-[1200ms]
          ease-[cubic-bezier(0.16,1,0.3,1)]

          ${
            past
              ? "grayscale-[45%]"
              : "grayscale-0 group-hover:scale-[1.045]"
          }
        `}
      />

      {/* IMAGE TINT */}
      <div
        className={`
          absolute
          inset-0
          transition-opacity
          duration-700
          ${
            past
              ? "bg-black/30"
              : "bg-black/5 group-hover:bg-black/0"
          }
        `}
      />

      {/* CINEMATIC GRADIENT */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-b
          from-black/10
          via-black/5
          to-black/95
        "
      />

      {/* HOVER LIGHT */}
      {!past && (
        <div
          className="
            pointer-events-none
            absolute
            inset-0
            bg-gradient-to-br
            from-[#D4AF37]/0
            via-transparent
            to-[#D4AF37]/0
            opacity-0
            transition-opacity
            duration-700
            group-hover:opacity-100
          "
        />
      )}

      {/* DATE */}
      <DateBadge date={item.date} past={past} />

      {/* TOP LABEL */}
      <div className="absolute right-5 top-5 z-20 sm:right-6 sm:top-6">
        <span
          className={`
            rounded-full
            border
            px-3
            py-1.5
            text-[8px]
            font-medium
            uppercase
            tracking-[0.18em]
            backdrop-blur-xl

            ${
              past
                ? "border-white/10 bg-black/35 text-white/35"
                : "border-white/10 bg-black/25 text-white/55"
            }
          `}
        >
          {past ? "Past Event" : "Upcoming"}
        </span>
      </div>

      {/* CONTENT */}
      <div
        className="
          absolute
          inset-x-0
          bottom-0
          z-20
          p-5
          sm:p-6
          lg:p-7
        "
      >
        {/* LOCATION */}
        <div className="mb-3 flex items-center gap-2">
          <MapPin
            size={13}
            strokeWidth={1.5}
            className={
              past
                ? "text-white/30"
                : "text-[#D4AF37]"
            }
          />

          <span
            className={`
              text-[9px]
              font-medium
              uppercase
              tracking-[0.2em]
              ${
                past
                  ? "text-white/35"
                  : "text-white/55"
              }
            `}
          >
            {item.location}
          </span>
        </div>

        {/* TITLE */}
        <h3
          className={`
            max-w-lg
            text-2xl
            font-light
            leading-[1.08]
            tracking-[-0.025em]

            sm:text-3xl

            ${
              past
                ? "text-white/65"
                : "text-white"
            }
          `}
        >
          {item.title}
        </h3>

        {/* DESCRIPTION */}
        <p
          className={`
            mt-3
            max-w-lg
            text-sm
            leading-6

            ${
              past
                ? "text-white/35"
                : "text-white/60"
            }
          `}
        >
          {item.text}
        </p>

        {/* DISCOVER INTERACTION */}
        <div
          className="
            mt-6
            flex
            items-center
            justify-between
            border-t
            border-white/10
            pt-4
          "
        >
          <span
            className={`
              text-[9px]
              font-medium
              uppercase
              tracking-[0.2em]
              ${
                past
                  ? "text-white/25"
                  : "text-white/45"
              }
            `}
          >
            {past ? "Event concluded" : "Discover event"}
          </span>

          <div
            className={`
              flex
              h-9
              w-9
              items-center
              justify-center
              rounded-full
              border
              transition-all
              duration-500

              ${
                past
                  ? "border-white/10 text-white/25"
                  : "border-white/15 text-white/55 group-hover:border-[#D4AF37]/60 group-hover:bg-[#D4AF37] group-hover:text-black"
              }
            `}
          >
            <ArrowUpRight
              size={15}
              strokeWidth={1.5}
              className="
                transition-transform
                duration-500
                group-hover:-translate-y-0.5
                group-hover:translate-x-0.5
              "
            />
          </div>
        </div>
      </div>
    </motion.article>
  );
}

/* =========================================================
   EVENT GRID
========================================================= */

function RoadshowGrid({
  items,
  past = false,
  shouldReduceMotion,
}) {
  if (items.length === 0) {
    return (
      <motion.div
        initial={
          shouldReduceMotion
            ? false
            : {
                opacity: 0,
              }
        }
        animate={{
          opacity: 1,
        }}
        className="
          flex
          min-h-[260px]
          items-center
          justify-center
          rounded-[24px]
          border
          border-dashed
          border-white/10
          bg-white/[0.02]
          px-6
          text-center
        "
      >
        <div>
          <p className="text-sm text-white/55">
            No events match your current filters.
          </p>

          <p className="mt-2 text-xs text-white/25">
            Try another location or search term.
          </p>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      layout
      className="
        grid
        grid-cols-1
        gap-5

        md:grid-cols-2

        xl:grid-cols-3
        xl:gap-7

        2xl:gap-8
      "
    >
      <AnimatePresence mode="popLayout">
        {items.map((item, index) => (
          <RoadshowCard
            key={item.title}
            item={item}
            index={index}
            past={past}
            shouldReduceMotion={shouldReduceMotion}
          />
        ))}
      </AnimatePresence>
    </motion.div>
  );
}

/* =========================================================
   SECTION HEADER
========================================================= */

function SectionHeading({ label, count, muted = false }) {
  return (
    <div className="mb-8 flex items-end justify-between gap-6 sm:mb-10">
      <div>
        <div className="mb-3 flex items-center gap-3">
          <span
            className={`
              h-px
              w-7
              ${
                muted
                  ? "bg-white/20"
                  : "bg-[#D4AF37]"
              }
            `}
          />

          <span
            className={`
              text-[9px]
              font-medium
              uppercase
              tracking-[0.28em]
              ${
                muted
                  ? "text-white/25"
                  : "text-[#D4AF37]"
              }
            `}
          >
            {label}
          </span>
        </div>

        <h2
          className={`
            text-2xl
            font-light
            tracking-[-0.03em]
            sm:text-3xl
            ${
              muted
                ? "text-white/55"
                : "text-white"
            }
          `}
        >
          {label === "Upcoming" ? "What's ahead" : "From our archive"}
        </h2>
      </div>

      <span
        className={`
          hidden
          pb-1
          text-[10px]
          uppercase
          tracking-[0.18em]
          sm:block
          ${
            muted
              ? "text-white/25"
              : "text-white/30"
          }
        `}
      >
        {String(count).padStart(2, "0")}{" "}
        {count === 1 ? "event" : "events"}
      </span>
    </div>
  );
}

/* =========================================================
   PAGE
========================================================= */

export default function RoadshowsPage() {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("All locations");
  const [sortOrder, setSortOrder] = useState("soonest");

  const shouldReduceMotion = useReducedMotion();

  /*
    Keep today's date local to the browser.
    This avoids the UTC conversion issue caused by:
    new Date("2026-09-28")
  */
  const today = useMemo(() => getLocalISODate(), []);

  const filtered = useMemo(() => {
    const normalizedSearch = search.trim().toLowerCase();

    let list = roadshows.filter((item) => {
      const searchableText = [
        item.title,
        item.text,
        item.location,
      ]
        .join(" ")
        .toLowerCase();

      const matchesSearch =
        normalizedSearch.length === 0 ||
        searchableText.includes(normalizedSearch);

      const matchesLocation =
        location === "All locations" ||
        item.location === location;

      return matchesSearch && matchesLocation;
    });

    list = [...list].sort((a, b) => {
      const dateA = parseLocalDate(a.date).getTime();
      const dateB = parseLocalDate(b.date).getTime();

      return sortOrder === "soonest"
        ? dateA - dateB
        : dateB - dateA;
    });

    return list;
  }, [search, location, sortOrder]);

  const upcoming = filtered.filter(
    (item) => item.date >= today
  );

  const past = filtered.filter(
    (item) => item.date < today
  );

  const toggleSort = () => {
    setSortOrder((prev) =>
      prev === "soonest" ? "latest" : "soonest"
    );
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#080808]">
      {/* =====================================================
          HERO
      ===================================================== */}

      <EventsHero />

      {/* =====================================================
          FILTERS
      ===================================================== */}

      <FilterBar
        search={search}
        setSearch={setSearch}
        location={location}
        setLocation={setLocation}
        sortOrder={sortOrder}
        toggleSort={toggleSort}
        resultCount={filtered.length}
      />

      {/* =====================================================
          EVENTS CONTENT
      ===================================================== */}

      <div className="mx-auto max-w-[1440px] px-5 pb-24 pt-20 sm:px-8 sm:pb-28 sm:pt-24 lg:px-20 lg:pb-32 lg:pt-28">
        {/* UPCOMING */}
        <section aria-labelledby="upcoming-events">
          <div id="upcoming-events">
            <SectionHeading
              label="Upcoming"
              count={upcoming.length}
            />
          </div>

          <RoadshowGrid
            items={upcoming}
            shouldReduceMotion={shouldReduceMotion}
          />
        </section>

        {/* DIVIDER */}
        {past.length > 0 && (
          <div className="my-20 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent sm:my-28" />
        )}

        {/* PAST */}
        {past.length > 0 && (
          <section aria-labelledby="past-events">
            <div id="past-events">
              <SectionHeading
                label="Past"
                count={past.length}
                muted
              />
            </div>

            <RoadshowGrid
              items={past}
              past
              shouldReduceMotion={shouldReduceMotion}
            />
          </section>
        )}
      </div>
    </main>
  );
}
