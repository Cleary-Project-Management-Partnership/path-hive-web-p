// src/components/Footer.jsx
import { Mail, Phone, MapPin, Linkedin, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#003C46] text-white pt-16 pb-8 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 border-b border-white/10 pb-12">
        {/* Brand / About */}
        <div>
          <img
            src="/assets/logo.jpg"
            alt="PATH-HIVE Logo"
            className="w-24 mb-4"
          />
          <h3 className="text-lg font-semibold mb-2 tracking-wide">
            PATH-HIVE
          </h3>
          <p className="text-sm text-gray-200 leading-relaxed">
            Transforming organizations through people-centric project
            management. Serving excellence since 1994.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-[#00A6A6]">
            Quick Links
          </h4>
          <ul className="space-y-2 text-gray-200">
            <li><a href="/" className="hover:text-[#00A6A6] transition">Home</a></li>
            <li><a href="/about" className="hover:text-[#00A6A6] transition">About Us</a></li>
            <li><a href="/products" className="hover:text-[#00A6A6] transition">Products</a></li>
            <li><a href="/contact" className="hover:text-[#00A6A6] transition">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-[#00A6A6]">
            Contact
          </h4>
          <ul className="space-y-2 text-gray-200">
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-[#00A6A6]" />
              <a href="mailto:info@path-hive.com" className="hover:text-[#00A6A6]">
                info@path-hive.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-[#00A6A6]" />
              <span>+1 (555) 123-4567</span>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-[#00A6A6] mt-1" />
              <span>London, United Kingdom</span>
            </li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-[#00A6A6]">
            Connect
          </h4>
          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#00A6A6] transition"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#00A6A6] transition"
            >
              <Youtube className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center pt-8 text-sm text-gray-300">
        <p className="tracking-wide">
          © {new Date().getFullYear()} PATH-HIVE | Transforming Organizations — Serving Excellence Since 1994
        </p>
      </div>
    </footer>
  );
}
