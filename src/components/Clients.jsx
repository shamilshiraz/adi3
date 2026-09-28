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
        w-[120px]
        items-center
        justify-center

        sm:h-24
        sm:w-[160px]

        lg:h-28
        lg:w-[180px]
      "
    >
      <img
        src={logo}
        alt="Trusted developer"
        className="
          max-h-12
          max-w-[130px]
          object-contain
          grayscale
          opacity-55
          transition-all
          duration-500
          hover:opacity-100
          hover:grayscale-0

          sm:max-h-14
          sm:max-w-[150px]

          lg:max-h-16
          lg:max-w-[170px]
        "
      />
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
     <div className="mt-14 sm:mt-18 lg:mt-20 space-y-8 sm:space-y-10 lg:space-y-12">

  {/* ROW 1 */}
  <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-8 sm:gap-x-14 lg:gap-x-20">
    {row1.map((logo, i) => (
      <Logo logo={logo} key={i} />
    ))}
  </div>

  {/* ROW 2 */}
  <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-8 sm:gap-x-14 lg:gap-x-20">
    {row2.map((logo, i) => (
      <Logo logo={logo} key={i} />
    ))}
  </div>

  {/* ROW 3 */}
  <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-8 sm:gap-x-14 lg:gap-x-20">
    {row3.map((logo, i) => (
      <Logo logo={logo} key={i} />
    ))}
  </div>

</div>
    </section>
  );
}
