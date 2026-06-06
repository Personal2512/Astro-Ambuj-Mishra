import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Gemstones.css";
import { gemstones as products } from "../../data/gemstones";

const benefits = [
  {
    icon: "✨",
    title: "Astrological Power",
    desc: "Each gemstone resonates with a specific planet, amplifying its positive energy and reducing malefic effects.",
  },
  {
    icon: "💎",
    title: "Lab Certified",
    desc: "Every stone comes with a government-recognized lab certificate confirming authenticity and origin.",
  },
  {
    icon: "🌿",
    title: "100% Natural",
    desc: "No treatments, no enhancements — only pure, natural stones directly sourced from mines worldwide.",
  },
  {
    icon: "🔮",
    title: "Expert Consultation",
    desc: "Our Vedic astrologers help you choose the right gemstone based on your birth chart and planetary positions.",
  },
  {
    icon: "💫",
    title: "Energized & Blessed",
    desc: "Each gemstone is ritually energized with specific mantras before dispatch for maximum spiritual benefit.",
  },
  {
    icon: "🚚",
    title: "Insured Delivery",
    desc: "All precious gemstones are shipped in tamper-proof packaging with full insurance coverage.",
  },
];

const birthstones = [
  { month: "January", stone: "Garnet", color: "#b91c1c" },
  { month: "February", stone: "Amethyst", color: "#7c3aed" },
  { month: "March", stone: "Aquamarine", color: "#0891b2" },
  { month: "April", stone: "Diamond", color: "#e2e8f0" },
  { month: "May", stone: "Emerald", color: "#16a34a" },
  { month: "June", stone: "Pearl / Moonstone", color: "#c7d2fe" },
  { month: "July", stone: "Ruby", color: "#dc2626" },
  { month: "August", stone: "Peridot", color: "#84cc16" },
  { month: "September", stone: "Blue Sapphire", color: "#2563eb" },
  { month: "October", stone: "Opal / Tourmaline", color: "#e879f9" },
  { month: "November", stone: "Citrine / Yellow Topaz", color: "#f59e0b" },
  { month: "December", stone: "Turquoise / Blue Topaz", color: "#0d9488" },
];

const faqs = [
  {
    q: "How do I know which gemstone is right for me?",
    a: "The right gemstone depends on your birth chart, the current planetary dasha (period), and your life goals. A Vedic astrologer analyzes your kundli to identify weak or malefic planets and recommends the appropriate gemstone to strengthen or neutralize their effects. Contact us for a free consultation.",
  },
  {
    q: "What is the difference between natural, synthetic, and treated gemstones?",
    a: "Natural gemstones form in nature over millions of years and have unique inclusions. Synthetic stones are lab-created replicas with similar chemical properties. Treated stones are natural but undergo heat, radiation, or filling to enhance color/clarity. For astrological purposes, only untreated natural stones carry the full planetary energy.",
  },
  {
    q: "How should I wear a gemstone for astrological benefits?",
    a: "Each gemstone should be set in the prescribed metal (gold, silver, or panchdhatu), worn on the specific finger of the right or left hand as per Vedic tradition, and activated with its specific mantra on the recommended day of the week. For example, Yellow Sapphire is worn on the index finger on a Thursday.",
  },
  {
    q: "Do your gemstones come with lab certificates?",
    a: "Yes. All our gemstones come with certificates from recognized gemological labs (IGI, GIA, or equivalent Indian labs). The certificate mentions the stone's weight, origin, color, clarity, and confirms it is 100% natural and untreated.",
  },
  {
    q: "What is the minimum carat weight recommended for astrological results?",
    a: "As a general Vedic guideline: For precious stones like Ruby, Sapphire and Emerald, a minimum of 3–5 carats is recommended. For semi-precious stones, 5–7 carats is ideal. The stone should be free of major cracks or milky appearance and touch your skin when worn.",
  },
];

const navRashis = [
  { planet: "Sun ☀️", stone: "Ruby", color: "#dc2626" },
  { planet: "Moon 🌙", stone: "Pearl", color: "#94a3b8" },
  { planet: "Mars ♂️", stone: "Red Coral", color: "#ef4444" },
  { planet: "Mercury ☿", stone: "Emerald", color: "#16a34a" },
  { planet: "Jupiter ♃", stone: "Yellow Sapphire", color: "#f59e0b" },
  { planet: "Venus ♀️", stone: "White Sapphire / Opal", color: "#e879f9" },
  { planet: "Saturn ♄", stone: "Blue Sapphire", color: "#2563eb" },
  { planet: "Rahu 🐉", stone: "Hessonite Garnet", color: "#92400e" },
  { planet: "Ketu ☄️", stone: "Cat's Eye", color: "#854d0e" },
];

const formatPrice = (price) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(price);

const discount = (orig, curr) => Math.round(((orig - curr) / orig) * 100);

export default function Gemstones() {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState("all");
  const [sortBy, setSortBy] = useState("featured");
  const [openFaq, setOpenFaq] = useState(null);

  const filters = [
    { label: "All", value: "all" },
    { label: "Precious", value: "precious" },
    { label: "Semi-Precious", value: "semi" },
  ];

  const filteredProducts = products
    .filter((p) => activeFilter === "all" || p.category === activeFilter)
    .sort((a, b) => {
      if (sortBy === "price-asc") return a.price - b.price;
      if (sortBy === "price-desc") return b.price - a.price;
      if (sortBy === "name") return a.name.localeCompare(b.name);
      return 0;
    });

  return (
    <div className="gems-page">
    

      {/* Hero Banner */}
      <section className="gems-hero">
        <div className="gems-hero-overlay" />
        <div className="gems-particles">
          {[...Array(12)].map((_, i) => (
            <span key={i} className={`particle p-${i}`} />
          ))}
        </div>
        <div className="gems-hero-content">
          <span className="gems-hero-tag">✦ Vedic Astrology & Healing ✦</span>
          <h1 className="gems-hero-title">Gemstones</h1>
          <p className="gems-hero-subtitle">
            100% Natural & Lab‑Certified Gemstone
          </p>
          <p className="gems-hero-desc">
            Discover authentic, untreated natural gemstones — sourced from the
            finest mines across the world and certified by premier gemological
            laboratories. Each stone is handpicked for colour, clarity and
            astrological potency.
          </p>
          <div className="gems-hero-badges">
            <span className="gems-badge">💎 IGI / GIA Certified</span>
            <span className="gems-badge">🌿 100% Natural</span>
            <span className="gems-badge">🔮 Vedic Energized</span>
            <span className="gems-badge">🚚 Insured Shipping</span>
          </div>
        </div>
        <div className="gems-hero-scroll">
          <span>↓</span>
        </div>
      </section>

      {/* Breadcrumb */}
      {/* <div className="gems-breadcrumb">
        <a href="/">Home</a>
        <span className="bc-sep">›</span>
        <span>Gemstones</span>
      </div> */}

      {/* Benefits Strip */}
      <section className="gems-benefits-strip">
        <div className="gems-strip-inner">
          {benefits.map((b, i) => (
            <div className="gems-benefit-item" key={i}>
              <span className="gems-benefit-icon">{b.icon}</span>
              <div>
                <strong>{b.title}</strong>
                <p>{b.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Navagraha Planet–Stone Guide */}
      <section className="gems-navagraha">
        <h2 className="section-heading">Navagraha Gemstone Guide</h2>
        <p className="section-sub">
          Each planet governs a specific gemstone — wear yours to harmonise
          cosmic energies
        </p>
        <div className="navagraha-grid">
          {navRashis.map((n, i) => (
            <div
              className="navagraha-card"
              key={i}
              style={{ "--dot": n.color }}
            >
              <span className="nava-dot" />
              <p className="nava-planet">{n.planet}</p>
              <p className="nava-stone">{n.stone}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Filter + Sort Bar */}
      <section className="gems-toolbar">
        <div className="gems-filters">
          {filters.map((f) => (
            <button
              key={f.value}
              className={`gems-filter-btn ${activeFilter === f.value ? "active" : ""}`}
              onClick={() => setActiveFilter(f.value)}
            >
              {f.label}
            </button>
          ))}
        </div>
        <div className="gems-sort">
          <label>Sort by:</label>
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="featured">Featured</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="name">Name</option>
          </select>
        </div>
      </section>

      {/* Products Grid */}
      <section className="gems-products">
        <div className="gems-grid">
          {filteredProducts.map((product) => (
            <div className="gems-card" key={product.id}>
              <div className="gems-card-img">
                {/* Colour swatch behind image as fallback */}
                <div
                  className="gems-swatch"
                  style={{ background: product.color + "22" }}
                />
                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                  onError={(e) => {
                    e.target.style.display = "none";
                  }}
                />
                {product.badge && (
                  <span className="gems-badge-card">{product.badge}</span>
                )}
                <div className="gems-card-overlay">
                  <button className="gems-overlay-btn" onClick={() => navigate(`/gemstones/${product.id}`)}>View Details</button>
                </div>
              </div>
              <div className="gems-card-body">
                <div className="gems-card-top">
                  <span
                    className="gems-planet-tag"
                    style={{ borderColor: product.color }}
                  >
                    🪐 {product.planet}
                  </span>
                  <span className="gems-hindi">{product.hindi}</span>
                </div>
                <h3 className="gems-card-title">{product.name}</h3>
                <p className="gems-rashi">♈ {product.rashi}</p>
                <div className="gems-pricing">
                  <span className="gems-price">
                    {formatPrice(product.price)}
                  </span>
                  <span className="gems-original">
                    {formatPrice(product.originalPrice)}
                  </span>
                  <span className="gems-discount">
                    {discount(product.originalPrice, product.price)}% off
                  </span>
                </div>
                <div className="gems-tags">
                  <span className="gtag">✓ Certified</span>
                  <span className="gtag">✓ Natural</span>
                  <span className="gtag">
                    {product.category === "precious"
                      ? "💎 Precious"
                      : "🌀 Semi-Precious"}
                  </span>
                </div>
                <button className="gems-card-btn" onClick={() => navigate(`/gemstones/${product.id}`)}>Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Birthstone Calendar */}
      <section className="gems-birthstones">
        <h2 className="section-heading">Birthstone Calendar</h2>
        <p className="section-sub">Find your lucky stone by birth month</p>
        <div className="birthstone-grid">
          {birthstones.map((b, i) => (
            <div className="birthstone-card" key={i}>
              <div className="bs-gem" style={{ background: b.color }} />
              <p className="bs-month">{b.month}</p>
              <p className="bs-stone">{b.stone}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About / Description */}
      <section className="gems-about">
        <div className="gems-about-inner">
          <div className="gems-about-text">
            <h2>Why Buy Gemstones from Us?</h2>
            <p>
              Unlock the timeless beauty and positive energy of natural
              gemstones. Our <em>handpicked gemstone collection</em> is selected
              for its exceptional quality, vibrant appearance, and astrological
              value, helping you find the perfect stone for your needs.
            </p>
            <p>
              Our gemstones are sourced directly from mines in Sri Lanka, Burma,
              Colombia, Brazil and other premier origins. Each stone undergoes
              rigorous testing by certified gemologists before being listed.
              With expert support, certified products, and a trusted reputation,
              we make it safe to buy original gemstones online.
            </p>
            <p>
              Whether you're looking for astrological benefits, healing
              properties, or simply a beautiful piece of nature's art — our
              collection caters to every need, with stones ranging from classic
              navaratna gems to rare collector's specimens.
            </p>
          </div>
          <div className="gems-about-stats">
            <div className="ga-stat">
              <span>200+</span>
              <p>Gemstone Varieties</p>
            </div>
            <div className="ga-stat">
              <span>100%</span>
              <p>Lab Certified</p>
            </div>
            <div className="ga-stat">
              <span>10K+</span>
              <p>Happy Customers</p>
            </div>
            <div className="ga-stat">
              <span>15+</span>
              <p>Countries Sourced</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="gems-faq">
        <h2 className="section-heading">Frequently Asked Questions</h2>
        <div className="gems-faq-list">
          {faqs.map((faq, i) => (
            <div
              className={`gems-faq-item ${openFaq === i ? "open" : ""}`}
              key={i}
            >
              <button
                className="gems-faq-q"
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
              >
                <span>{faq.q}</span>
                <span className="gems-faq-icon">
                  {openFaq === i ? "−" : "+"}
                </span>
              </button>
              <div className="gems-faq-a">
                <p>{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}

