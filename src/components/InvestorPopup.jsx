
import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { submitLeadForm } from "../utils/formSubmission";

const initialForm = {
  fullName: "",
  email: "",
  phone: "",
};

export default function InvestorPopup() {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState({
    type: "idle",
    message: "",
  });

  const closePopup = useCallback(() => {
    try {
      localStorage.setItem("adhihaven-popup", "true");
    } catch {
      // The popup should still close when storage is unavailable.
    }

    setOpen(false);
  }, []);

  useEffect(() => {
    const seen = (() => {
  try {
    return Boolean(localStorage.getItem("adhihaven-popup"));
  } catch {
    return false;
  }
})();

if (seen) return undefined;

    if (seen) return undefined;

    const timer = setTimeout(() => setOpen(true), 1800);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!open) return undefined;

    const closeOnEscape = (event) => {
      if (event.key === "Escape") closePopup();
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [closePopup, open]);

  const updateField = (event) => {
    const { name, value } = event.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setStatus({
      type: "loading",
      message: "Sending your details…",
    });

    try {
      await submitLeadForm(
        {
          "Full name": form.fullName,
          Email: form.email,
          Phone: form.phone,
          _replyto: form.email,
        },
        "New ADHIHAVEN roadshow registration"
      );

      setForm(initialForm);

      setStatus({
        type: "success",
        message:
          "You are registered. We will be in touch with the next details.",
      });
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error.message ||
          "We could not send your details. Please try again.",
      });
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closePopup}
            className="fixed inset-0 z-[1000] bg-black/70 backdrop-blur-md"
            aria-hidden="true"
          />

          {/* Popup */}
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="investor-popup-title"
            initial={{
              opacity: 0,
              y: 30,
              scale: 0.96,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: 30,
              scale: 0.96,
            }}
            transition={{
              duration: 0.45,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="fixed left-1/2 top-1/2 z-[1001] max-h-[calc(100dvh-1.5rem)] w-[calc(100%-1.5rem)] max-w-md -translate-x-1/2 -translate-y-1/2 overflow-y-auto overscroll-contain sm:max-h-[calc(100dvh-3rem)] sm:w-[92%]"
          >
            <div className="relative overflow-hidden rounded-[26px] border border-[#F2C078]/20 bg-[#181715] p-5 shadow-[0_25px_100px_rgba(0,0,0,0.6)] sm:rounded-[32px] sm:p-8">
              {/* Decorative glow */}
              <div className="pointer-events-none absolute right-0 top-0 h-56 w-56 rounded-full bg-[#F2C078]/[0.08] blur-[90px]" />

              <div className="relative">
                {/* Close button */}
                <button
                  type="button"
                  onClick={closePopup}
                  aria-label="Close investor roadshow registration"
                  className="absolute right-0 top-0 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/60 transition hover:border-[#F2C078]/40 hover:bg-white/5 hover:text-[#F2C078]"
                >
                  <span aria-hidden="true" className="text-lg">
                    ✕
                  </span>
                </button>

                {/* Eyebrow */}
                <span className="inline-flex rounded-full border border-[#F2C078]/25 bg-[#F2C078]/[0.08] px-3 py-2 text-[9px] font-medium uppercase tracking-[0.2em] text-[#F2C078] sm:px-4 sm:text-[10px]">
                  Private invitations
                </span>

                {/* Heading */}
                <h2
                  id="investor-popup-title"
                  className="mt-5 max-w-sm pr-6 text-[27px] font-light leading-[1.2] tracking-[-0.04em] text-white sm:mt-6 sm:text-4xl"
                >
                  Meet your next{" "}
                  <span className="text-[#F2C078]">
                    opportunity.
                  </span>
                </h2>

                <p className="mt-3 max-w-sm text-sm leading-6 text-white/60 sm:mt-4">
                  Join exclusive ADHIHAVEN property briefings and
                  receive invitations to curated conversations
                  about Dubai real estate.
                </p>

                {/* Registration form */}
                <form
                  onSubmit={handleSubmit}
                  className="mt-6 space-y-3 sm:mt-7 sm:space-y-4"
                >
                  <label
                    className="sr-only"
                    htmlFor="popup-fullName"
                  >
                    Full name
                  </label>

                  <input
                    id="popup-fullName"
                    name="fullName"
                    type="text"
                    autoComplete="name"
                    required
                    value={form.fullName}
                    onChange={updateField}
                    placeholder="Full name"
                    className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-white/35 focus:border-[#F2C078]/70 focus:bg-white/[0.06] focus:ring-2 focus:ring-[#F2C078]/10 sm:rounded-2xl sm:py-4"
                  />

                  <label
                    className="sr-only"
                    htmlFor="popup-email"
                  >
                    Email address
                  </label>

                  <input
                    id="popup-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={form.email}
                    onChange={updateField}
                    placeholder="Email address"
                    className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-white/35 focus:border-[#F2C078]/70 focus:bg-white/[0.06] focus:ring-2 focus:ring-[#F2C078]/10 sm:rounded-2xl sm:py-4"
                  />

                  <label
                    className="sr-only"
                    htmlFor="popup-phone"
                  >
                    Phone number
                  </label>

                  <input
                    id="popup-phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    required
                    value={form.phone}
                    onChange={updateField}
                    placeholder="Phone number"
                    className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-white/35 focus:border-[#F2C078]/70 focus:bg-white/[0.06] focus:ring-2 focus:ring-[#F2C078]/10 sm:rounded-2xl sm:py-4"
                  />

                  {/* Submission status */}
                  {status.type !== "idle" && (
                    <div
                      role={
                        status.type === "error"
                          ? "alert"
                          : "status"
                      }
                      aria-live="polite"
                      className={`flex items-start gap-2 rounded-xl px-4 py-3 text-sm leading-5 sm:rounded-2xl ${
                        status.type === "success"
                          ? "bg-emerald-400/10 text-emerald-200"
                          : status.type === "error"
                            ? "bg-red-400/10 text-red-200"
                            : "bg-white/5 text-white/70"
                      }`}
                    >
                      {status.type === "success" && (
                        <CheckCircle2
                          className="mt-0.5 shrink-0"
                          size={17}
                        />
                      )}

                      <span>{status.message}</span>
                    </div>
                  )}

                  {/* Submit button */}
                  <button
                    type="submit"
                    disabled={status.type === "loading"}
                    className="group flex w-full items-center justify-center gap-2 rounded-xl bg-[#F2C078] px-5 py-3.5 text-sm font-medium text-[#181715] transition duration-300 hover:bg-[#E5B166] disabled:cursor-not-allowed disabled:opacity-60 sm:rounded-2xl sm:py-4"
                  >
                    {status.type === "loading"
                      ? "Sending details…"
                      : status.type === "success"
                        ? "Request another invitation"
                        : "Request an invitation"}

                    <ArrowUpRight
                      size={17}
                      className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </button>

                  <p className="px-2 text-center text-[10px] leading-5 text-white/35 sm:text-xs">
                    Your details are used to follow up on your
                    registration.
                  </p>
                </form>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
