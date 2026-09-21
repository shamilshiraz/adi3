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
          bg-black/55
          sm:bg-black/45
        "
      />

      {/* LEFT GRADIENT */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-r
          from-black/85
          via-black/50
          to-black/10
        "
      />

      {/* BOTTOM GRADIENT */}
      <div
        className="
          absolute
          inset-x-0
          bottom-0
          h-[50%]
          bg-gradient-to-t
          from-black/75
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
          className="max-w-[950px]"
        >
          {/* EYEBROW */}
          <p
            className="
              mb-4
              text-[10px]
              font-medium
              uppercase
              tracking-[0.25em]
              text-[#D4AF37]

              sm:mb-6
              sm:text-xs
            "
          >
            DUBAI REAL ESTATE
          </p>

          {/* HEADING */}
          <h1
            className="
              max-w-[950px]
              font-medium
              tracking-[-0.035em]
              text-[#D4AF37]

              text-[clamp(2.6rem,9vw,4.5rem)]
              leading-[1.02]

              sm:text-[clamp(3.5rem,7vw,6rem)]
              sm:leading-[1]

              lg:text-[clamp(4rem,6vw,6.5rem)]
              lg:leading-[0.98]
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
              mt-6
              max-w-[620px]
              text-base
              leading-7
              text-white/85

              sm:mt-8
              sm:text-lg
              sm:leading-8

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
