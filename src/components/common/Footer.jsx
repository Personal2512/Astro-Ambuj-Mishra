import { Link } from "react-router-dom";

const footerLinks = [
  {
    title: "Services",
    links: [
      { label: "Consultation", to: "/consultation" },
      { label: "Products", href: "/products" },
      { label: "Online Puja", to: "/online-pooja" },
      { label: "Courses", to: "/courses" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", to: "/about-us" },
      { label: "Contact", to: "/contact-us" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms", href: "#" },
      { label: "Refund Policy", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-midnight px-5 py-14 text-cream">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <img
              src="/favicon.webp"
              alt="Astro Logo"
              className="h-12 w-12 object-contain rounded-full border border-cream/20"
            />
            <span className="font-display text-2xl font-bold">Astro Ambuj Mishra</span>
          </div>
          <p className="mt-4 text-white">
            Premium astrology consultation, Leadership Guidance, Personal Growth and Self-Development.
          </p>
        </div>

        {footerLinks.map(({ title, links }) => (
          <div key={title}>
            <h4 className="mb-4 font-bold text-gold">{title}</h4>
            <ul className="space-y-2 text-white">
              {links.map((link) => (
                <li key={link.label}>
                  {link.to ? (
                    <Link
                      to={link.to}
                      className="transition-colors hover:text-gold"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      className="transition-colors hover:text-gold"
                    >
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mx-auto mt-10 max-w-7xl border-t border-cream/10 pt-6 text-gold">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-center sm:text-left">
            © {new Date().getFullYear()} Astro Ambuj Mishra. All Rights Reserved.
          </p>
          <p className="text-center sm:text-right text-white">
            Powered by{" "}
            <a
              href="https://web.hexawarre.com/"
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
