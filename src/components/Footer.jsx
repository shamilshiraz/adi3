import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full bg-[#4e0026] text-white px-4 sm:px-20 py-20">
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-10">
        
        {/* Logo + Description */}
        <div>
          <img src="/logo.png" alt="logo" className="w-32 mb-4" />
          <p className="leading-relaxed">
            High-quality infrastructure, construction support, and industrial
            solutions—delivered with precision, innovation, and uncompromising
            safety.
          </p>
        </div>

        {/* Sitemap */}
        <div>
          <h4 className="mb-3 font-">Sitemap</h4>
          <div className="flex flex-col space-y-2">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/services">Services</Link>
            <Link to="/blogs">Blogs</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="mb-3 font-">Quick links</h4>
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
        <div className="flex flex-col gap-1">
          <h4 className="mb-3 font-">Address</h4>

          <p>Al Hannan Market, Office No. 3</p>
          <p>Al Zuhur District, Yanbu Al Bahar</p>
          <p>Saudi Arabia</p>

          <div className="flex items-start gap-2">
            <span className="w-12 font-medium">Ph:</span>
            <span>+966 509 397408</span>
          </div>

          <div className="flex items-start gap-2">
            <span className="w-12 font-medium">Ph:</span>
            <span>+966 536 482159</span>
          </div>

          <div className="flex items-start gap-2">
            <span className="w-12 font-medium">Mail:</span>
            <span>info@saudimithal.com.sa</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;