
import { motion } from "framer-motion";
import {
  Globe,
  Building2,
  Landmark,
  TrendingUp,
} from "lucide-react";

const features = [
  {
    icon: Globe,
    title: "Global Reach",
    description:
      "Access investment opportunities across Dubai, London, Riyadh, and emerging international markets.",
  },
  {
    icon: Building2,
    title: "Developer Network",
    description:
      "Direct relationships with leading developers provide priority access to premium inventory.",
  },
  {
    icon: Landmark,
    title: "Advisory Expertise",
    description:
      "Market-driven guidance designed to align opportunities with long-term investment objectives.",
  },
  {
    icon: TrendingUp,
    title: "Growth Focused",
    description:
      "Investment strategies built around capital appreciation, rental yield, and portfolio diversification.",
  },
];

export default function WhyChooseAdhiWhite() {
  return (
    <section className="bg-white py-32">
      <div className="container mx-auto px-4 sm:px-20">
        <div className="max-w-3xl">
          <p className="eyebrow text-[#8B6A3E]">
            WHY INVESTORS CHOOSE ADHI
          </p>

          <h2 className="heading-2 mt-6 text-black">
            Trusted Guidance For
            <br />
            Global Property Investments
          </h2>
        </div>

        <div className="mt-20 grid gap-6 md:grid-cols-2">
          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.8,
                }}
                className="
                  group
                  rounded-[32px]
                  border
                  border-black/5
                  bg-[#FAFAFA]
                  p-4
                  sm:p-10
                  transition-all
                  hover:-translate-y-2
                  hover:shadow-xl
                "
              >
                <div
                  className="
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-2xl
                    bg-[#EFBD78]/10
                  "
                >
                  <Icon
                    size={28}
                    strokeWidth={1.5}
                    className="text-[#C48A3A]"
                  />
                </div>

                <h3 className="mt-8 text-2xl text-black">
                  {item.title}
                </h3>

                <p className="mt-4 leading-relaxed text-black/60">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
