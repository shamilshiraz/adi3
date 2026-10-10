import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  CheckCircle2,
  Clock3,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import {
  CONTACT_EMAIL,
  CONTACT_PHONE,
  submitLeadForm,
} from "../utils/formSubmission";

const initialForm = {
  fullName: "",
  email: "",
  phone: "",
  country: "",
  budget: "",
  goal: "",
  message: "",
};

export default function ContactPage() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState({ type: "idle", message: "" });

  const updateField = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus({ type: "loading", message: "Sending your request…" });

    try {
      await submitLeadForm(
        {
          "Full name": form.fullName,
          Email: form.email,
          Phone: form.phone,
          Country: form.country,
          "Investment budget": form.budget,
          "Investment goal": form.goal,
          Message: form.message,
          _replyto: form.email,
        },
        "New ADHIHAVEN consultation request"
      );

      setForm(initialForm);
      setStatus({
        type: "success",
        message:
          "Thank you. Your request has been sent and our team will contact you within 24 hours.",
      });
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error.message ||
          `We could not send your request. Please email ${CONTACT_EMAIL} directly.`,
      });
    }
  };

  return (
    <main className="bg-[#FAFAFA]">
      <section className="relative overflow-hidden bg-black page-padding pb-20 pt-36 text-white sm:pb-24 sm:pt-44 lg:pb-28 lg:pt-52">
        <div className="pointer-events-none absolute -right-40 top-0 h-[480px] w-[480px] rounded-full bg-[#D4AF37]/10 blur-[150px]" />

        <div className="container-custom relative">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl"
          >
            <p className="eyebrow">START WITH A CONVERSATION</p>

            <h1 className="display-heading display-heading-lg mt-6 max-w-4xl">
              Let&apos;s make your next move
              <br />
              <span className="text-white/40">clearer.</span>
            </h1>

            <p className="sub mt-7 max-w-2xl text-white/65 sm:mt-8">
              Tell us what you are considering. We&apos;ll help you make sense of
              the market, the options, and the next step for your Dubai
              property journey.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="page-padding section-spacing">
        <div className="container-custom grid gap-10 lg:grid-cols-[minmax(0,1fr)_380px] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-[28px] border border-black/8 bg-white p-5 shadow-[0_20px_70px_rgba(0,0,0,0.06)] sm:rounded-[32px] sm:p-8 lg:p-10"
          >
            <div className="max-w-2xl">
              <p className="eyebrow">YOUR NEXT STEP</p>
              <h2 className="heading-3 mt-4 text-black">
                Tell us what you are looking for
              </h2>
              <p className="mt-4 text-sm leading-7 text-black/60 sm:text-base">
                Share a little about your goals and our advisory team will
                respond within 24 hours.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="mt-8 space-y-5 sm:mt-10">
              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label htmlFor="fullName" className="form-label">
                    Full name
                  </label>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    autoComplete="name"
                    required
                    value={form.fullName}
                    onChange={updateField}
                    placeholder="Your full name"
                    className="form-input"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="form-label">
                    Email address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={form.email}
                    onChange={updateField}
                    placeholder="you@example.com"
                    className="form-input"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="form-label">
                    Phone number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    required
                    value={form.phone}
                    onChange={updateField}
                    placeholder="+971 50 000 0000"
                    className="form-input"
                  />
                </div>

                <div>
                  <label htmlFor="country" className="form-label">
                    Country of residence
                  </label>
                  <input
                    id="country"
                    name="country"
                    type="text"
                    autoComplete="country-name"
                    required
                    value={form.country}
                    onChange={updateField}
                    placeholder="United Arab Emirates"
                    className="form-input"
                  />
                </div>

                <div>
                  <label htmlFor="budget" className="form-label">
                    Investment budget
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    required
                    value={form.budget}
                    onChange={updateField}
                    className="form-input"
                  >
                    <option value="" disabled>
                      Select a budget
                    </option>
                    <option>Below AED 1M</option>
                    <option>AED 1M – AED 3M</option>
                    <option>AED 3M – AED 5M</option>
                    <option>AED 5M+</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="goal" className="form-label">
                    Investment goal
                  </label>
                  <select
                    id="goal"
                    name="goal"
                    required
                    value={form.goal}
                    onChange={updateField}
                    className="form-input"
                  >
                    <option value="" disabled>
                      Select a goal
                    </option>
                    <option>Rental income</option>
                    <option>Capital appreciation</option>
                    <option>Golden Visa</option>
                    <option>Holiday home</option>
                    <option>Portfolio diversification</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="form-label">
                  Tell us about your goals
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  value={form.message}
                  onChange={updateField}
                    placeholder="What are you hoping to achieve? Share any locations, timelines, or questions…"
                  className="form-input min-h-36 resize-y py-4"
                />
              </div>

              {status.type !== "idle" && (
                <div
                  role={status.type === "error" ? "alert" : "status"}
                  aria-live="polite"
                  className={`flex items-start gap-3 rounded-2xl px-4 py-3 text-sm leading-6 ${
                    status.type === "success"
                      ? "bg-emerald-50 text-emerald-800"
                      : status.type === "error"
                        ? "bg-red-50 text-red-800"
                        : "bg-black/5 text-black/65"
                  }`}
                >
                  {status.type === "success" && (
                    <CheckCircle2 className="mt-0.5 shrink-0" size={18} />
                  )}
                  <span>{status.message}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={status.type === "loading"}
                className="btn-primary w-full sm:w-auto"
              >
                {status.type === "loading" ? "Sending…" : "Send your enquiry"}
                <ArrowUpRight size={18} />
              </button>
            </form>
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-5"
          >
            <div className="rounded-[28px] bg-black p-7 text-white sm:p-8">
              <p className="eyebrow">FIND ADHIHAVEN</p>
              <h2 className="heading-4 mt-4">Let&apos;s stay connected</h2>

              <div className="mt-8 space-y-7">
                <div className="flex gap-4">
                  <MapPin className="shrink-0 text-[#EFBD78]" size={21} />
                  <div>
                    <p className="font-medium">Office</p>
                    <p className="mt-1 text-sm leading-6 text-white/65">
                      Business Bay
                      <br />
                      Dubai, UAE
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Phone className="shrink-0 text-[#EFBD78]" size={21} />
                  <div>
                    <p className="font-medium">Phone</p>
                    <a
                      href={`tel:${CONTACT_PHONE}`}
                      className="mt-1 block text-sm text-white/65 transition-colors hover:text-[#EFBD78]"
                    >
                      +971 50 123 4567
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Mail className="shrink-0 text-[#EFBD78]" size={21} />
                  <div>
                    <p className="font-medium">Email</p>
                    <a
                      href={`mailto:${CONTACT_EMAIL}`}
                      className="mt-1 block break-all text-sm text-white/65 transition-colors hover:text-[#EFBD78]"
                    >
                      {CONTACT_EMAIL}
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Clock3 className="shrink-0 text-[#EFBD78]" size={21} />
                  <div>
                    <p className="font-medium">Office hours</p>
                    <p className="mt-1 text-sm leading-6 text-white/65">
                      Monday – Friday
                      <br />
                      9:00 AM – 6:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-[28px] border border-[#D4AF37]/20 bg-[#D4AF37]/10 p-7 sm:p-8">
              <h2 className="heading-4 text-black">Why start the conversation?</h2>
              <ul className="mt-5 space-y-3 text-sm leading-6 text-black/65">
                <li>• Complimentary initial strategy session</li>
                <li>• Personalized investment guidance</li>
                <li>• Access to premium Dubai developments</li>
                <li>• International investor assistance</li>
                <li>• Response within 24 hours</li>
              </ul>
            </div>
          </motion.aside>
        </div>
      </section>

      <section className="page-padding pb-20 sm:pb-28 lg:pb-32">
        <div className="container-custom">
          <div className="overflow-hidden rounded-[28px] border border-black/8 bg-white p-2 shadow-sm sm:rounded-[32px] sm:p-3">
            <iframe
              title="ADHIHAVEN office in Business Bay, Dubai"
              src="https://www.google.com/maps?q=Business+Bay+Dubai&output=embed"
              className="h-[320px] w-full rounded-[22px] border-0 sm:h-[480px] sm:rounded-[24px]"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
