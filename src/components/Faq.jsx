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
    <section
      className="
        relative
        overflow-hidden
        bg-black
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
               QUESTIONS WORTH ASKING
            </p>

            <h2 className="heading-3 text-white mt-6">
               Better questions.
              <br />
               Clearer decisions.
            </h2>

            <p className="sub text-white/70 mt-6 max-w-md">
               Here are the questions investors most often ask before starting
               a conversation with ADHIHAVEN.
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
                    type="button"
                    aria-expanded={open}
                    aria-controls={`faq-answer-${index}`}
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
                        text-black
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
                        id={`faq-answer-${index}`}
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
