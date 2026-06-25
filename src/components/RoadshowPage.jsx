"use client";

import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, MapPin, Calendar, ArrowUpDown } from "lucide-react";

const roadshows = [
  {
    title: "Dubai Marina Investment Roadshow",
    text: "Discover premium waterfront residences and investment opportunities.",
    img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80",
    location: "Dubai Marina",
    date: "2026-08-14",
  },
  {
    title: "Downtown Dubai Property Showcase",
    text: "Explore iconic developments near Burj Khalifa.",
    img: "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=1200&q=80",
    location: "Downtown Dubai",
    date: "2026-09-02",
  },
  {
    title: "Palm Jumeirah Luxury Event",
    text: "Ultra-luxury beachfront villas and residences.",
    img: "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1200&q=80",
    location: "Palm Jumeirah",
    date: "2026-07-19",
  },
  {
    title: "Business Bay Investor Meet",
    text: "Connect with leading developers and investors.",
    img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    location: "Business Bay",
    date: "2026-03-05",
  },
  {
    title: "Dubai Hills Estate Preview",
    text: "Family-focused communities and golf-course living.",
    img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80",
    location: "Dubai Hills",
    date: "2026-02-21",
  },
  {
    title: "Off-Plan Property Roadshow",
    text: "Get first access to Dubai's newest launches.",
    img: "https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=1200&q=80",
    location: "Dubai Marina",
    date: "2026-10-11",
  },
];

const locations = [
  "All locations",
  ...Array.from(new Set(roadshows.map((r) => r.location))),
];

const formatDate = (iso) =>
  new Date(iso).toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

function RoadshowCard({ item, index }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
      className="
        relative
        h-[500px]
        rounded-[32px]
        overflow-hidden
        group
        cursor-pointer
      "
    >
      <img
        src={item.img}
        alt=""
        className="
          absolute inset-0
          w-full h-full
          object-cover
          group-hover:scale-105
          transition duration-700
        "
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

      {/* Date chip */}
      <div
        className="
          absolute top-6 left-6 z-10
          flex items-center gap-2
          bg-white/10
          backdrop-blur-md
          border border-white/10
          rounded-full
          px-4 py-2
        "
      >
        <Calendar size={14} className="text-white/70" />
        <span className="text-white/90 text-xs">{formatDate(item.date)}</span>
      </div>

      <div className="absolute bottom-0 p-6 z-10">
        <div className="flex items-center gap-1.5 text-white/60 text-xs mb-2">
          <MapPin size={13} />
          <span>{item.location}</span>
        </div>

        <h3 className="text-white text-2xl mb-3">{item.title}</h3>

        <p className="text-white/80 text-sm leading-relaxed">{item.text}</p>
      </div>
    </motion.div>
  );
}

function RoadshowGrid({ items }) {
  if (items.length === 0) {
    return (
      <p className="text-white/50 text-sm py-12 text-center">
        No roadshows match your filters.
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
      <AnimatePresence mode="popLayout">
        {items.map((item, i) => (
          <RoadshowCard key={item.title} item={item} index={i} />
        ))}
      </AnimatePresence>
    </div>
  );
}

export default function RoadshowsPage() {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("All locations");
  const [sortOrder, setSortOrder] = useState("soonest"); // "soonest" | "latest"

  const today = useMemo(() => new Date().toISOString().slice(0, 10), []);

  const filtered = useMemo(() => {
    let list = roadshows.filter((item) => {
      const matchesSearch = item.title
        .toLowerCase()
        .includes(search.toLowerCase());
      const matchesLocation =
        location === "All locations" || item.location === location;
      return matchesSearch && matchesLocation;
    });

    list = [...list].sort((a, b) =>
      sortOrder === "soonest"
        ? new Date(a.date) - new Date(b.date)
        : new Date(b.date) - new Date(a.date)
    );

    return list;
  }, [search, location, sortOrder]);

  const upcoming = filtered.filter((item) => item.date >= today);
  const past = filtered.filter((item) => item.date < today);

  const toggleSort = () =>
    setSortOrder((prev) => (prev === "soonest" ? "latest" : "soonest"));

  return (
    <div className=" min-h-screen bg-[#4e0026]">
      {/* Hero */}
      <section className="relative h-[50vh]">
        <img
          src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1800&q=80"
          className="absolute inset-0 w-full h-full object-cover"
          alt=""
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 h-full flex items-center justify-center">
          <h1 className="text-white text-5xl sm:text-7xl">Events</h1>
        </div>
      </section>

      {/* Filter bar */}
      <div className="sm:px-40 px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-4 lg:items-center">
          {/* Search */}
          <div className="relative flex-1 max-w-xl">
            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50"
            />
            <input
              type="text"
              placeholder="Search roadshows..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="
                w-full
                bg-white/10
                border border-white/10
                text-white
                rounded-xl
                pl-12 pr-4 py-4
                outline-none
                placeholder:text-white/40
              "
            />
          </div>

          {/* Location select */}
          <div className="relative">
            <MapPin
              size={16}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50 pointer-events-none"
            />
            <select
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="
                appearance-none
                bg-white/10
                border border-white/10
                text-white
                rounded-xl
                pl-11 pr-10 py-4
                outline-none
                cursor-pointer
                min-w-[200px]
              "
            >
              {locations.map((loc) => (
                <option key={loc} value={loc} className="bg-neutral-900">
                  {loc}
                </option>
              ))}
            </select>
          </div>

          {/* Sort toggle */}
          <button
            onClick={toggleSort}
            className="
              flex items-center justify-center gap-2
              bg-white/10
              border border-white/10
              text-white
              rounded-xl
              px-5 py-4
              hover:bg-white/15
              transition
              whitespace-nowrap
            "
          >
            <ArrowUpDown size={15} className="text-white/70" />
            <span className="text-sm">
              {sortOrder === "soonest" ? "Date: Soonest" : "Date: Latest"}
            </span>
          </button>
        </div>
      </div>

      {/* Upcoming */}
      <div className="sm:px-40 px-4 pb-16">
        <div className="flex items-center gap-3 mb-8">
          <h2 className="text-white text-2xl">Upcoming Events</h2>
          <span className="text-white/40 text-sm">{upcoming.length}</span>
        </div>
        <RoadshowGrid items={upcoming} />
      </div>

      {/* Past */}
      {past.length > 0 && (
        <div className="sm:px-40 px-4 pb-20">
          <div className="flex items-center gap-3 mb-8">
            <h2 className="text-white/60 text-2xl">Past Events</h2>
            <span className="text-white/30 text-sm">{past.length}</span>
          </div>
          <div className="opacity-60">
            <RoadshowGrid items={past} />
          </div>
        </div>
      )}
    </div>
  );
}