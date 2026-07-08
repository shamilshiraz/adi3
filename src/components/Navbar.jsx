"use client";

import React from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, useCycle } from "framer-motion";

function Navbar() {
  const [open, cycleOpen] = useCycle(false, true);

  return (
    <>
      {/* NAVBAR */}
      <div className="fixed  left-0 w-full  z-[999]">
        <div
          className="
            h-[10vh]
            bg-[#4E0026]
            backdrop-blur-xl
            sm:px-20
            px-4
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
          >
            <img src="./logo.png" className="h-12" alt="logo" />
          </motion.div>

          {/* Desktop Menu */}
          <motion.div
            className="hidden md:flex absolute left-1/2 -translate-x-1/2 gap-8 text-[#fff] text-md"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.2,
              ease: "easeOut",
            }}
          >
            {["Home", "Agents", "Roadshows", "Developer"].map(
              (item, i) => (
                <motion.div
                  key={item}
                  className="relative group cursor-pointer"
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.25 + i * 0.05,
                  }}
                >
                  <Link
                    to={`/${
                      item === "Home" ? "" : item.toLowerCase()
                    }`}
                  >
                    {item}
                  </Link>

                  <span
                    className="
                      absolute left-0 -bottom-1 h-[2px]
                      bg-white w-full
                      scale-x-0 origin-right
                      transition-transform duration-300
                      group-hover:scale-x-100
                      group-hover:origin-left
                    "
                  />
                </motion.div>
              )
            )}
          </motion.div>

{/* Contact Button */}
          <motion.div
            className="hidden md:block"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.25,
            }}
          >
            <Link
              to="/contact"
              className="btn-gold
              "
            >
              <span className="relative z-10">Contact</span>
            </Link>
          </motion.div>

          {/* Mobile Hamburger */}
          <motion.button
            className="md:hidden text-white"
            onClick={cycleOpen}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.2,
            }}
          >
            {open ? <X size={30} /> : <Menu size={30} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        className="
          fixed
          top-[100px]
          left-4
          right-4
          bg-black/80
          backdrop-blur-xl
          border border-white/10
          rounded-3xl
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
        <div className="flex flex-col gap-4 py-6 px-6 text-white">
          {[
            "Home",
            "Agents",
            "Events",
            "Consultations",
            "Contact",
          ].map((item, i) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, x: -20 }}
              animate={open ? { opacity: 1, x: 0 } : {}}
              transition={{
                delay: 0.05 + i * 0.03,
              }}
            >
              <Link
                to={`/${
                  item === "Home" ? "" : item.toLowerCase()
                }`}
                onClick={cycleOpen}
              >
                {item}
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </>
  );
}

export default Navbar;