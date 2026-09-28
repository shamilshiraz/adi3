import React from "react";
import { motion } from "framer-motion";

const row1 = [
  "/clients/meraas.svg",
  "/clients/ellington.png",
  "/clients/emaar.png",
  "/clients/sobha.png",
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
  "/clients/omniyat.webp",
  "/clients/samana.png",
  "/clients/Union.png",
  "/clients/nakheel.png",
];

function LogoRow({ logos }) {
  return (
    <div className="flex w-full items-center justify-center">
      <div
        className="
          grid
          w-full
          max-w-[1400px]
          grid-cols-2
          items-center
          justify-items-center
          gap-x-6
          gap-y-10

          sm:grid-cols-4
          sm:gap-x-10
          sm:gap-y-12

          lg:grid-cols-5
          lg:gap-x-14
          lg:gap-y-14
        "
      >
        {logos.map((logo, i) => (
          <div
            key={i}
            className="
              flex
              h-20
              w-full
              max-w-[180px]
              items-center
              justify-center
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
                opacity-60
                transition-all
                duration-500
                hover:grayscale-0
                hover:opacity-100

                sm:max-h-12
                sm:max-w-[145px]

                lg:max-h-14
                lg:max-w-[170px]
              "
            />
          </div>
        ))}
      </div>
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
      <div
  className="
    mt-14
    sm:mt-18
    lg:mt-20
  "
>
        <LogoRow logos={row1} />
        <LogoRow logos={row2} reverse />
        <LogoRow logos={row3} />
      </div>
    </section>
  );
}
