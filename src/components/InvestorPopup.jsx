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
  const [status, setStatus] = useState({ type: "idle", message: "" });

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
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus({ type: "loading", message: "Sending your details…" });

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
        message: "You are registered. We will be in touch with the next details.",
      });
    } catch (error) {
      setStatus({
        type: "error",
        message: error.message || "We could not send your details. Please try again.",
      });
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closePopup}
            className="fixed inset-0 z-[1000] bg-black/55 backdrop-blur-md"
            aria-hidden="true"
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="investor-popup-title"
            initial={{ opacity: 0, y: 30, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.96 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="fixed left-1/2 top-1/2 z-[1001] max-h-[calc(100svh-2rem)] w-[calc(100%-2rem)] max-w-md -translate-x-1/2 -translate-y-1/2 overflow-y-auto sm:w-[92%]"
          >
            <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[#111]/95 p-6 shadow-[0_20px_80px_rgba(0,0,0,0.45)] backdrop-blur-2xl sm:rounded-[32px] sm:p-8">
              <button
                type="button"
                onClick={closePopup}
                aria-label="Close investor roadshow registration"
                className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full text-lg text-white/50 transition hover:bg-white/10 hover:text-white"
              >
                <span aria-hidden="true">✕</span>
              </button>

              <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[10px] uppercase tracking-[0.2em] text-white/70">
                Private invitations
              </span>

              <h2 id="investor-popup-title" className="mt-5 pr-8 text-3xl font-light text-white">
                Meet the opportunity in person
              </h2>

              <p className="mt-3 text-sm leading-6 text-white/60">
                Join selected ADHIHAVEN briefings and receive invitations to
                upcoming property conversations.
              </p>

              <form onSubmit={handleSubmit} className="mt-7 space-y-4">
                <label className="sr-only" htmlFor="popup-fullName">
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
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-white/40 focus:border-[#D4AF37]/70 focus:ring-2 focus:ring-[#D4AF37]/15"
                />

                <label className="sr-only" htmlFor="popup-email">
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
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-white/40 focus:border-[#D4AF37]/70 focus:ring-2 focus:ring-[#D4AF37]/15"
                />

                <label className="sr-only" htmlFor="popup-phone">
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
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-white/40 focus:border-[#D4AF37]/70 focus:ring-2 focus:ring-[#D4AF37]/15"
                />

                {status.type !== "idle" && (
                  <div
                    role={status.type === "error" ? "alert" : "status"}
                    aria-live="polite"
                    className={`flex items-start gap-2 rounded-2xl px-4 py-3 text-sm leading-5 ${
                      status.type === "success"
                        ? "bg-emerald-400/15 text-emerald-200"
                        : status.type === "error"
                          ? "bg-red-400/15 text-red-200"
                          : "bg-white/10 text-white/70"
                    }`}
                  >
                    {status.type === "success" && <CheckCircle2 className="mt-0.5 shrink-0" size={17} />}
                    <span>{status.message}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status.type === "loading"}
                  className="flex w-full items-center justify-center gap-2 rounded-2xl bg-[#EFBD78] py-3 font-medium text-black transition hover:bg-[#D4AF37]"
                >
                  {status.type === "loading" ? "Sending…" : "Request an invitation"}
                  <ArrowUpRight size={17} />
                </button>
              </form>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
