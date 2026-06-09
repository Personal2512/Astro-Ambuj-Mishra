import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const serviceItems = [
  { label: "Consultation", href: "/consultation", isRoute: true },
  { label: "Products", href: "#products" },
  { label: "Karamkand / Online Puja", href: "/online-pooja", isRoute: true },
];

const navItems = [
  { label: "Courses", href: "/courses", isRoute: true },
  { label: "About Us", href: "/about-us", isRoute: true },
  { label: "Contact Us", href: "/contact-us", isRoute: true },
  
];

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  const [openServices, setOpenServices] = useState(false);

  return (
    <motion.header
      initial={{ y: -70, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed left-0 top-0 z-50 w-full border-b border-cream/10 bg-midnight/80 backdrop-blur-xl"
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5">
        <Link to="/" className="flex items-center gap-3">
        <div className="flex items-center gap-3">
          <img
            src="/favicon.webp"
            alt="Astro Logo"
            className="h-12 w-12 rounded-full border border-cream/20 object-contain"
          />

          <span className="font-display text-2xl font-bold text-cream">
            Acharya Bhairav
          </span>
        </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-8 md:flex">
          <div
            className="relative"
            onMouseEnter={() => setOpenServices(true)}
            onMouseLeave={() => setOpenServices(false)}
          >
            <button className="flex items-center gap-1 text-lg font-bold text-cream/80 transition hover:text-gold">
              Services <ChevronDown size={18} />
            </button>

            <AnimatePresence>
              {openServices && (
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 12 }}
                  className="absolute left-0 top-9 w-64 overflow-hidden rounded-2xl border border-cream/10 bg-midnight/95 p-2 shadow-2xl backdrop-blur-xl"
                >
                  {serviceItems.map((item) =>
                    item.isRoute ? (
                      <Link
                        key={item.label}
                        to={item.href}
                        onClick={() => setOpenServices(false)}
                        className="block rounded-xl px-4 py-3 text-sm font-semibold text-cream/80 transition hover:bg-cream/10 hover:text-gold"
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <a
                        key={item.label}
                        href={item.href}
                        onClick={() => setOpenServices(false)}
                        className="block rounded-xl px-4 py-3 text-sm font-semibold text-cream/80 transition hover:bg-cream/10 hover:text-gold"
                      >
                        {item.label}
                      </a>
                    )
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {navItems.map((item) =>
            item.isRoute ? (
              <Link
                key={item.label}
                to={item.href}
                className="text-lg font-bold text-cream/80 transition hover:text-gold"
              >
                {item.label}
              </Link>
            ) : (
              <a
                key={item.label}
                href={item.href}
                className="text-lg font-bold text-cream/80 transition hover:text-gold"
              >
                {item.label}
              </a>
            )
          )}
        </div>

        <Link
          to="/consultation"
          className="hidden rounded-full bg-gold px-5 py-2 text-sm font-bold text-midnight shadow-lg shadow-gold/20 md:block"
        >
          Book Consultation
        </Link>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpenMenu(!openMenu)}
          className="text-cream md:hidden"
        >
          {openMenu ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {openMenu && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-cream/10 bg-midnight/95 px-5 pb-6 md:hidden"
          >
            <button
              onClick={() => setOpenServices(!openServices)}
              className="flex w-full items-center justify-between py-4 text-left text-lg font-bold text-cream/80"
            >
              Services
              <ChevronDown
                size={20}
                className={`transition-transform ${
                  openServices ? "rotate-180" : ""
                }`}
              />
            </button>

            <AnimatePresence>
              {openServices && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  className="mb-3 rounded-2xl border border-cream/10 bg-cardBg p-2"
                >
                  {serviceItems.map((item) =>
                    item.isRoute ? (
                      <Link
                        key={item.label}
                        to={item.href}
                        onClick={() => setOpenMenu(false)}
                        className="block rounded-xl px-4 py-3 text-sm font-semibold text-cream/75 hover:bg-cream/10 hover:text-gold"
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <a
                        key={item.label}
                        href={item.href}
                        onClick={() => setOpenMenu(false)}
                        className="block rounded-xl px-4 py-3 text-sm font-semibold text-cream/75 hover:bg-cream/10 hover:text-gold"
                      >
                        {item.label}
                      </a>
                    )
                  )}
                </motion.div>
              )}
            </AnimatePresence>

            {navItems.map((item) =>
              item.isRoute ? (
                <Link
                  key={item.label}
                  to={item.href}
                  onClick={() => setOpenMenu(false)}
                  className="block py-4 text-lg font-bold text-cream/80 transition hover:text-gold"
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpenMenu(false)}
                  className="block py-4 text-lg font-bold text-cream/80 transition hover:text-gold"
                >
                  {item.label}
                </a>
              )
            )}

            <Link
              to="/consultation"
              onClick={() => setOpenMenu(false)}
              className="mt-4 block rounded-full bg-gold px-5 py-3 text-center text-sm font-bold text-midnight shadow-lg shadow-gold/20"
            >
              Book Consultation
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}