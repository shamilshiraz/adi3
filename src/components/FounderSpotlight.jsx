import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { founder } from "../data/founder";

export default function FounderSpotlight() {
  return (
    <section id="founder" className="relative overflow-hidden bg-[#FAFAFA] page-padding section-spacing">
      <div className="container-custom">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="order-2 lg:order-1"
          >
            <p className="eyebrow">THE FOUNDER&apos;S NOTE</p>
            <h2 className="display-heading display-heading-lg mt-5 max-w-2xl text-black">
              Meet the person behind ADHIHAVEN
            </h2>
            <p className="sub mt-6 max-w-xl text-black/60">
              {founder.intro}
            </p>
            <p className="mt-5 max-w-xl text-sm leading-7 text-black/50 sm:text-base sm:leading-8">
              His work across international markets and investor events has
              shaped an approach grounded in perspective, trust, and advice
              that helps people move forward with confidence.
            </p>
            <Link to="/about" className="btn-dark mt-8 w-full sm:w-auto">
              Read Abdul&apos;s story
              <ArrowUpRight size={17} />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="order-1 lg:order-2"
          >
            <div className="relative mx-auto max-w-[520px] overflow-hidden rounded-[28px] bg-black p-2 shadow-[0_25px_80px_rgba(0,0,0,0.12)] sm:rounded-[36px] sm:p-3 lg:mx-0 lg:ml-auto">
              <img
                src={founder.image}
                alt="Mock portrait placeholder for Abdul Abid, CEO and Founder of ADHIHAVEN"
                onError={(event) => {
                  event.currentTarget.src = "/abdul-abid-placeholder.svg";
                }}
                className="aspect-[4/5] w-full rounded-[22px] object-cover sm:rounded-[28px]"
              />
              <div className="pointer-events-none absolute inset-x-7 bottom-7 flex items-end justify-between sm:inset-x-10 sm:bottom-10">
                <div>
                  <p className="text-xl font-medium text-white sm:text-2xl">{founder.name}</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.18em] text-[#EFBD78]">
                    {founder.role}
                  </p>
                </div>
                <span className="h-px w-12 bg-[#EFBD78] sm:w-20" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
