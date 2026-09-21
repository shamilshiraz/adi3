import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full overflow-hidden bg-black text-white">
      <div className="mx-auto max-w-[1440px] px-5 py-14 sm:px-8 sm:py-16 lg:px-20 lg:py-20">

        {/* TOP */}
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-16">

          {/* BRAND */}
          <div className="lg:col-span-1">
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

          {/* SITEMAP */}
          <div>
            <h4 className="mb-5 text-sm font-medium uppercase tracking-[0.15em] text-[#D4AF37]">
              Explore
            </h4>

            <nav className="flex flex-col gap-3 text-sm text-white/70 sm:text-base">
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

          {/* SOCIAL */}
          <div>
            <h4 className="mb-5 text-sm font-medium uppercase tracking-[0.15em] text-[#D4AF37]">
              Connect
            </h4>

            <div className="flex flex-col gap-3 text-sm text-white/70 sm:text-base">

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

          {/* CONTACT */}
          <div>
            <h4 className="mb-5 text-sm font-medium uppercase tracking-[0.15em] text-[#D4AF37]">
              Visit Us
            </h4>

            <div className="space-y-2 text-sm leading-6 text-white/70 sm:text-base">
              <p>Business Bay</p>
              <p>Dubai, United Arab Emirates</p>
            </div>

            <div className="mt-5">
              <p className="mb-1 text-xs uppercase tracking-wider text-white/40">
                Email
              </p>

              <a
                href="mailto:info@adhihaven.com"
                className="break-all text-sm text-white/80 transition-colors hover:text-[#D4AF37] sm:text-base"
              >
                info@adhihaven.com
              </a>
            </div>
          </div>

        </div>

        {/* DIVIDER */}
        <div className="my-10 h-px w-full bg-white/10 sm:my-12" />

        {/* BOTTOM */}
        <div className="flex flex-col gap-4 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between sm:text-sm">

          <p>
            © {new Date().getFullYear()} ADHI Realty. All rights reserved.
          </p>

          <div className="flex gap-5">
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
