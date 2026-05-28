import { Sparkles } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#04101f] px-5 py-14 text-cream">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <div className="gold-gradient flex h-10 w-10 items-center justify-center rounded-full text-midnight">
              <Sparkles size={22} />
            </div>
            <span className="font-display text-2xl font-bold">Acharya Bhairav</span>
          </div>
          <p className="mt-4 text-cream/60">
            Premium astrology consultation, kundli reports and spiritual
            guidance.
          </p>
        </div>

        {[
          ["Services", "Kundli", "Horoscope", "Numerology", "Vastu"],
          ["Company", "About Us", "Blogs", "Contact", "Courses"],
          ["Support", "Privacy Policy", "Terms", "Refund Policy", "Help"],
        ].map(([title, ...links]) => (
          <div key={title}>
            <h4 className="mb-4 font-bold text-gold">{title}</h4>
            <ul className="space-y-2 text-cream/60">
              {links.map((link) => (
                <li key={link}>{link}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mx-auto mt-10 max-w-7xl border-t border-cream/10 pt-6 text-cream/50">
  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
    
    <p className="text-center sm:text-left">
      © {new Date().getFullYear()} Acharya Bhairav. All Rights Reserved.
    </p>

    <p className="text-center sm:text-right">
      Powered by{" "}
      <a
        href="https://hexaschoolerp.com"
        target="_blank"
        rel="noopener noreferrer"
        className="font-medium text-gold transition-colors duration-300 hover:underline"
      >
        Hexawarre Software Pvt. Ltd
      </a>
    </p>

  </div>
</div>
    </footer>
  );
}