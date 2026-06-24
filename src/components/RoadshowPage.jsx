"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";

const roadshows = [
  {
    title: "Dubai Marina Investment Roadshow",
    text: "Discover premium waterfront residences and investment opportunities.",
    img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Downtown Dubai Property Showcase",
    text: "Explore iconic developments near Burj Khalifa.",
    img: "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Palm Jumeirah Luxury Event",
    text: "Ultra-luxury beachfront villas and residences.",
    img: "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Business Bay Investor Meet",
    text: "Connect with leading developers and investors.",
    img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Dubai Hills Estate Preview",
    text: "Family-focused communities and golf-course living.",
    img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Off-Plan Property Roadshow",
    text: "Get first access to Dubai's newest launches.",
    img: "https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function RoadshowsPage() {
  const [search, setSearch] = useState("");

  const filtered = roadshows.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className=" min-h-screen">
      {/* Hero */}
      <section className="relative h-[50vh]">
        <img
          src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1800&q=80"
          className="absolute inset-0 w-full h-full object-cover"
          alt=""
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 h-full flex items-center justify-center">
          <h1 className="text-white text-5xl sm:text-7xl">
            Events
          </h1>
        </div>
      </section>

      {/* Search */}
      <div className="sm:px-40 px-4 py-12">
        <div className="relative max-w-xl">
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
            "
          />
        </div>
      </div>

      {/* Grid */}
      <div className="sm:px-40 px-4 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {filtered.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
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

              <div className="absolute bottom-0 p-6 z-10">
                <h3 className="text-white text-2xl mb-3">
                  {item.title}
                </h3>

                <p className="text-white/80 text-sm leading-relaxed">
                  {item.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}