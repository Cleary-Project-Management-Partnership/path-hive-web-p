import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "/assets/logo.jpg"; // ✅ your logo image here

export default function Header() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/90 border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        {/* --- Logo + Tagline --- */}
        <Link to="/" className="flex items-center space-x-3">
          <motion.img
            src={logo}
            alt="Logo"
            className="h-10 w-auto"
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          />
          <motion.div
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="hidden sm:block"
          >
            <h2 className="text-[15px] font-semibold text-[#001A4B] leading-tight">
              Empowering Your <span className="text-[#00BFA5]">Digital Journey</span>
            </h2>
            <p className="text-xs text-gray-500 -mt-0.5">PathHive Innovations</p>
          </motion.div>
        </Link>

        {/* --- Desktop Nav --- */}
        <nav className="hidden md:flex items-center space-x-8">
          {links.map(({ name, path }) => (
            <NavLink
              key={name}
              to={path}
              className={({ isActive }) =>
                `relative font-medium transition-colors duration-300 ${
                  isActive
                    ? "text-[#001A4B]"
                    : "text-gray-700 hover:text-[#00BFA5]"
                }`
              }
            >
              {name}
            </NavLink>
          ))}
        </nav>

        {/* --- CTA Button --- */}
        <Link
          to="/get-started"
          className="hidden md:inline-block px-5 py-2 bg-[#00BFA5] text-white font-semibold rounded-full hover:bg-[#009b87] transition"
        >
          Get Started
        </Link>

        {/* --- Mobile Toggle --- */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-[#001A4B] p-2"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* --- Mobile Menu --- */}
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-white/95 border-t border-gray-100 shadow-lg"
          >
            <div className="flex flex-col items-center space-y-4 py-5">
              {links.map(({ name, path }) => (
                <NavLink
                  key={name}
                  to={path}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `text-lg font-medium ${
                      isActive
                        ? "text-[#001A4B]"
                        : "text-gray-700 hover:text-[#00BFA5]"
                    } transition`
                  }
                >
                  {name}
                </NavLink>
              ))}
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="px-5 py-2 bg-[#00BFA5] text-white rounded-full font-semibold shadow-md hover:bg-[#009b87] transition"
              >
                Get Started
              </motion.button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
