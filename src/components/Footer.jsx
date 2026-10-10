import { Link } from "react-router-dom";
import { CONTACT_EMAIL, CONTACT_PHONE } from "../utils/formSubmission";

const whatsappUrl = `https://wa.me/${CONTACT_PHONE}?text=${encodeURIComponent(
  "Hello ADHIHAVEN, I would like to discuss a Dubai real estate opportunity."
)}`;

const Footer = () => {
  return (
    <footer className="w-full overflow-hidden bg-black text-white">
      <div className="container-custom px-5 py-14 sm:px-8 sm:py-16 lg:px-20 lg:py-20">
        <div className="grid grid-cols-2 gap-x-8 gap-y-12 lg:grid-cols-4 lg:gap-16">
          <div className="col-span-2 min-w-0 lg:col-span-1">
            <Link to="/" aria-label="ADHIHAVEN home">
              <img
                src="/logo.png"
                alt="ADHIHAVEN"
                className="mb-6 w-32 sm:w-36"
              />
            </Link>

            <p className="max-w-sm text-sm leading-7 text-white/60 sm:text-base">
              A clearer way to approach Dubai property, from the first question
              to the next considered move.
            </p>
          </div>

          <div className="min-w-0">
            <h2 className="mb-5 text-[10px] font-medium uppercase tracking-[0.15em] text-[#D4AF37] sm:text-xs lg:text-sm">
              Explore
            </h2>

            <nav className="flex flex-col gap-3 text-xs leading-5 text-white/70 sm:text-sm lg:text-base">
              <Link to="/" className="transition-colors hover:text-white">
                Home
              </Link>
              <Link to="/about" className="transition-colors hover:text-white">
                About
              </Link>
              <Link to="/agents" className="transition-colors hover:text-white">
                Advisors
              </Link>
              <Link to="/roadshows" className="transition-colors hover:text-white">
                Roadshows
              </Link>
              <Link to="/developer" className="transition-colors hover:text-white">
                Consultation
              </Link>
              <Link to="/contact" className="transition-colors hover:text-white">
                Contact
              </Link>
            </nav>
          </div>

          <div className="min-w-0">
            <h2 className="mb-5 text-[10px] font-medium uppercase tracking-[0.15em] text-[#D4AF37] sm:text-xs lg:text-sm">
              Connect
            </h2>

            <div className="flex flex-col gap-3 text-xs leading-5 text-white/70 sm:text-sm lg:text-base">
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="break-all transition-colors hover:text-white"
              >
                Email us
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-white"
              >
                WhatsApp
              </a>
              <a
                href={`tel:${CONTACT_PHONE}`}
                className="transition-colors hover:text-white"
              >
                Call our office
              </a>
            </div>
          </div>

          <div className="min-w-0">
            <h2 className="mb-5 text-[10px] font-medium uppercase tracking-[0.15em] text-[#D4AF37] sm:text-xs lg:text-sm">
              Visit us
            </h2>

            <div className="space-y-1.5 text-xs leading-5 text-white/70 sm:text-sm lg:text-base">
              <p>Business Bay</p>
              <p>Dubai, UAE</p>
            </div>

            <div className="mt-5 min-w-0">
              <p className="mb-1 text-[9px] uppercase tracking-wider text-white/40 sm:text-xs">
                Email
              </p>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="break-all text-xs text-white/80 transition-colors hover:text-[#D4AF37] sm:text-sm lg:text-base"
              >
                {CONTACT_EMAIL}
              </a>
            </div>
          </div>
        </div>

        <div className="my-10 h-px w-full bg-white/10 sm:my-12" />

        <div className="flex flex-col gap-4 text-[10px] text-white/40 sm:flex-row sm:items-center sm:justify-between sm:text-sm">
          <p>© {new Date().getFullYear()} ADHIHAVEN. All rights reserved.</p>

          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <a
              href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("Privacy policy enquiry")}`}
              className="transition-colors hover:text-white"
            >
              Privacy enquiries
            </a>
            <Link to="/terms" className="transition-colors hover:text-white">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
