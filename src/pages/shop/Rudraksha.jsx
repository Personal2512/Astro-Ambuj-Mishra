import React, { useState } from "react";
import "./Rudraksha.css";

const products = [
  {
    id: 1,
    name: "Natural 5 Mukhi Rudraksha (Nepali)",
    price: 599,
    originalPrice: 1249,
    image: "/rudra1.webp",
    badge: "Best Seller",
    deity: "Kalagni Rudra",
    mukhis: 5,
    category: "single",
  },
  {
    id: 2,
    name: "Natural 7 Mukhi Rudraksha (Nepali)",
    price: 1299,
    originalPrice: 1899,
    image: "/rudra2.webp",
    badge: "Popular",
    deity: "Mahalakshmi",
    mukhis: 7,
    category: "single",
  },
  {
    id: 3,
    name: "Natural 6 Mukhi Rudraksha (Nepali)",
    price: 999,
    originalPrice: 1149,
    image: "/rudra3.webp",
    badge: null,
    deity: "Kartikeya",
    mukhis: 6,
    category: "single",
  },
  {
    id: 4,
    name: "Natural 3 Mukhi Rudraksha (Nepali)",
    price: 1299,
    originalPrice: 2099,
    image: "/rudra4.webp",
    badge: null,
    deity: "Agni Dev",
    mukhis: 3,
    category: "single",
  },
  {
    id: 5,
    name: "Natural Gauri Shankar Rudraksha",
    price: 2999,
    originalPrice: 3299,
    image: "/rudra4.webp",
    badge: "Rare",
    deity: "Shiva-Parvati",
    mukhis: null,
    category: "special",
  },
  {
    id: 6,
    name: "Natural 4 Mukhi Rudraksha (Nepali)",
    price: 1099,
    originalPrice: 1549,
    image: "/rudra2.webp",
    badge: null,
    deity: "Brahma",
    mukhis: 4,
    category: "single",
  },
  {
    id: 7,
    name: "Natural 10 Mukhi Rudraksha (Nepali)",
    price: 999,
    originalPrice: 1799,
    image: "/rudra1.webp",
    badge: null,
    deity: "Lord Vishnu",
    mukhis: 10,
    category: "single",
  },
  {
    id: 8,
    name: "Natural 8 Mukhi Rudraksha (Nepali)",
    price: 799,
    originalPrice: 1699,
    image: "/rudra3.webp",
    badge: null,
    deity: "Ganesha",
    mukhis: 8,
    category: "single",
  },
  {
    id: 9,
    name: "Natural 9 Mukhi Rudraksha (Nepali)",
    price: 1299,
    originalPrice: 1599,
    image: "/rudra1.webp",
    badge: null,
    deity: "Durga Devi",
    mukhis: 9,
    category: "single",
  },
  {
    id: 10,
    name: "Natural 11 Mukhi Rudraksha (Nepali)",
    price: 1399,
    originalPrice: 1749,
    image: "/rudra3.webp",
    badge: null,
    deity: "Hanuman",
    mukhis: 11,
    category: "single",
  },
  {
    id: 11,
    name: "Natural 1 Mukhi Rudraksha Savar (Nepali)",
    price: 7999,
    originalPrice: 9999,
    image: "/rudra2.webp",
    badge: "Ultra Rare",
    deity: "Shiva",
    mukhis: 1,
    category: "single",
  },
  {
    id: 12,
    name: "Natural 2 Mukhi Rudraksha (Nepali)",
    price: 5999,
    originalPrice: 7499,
    image: "/rudra4.webp",
    badge: "Rare",
    deity: "Ardhanarishvara",
    mukhis: 2,
    category: "single",
  },
  {
    id: 13,
    name: "Natural Garbh Gauri Shankar Rudraksha",
    price: 4999,
    originalPrice: 8599,
    image: "/rudra2.webp",
    badge: "Rare",
    deity: "Parvati",
    mukhis: null,
    category: "special",
  },
  {
    id: 14,
    name: "Natural 12 Mukhi Rudraksha (Nepali)",
    price: 1599,
    originalPrice: 1899,
    image: "/rudra1.webp",
    badge: null,
    deity: "Surya Dev",
    mukhis: 12,
    category: "single",
  },
  {
    id: 15,
    name: "Natural 13 Mukhi Rudraksha (Nepali)",
    price: 2599,
    originalPrice: 5799,
    image: "/rudra4.webp",
    badge: null,
    deity: "Indra",
    mukhis: 13,
    category: "single",
  },
  {
    id: 16,
    name: "Natural 14 Mukhi Rudraksha (Nepali)",
    price: 6999,
    originalPrice: 8999,
    image: "/rudra3.webp",
    badge: "Rare",
    deity: "Hanuman",
    mukhis: 14,
    category: "single",
  },
  {
    id: 17,
    name: "Natural 2 Mukhi Rudraksha (Indian)",
    price: 2999,
    originalPrice: 3999,
    image: "/rudra1.webp",
    badge: null,
    deity: "Ardhanarishvara",
    mukhis: 2,
    category: "single",
  },
  {
    id: 18,
    name: "Natural 15 Mukhi Rudraksha (Nepali)",
    price: 3899,
    originalPrice: 8999,
    image: "/rudra3.webp",
    badge: null,
    deity: "Pashupati",
    mukhis: 15,
    category: "single",
  },
  {
    id: 19,
    name: "Natural Ganesha Rudraksha",
    price: 699,
    originalPrice: 1599,
    image: "/rudra4.webp",
    badge: null,
    deity: "Ganesha",
    mukhis: null,
    category: "special",
  },
  {
    id: 20,
    name: "1-14 Mukhi Rudraksha Mala (Siddha Mala)",
    price: 3799,
    originalPrice: 4999,
    image: "/rudra3.webp",
    badge: "Premium",
    deity: "All Deities",
    mukhis: null,
    category: "mala",
  },
  {
    id: 21,
    name: "5 Mukhi Japa Rudraksha Mala",
    price: 7999,
    originalPrice: 9999,
    image: "/rudra2.webp",
    badge: null,
    deity: "Kalagni Rudra",
    mukhis: 5,
    category: "mala",
  },
  {
    id: 22,
    name: "7 Mukhi Japa Rudraksha Mala",
    price: 1099,
    originalPrice: 1499,
    image: "/rudra4.webp",
    badge: null,
    deity: "Mahalakshmi",
    mukhis: 7,
    category: "mala",
  },
  {
    id: 23,
    name: "Natural Ganesh Laxmi Rudraksha Samriddhi Kit",
    price: 7499,
    originalPrice: 9999,
    image: "/rudra2.webp",
    badge: "Combo",
    deity: "Ganesha & Lakshmi",
    mukhis: null,
    category: "special",
  },
  {
    id: 24,
    name: "Navananda Rudraksha Mala",
    price: 1799,
    originalPrice: 2999,
    image: "/rudra1.webp",
    badge: null,
    deity: "Nava Graha",
    mukhis: null,
    category: "mala",
  },
];

const benefits = [
  {
    icon: "🧘",
    title: "Meditation & Focus",
    desc: "Enhances concentration, deepens meditation and brings mental clarity to practitioners.",
  },
  {
    icon: "🛡️",
    title: "Aura Protection",
    desc: "Creates a protective shield around the wearer, warding off negative energies and evil eye.",
  },
  {
    icon: "❤️",
    title: "Health & Healing",
    desc: "Known to regulate blood pressure, reduce stress and promote overall physical well-being.",
  },
  {
    icon: "💫",
    title: "Spiritual Growth",
    desc: "Accelerates spiritual awakening and helps establish a deep connection with the divine.",
  },
  {
    icon: "🍀",
    title: "Prosperity & Luck",
    desc: "Attracts abundance, prosperity and good fortune into the wearer's life.",
  },
  {
    icon: "⚡",
    title: "Energy Balance",
    desc: "Balances the seven chakras and harmonizes the body's electromagnetic energy field.",
  },
];

const faqs = [
  {
    q: "What is Rudraksha and why is it sacred?",
    a: "Rudraksha is the sacred seed of the Elaeocarpus ganitrus tree, found primarily in the Himalayan region. The word 'Rudraksha' derives from 'Rudra' (Shiva) and 'Aksha' (eyes). It holds deep spiritual significance in Hinduism and is believed to carry the blessings of Lord Shiva.",
  },
  {
    q: "How to identify an authentic Rudraksha?",
    a: "Authentic Rudrakshas have natural lines (mukhis) running from top to bottom. You can test by placing it in water — a genuine bead sinks. Also, when placed between two copper coins it should rotate due to its natural electromagnetic properties. Always buy from certified, reputed sources.",
  },
  {
    q: "Which Mukhi Rudraksha is best for me?",
    a: "The right Mukhi depends on your zodiac sign, planetary positions and specific goals. 5 Mukhi is universally beneficial. 7 Mukhi attracts wealth, 8 Mukhi removes obstacles, 9 Mukhi provides divine protection. Consult an astrologer for personalized guidance.",
  },
  {
    q: "How to wear and energize Rudraksha?",
    a: "Wash the bead with Panchamrit (milk, curd, honey, ghee, sugar) on a Monday. Chant 'Om Namah Shivaya' 108 times and wear it. It can be worn in red/black thread or silver/gold wire. Avoid wearing during funerals, and remove before consuming non-vegetarian food.",
  },
  {
    q: "What is the difference between Nepali and Indonesian Rudraksha?",
    a: "Nepali Rudrakshas are larger, have deeper and more distinct mukhis and are considered more powerful. Indonesian (Indo) Rudrakshas are smaller, smoother and more affordable. Both are authentic and effective — Nepali ones are preferred for high-level spiritual practices.",
  },
];

const formatPrice = (price) => {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(price);
};

const discount = (orig, curr) => Math.round(((orig - curr) / orig) * 100);

export default function Rudraksha() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [sortBy, setSortBy] = useState("featured");
  const [openFaq, setOpenFaq] = useState(null);

  const filters = [
    { label: "All", value: "all" },
    { label: "Single Bead", value: "single" },
    { label: "Special", value: "special" },
    { label: "Malas", value: "mala" },
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
    <div className="rudraksha-page">

      {/* Hero Banner */}
      <section className="rudraksha-hero">
        <div className="rudraksha-hero-overlay" />
        <div className="rudraksha-hero-content">
          <span className="rudraksha-hero-tag">✦ Sacred & Authentic ✦</span>
          <h1 className="rudraksha-hero-title">Natural Rudraksha</h1>
          <p className="rudraksha-hero-subtitle">
            Protect Your Aura with Sacred Rudraksha
          </p>
          <p className="rudraksha-hero-desc">
            Authentic 1 to 27 Mukhi Rudraksha beads — ethically sourced from
            Nepal & Indonesia. Energized with Vedic rituals for maximum
            spiritual benefit.
          </p>
          <div className="rudraksha-hero-badges">
            <span className="hero-badge">🔬 Lab Certified</span>
            <span className="hero-badge">📜 X-Ray Verified</span>
            <span className="hero-badge">🙏 Vedic Energized</span>
            <span className="hero-badge">🚚 Free Shipping</span>
          </div>
        </div>
        <div className="rudraksha-hero-scroll">
          <span>↓</span>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="rudraksha-breadcrumb">
        <a href="/">Home</a>
        <span className="bc-sep">›</span>
        <span>Natural Rudraksha</span>
      </div>

      {/* Benefits Strip */}
      <section className="rudraksha-benefits-strip">
        <div className="benefits-strip-inner">
          {benefits.map((b, i) => (
            <div className="benefit-item" key={i}>
              <span className="benefit-icon">{b.icon}</span>
              <div>
                <strong>{b.title}</strong>
                <p>{b.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Filter + Sort Bar */}
      <section className="rudraksha-toolbar">
        <div className="rudraksha-filters">
          {filters.map((f) => (
            <button
              key={f.value}
              className={`filter-btn ${activeFilter === f.value ? "active" : ""}`}
              onClick={() => setActiveFilter(f.value)}
            >
              {f.label}
            </button>
          ))}
        </div>
        <div className="rudraksha-sort">
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
      <section className="rudraksha-products">
        <div className="rudraksha-grid">
          {filteredProducts.map((product) => (
            <div className="rudraksha-card" key={product.id}>
              <div className="card-img-wrap">
                <img src={product.image} alt={product.name} loading="lazy" />
                {product.badge && (
                  <span className="card-badge">{product.badge}</span>
                )}
                <div className="card-overlay">
                  <button className="card-overlay-btn">View Details</button>
                </div>
              </div>
              <div className="card-body">
                <p className="card-deity">Deity: {product.deity}</p>
                <h3 className="card-title">{product.name}</h3>
                <div className="card-pricing">
                  <span className="card-price">
                    {formatPrice(product.price)}
                  </span>
                  <span className="card-original">
                    {formatPrice(product.originalPrice)}
                  </span>
                  <span className="card-discount">
                    {discount(product.originalPrice, product.price)}% off
                  </span>
                </div>
                <div className="card-tags">
                  {product.mukhis && (
                    <span className="tag">{product.mukhis} Mukhi</span>
                  )}
                  <span className="tag">✓ Certified</span>
                  <span className="tag">✓ Energized</span>
                </div>
                <button className="card-btn">Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About / Description Section */}
      <section className="rudraksha-about">
        <div className="rudraksha-about-inner">
          <div className="about-text">
            <h2>What is Rudraksha?</h2>
            <p>
              The holy Rudraksha bead comes from the seeds of the{" "}
              <em>Elaeocarpus ganitrus</em> tree and has been valued for
              centuries for its spiritual significance, found primarily in the
              Himalayan region of Nepal and parts of Indonesia. The name
              originates from Sanskrit — "Rudra" meaning Lord Shiva and "Aksha"
              meaning eyes, translating to "Eyes of Shiva."
            </p>
            <p>
              These sacred beads carry deep spiritual significance in Hinduism,
              Buddhism and other Dharmic traditions. Worn as malas or individual
              beads, they are prized for meditation, prayer, and protection.
              Each bead features natural lines called <em>mukhis</em> (faces),
              ranging from 1 to 27+, each associated with specific deities,
              planets and benefits.
            </p>
            <p>
              Our Rudraksha beads are directly sourced from the highlands of
              Nepal and verified through X-ray analysis to ensure authenticity.
              Every bead is energized with Vedic rituals before dispatch.
            </p>
          </div>
          <div className="about-stats">
            <div className="a-stat">
              <span>78+</span>
              <p>Products</p>
            </div>
            <div className="a-stat">
              <span>1-27</span>
              <p>Mukhis Available</p>
            </div>
            <div className="a-stat">
              <span>100%</span>
              <p>Authentic</p>
            </div>
            <div className="a-stat">
              <span>5000+</span>
              <p>Happy Customers</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mukhi Guide */}
      <section className="rudraksha-guide">
        <h2 className="guide-heading">Rudraksha Mukhi Guide</h2>
        <p className="guide-sub">
          Each Mukhi carries unique spiritual properties and planetary
          associations
        </p>
        <div className="guide-grid">
          {[
            {
              mukhi: "1 Mukhi",
              planet: "Sun",
              benefit: "Ultimate consciousness, Moksha",
              deity: "Lord Shiva",
            },
            {
              mukhi: "2 Mukhi",
              planet: "Moon",
              benefit: "Unity, relationships, peace",
              deity: "Ardhanarishvara",
            },
            {
              mukhi: "3 Mukhi",
              planet: "Mars",
              benefit: "Self-confidence, liberation from sins",
              deity: "Agni Dev",
            },
            {
              mukhi: "4 Mukhi",
              planet: "Mercury",
              benefit: "Wisdom, creativity, intelligence",
              deity: "Brahma",
            },
            {
              mukhi: "5 Mukhi",
              planet: "Jupiter",
              benefit: "Health, peace, freedom",
              deity: "Kalagni Rudra",
            },
            {
              mukhi: "6 Mukhi",
              planet: "Venus",
              benefit: "Willpower, learning, stability",
              deity: "Kartikeya",
            },
            {
              mukhi: "7 Mukhi",
              planet: "Saturn",
              benefit: "Wealth, health, prosperity",
              deity: "Mahalakshmi",
            },
            {
              mukhi: "8 Mukhi",
              planet: "Rahu",
              benefit: "Removes obstacles, success",
              deity: "Ganesha",
            },
            {
              mukhi: "9 Mukhi",
              planet: "Ketu",
              benefit: "Power, fearlessness, protection",
              deity: "Durga Devi",
            },
            {
              mukhi: "10 Mukhi",
              planet: "All Planets",
              benefit: "Pacifies all planets, peace",
              deity: "Lord Vishnu",
            },
            {
              mukhi: "11 Mukhi",
              planet: "All Planets",
              benefit: "Adventure, wisdom, meditation",
              deity: "Hanuman",
            },
            {
              mukhi: "12 Mukhi",
              planet: "Sun",
              benefit: "Leadership, radiance, ambition",
              deity: "Surya Dev",
            },
          ].map((g, i) => (
            <div className="guide-card" key={i}>
              <div className="guide-mukhi">{g.mukhi}</div>
              <div className="guide-info">
                <p className="guide-deity">{g.deity}</p>
                <p className="guide-planet">🪐 {g.planet}</p>
                <p className="guide-benefit">{g.benefit}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="rudraksha-faq">
        <h2 className="faq-heading">Frequently Asked Questions</h2>
        <div className="faq-list">
          {faqs.map((faq, i) => (
            <div className={`faq-item ${openFaq === i ? "open" : ""}`} key={i}>
              <button
                className="faq-question"
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
              >
                <span>{faq.q}</span>
                <span className="faq-icon">{openFaq === i ? "−" : "+"}</span>
              </button>
              <div className="faq-answer">
                <p>{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
