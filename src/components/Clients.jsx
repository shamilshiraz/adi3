import React from "react";
import { motion } from "framer-motion";

const row1 = [
  "/clients/meraas.svg",
  "/clients/ellington.png",
  "/clients/emaar.png",
  "/clients/fam.jpg",
  "/clients/haus.png",
  "/clients/sobha.png",
];

const row2 = [
  "/clients/aldar.png",
  "/clients/better.png",
  "/clients/binghatti.webp",
  "/clients/d&b.jpg",
  "/clients/damac.webp",
  "/clients/dubai-h.png",
];

const row3 = [
  "/clients/fam.jpg",
  "/clients/haus.png",
  "/clients/sobha.png",
  "/clients/aldar.png",
  "/clients/better.png",
  "/clients/binghatti.webp",
];

function LogoRow({ logos, reverse = false }) {
  return (
    <div className="relative overflow-hidden w-full">
      <motion.div
        className="flex  sm:gap-16 w-max"
        animate={{
          x: reverse ? ["-50%", "0%"] : ["0%", "-50%"],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {[...logos, ...logos].map((logo, i) => (
          <div
            key={i}
            className="flex items-center justify-center min-w-[180px]"
          >
            <img
              src={logo}
              alt="client"
              className="h-16 sm:h-20 object-contain  transition-all duration-300"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default function Clients() {
  return (
    <section className="w-full bg-[#] py-24 overflow-hidden px-4 sm:px-20">
      <div className=" mb-16">
        <h2 className="              text-xl
              md:text-3xl
              uppercase
              font-regular
              text-center
              ">

          Trusted By Industry Leaders
        </h2>
      </div>

      <div className="space-y-12">
        <LogoRow logos={row1} />
        <LogoRow logos={row2} reverse />
        <LogoRow logos={row3} />
      </div>
    </section>
  );
}