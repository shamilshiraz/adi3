import { motion } from "framer-motion";
import { ArrowUpRight, Compass, Globe2, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { founder } from "../data/founder";

const principles = [
  {
    icon: Globe2,
    number: "01",
    title: "International perspective",
    text: "A career shaped by diverse markets, cultures, industries, and clients.",
  },
  {
    icon: Compass,
    number: "02",
    title: "Purposeful guidance",
    text: "A focus on understanding the person behind every property decision.",
  },
  {
    icon: Users,
    number: "03",
    title: "People-first leadership",
    text: "Strong teams built around trust, performance, and shared growth.",
  },
];

const founderSkills = [
  "Real estate",
  "Strategic marketing",
  "International business",
  "Leadership",
  "Client advisory",
];

export default function AboutPage() {
  return (
    <main className="bg-[#F7F6F3]">
      {/* INTRODUCTION */}
      <section className="relative overflow-hidden bg-black page-padding pb-20 pt-36 text-white sm:pb-24 sm:pt-44 lg:pb-28 lg:pt-52">
        <div className="pointer-events-none absolute -right-48 top-0 h-[520px] w-[520px] rounded-full bg-[#D4AF37]/10 blur-[170px]" />

        <div className="container-custom relative grid gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(260px,0.85fr)] lg:items-end lg:gap-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl"
          >
            <p className="eyebrow">ABOUT ADHIHAVEN</p>
            <h1 className="display-heading display-heading-lg mt-6">
              A business built on
              <br />
              <span className="text-white/40">better conversations.</span>
            </h1>
            <p className="sub mt-7 max-w-2xl text-white/65 sm:mt-8">
              Meet Abdul Abid, CEO &amp; Founder of ADHIHAVEN—bringing together
              real estate experience, international perspective, and a belief
              that good advice begins with listening.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.12 }}
            className="border-l border-white/20 pl-6 sm:pl-8 lg:mb-1"
          >
            <p className="text-xs uppercase tracking-[0.2em] text-[#EFBD78]">
              The founder&apos;s perspective
            </p>
            <p className="mt-4 max-w-sm text-lg leading-8 text-white/75 sm:text-xl">
              “Real estate is about people before it is about property.”
            </p>
          </motion.div>
        </div>
      </section>

      {/* FOUNDER STORY */}
      <section className="page-padding section-spacing">
        <div className="container-custom grid gap-10 lg:grid-cols-[minmax(260px,0.72fr)_minmax(0,1.28fr)] lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="lg:sticky lg:top-28 lg:self-start"
          >
            <div className="overflow-hidden rounded-[26px] bg-black p-2 shadow-[0_18px_60px_rgba(0,0,0,0.12)] sm:rounded-[32px] sm:p-3">
              <img
                src={founder.image}
                alt="Mock portrait placeholder for Abdul Abid, CEO and Founder of ADHIHAVEN"
                onError={(event) => {
                  event.currentTarget.src = "/abdul-abid-placeholder.svg";
                }}
                className="aspect-[4/5] w-full rounded-[20px] object-cover sm:rounded-[24px]"
              />
            </div>

            <div className="mt-5 flex items-end justify-between border-b border-black/10 pb-5">
              <div>
                <h2 className="text-2xl font-medium tracking-[-0.03em] text-black">
                  {founder.name}
                </h2>
                <p className="mt-1 text-xs font-medium uppercase tracking-[0.18em] text-[#A87927]">
                  {founder.role}
                </p>
              </div>
              <span className="h-px w-12 bg-[#D4AF37]" />
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {founderSkills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-black/10 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.1em] text-black/50"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.article
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl"
          >
            <p className="eyebrow">A FOUNDER&apos;S STORY</p>
            <h2 className="display-heading display-heading-lg mt-5 text-black">
              Experience that turns perspective into direction.
            </h2>

            <div className="mt-8 space-y-6 text-sm leading-7 text-black/65 sm:mt-10 sm:text-base sm:leading-8">
              <p className="border-l-2 border-[#D4AF37] pl-5 text-lg leading-8 text-black/80 sm:text-xl sm:leading-9">
                With extensive experience in real estate, sales, and strategic
                marketing, I have built my career around understanding markets,
                connecting with people, and creating opportunities that deliver
                meaningful results.
              </p>

              <p>
                My professional journey has given me the opportunity to work
                with diverse markets, cultures, industries, and clients. These
                experiences have developed a strong understanding of
                international real estate and the requirements of investors
                from different backgrounds.
              </p>

              <p>
                Global travel and business exposure have further strengthened
                my ability to understand different perspectives and build
                lasting relationships.
              </p>

              <p>
                I have successfully planned and led international real estate
                roadshows and investor events across multiple markets, creating
                opportunities for clients, investors, and businesses to connect
                with the right projects and make informed decisions.
              </p>

              <p>
                As a leader, I focus on building strong, motivated, and
                performance-driven teams. Successful real estate is not only
                about selling property—it is about understanding people,
                providing the right advice, and building relationships based on
                trust.
              </p>

              <p>
                Today, as CEO &amp; Founder, my vision is to combine real estate
                expertise, strategic marketing, international experience, and
                strong leadership to create exceptional client experiences and
                sustainable growth for ADHIHAVEN.
              </p>
            </div>
          </motion.article>
        </div>
      </section>

      {/* PRINCIPLES */}
      <section className="bg-black page-padding section-spacing text-white">
        <div className="container-custom">
          <div className="max-w-2xl">
            <p className="eyebrow">THE ADHIHAVEN STANDARD</p>
            <h2 className="display-heading display-heading-lg mt-5">
              The principles behind the work.
            </h2>
          </div>

          <div className="mt-12 grid gap-8 sm:mt-16 sm:grid-cols-3 sm:gap-6 lg:gap-10">
            {principles.map((principle, index) => {
              const Icon = principle.icon;

              return (
                <motion.div
                  key={principle.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.7, delay: index * 0.08 }}
                  className="group border-t border-white/15 pt-5 sm:pt-6"
                >
                  <div className="flex items-center justify-between">
                    <Icon className="text-[#EFBD78]" size={24} strokeWidth={1.4} />
                    <span className="text-xs tracking-[0.18em] text-white/25">
                      {principle.number}
                    </span>
                  </div>
                  <h3 className="heading-4 mt-6">{principle.title}</h3>
                  <p className="mt-3 max-w-xs text-sm leading-7 text-white/55">
                    {principle.text}
                  </p>
                </motion.div>
              );
            })}
          </div>

          <div className="mt-12 flex flex-col gap-5 border-t border-white/10 pt-8 sm:mt-16 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-xl text-sm leading-7 text-white/60 sm:text-base">
              Ready to talk through your next Dubai property decision?
            </p>
            <Link to="/contact" className="btn-primary w-full sm:w-auto">
              Start a conversation
              <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
