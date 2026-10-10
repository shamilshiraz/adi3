
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";

const navigation = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Agents", path: "/agents" },
  { name: "Roadshows", path: "/roadshows" },
  { name: "Consultation", path: "/developer" },
];

const GOLD = "#EFBD78";

function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  const closeMenu = () => setOpen(false);

  const isActive = (path) => {
    if (path === "/") return pathname === "/";
    return pathname === path || pathname.startsWith(`${path}/`);
  };

  const linkClass = (path) =>
    [
      "relative inline-flex min-h-11 items-center",
      "text-sm font-medium tracking-wide",
      "transition-colors duration-200",
      "focus-visible:outline-none focus-visible:ring-2",
      "focus-visible:ring-[#EFBD78] focus-visible:ring-offset-4",
      "focus-visible:ring-offset-black",
      isActive(path)
        ? "text-[#EFBD78]"
        : "text-white/75 hover:text-white",
    ].join(" ");

  return (
    <header className="fixed inset-x-0 top-0 z-[999]">
      <div className="border-b border-white/[0.08] bg-black/95 backdrop-blur-xl">
        <div className="mx-auto flex h-[72px] w-full max-w-[1600px] items-center justify-between px-5 sm:h-20 sm:px-8 lg:px-16 xl:px-20">
          {/* Brand */}
          <Link
            to="/"
            onClick={closeMenu}
            aria-label="ADHIHAVEN home"
            className="relative z-10 flex shrink-0 items-center rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EFBD78]"
          >
            <img
              src="/logo.png"
              alt="ADHIHAVEN"
              className="h-9 w-auto object-contain sm:h-11"
            />
          </Link>

          {/* Desktop navigation */}
          <nav
            aria-label="Primary navigation"
            className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-5 lg:gap-7 md:flex"
          >
            {navigation.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                aria-current={isActive(item.path) ? "page" : undefined}
                className={`group ${linkClass(item.path)}`}
              >
                {item.name}

                <span
                  aria-hidden="true"
                  className={[
                    "absolute inset-x-0 -bottom-px h-px",
                    "origin-left bg-[#EFBD78]",
                    "transition-transform duration-300",
                    isActive(item.path)
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100",
                    shouldReduceMotion ? "transition-none" : "",
                  ].join(" ")}
                />
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <Link
            to="/contact"
            className="hidden min-h-11 shrink-0 items-center justify-center gap-2 border border-[#EFBD78]/70 px-5 text-sm font-medium text-[#EFBD78] transition-colors duration-200 hover:bg-[#EFBD78] hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EFBD78] focus-visible:ring-offset-2 focus-visible:ring-offset-black md:inline-flex"
          >
            Let's talk
            <ArrowUpRight size={16} aria-hidden="true" />
          </Link>

          {/* Mobile menu button */}
          <button
            type="button"
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => setOpen((current) => !current)}
            className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/15 text-white transition-colors hover:border-[#EFBD78]/60 hover:text-[#EFBD78] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EFBD78] md:hidden"
          >
            {open ? (
              <X size={21} aria-hidden="true" />
            ) : (
              <Menu size={21} aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile navigation */}
      <AnimatePresence initial={false}>
        {open && (
          <>
            <motion.button
              type="button"
              aria-label="Close navigation menu"
              tabIndex={-1}
              onClick={closeMenu}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: shouldReduceMotion ? 0 : 0.2,
              }}
              className="fixed inset-0 top-[72px] z-[-1] bg-black/50 md:hidden sm:top-20"
            />

            <motion.nav
              id="mobile-navigation"
              aria-label="Mobile navigation"
              initial={
                shouldReduceMotion
                  ? { opacity: 0 }
                  : { opacity: 0, y: -8 }
              }
              animate={{ opacity: 1, y: 0 }}
              exit={
                shouldReduceMotion
                  ? { opacity: 0 }
                  : { opacity: 0, y: -8 }
              }
              transition={{
                duration: shouldReduceMotion ? 0 : 0.2,
                ease: "easeOut",
              }}
              className="absolute inset-x-3 top-[calc(100%+8px)] z-20 overflow-hidden border border-white/10 bg-[#101010] shadow-2xl md:hidden sm:inset-x-6"
            >
              <div className="px-5 py-4 sm:px-7 sm:py-5">
                <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#EFBD78]">
                  Explore ADHIHAVEN
                </p>

                <div className="flex flex-col">
                  {navigation.map((item, index) => (
                    <motion.div
                      key={item.path}
                      initial={
                        shouldReduceMotion
                          ? false
                          : { opacity: 0, x: -8 }
                      }
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: shouldReduceMotion ? 0 : 0.2,
                        delay: shouldReduceMotion ? 0 : index * 0.035,
                      }}
                    >
                      <Link
                        to={item.path}
                        onClick={closeMenu}
                        aria-current={
                          isActive(item.path) ? "page" : undefined
                        }
                        className={[
                          "flex min-h-[50px] items-center justify-between",
                          "border-b border-white/[0.08] py-3",
                          "text-base transition-colors",
                          "focus-visible:outline-none focus-visible:ring-2",
                          "focus-visible:ring-inset focus-visible:ring-[#EFBD78]",
                          isActive(item.path)
                            ? "text-[#EFBD78]"
                            : "text-white/80 hover:text-white",
                        ].join(" ")}
                      >
                        {item.name}

                        {isActive(item.path) && (
                          <span
                            aria-hidden="true"
                            className="h-1.5 w-1.5 rounded-full bg-[#EFBD78]"
                          />
                        )}
                      </Link>
                    </motion.div>
                  ))}

                  <Link
                    to="/contact"
                    onClick={closeMenu}
                    className="mt-5 flex min-h-12 items-center justify-between bg-[#EFBD78] px-5 text-sm font-semibold text-black transition-colors hover:bg-[#f4ce98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                  >
                    Start a conversation
                    <ArrowUpRight size={18} aria-hidden="true" />
                  </Link>
                </div>

                <p className="mt-5 text-xs leading-5 text-white/40">
                  Thoughtful guidance for your next Dubai property decision.
                </p>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;
