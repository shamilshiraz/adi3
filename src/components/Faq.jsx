import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "How long is the consultation?",
    answer:
      "Our investment strategy sessions typically last between 30–60 minutes, depending on your investment goals, experience, and the topics you'd like to discuss with your advisor.",
  },
  {
    question: "Who is the consultation for?",
    answer:
      "The consultation is ideal for first-time investors, experienced buyers, NRIs, international investors, and anyone looking to invest confidently in Dubai real estate.",
  },
  {
    question: "Is there any cost for the consultation?",
    answer:
      "Your initial strategy session is completely complimentary. It allows us to understand your objectives, answer your questions, and recommend suitable investment opportunities without any obligation.",
  },
  {
    question: "Can international investors join?",
    answer:
      "Absolutely. We regularly advise investors from around the world through virtual consultations and provide complete support throughout the Dubai property investment process.",
  },
];

export default function ConsultationFAQ() {
  const [active, setActive] = useState(0);

  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#4E0026]
        page-padding
        section-spacing
      "
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(239,189,120,0.12),transparent_45%)]" />

      <div className="container-custom relative">
        <div className="grid lg:grid-cols-[420px_1fr] gap-16">
          {/* Left Content */}
          <motion.div
            initial={{
              opacity: 0,
              y: 40,
              filter: "blur(10px)",
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="lg:sticky lg:top-28 h-fit"
          >
            <p className="eyebrow">
              FREQUENTLY ASKED QUESTIONS
            </p>

            <h2 className="heading-3 text-white mt-6">
              Everything You
              <br />
              Need To Know
            </h2>

            <p className="sub text-white/70 mt-6 max-w-md">
              Before booking your investment consultation,
              here are the questions we hear most often from
              investors across the world.
            </p>
          </motion.div>

          {/* FAQ List */}
          <div className="space-y-5">
            {faqs.map((faq, index) => {
              const open = active === index;

              return (
                <motion.div
                  key={faq.question}
                  initial={{
                    opacity: 0,
                    y: 30,
                    filter: "blur(8px)",
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)",
                  }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.08,
                    duration: 0.7,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="
                    overflow-hidden
                    rounded-[28px]
                    border
                    border-white/10
                    bg-white/5
                    backdrop-blur-sm
                    transition-all
                    duration-300
                    hover:border-[#EFBD78]/40
                  "
                >
                  <button
                    onClick={() =>
                      setActive(open ? -1 : index)
                    }
                    className="
                      flex
                      w-full
                      items-center
                      justify-between
                      gap-6
                      p-7
                      text-left
                    "
                  >
                    <h3 className="heading-4 text-white">
                      {faq.question}
                    </h3>

                    <div
                      className="
                        flex
                        h-11
                        w-11
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        bg-[#EFBD78]
                        text-[#4E0026]
                      "
                    >
                      {open ? (
                        <Minus size={18} />
                      ) : (
                        <Plus size={18} />
                      )}
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {open && (
                      <motion.div
                        initial={{
                          height: 0,
                          opacity: 0,
                        }}
                        animate={{
                          height: "auto",
                          opacity: 1,
                        }}
                        exit={{
                          height: 0,
                          opacity: 0,
                        }}
                        transition={{
                          duration: 0.35,
                        }}
                      >
                        <div className="px-7 pb-7">
                          <div className="mb-6 h-px bg-white/10" />

                          <p className="sub leading-relaxed text-white/70">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}