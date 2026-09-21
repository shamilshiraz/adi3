import { motion } from "framer-motion";

const HeroSect = () => {
  return (
    <section
      className="
        relative
        min-h-[calc(100svh-72px)]
        sm:min-h-[calc(100svh-80px)]
        overflow-hidden
        bg-black
      "
    >
      {/* BACKGROUND IMAGE */}
      <div
        className="
          absolute
          inset-0
          bg-cover
          bg-center
          bg-no-repeat
        "
        style={{
          backgroundImage: "url('/land.jpg')",
        }}
      />

      {/* DARK OVERLAY */}
      <div
        className="
          absolute
          inset-0
          bg-black/60
          sm:bg-black/50
        "
      />

      {/* LEFT GRADIENT */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-r
          from-black/90
          via-black/55
          to-black/15
        "
      />

      {/* BOTTOM GRADIENT */}
      <div
        className="
          absolute
          inset-x-0
          bottom-0
          h-[45%]
          bg-gradient-to-t
          from-black/80
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
          min-h-[calc(100svh-72px)]
          max-w-[1440px]
          items-end
          px-5
          pb-14

          sm:min-h-[calc(100svh-80px)]
          sm:px-8
          sm:pb-20

          lg:items-center
          lg:px-20
          lg:pb-0
        "
      >
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="w-full max-w-[1250px]"
        >

          {/* EYEBROW */}
          <p
            className="
              mb-5
              text-[10px]
              font-medium
              uppercase
              tracking-[0.28em]
              text-[#EFBD78]

              sm:mb-7
              sm:text-xs
            "
          >
            DUBAI REAL ESTATE
          </p>

          {/* MAIN HEADING */}
          <h1
            className="
              w-full
              font-medium
              tracking-[-0.035em]
              text-[#EFBD78]

              /* MOBILE */
              text-[clamp(2.6rem,9vw,4rem)]
              leading-[1.08]

              /* TABLET */
              sm:text-[clamp(3.5rem,7vw,5rem)]
              sm:leading-[1.05]

              /* DESKTOP */
              lg:text-[clamp(3.8rem,5vw,5.4rem)]
              lg:leading-[1.05]
            "
          >
            <span className="block">
              Building Reliability.
            </span>

            <span className="block">
              Delivering Excellence.
            </span>
          </h1>

          {/* DESCRIPTION */}
          <p
            className="
              mt-7
              max-w-[650px]
              text-base
              leading-7
              text-white/85

              sm:mt-8
              sm:text-lg
              sm:leading-8

              lg:mt-9
              lg:text-xl
              lg:leading-8
            "
          >
            Your trusted partner for Dubai real estate,
            investment opportunities, and strategic property
            advisory.
          </p>

        </motion.div>
      </div>
    </section>
  );
};

export default HeroSect;
