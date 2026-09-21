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
  "/clients/select.jpg",
  "/clients/hmb.webp",
  "/clients/deyaar.png",
  "/clients/grovy.png",
  "/clients/mag.png",
  "/clients/nakheel.png",
];

function LogoRow({ logos, reverse = false }) {
  return (
    <div className="relative w-full overflow-hidden">
      <motion.div
        className="flex w-max items-center gap-8 sm:gap-12 lg:gap-16"
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
            className="
              flex
              h-20
              w-[120px]
              shrink-0
              items-center
              justify-center
              sm:h-24
              sm:w-[160px]
              lg:w-[180px]
            "
          >
            <img
              src={logo}
              alt="Trusted developer"
              className="
                max-h-10
                max-w-[100px]
                object-contain
                opacity-70
                grayscale
                transition-all
                duration-300
                hover:opacity-100
                hover:grayscale-0
                sm:max-h-14
                sm:max-w-[140px]
                lg:max-h-16
                lg:max-w-[160px]
              "
            />
          </div>
        ))}
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
        px-5
        py-20
        sm:px-8
        sm:py-24
        lg:px-20
        lg:py-28
      "
    >
      {/* HEADER */}
      <div className="mx-auto max-w-[1440px] text-center">
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

      {/* LOGO MARQUEE */}
      <div className="mt-12 space-y-6 sm:mt-16 sm:space-y-8 lg:mt-20 lg:space-y-10">
        <LogoRow logos={row1} />
        <LogoRow logos={row2} reverse />
        <LogoRow logos={row3} />
      </div>
    </section>
  );
}
