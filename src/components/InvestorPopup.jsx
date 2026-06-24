
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function InvestorPopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const seen = localStorage.getItem("adhi-popup");

    if (!seen) {
      const timer = setTimeout(() => {
        setOpen(true);
      }, 1500);

      return () => clearTimeout(timer);
    }
  }, []);

  const closePopup = () => {
    localStorage.setItem("adhi-popup", "true");
    setOpen(false);
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closePopup}
            className="fixed inset-0 z-[999] bg-black/30 backdrop-blur-md"
          />

          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.96 }}
            transition={{
              duration: 0.45,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              fixed
              left-1/2
              top-1/2
              z-[1000]
              w-[92%]
              max-w-md
              -translate-x-1/2
              -translate-y-1/2
            "
          >
            <div
              className="
                relative
                overflow-hidden
                rounded-[32px]
                border
                border-white/10
                bg-[#4E0026]/40
                backdrop-blur-2xl
                p-8
                shadow-[0_20px_80px_rgba(0,0,0,0.35)]
              "
            >
              <button
                onClick={closePopup}
                className="
                  absolute
                  right-5
                  top-5
                  text-lg
                  text-white/50
                  transition
                  hover:text-white
                "
              >
                ✕
              </button>

              <span
                className="
                  inline-flex
                  rounded-full
                  border
                  border-white/10
                  bg-white/5
                  px-4
                  py-2
                  text-xs
                  uppercase
                  tracking-[0.2em]
                  text-white/70
                "
              >
                Exclusive Access
              </span>

              <h3 className="mt-5 text-3xl text-white">
                Investor Roadshows
              </h3>

              <p className="mt-3 text-white/60">
                Register your interest and receive
                invitations to upcoming events.
              </p>

              <form className="mt-8 space-y-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="
                    w-full
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/5
                    px-4
                    py-3
                    text-white
                    placeholder:text-white/40
                    outline-none
                    focus:border-white/20
                  "
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  className="
                    w-full
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/5
                    px-4
                    py-3
                    text-white
                    placeholder:text-white/40
                    outline-none
                    focus:border-white/20
                  "
                />

                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="
                    w-full
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/5
                    px-4
                    py-3
                    text-white
                    placeholder:text-white/40
                    outline-none
                    focus:border-white/20
                  "
                />

                <button
                  type="submit"
                  className="
                    w-full
                    rounded-2xl
                    bg-white
                    py-3
                    font-medium
                    text-[#4E0026]
                    transition-all
                    hover:scale-[1.02]
                  "
                >
                  Register Interest
                </button>
              </form>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
