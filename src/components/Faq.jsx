
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What happens during a consultation?",
    answer:
      "We discuss your goals, budget, timeline, and priorities, then explore the questions and opportunities most relevant to you. Most sessions take around 30–60 minutes.",
  },
  {
    question: "Who is the consultation for?",
    answer:
      "It is designed for first-time buyers, experienced investors, NRIs, international clients, and anyone who wants a clearer view before making a Dubai property decision.",
  },
  {
    question: "Is the first consultation complimentary?",
    answer:
      "Yes. The initial conversation is complimentary and gives us the opportunity to understand your objectives and discuss suitable next steps without obligation.",
  },
  {
    question: "Can I join from outside the UAE?",
    answer:
      "Yes. We support international clients through virtual consultations and can guide you through the key stages of considering property in Dubai.",
  },
];

export default function ConsultationFAQ() {
  const [active, setActive] = useState(0);

  return (
    <section className="relative overflow-hidden bg-[#181715] page-padding section-spacing">
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(242,192,120,0.12),transparent_45%)]" />

      <div className="container-custom relative">
        <div className="grid items-start gap-10 lg:grid-cols-[420px_1fr] lg:gap-16">
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
            className="h-fit lg:sticky lg:top-28"
          >
            <p className="eyebrow text-[#F2C078]">
              QUESTIONS WORTH ASKING
            </p>

            <h2 className="heading-3 mt-5 text-white sm:mt-6">
              The answers behind{" "}
              <span className="text-[#F2C078]">
                confident decisions.
              </span>
            </h2>

            <p className="sub mt-5 max-w-md leading-relaxed text-white/65 sm:mt-6">
              Get to know our approach, understand what to expect,
              and find clarity before taking your next step in
              Dubai real estate.
            </p>
          </motion.div>

          {/* FAQ List */}
          <div className="space-y-4 sm:space-y-5">
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
                  className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-sm transition-all duration-300 hover:border-[#F2C078]/40 sm:rounded-[28px]"
                >
                  <button
                    type="button"
                    aria-expanded={open}
                    aria-controls={`faq-answer-${index}`}
                    onClick={() =>
                      setActive(open ? -1 : index)
                    }
                    className="flex w-full items-center justify-between gap-4 p-5 text-left sm:gap-6 sm:p-7"
                  >
                    <h3 className="heading-4 min-w-0 text-white">
                      {faq.question}
                    </h3>

                    <motion.div
                      animate={{
                        rotate: open ? 180 : 0,
                        backgroundColor: open
                          ? "#F2C078"
                          : "rgba(242,192,120,0.12)",
                        color: open ? "#181715" : "#F2C078",
                      }}
                      transition={{ duration: 0.25 }}
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#F2C078]/20 sm:h-11 sm:w-11"
                    >
                      {open ? (
                        <Minus size={18} />
                      ) : (
                        <Plus size={18} />
                      )}
                    </motion.div>
                  </button>

                  <AnimatePresence initial={false}>
                    {open && (
                      <motion.div
                        id={`faq-answer-${index}`}
                        key="answer"
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
                          ease: [0.16, 1, 0.3, 1],
                        }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-5 sm:px-7 sm:pb-7">
                          <div className="mb-4 h-px bg-white/10 sm:mb-6" />

                          <p className="sub text-sm leading-7 text-white/60 sm:text-base">
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
