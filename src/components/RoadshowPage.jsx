
import { useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
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
  ArrowUpRight,
  ArrowUpDown,
  ChevronDown,
  SlidersHorizontal,
} from "lucide-react";

const GOLD = "#F2C078";
const DARK = "#181715";

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
  ...new Set(roadshows.map((event) => event.location)),
];

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

function formatDateParts(iso) {
  const date = parseLocalDate(iso);

  return {
    day: date.toLocaleDateString("en-US", { day: "2-digit" }),
    month: date.toLocaleDateString("en-US", { month: "short" }),
    year: date.toLocaleDateString("en-US", { year: "numeric" }),
  };
}

/* HERO */

function EventsHero() {
  const heroRef = useRef(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(
    scrollYProgress,
    [0, 1],
    reduceMotion ? ["0%", "0%"] : ["0%", "10%"]
  );

  const imageScale = useTransform(
    scrollYProgress,
    [0, 1],
    reduceMotion ? [1.05, 1.05] : [1.05, 1.12]
  );

  return (
    <section
      ref={heroRef}
      className="relative flex min-h-[68svh] items-end overflow-hidden bg-black sm:min-h-[72svh] lg:min-h-[78svh]"
    >
      <motion.div
        className="absolute inset-[-6%]"
        style={{ y: imageY, scale: imageScale }}
      >
        <img
          src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=2200&q=90"
          alt="Dubai skyline at dusk"
          className="h-full w-full object-cover object-center"
        />
      </motion.div>

      <div className="absolute inset-0 bg-black/35" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-black/10" />
      <div className="absolute inset-x-0 bottom-0 h-[55%] bg-gradient-to-t from-black via-black/45 to-transparent" />

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-5 pb-24 sm:px-8 sm:pb-28 lg:px-20 lg:pb-32">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 35 }}
          animate={reduceMotion ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl"
        >
          

          <h1 className="display-heading display-heading-lg max-w-4xl text-white">
  Meet {" "}
  <span className="text-[#F2C078]">
    ADHIHAVEN
  </span> in person{" "}
</h1>

          <p className="mt-6 max-w-xl text-sm leading-7 text-white/70 sm:mt-7 sm:text-base sm:leading-8 lg:text-lg">
            Discover curated property showcases, private briefings,
            and investor conversations across Dubai.
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={reduceMotion ? false : { opacity: 0 }}
        animate={reduceMotion ? {} : { opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 right-5 z-10 hidden items-center gap-3 sm:flex lg:bottom-10 lg:right-20"
      >
        <span className="text-[9px] uppercase tracking-[0.28em] text-white/45">
          Scroll to explore
        </span>
        <motion.div
          animate={reduceMotion ? {} : { y: [0, 7, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="h-8 w-px bg-white/35"
        />
      </motion.div>
    </section>
  );
}

/* SEARCH, FILTERS AND SORTING */

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
        <div className="rounded-[24px] border border-white/10 bg-[#181715]/95 p-3 shadow-[0_25px_80px_rgba(0,0,0,0.35)] backdrop-blur-2xl sm:rounded-[28px] sm:p-4">
          <div className="grid gap-2 lg:grid-cols-[minmax(0,1fr)_220px_190px]">
            <div className="relative">
              <Search
                size={17}
                className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-white/35"
              />
              <input
                type="search"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search events, locations..."
                aria-label="Search events"
                className="h-14 w-full rounded-2xl border border-white/10 bg-white/[0.045] pl-11 pr-4 text-sm text-white outline-none transition placeholder:text-white/30 hover:border-white/20 focus:border-[#F2C078]/60 focus:ring-1 focus:ring-[#F2C078]/20"
              />
            </div>

            <div className="relative">
              <MapPin
                size={16}
                className="pointer-events-none absolute left-4 top-1/2 z-10 -translate-y-1/2 text-[#F2C078]"
              />
              <select
                value={location}
                onChange={(event) => setLocation(event.target.value)}
                aria-label="Filter by location"
                className="h-14 w-full cursor-pointer appearance-none rounded-2xl border border-white/10 bg-[#24221E] pl-11 pr-10 text-sm text-white outline-none transition hover:border-white/20 focus:border-[#F2C078]/60"
              >
                {locations.map((loc) => (
                  <option key={loc} value={loc} className="bg-[#181715]">
                    {loc}
                  </option>
                ))}
              </select>
              <ChevronDown
                size={16}
                className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-white/35"
              />
            </div>

            <button
              type="button"
              onClick={toggleSort}
              className="flex h-14 items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.045] px-5 text-sm text-white/80 transition hover:border-[#F2C078]/40 hover:bg-[#F2C078]/[0.06]"
            >
              <ArrowUpDown size={16} className="text-[#F2C078]" />
              {sortOrder === "soonest" ? "Soonest first" : "Latest first"}
            </button>
          </div>

          <div className="flex items-center justify-between px-2 pt-3 sm:px-3">
            <div className="flex items-center gap-2">
              <SlidersHorizontal size={12} className="text-[#F2C078]" />
              <p className="text-[10px] uppercase tracking-[0.18em] text-white/40">
                {resultCount} {resultCount === 1 ? "event" : "events"} available
              </p>
            </div>

            {(search || location !== "All locations") && (
              <button
                type="button"
                onClick={() => {
                  setSearch("");
                  setLocation("All locations");
                }}
                className="text-[10px] uppercase tracking-[0.16em] text-white/50 transition hover:text-[#F2C078]"
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

/* EVENT DATE BADGE */

function DateBadge({ date, past }) {
  const parts = formatDateParts(date);

  return (
    <div className={`absolute left-5 top-5 z-20 min-w-[68px] overflow-hidden rounded-[14px] border backdrop-blur-xl sm:left-6 sm:top-6 ${
      past ? "border-white/10 bg-black/50" : "border-white/15 bg-black/35"
    }`}>
      <div className="border-b border-white/10 px-3 py-1.5 text-center">
        <span className={`text-[9px] font-medium uppercase tracking-[0.2em] ${
          past ? "text-white/40" : "text-[#F2C078]"
        }`}>
          {parts.month}
        </span>
      </div>
      <div className="px-3 py-2 text-center">
        <span className={`block text-xl font-light leading-none ${
          past ? "text-white/60" : "text-white"
        }`}>
          {parts.day}
        </span>
        <span className="mt-1 block text-[8px] text-white/35">
          {parts.year}
        </span>
      </div>
    </div>
  );
}

/* EVENT CARD */

function RoadshowCard({ item, index, past, reduceMotion }) {
  return (
    <motion.article
      layout
      initial={reduceMotion ? false : { opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={reduceMotion ? undefined : { opacity: 0, y: 15 }}
      transition={{
        duration: reduceMotion ? 0 : 0.7,
        delay: reduceMotion ? 0 : index * 0.06,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={`group relative min-h-[470px] overflow-hidden rounded-[24px] border bg-[#10100E] outline-none transition-all duration-700 sm:min-h-[500px] sm:rounded-[28px] ${
        past
          ? "border-white/[0.07] opacity-65"
          : "border-white/10 hover:-translate-y-1 hover:border-[#F2C078]/35 hover:shadow-[0_25px_70px_rgba(0,0,0,0.35)]"
      }`}
    >
      <img
        src={item.img}
        alt={`${item.title} — ${item.location}`}
        loading={index < 3 ? "eager" : "lazy"}
        className={`absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
          past ? "grayscale-[45%]" : "group-hover:scale-[1.045]"
        }`}
      />

      <div className={`absolute inset-0 ${
        past ? "bg-black/30" : "bg-black/5"
      }`} />
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/5 to-black/95" />

      {!past && (
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#F2C078]/0 via-transparent to-[#F2C078]/0 opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
      )}

      <DateBadge date={item.date} past={past} />

      <div className="absolute right-5 top-5 z-20 sm:right-6 sm:top-6">
        <span className={`rounded-full border px-3 py-1.5 text-[8px] font-medium uppercase tracking-[0.18em] backdrop-blur-xl ${
          past
            ? "border-white/10 bg-black/35 text-white/35"
            : "border-white/10 bg-black/25 text-white/65"
        }`}>
          {past ? "Past Event" : "Upcoming"}
        </span>
      </div>

      <div className="absolute inset-x-0 bottom-0 z-20 p-5 sm:p-6 lg:p-7">
        <div className="mb-3 flex items-center gap-2">
          <MapPin
            size={13}
            className={past ? "text-white/30" : "text-[#F2C078]"}
          />
          <span className={`text-[9px] font-medium uppercase tracking-[0.2em] ${
            past ? "text-white/35" : "text-white/60"
          }`}>
            {item.location}
          </span>
        </div>

        <h3 className={`max-w-lg text-2xl font-light leading-[1.08] tracking-[-0.025em] sm:text-3xl ${
          past ? "text-white/65" : "text-white"
        }`}>
          {item.title}
        </h3>

        <p className={`mt-3 max-w-lg text-sm leading-6 ${
          past ? "text-white/35" : "text-white/65"
        }`}>
          {item.text}
        </p>

        <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4">
          <span className={`text-[9px] font-medium uppercase tracking-[0.2em] ${
            past ? "text-white/25" : "text-white/55"
          }`}>
            {past ? "Event concluded" : "Register your interest"}
          </span>

          {past ? (
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/25">
              <ArrowUpRight size={15} />
            </span>
          ) : (
            <Link
              to="/contact"
              aria-label={`Register interest for ${item.title}`}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white/70 transition-all duration-300 hover:border-[#F2C078] hover:bg-[#F2C078] hover:text-[#181715] focus-visible:ring-2 focus-visible:ring-[#F2C078]"
            >
              <ArrowUpRight
                size={15}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          )}
        </div>
      </div>
    </motion.article>
  );
}

/* EVENT GRID */

function RoadshowGrid({ items, past = false, reduceMotion }) {
  if (items.length === 0) {
    return (
      <motion.div
        initial={reduceMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex min-h-[260px] items-center justify-center rounded-[24px] border border-dashed border-white/10 bg-white/[0.02] px-6 text-center"
      >
        <div>
          <p className="text-sm text-white/60">
            No events match your current filters.
          </p>
          <p className="mt-2 text-xs text-white/35">
            Try another location or search term.
          </p>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      layout
      className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3 xl:gap-7 2xl:gap-8"
    >
      <AnimatePresence mode="popLayout">
        {items.map((item, index) => (
          <RoadshowCard
            key={item.title}
            item={item}
            index={index}
            past={past}
            reduceMotion={reduceMotion}
          />
        ))}
      </AnimatePresence>
    </motion.div>
  );
}

/* SECTION HEADING */

function SectionHeading({ label, count, muted = false }) {
  return (
    <div className="mb-8 flex items-end justify-between gap-6 sm:mb-10">
      <div>
        <div className="mb-3 flex items-center gap-3">
          <span className={`h-px w-7 ${
            muted ? "bg-white/20" : "bg-[#F2C078]"
          }`} />
          <span className={`text-[9px] font-medium uppercase tracking-[0.28em] ${
            muted ? "text-white/30" : "text-[#F2C078]"
          }`}>
            {label}
          </span>
        </div>

        <h2 className={`text-2xl font-light tracking-[-0.03em] sm:text-3xl ${
          muted ? "text-white/55" : "text-white"
        }`}>
          {label === "Upcoming" ? "What's ahead" : "From our archive"}
        </h2>
      </div>

      <span className="hidden pb-1 text-[10px] uppercase tracking-[0.18em] text-white/35 sm:block">
        {String(count).padStart(2, "0")} {count === 1 ? "event" : "events"}
      </span>
    </div>
  );
}

/* MAIN PAGE */

export default function RoadshowsPage() {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("All locations");
  const [sortOrder, setSortOrder] = useState("soonest");

  const reduceMotion = useReducedMotion();
  const today = useMemo(() => getLocalISODate(), []);

  const filtered = useMemo(() => {
    const normalizedSearch = search.trim().toLowerCase();

    return roadshows
      .filter((item) => {
        const searchableText = [
          item.title,
          item.text,
          item.location,
        ].join(" ").toLowerCase();

        const matchesSearch =
          !normalizedSearch || searchableText.includes(normalizedSearch);

        const matchesLocation =
          location === "All locations" || item.location === location;

        return matchesSearch && matchesLocation;
      })
      .sort((a, b) => {
        const dateA = parseLocalDate(a.date).getTime();
        const dateB = parseLocalDate(b.date).getTime();

        return sortOrder === "soonest"
          ? dateA - dateB
          : dateB - dateA;
      });
  }, [search, location, sortOrder]);

  const upcoming = filtered.filter((item) => item.date >= today);
  const past = filtered.filter((item) => item.date < today);

  const toggleSort = () => {
    setSortOrder((current) =>
      current === "soonest" ? "latest" : "soonest"
    );
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#181715]">
      <EventsHero />

      <FilterBar
        search={search}
        setSearch={setSearch}
        location={location}
        setLocation={setLocation}
        sortOrder={sortOrder}
        toggleSort={toggleSort}
        resultCount={filtered.length}
      />

      <div className="mx-auto max-w-[1440px] px-5 pb-24 pt-20 sm:px-8 sm:pb-28 sm:pt-24 lg:px-20 lg:pb-32 lg:pt-28">
        <section aria-labelledby="upcoming-events">
          <div id="upcoming-events">
            <SectionHeading
              label="Upcoming"
              count={upcoming.length}
            />
          </div>

          <RoadshowGrid
            items={upcoming}
            reduceMotion={reduceMotion}
          />
        </section>

        {past.length > 0 && (
          <>
            <div className="my-20 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent sm:my-28" />

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
                reduceMotion={reduceMotion}
              />
            </section>
          </>
        )}
      </div>
    </main>
  );
}
