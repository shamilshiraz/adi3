import React from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Clock3,
  ArrowUpRight,
} from "lucide-react";

export default function ContactPage() {
  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="page-padding pt-36 pb-24">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <p className="eyebrow">
              INVESTMENT CONSULTATION
            </p>

            <h1 className="heading-3 text-[#4E0026] mt-6">
              Let's Discuss
              <br />
              Your Investment Goals
            </h1>

            <p className="sub text-[#4E0026]/70 mt-6 max-w-2xl">
              Whether you're exploring your first investment or
              expanding your portfolio, our advisors are here to
              provide tailored guidance and access to Dubai's
              most promising opportunities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact */}
      <section className="page-padding pb-32">
        <div className="container-custom grid gap-16 lg:grid-cols-[1fr_380px]">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-[32px] border border-black/5 bg-[#FAFAFA] p-2 lg:p-10"
          >
            <h2 className="heading-3 text-[#4E0026]">
              Schedule Your Consultation
            </h2>

            <p className="text-[#4E0026]/60 mt-3">
              Complete the form below and our advisory team will
              contact you within 24 hours.
            </p>

            <form className="mt-10 space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="h-14 rounded-xl border border-black/10 bg-white px-5 outline-none focus:border-[#4E0026]"
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  className="h-14 rounded-xl border border-black/10 bg-white px-5 outline-none focus:border-[#4E0026]"
                />

                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="h-14 rounded-xl border border-black/10 bg-white px-5 outline-none focus:border-[#4E0026]"
                />

                <input
                  type="text"
                  placeholder="Country"
                  className="h-14 rounded-xl border border-black/10 bg-white px-5 outline-none focus:border-[#4E0026]"
                />

                <select className="h-14 rounded-xl border border-black/10 bg-white px-5 outline-none focus:border-[#4E0026]">
                  <option>Investment Budget</option>
                  <option>Below AED 1M</option>
                  <option>AED 1M – AED 3M</option>
                  <option>AED 3M – AED 5M</option>
                  <option>AED 5M+</option>
                </select>

                <select className="h-14 rounded-xl border border-black/10 bg-white px-5 outline-none focus:border-[#4E0026]">
                  <option>Investment Goal</option>
                  <option>Rental Income</option>
                  <option>Capital Appreciation</option>
                  <option>Golden Visa</option>
                  <option>Holiday Home</option>
                </select>
              </div>

              <textarea
                rows={6}
                placeholder="Tell us about your investment goals..."
                className="w-full rounded-xl border border-black/10 bg-white p-5 outline-none focus:border-[#4E0026]"
              />

              <button
                type="submit"
                className="btn-gold inline-flex items-center gap-2"
              >
                Schedule Consultation

                <ArrowUpRight size={18} />
              </button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="rounded-[28px] bg-[#4E0026] p-8 text-white">
              <h3 className="heading-4">
                Contact Information
              </h3>

              <div className="mt-8 space-y-8">
                <div className="flex gap-4">
                  <MapPin
                    className="text-[#EFBD78]"
                    size={22}
                  />

                  <div>
                    <p className="font-medium">
                      Office
                    </p>

                    <p className="text-white/70 mt-1">
                      Business Bay
                      <br />
                      Dubai, UAE
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Phone
                    className="text-[#EFBD78]"
                    size={22}
                  />

                  <div>
                    <p className="font-medium">
                      Phone
                    </p>

                    <p className="text-white/70 mt-1">
                      +971 50 123 4567
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Mail
                    className="text-[#EFBD78]"
                    size={22}
                  />

                  <div>
                    <p className="font-medium">
                      Email
                    </p>

                    <p className="text-white/70 mt-1">
                      info@adhirealty.com
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Clock3
                    className="text-[#EFBD78]"
                    size={22}
                  />

                  <div>
                    <p className="font-medium">
                      Office Hours
                    </p>

                    <p className="text-white/70 mt-1">
                      Monday – Friday
                      <br />
                      9:00 AM – 6:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-[28px] border border-black/5 bg-[#FAFAFA] p-8">
              <h3 className="heading-4 text-[#4E0026]">
                Why Book A Consultation?
              </h3>

              <ul className="mt-6 space-y-4 text-[#4E0026]/70">
                <li>• Complimentary initial strategy session</li>
                <li>• Personalized investment guidance</li>
                <li>• Access to premium Dubai developments</li>
                <li>• International investor assistance</li>
                <li>• Response within 24 hours</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Map */}
      <section className="page-padding pb-32">
        <div className="container-custom">
          <div className="overflow-hidden rounded-[32px] border border-black/5">
            <iframe
              title="Dubai Office"
              src="https://www.google.com/maps?q=Business+Bay+Dubai&output=embed"
              className="h-[500px] w-full"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </main>
  );
}