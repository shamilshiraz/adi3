import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="">
    <footer className="w-full hidden sm:block overflow-hidden bg-[#4e0026] text-white px-4 sm:px-20 py-20">
                <img src="/logo.png" alt="logo" className="w-28 sm:hidden block sm:w-32 mb-4" />

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-10">

        {/* Logo */}
        <div className="min-w-0">
          <img src="/logo.png" alt="logo" className="w-28 hidden sm:block sm:w-32 mb-4" />
          <p className="text-sm sm:text-base leading-relaxed break-words">
            High-quality infrastructure, construction support, and industrial
            solutions—delivered with precision, innovation, and uncompromising
            safety.
          </p>
        </div>

        {/* Sitemap */}
        <div className="min-w-0">
          <h4 className="mb-3 font-medium">Sitemap</h4>

          <div className="flex flex-col gap-2 text-sm sm:text-base">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/services">Services</Link>
            <Link to="/blogs">Blogs</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>

        {/* Quick Links */}
        <div className="min-w-0">
          <h4 className="mb-3 font-medium">Quick Links</h4>

          <div className="flex flex-col gap-2 text-sm sm:text-base">
            <a href="https://www.instagram.com/invites/contact/?igsh=1dlgs97h494r6&utm_content=zukf6i4">
              Instagram
            </a>
            <a href="#">Snapchat</a>
            <a href="#">Facebook</a>
            <a href="#">Whatsapp</a>
          </div>
        </div>

        {/* Address */}
        <div className="min-w-0">
          <h4 className="mb-3 font-medium">Address</h4>

          <div className="space-y-1 text-sm sm:text-base break-words">
            <p>Al Hannan Market, Office No. 3</p>
            <p>Al Zuhur District, Yanbu Al Bahar</p>
            <p>Saudi Arabia</p>

            <div className="flex gap-2 pt-2">
              <span className="w-10 shrink-0">Ph:</span>
              <span className="break-all">+966 509 397408</span>
            </div>

            <div className="flex gap-2">
              <span className="w-10 shrink-0">Ph:</span>
              <span className="break-all">+966 536 482159</span>
            </div>

            <div className="flex gap-2">
              <span className="w-10 shrink-0">Mail:</span>
              <span className="break-all">
                info@saudimithal.com.sa
              </span>
            </div>
          </div>
        </div>

      </div>
    </footer>
    <footer className="w-full sm:hidden overflow-x-hidden bg-[#4e0026] text-white px-4 sm:px-20 py-20">
  {/* Logo */}
  <div className="mb-10">
    <img src="/logo.png" alt="logo" className="w-32 mb-4" />
    <p className="leading-relaxed max-w-md">
      High-quality infrastructure, construction support, and industrial
      solutions—delivered with precision, innovation, and uncompromising
      safety.
    </p>
  </div>

  {/* Footer Links */}
  <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">

    {/* Sitemap */}
    <div className="min-w-0">
      <h4 className="mb-3">Sitemap</h4>
      <div className="flex flex-col space-y-2">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
        <Link to="/blogs">Blogs</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </div>

    {/* Quick Links */}
    <div className="min-w-0">
      <h4 className="mb-3">Quick Links</h4>
      <div className="flex flex-col space-y-2">
        <a href="https://www.instagram.com/invites/contact/?igsh=1dlgs97h494r6&utm_content=zukf6i4">
          Instagram
        </a>
        <a href="#">Snapchat</a>
        <a href="#">Facebook</a>
        <a href="#">Whatsapp</a>
      </div>
    </div>

    {/* Address */}
    <div className="col-span-2 sm:col-span-1 min-w-0">
      <h4 className="mb-3">Address</h4>

      <p>Al Hannan Market, Office No. 3</p>
      <p>Al Zuhur District, Yanbu Al Bahar</p>
      <p>Saudi Arabia</p>

      <div className="flex items-start gap-2 mt-3">
        <span className="w-12 shrink-0 font-medium">Ph:</span>
        <span className="break-words">+966 509 397408</span>
      </div>

      <div className="flex items-start gap-2">
        <span className="w-12 shrink-0 font-medium">Ph:</span>
        <span className="break-words">+966 536 482159</span>
      </div>

      <div className="flex items-start gap-2">
        <span className="w-12 shrink-0 font-medium">Mail:</span>
        <span className="break-all">info@saudimithal.com.sa</span>
      </div>
    </div>

  </div>
</footer>
    </div>

  );
};

export default Footer;