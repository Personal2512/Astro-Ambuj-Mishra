import { Menu, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const navItems = ["Home", "About", "Services", "Kundli", "Pricing", "Blogs"];

export default function Navbar() {
  return ( 
    <motion.header
      initial={{ y: -70, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed left-0 top-0 z-50 w-full border-b border-cream/10 bg-midnight/80 backdrop-blur-xl"
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <div className="flex items-center gap-2">
          <div className="gold-gradient flex h-10 w-10 items-center justify-center rounded-full text-midnight">
            <Sparkles size={22} />
          </div>
          <span className="font-display text-2xl font-bold text-cream">
            Acharya Bhairav
          </span>
        </div>

        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium text-cream/80 transition hover:text-gold"
            >
              {item}
            </a>
          ))}
        </div>

        <a
          href="#kundli"
          className="hidden rounded-full bg-gold px-5 py-2 text-sm font-bold text-midnight shadow-lg shadow-gold/20 md:block"
        >
          Book Consultation
        </a>

        <button className="md:hidden">
          <Menu />
        </button>
      </nav>
    </motion.header>
  );
}