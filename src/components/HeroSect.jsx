import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

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

{/* LIGHT DARK OVERLAY */}
<div
  className="
    absolute
    inset-0
    bg-black/25
    sm:bg-black/20
  "
/>

{/* LEFT GRADIENT — keeps text readable without hiding the building */}
<div
  className="
    absolute
    inset-0
    bg-gradient-to-r
    from-black/65
    via-black/25
    to-transparent
  "
/>

{/* BOTTOM GRADIENT */}
<div
  className="
    absolute
    inset-x-0
    bottom-0
    h-[35%]
    bg-gradient-to-t
    from-black/65
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
              text-[#D4AF37]

              sm:mb-7
              sm:text-xs
            "
          >
             DUBAI PROPERTY, CLEARLY CONSIDERED
          </p>

          {/* MAIN HEADING */}
           <h1 className="display-heading display-heading-hero max-w-5xl w-full font-medium text-white">
             <span className="block">
               Invest in Dubai with clarity.
            </span>

             <span className="block text-[#EFBD78]">
               Move forward with confidence.
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
             ADHIHAVEN brings together local market perspective, carefully
             selected opportunities, and personal guidance for investors
             building their next chapter in Dubai.
           </p>

           <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row">
             <Link to="/contact" className="btn-primary w-full sm:w-auto">
               Start a conversation
               <ArrowUpRight size={17} />
             </Link>
             <Link to="/agents" className="btn-secondary w-full sm:w-auto">
               Meet our advisors
             </Link>
           </div>

           <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-[10px] uppercase tracking-[0.18em] text-white/45 sm:mt-10 sm:text-xs">
             <span>Dubai property</span>
             <span className="h-1 w-1 rounded-full bg-[#EFBD78]" />
             <span>Investor guidance</span>
             <span className="h-1 w-1 rounded-full bg-[#EFBD78]" />
             <span>International perspective</span>
           </div>

        </motion.div>
      </div>
    </section>
  );
};

export default HeroSect;
