import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full overflow-hidden bg-black text-white">
      <div className="mx-auto max-w-[1440px] px-5 py-14 sm:px-8 sm:py-16 lg:px-20 lg:py-20">

        {/* TOP SECTION */}
        <div className="grid grid-cols-3 gap-x-4 gap-y-10 lg:grid-cols-4 lg:gap-16">

          {/* BRAND */}
          <div className="col-span-3 lg:col-span-1">
            <img
              src="/logo.png"
              alt="ADHI Realty"
              className="mb-6 w-28 sm:w-32"
            />

            <p className="max-w-sm text-sm leading-7 text-white/60 sm:text-base">
              Your trusted partner for Dubai real estate,
              investment opportunities, and strategic property
              advisory.
            </p>
          </div>

          {/* EXPLORE */}
          <div>
            <h4 className="mb-5 text-[10px] font-medium uppercase tracking-[0.15em] text-[#D4AF37] sm:text-xs lg:text-sm">
              Explore
            </h4>

            <nav className="flex flex-col gap-2.5 text-[11px] leading-5 text-white/70 sm:gap-3 sm:text-sm lg:text-base">

              <Link
                to="/"
                className="transition-colors hover:text-white"
              >
                Home
              </Link>

              <Link
                to="/agents"
                className="transition-colors hover:text-white"
              >
                Advisors
              </Link>

              <Link
                to="/roadshows"
                className="transition-colors hover:text-white"
              >
                Roadshows
              </Link>

              <Link
                to="/developer"
                className="transition-colors hover:text-white"
              >
                Developers
              </Link>

              <Link
                to="/contact"
                className="transition-colors hover:text-white"
              >
                Contact
              </Link>

            </nav>
          </div>

          {/* CONNECT */}
          <div>
            <h4 className="mb-5 text-[10px] font-medium uppercase tracking-[0.15em] text-[#D4AF37] sm:text-xs lg:text-sm">
              Connect
            </h4>

            <div className="flex flex-col gap-2.5 text-[11px] leading-5 text-white/70 sm:gap-3 sm:text-sm lg:text-base">

              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-white"
              >
                Instagram
              </a>

              <a
                href="https://wa.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-white"
              >
                WhatsApp
              </a>

              <a
                href="#"
                className="transition-colors hover:text-white"
              >
                Facebook
              </a>

              <a
                href="#"
                className="transition-colors hover:text-white"
              >
                LinkedIn
              </a>

            </div>
          </div>

          {/* VISIT US */}
          <div>
            <h4 className="mb-5 text-[10px] font-medium uppercase tracking-[0.15em] text-[#D4AF37] sm:text-xs lg:text-sm">
              Visit Us
            </h4>

            <div className="space-y-1.5 text-[11px] leading-5 text-white/70 sm:text-sm lg:text-base">
              <p>Business Bay</p>
              <p>Dubai, UAE</p>
            </div>

            <div className="mt-5">
              <p className="mb-1 text-[9px] uppercase tracking-wider text-white/40 sm:text-xs">
                Email
              </p>

              <a
                href="mailto:info@adhihaven.com"
                className="break-all text-[11px] text-white/80 transition-colors hover:text-[#D4AF37] sm:text-sm lg:text-base"
              >
                info@adhihaven.com
              </a>
            </div>
          </div>

        </div>

        {/* DIVIDER */}
        <div className="my-10 h-px w-full bg-white/10 sm:my-12" />

        {/* BOTTOM */}
        <div className="flex flex-col gap-4 text-[10px] text-white/40 sm:flex-row sm:items-center sm:justify-between sm:text-sm">

          <p>
            © {new Date().getFullYear()} ADHI Realty. All rights reserved.
          </p>

          <div className="flex gap-4 sm:gap-5">

            <a
              href="#"
              className="transition-colors hover:text-white"
            >
              Privacy Policy
            </a>

            <a
              href="#"
              className="transition-colors hover:text-white"
            >
              Terms
            </a>

          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;
