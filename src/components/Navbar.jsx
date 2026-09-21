"use client";

import React from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, useCycle } from "framer-motion";

function Navbar() {
  const [open, cycleOpen] = useCycle(false, true);

  const navigation = [
    { name: "Home", path: "/" },
    { name: "Agents", path: "/agents" },
    { name: "Roadshows", path: "/roadshows" },
    { name: "Developer", path: "/developer" },
  ];

  return (
    <>
      {/* NAVBAR */}
      <header className="fixed inset-x-0 top-0 z-[999]">
        <div
          className="
            h-[72px] sm:h-[80px]
            w-full
            bg-black
            backdrop-blur-xl
            px-4 sm:px-8 lg:px-20
            flex items-center justify-between
            relative
          "
        >
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.1,
              ease: "easeOut",
            }}
            className="shrink-0"
          >
            <Link to="/" onClick={() => open && cycleOpen()}>
              <img
                src="/logo.png"
                className="h-10 sm:h-12 w-auto object-contain"
                alt="ADHI Haven Real Estate"
              />
            </Link>
          </motion.div>

          {/* Desktop Menu */}
          <motion.nav
            className="
              hidden md:flex
              absolute left-1/2
              -translate-x-1/2
              items-center
              gap-6 lg:gap-8
              text-white
              text-sm lg:text-md
            "
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.2,
              ease: "easeOut",
            }}
          >
            {navigation.map((item, i) => (
              <motion.div
                key={item.name}
                className="relative group cursor-pointer whitespace-nowrap"
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.25 + i * 0.05,
                }}
              >
                <Link to={item.path}>
                  {item.name}
                </Link>

                <span
                  className="
                    absolute
                    left-0
                    -bottom-1
                    h-[2px]
                    bg-white
                    w-full
                    scale-x-0
                    origin-right
                    transition-transform
                    duration-300
                    group-hover:scale-x-100
                    group-hover:origin-left
                  "
                />
              </motion.div>
            ))}
          </motion.nav>

          {/* Desktop Contact Button */}
          <motion.div
            className="hidden md:block shrink-0"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.25,
            }}
          >
            <Link to="/contact" className="btn-gold">
              <span className="relative z-10">Contact</span>
            </Link>
          </motion.div>

          {/* Mobile Hamburger */}
          <motion.button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="
              md:hidden
              flex
              items-center
              justify-center
              w-11
              h-11
              shrink-0
              text-white
              rounded-full
              hover:bg-white/10
              active:bg-white/20
              transition
            "
            onClick={cycleOpen}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.2,
            }}
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </motion.button>
        </div>
      </header>

      {/* Mobile Menu */}
      <motion.div
        className="
          fixed
          top-[72px]
          sm:top-[80px]
          left-4
          right-4
          bg-black/95
          backdrop-blur-xl
          border border-white/10
          rounded-2xl
          overflow-hidden
          z-[998]
          md:hidden
        "
        initial={{ height: 0, opacity: 0 }}
        animate={
          open
            ? { height: "auto", opacity: 1 }
            : { height: 0, opacity: 0 }
        }
        transition={{
          type: "spring",
          stiffness: 120,
          damping: 20,
        }}
      >
        <nav className="flex flex-col px-5 py-5">
          {[
            ...navigation,
            { name: "Contact", path: "/contact" },
          ].map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, x: -20 }}
              animate={open ? { opacity: 1, x: 0 } : {}}
              transition={{
                delay: 0.05 + i * 0.03,
              }}
            >
              <Link
                to={item.path}
                onClick={() => cycleOpen()}
                className="
                  flex
                  items-center
                  min-h-[48px]
                  py-2
                  text-base
                  text-white
                  border-b
                  border-white/10
                  last:border-b-0
                "
              >
                {item.name}
              </Link>
            </motion.div>
          ))}
        </nav>
      </motion.div>
    </>
  );
}

export default Navbar;
