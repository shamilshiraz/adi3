
import { Link } from "react-router-dom";
import { CONTACT_EMAIL, CONTACT_PHONE } from "../utils/formSubmission";

const whatsappUrl = `https://wa.me/${CONTACT_PHONE}?text=${encodeURIComponent(
  "Hello ADHIHAVEN, I would like to discuss a Dubai real estate opportunity."
)}`;

const Footer = () => {
  return (
    <footer className="w-full overflow-hidden bg-black text-white">
      <div className="container-custom px-5 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-20">

        {/* MAIN FOOTER — FOUR COLUMNS */}
        <div className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-4 sm:gap-x-6 lg:gap-x-12 xl:gap-x-16">

          {/* COLUMN 1 — BRAND */}
          <div className="col-span-2 min-w-0 sm:col-span-1">
            <Link to="/" aria-label="ADHIHAVEN home" className="inline-block">
              <img
                src="/logo.png"
                alt="ADHIHAVEN"
                className="mb-6 w-32 sm:w-36"
              />
            </Link>

            <p className="max-w-xs text-sm leading-7 text-white/60">
              Your trusted partner for Dubai real estate, investment
              opportunities, and strategic property advisory.
            </p>
          </div>

          {/* COLUMN 2 — EXPLORE */}
          <div className="min-w-0">
            <h2 className="mb-6 text-xs font-medium uppercase tracking-[0.2em] text-[#F2C078]">
              Explore
            </h2>

            <nav
              aria-label="Explore"
              className="flex flex-col items-start gap-3 text-sm text-white/70"
            >
              <Link to="/" className="transition-colors hover:text-[#F2C078]">
                Home
              </Link>
              <Link to="/agents" className="transition-colors hover:text-[#F2C078]">
                Advisors
              </Link>
              <Link to="/roadshows" className="transition-colors hover:text-[#F2C078]">
                Roadshows
              </Link>
              <Link to="/developer" className="transition-colors hover:text-[#F2C078]">
                Developers
              </Link>
              <Link to="/contact" className="transition-colors hover:text-[#F2C078]">
                Contact
              </Link>
              <Link to="/terms" className="transition-colors hover:text-[#F2C078]">
                Terms &amp; Conditions
              </Link>
            </nav>
          </div>

          {/* COLUMN 3 — CONNECT */}
          <div className="min-w-0">
            <h2 className="mb-6 text-xs font-medium uppercase tracking-[0.2em] text-[#F2C078]">
              Connect
            </h2>

            <div className="flex flex-col items-start gap-3 text-sm text-white/70">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-[#F2C078]"
              >
                Instagram
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-[#F2C078]"
              >
                WhatsApp
              </a>

              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-[#F2C078]"
              >
                Facebook
              </a>

              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-[#F2C078]"
              >
                LinkedIn
              </a>

              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="break-all transition-colors hover:text-[#F2C078]"
              >
                Email us
              </a>

              <a
                href={`tel:${CONTACT_PHONE}`}
                className="transition-colors hover:text-[#F2C078]"
              >
                Call our office
              </a>
            </div>
          </div>

          {/* COLUMN 4 — VISIT US */}
          <div className="min-w-0">
            <h2 className="mb-6 text-xs font-medium uppercase tracking-[0.2em] text-[#F2C078]">
              Visit Us
            </h2>

            <p className="text-sm leading-7 text-white/70">
              Business Bay
              <br />
              Dubai, UAE
            </p>

            <div className="mt-5">
              <p className="mb-2 text-xs uppercase tracking-wider text-white/40">
                Email
              </p>

              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="break-all text-sm text-white/70 transition-colors hover:text-[#F2C078]"
              >
                {CONTACT_EMAIL}
              </a>
            </div>
          </div>
        </div>

        {/* BOTTOM DIVIDER */}
        <div className="my-10 h-px w-full bg-white/10 sm:my-12" />

        {/* COPYRIGHT & LEGAL LINKS */}
        <div className="flex flex-col gap-4 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} ADHIHAVEN. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            <a
              href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
                "Privacy policy enquiry"
              )}`}
              className="transition-colors hover:text-[#F2C078]"
            >
              Privacy Policy
            </a>

            <Link
              to="/terms"
              className="transition-colors hover:text-[#F2C078]"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
