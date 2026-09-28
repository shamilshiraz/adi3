import React from "react";
import { motion } from "framer-motion";

const row1 = [
  "/clients/meraas.svg",
  "/clients/ellington.png",
  "/clients/emaar.png",
  "/clients/sobha1.png",
  "/clients/dubai-h.png",
];

const row2 = [

  "/clients/binghatti.webp",
  "/clients/damac.webp",
  "/clients/azizi.webp",
  "/clients/danube.png",
  
  
];

const row3 = [
  "/clients/meraki.png",
  "/clients/omniyat.jpeg",
  "/clients/samana.png",
  "/clients/Union.png",
  "/clients/nakheel.png",
];

function Logo({ logo }) {
  return (
    <div
      className="
        flex
        h-20
        w-[140px]
        shrink-0
        items-center
        justify-center

        sm:h-24
        sm:w-[170px]

        lg:h-28
        lg:w-[200px]
      "
    >
      <img
        src={logo}
        alt="Trusted developer"
        className="
          max-h-10
          max-w-[120px]
          object-contain
          grayscale
          opacity-55

          sm:max-h-12
          sm:max-w-[150px]

          lg:max-h-14
          lg:max-w-[175px]

          transition-all
          duration-500
          hover:opacity-100
          hover:grayscale-0
        "
      />
    </div>
  );
}

function LogoRow({ logos, reverse = false }) {
  return (
    <div className="relative w-full overflow-hidden">
      <motion.div
        className="flex w-max"
        animate={{
          x: reverse ? ["-50%", "0%"] : ["0%", "-50%"],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {/* FIRST SET */}
        <div className="flex items-center gap-8 sm:gap-12 lg:gap-16">
          {logos.map((logo, index) => (
            <Logo
              key={`first-${index}`}
              logo={logo}
            />
          ))}
        </div>

        {/* SECOND SET */}
        <div className="flex items-center gap-8 sm:gap-12 lg:gap-16">
          {logos.map((logo, index) => (
            <Logo
              key={`second-${index}`}
              logo={logo}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default function Clients() {
  return (
    <section
      className="
        w-full
        overflow-hidden
        bg-white
        py-20
        sm:py-24
        lg:py-28
      "
    >
      {/* HEADER */}
      <div className="mx-auto max-w-[1440px] px-5 text-center sm:px-8 lg:px-20">
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
          OUR NETWORK
        </p>

        <h2
          className="
            mt-4
            text-2xl
            font-medium
            uppercase
            tracking-tight
            text-black
            sm:text-3xl
            lg:text-4xl
          "
        >
          Trusted By Industry Leaders
        </h2>

        <div className="mx-auto mt-5 h-px w-12 bg-[#D4AF37]" />
      </div>

      {/* MARQUEE */}
      <div className="mt-12 space-y-5 sm:mt-16 sm:space-y-6 lg:mt-20 lg:space-y-8">

        {/* ROW 1 → */}
        <LogoRow logos={row1} />

        {/* ROW 2 ← */}
        <LogoRow logos={row2} reverse />

        {/* ROW 3 → */}
        <LogoRow logos={row3} />

      </div>
    </section>
  );
}
