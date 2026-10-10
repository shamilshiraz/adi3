import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const sections = [
  { id: "acceptance", label: "Acceptance" },
  { id: "services", label: "Our services" },
  { id: "consultations", label: "Consultations" },
  { id: "content", label: "Website content" },
  { id: "intellectual-property", label: "Intellectual property" },
  { id: "liability", label: "Liability" },
  { id: "privacy", label: "Privacy" },
  { id: "contact", label: "Contact" },
];

export default function TermsPage() {
  return (
    <main className="bg-[#FAFAFA]">
      <section className="relative overflow-hidden bg-black page-padding pb-20 pt-36 text-white sm:pb-24 sm:pt-44 lg:pb-28 lg:pt-52">
        <div className="pointer-events-none absolute -right-40 top-0 h-[460px] w-[460px] rounded-full bg-[#D4AF37]/10 blur-[150px]" />

        <div className="container-custom relative">
          <p className="eyebrow">LEGAL INFORMATION</p>
          <h1 className="display-heading display-heading-lg mt-6 max-w-4xl">
            Terms &amp;
            <br />
            <span className="text-white/40">Conditions</span>
          </h1>
          <p className="sub mt-7 max-w-2xl text-white/65 sm:mt-8">
            The terms that apply when you use the ADHIHAVEN website, request a
            consultation, or register interest in one of our events.
          </p>
          <p className="mt-6 text-xs uppercase tracking-[0.18em] text-white/40">
            Last updated: 9 October 2026
          </p>
        </div>
      </section>

      <section className="page-padding section-spacing">
        <div className="container-custom grid gap-12 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-20">
          <aside className="h-fit lg:sticky lg:top-28">
            <p className="eyebrow">ON THIS PAGE</p>
            <nav
              aria-label="Terms and conditions sections"
              className="mt-5 grid grid-cols-2 gap-x-5 gap-y-3 text-sm text-black/55 lg:grid-cols-1"
            >
              {sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="transition-colors hover:text-black"
                >
                  {section.label}
                </a>
              ))}
            </nav>
          </aside>

          <article className="min-w-0 rounded-[28px] border border-black/8 bg-white p-6 shadow-[0_20px_70px_rgba(0,0,0,0.05)] sm:p-10 lg:p-14">
            <div className="space-y-12 text-sm leading-7 text-black/65 sm:text-base sm:leading-8">
              <section id="acceptance" className="scroll-mt-28">
                <h2 className="heading-3 text-black">1. Acceptance of these terms</h2>
                <p className="mt-4">
                  By accessing or using the ADHIHAVEN website, you agree to
                  these Terms &amp; Conditions. If you do not agree with them,
                  please do not use the website. We may update these terms from
                  time to time, and the latest version will be published on this
                  page.
                </p>
              </section>

              <section id="services" className="scroll-mt-28">
                <h2 className="heading-3 text-black">2. Our services</h2>
                <p className="mt-4">
                  ADHIHAVEN provides real-estate information, investment
                  introductions, consultation services, and event registration
                  support relating primarily to Dubai property opportunities.
                  The availability of any property, project, developer,
                  event, or advisory service may change without notice.
                </p>
              </section>

              <section id="consultations" className="scroll-mt-28">
                <h2 className="heading-3 text-black">3. Consultations and enquiries</h2>
                <p className="mt-4">
                  Information submitted through our forms is used to respond to
                  your enquiry and arrange relevant follow-up. Submitting an
                  enquiry does not create an agency, brokerage, investment, or
                  contractual relationship unless separately agreed in writing.
                </p>
                <p className="mt-4">
                  You are responsible for providing accurate contact details and
                  for notifying us if your information changes.
                </p>
              </section>

              <section id="content" className="scroll-mt-28">
                <h2 className="heading-3 text-black">4. Website content</h2>
                <p className="mt-4">
                  Website content is provided for general information only. It
                  should not be treated as financial, legal, tax, valuation, or
                  investment advice. Property prices, returns, payment plans,
                  availability, timelines, and market conditions can change.
                </p>
                <p className="mt-4">
                  You should obtain independent professional advice and verify
                  project information before making a financial decision.
                </p>
              </section>

              <section id="intellectual-property" className="scroll-mt-28">
                <h2 className="heading-3 text-black">5. Intellectual property</h2>
                <p className="mt-4">
                  Unless otherwise stated, the ADHIHAVEN name, branding, copy,
                  layouts, graphics, and original website materials belong to
                  ADHIHAVEN or are used with permission. You may view the site
                  for personal, non-commercial purposes, but you may not copy,
                  republish, or commercially exploit its content without prior
                  written permission.
                </p>
              </section>

              <section id="liability" className="scroll-mt-28">
                <h2 className="heading-3 text-black">6. Availability and liability</h2>
                <p className="mt-4">
                  We aim to keep the website accurate and available, but we do
                  not guarantee that it will always be uninterrupted, complete,
                  or free from errors. To the extent permitted by applicable
                  law, ADHIHAVEN is not responsible for losses arising from
                  reliance on general website information, third-party content,
                  or temporary website unavailability.
                </p>
              </section>

              <section id="privacy" className="scroll-mt-28">
                <h2 className="heading-3 text-black">7. Privacy and third-party services</h2>
                <p className="mt-4">
                  Information submitted through the website is handled for
                  enquiry and follow-up purposes. The site may use third-party
                  services for form delivery, maps, imagery, analytics, or
                  links. Those services may have their own terms and privacy
                  policies, which you should review when appropriate.
                </p>
              </section>

              <section id="contact" className="scroll-mt-28">
                <h2 className="heading-3 text-black">8. Contact us</h2>
                <p className="mt-4">
                  If you have a question about these terms or the website,
                  please contact the ADHIHAVEN team at
                  {" "}
                  <a
                    href="mailto:adhirealty.uae@gmail.com"
                    className="font-medium text-black underline decoration-[#D4AF37] decoration-2 underline-offset-4"
                  >
                    adhirealty.uae@gmail.com
                  </a>
                  .
                </p>
              </section>
            </div>

            <div className="mt-12 flex flex-col gap-4 rounded-[22px] bg-black p-6 text-white sm:flex-row sm:items-center sm:justify-between sm:p-7">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-[#EFBD78]">
                  Need help?
                </p>
                <p className="mt-2 text-sm text-white/65 sm:text-base">
                  Speak with the ADHIHAVEN advisory team.
                </p>
              </div>
              <Link to="/contact" className="btn-primary w-full sm:w-auto">
                Contact us
                <ArrowUpRight size={17} />
              </Link>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
