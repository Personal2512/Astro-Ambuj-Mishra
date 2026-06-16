import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Bracelets.css";
import { bracelets as products } from "../../data/bracelets";
import { useCart } from "../../context/CartContext";

const benefits = [
  {
    icon: "🔮",
    title: "100% Natural Crystals",
    desc: "Every bracelet uses genuine, untreated natural gemstones — no glass, plastic or artificial dyes.",
  },
  {
    icon: "✨",
    title: "Ritually Energized",
    desc: "Each piece is charged under moonlight and energized with specific mantras for maximum crystal power.",
  },
  {
    icon: "💎",
    title: "Lab Certified Options",
    desc: "Selected bracelets include a government-recognized lab certificate confirming stone authenticity.",
  },
  {
    icon: "📏",
    title: "Adjustable Fit",
    desc: "Most bracelets come in standard size with stretch elastic or adjustable thread for comfortable wear.",
  },
  {
    icon: "🎁",
    title: "Gift-Ready Packaging",
    desc: "All orders are shipped in premium gift pouches with crystal information cards — perfect for gifting.",
  },
  {
    icon: "🚚",
    title: "Fast & Safe Shipping",
    desc: "Tamper-proof packaging with bubble wrap protection ensures your bracelet arrives in perfect condition.",
  },
];

const wearGuide = [
  {
    hand: "Right Hand",
    effect:
      "Gives energy out — wear wealth/success stones on right to radiate confidence into the world.",
    stones: "Pyrite, Citrine, Tiger Eye",
    color: "#fbbf24",
  },
  {
    hand: "Left Hand",
    effect:
      "Receives energy — wear healing/protection stones on left to absorb their benefits into your body.",
    stones: "Amethyst, Rose Quartz, Black Obsidian",
    color: "#7c3aed",
  },
];

const faqs = [
  {
    q: "Which bracelet is best for attracting money and wealth?",
    a: "Pyrite Bracelet is the top choice for wealth as it vibrates at the frequency of gold. Citrine (Stone of Abundance) and Green Aventurine are equally powerful. For maximum effect, wear them on your right wrist and place your intention daily.",
  },
  {
    q: "Can I wear multiple crystal bracelets together?",
    a: "Yes! Layering crystal bracelets is a popular practice. However, some crystals may conflict — for example, clear activating stones (citrine) work well with grounding stones (hematite). Avoid mixing stones from opposite planetary rulers like Sun and Saturn unless advised by an astrologer.",
  },
  {
    q: "How do I cleanse my crystal bracelet?",
    a: "Rinse gently under cool running water, then place in moonlight overnight (especially full moon). You can also smudge with sage or place on a selenite charging plate. Avoid harsh chemicals, salt water or direct sunlight for extended periods as it may fade coloured stones.",
  },
  {
    q: "What size are the bracelets? Will they fit my wrist?",
    a: "Most of our bracelets are crafted on stretch elastic thread and fit wrists up to 7.5 inches comfortably. Adjustable thread bracelets can be customised. If you need a specific size, please mention your wrist size (in cm) in your order notes.",
  },
  {
    q: "Do I need to wear the bracelet 24/7 for results?",
    a: "Consistent wear amplifies results, but even a few hours of daily wear creates a noticeable energetic shift. Remove before bathing to protect the elastic and stones. Most wearers report feeling a difference within 7–21 days of regular wear.",
  },
];

const fmt = (p) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(p);
const pct = (o, c) => Math.round(((o - c) / o) * 100);

export default function Bracelets() {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [filter, setFilter] = useState("all");
  const [sort, setSort] = useState("featured");
  const [faqOpen, setFaqOpen] = useState(null);

  const filters = [
    { label: "All", val: "all" },
    { label: "Healing", val: "healing" },
    { label: "Wealth", val: "wealth" },
    { label: "Chakra", val: "chakra" },
    { label: "Certified", val: "certified" },
    { label: "Combos", val: "combo" },
  ];

  const list = products
    .filter((p) => filter === "all" || p.cat === filter)
    .sort((a, b) => {
      if (sort === "price-asc") return a.price - b.price;
      if (sort === "price-desc") return b.price - a.price;
      if (sort === "name") return a.name.localeCompare(b.name);
      return 0;
    });

  return (
    <div className="br-page">

      {/* ── Hero ─────────────────────────────── */}
      <section className="br-hero">
        <div className="br-hero-overlay" />
        <div className="br-orbs">
          {[...Array(8)].map((_, i) => (
            <span key={i} className={`br-orb orb-${i}`} />
          ))}
        </div>
        <div className="br-hero-content">
          <span className="br-hero-tag">✦ Heal · Protect · Attract ✦</span>
          <h1 className="br-hero-title">Crystal Bracelets</h1>
          <p className="br-hero-sub">
            100% Natural Gemstone Bracelets for Healing & Intention
          </p>
          <p className="br-hero-desc">
            Handcrafted from authentic natural crystals and gemstones, each
            bracelet carries the unique vibrational energy of its stone —
            energized with Vedic mantras to amplify your intentions for wealth,
            love, healing and protection.
          </p>
          <div className="br-hero-pills">
            <span className="br-pill">💎 100% Natural</span>
            <span className="br-pill">🌙 Mantras Energized</span>
            <span className="br-pill">📜 Lab Certified Options</span>
            <span className="br-pill">🚚 Free Shipping</span>
          </div>
        </div>
        <div className="br-scroll-hint">↓</div>
      </section>

      {/* ── Breadcrumb ───────────────────────── */}
      {/* <nav className="br-breadcrumb">
        <a href="/">Home</a>
        <span>›</span>
        <span>Crystal Bracelets</span>
      </nav> */}

      {/* ── Benefits ─────────────────────────── */}
      <section className="br-benefits">
        <div className="br-benefits-grid">
          {benefits.map((b, i) => (
            <div className="br-benefit" key={i}>
              <span className="br-ben-icon">{b.icon}</span>
              <div>
                <strong>{b.title}</strong>
                <p>{b.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── How to Wear Guide ────────────────── */}
      <section className="br-wear-section">
        <h2 className="br-sec-head">Which Hand to Wear Your Bracelet?</h2>
        <p className="br-sec-sub">
          The hand you choose determines how the crystal energy flows
        </p>
        <div className="br-wear-grid">
          {wearGuide.map((w, i) => (
            <div className="br-wear-card" key={i} style={{ "--wc": w.color }}>
              <h3 className="br-wear-hand">{w.hand}</h3>
              <p className="br-wear-effect">{w.effect}</p>
              <div className="br-wear-stones">
                <span>Best stones:</span> {w.stones}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Toolbar ──────────────────────────── */}
      <div className="br-toolbar">
        <div className="br-filters">
          {filters.map((f) => (
            <button
              key={f.val}
              className={`br-filter-btn ${filter === f.val ? "active" : ""}`}
              onClick={() => setFilter(f.val)}
            >
              {f.label}
            </button>
          ))}
        </div>
        <div className="br-sort">
          <label>Sort:</label>
          <select value={sort} onChange={(e) => setSort(e.target.value)}>
            <option value="featured">Featured</option>
            <option value="price-asc">Price: Low → High</option>
            <option value="price-desc">Price: High → Low</option>
            <option value="name">Name A–Z</option>
          </select>
        </div>
      </div>

      {/* ── Products ─────────────────────────── */}
      <section className="br-products">
        <div className="br-grid">
          {list.map((p) => (
            <div className="br-card" key={p.id}>
              {/* Image */}
              <div className="br-card-img">
                <div
                  className="br-glow"
                  style={{ background: p.color + "33" }}
                />
                <img
                  src={p.image}
                  alt={p.name}
                  loading="lazy"
                  onError={(e) => {
                    e.target.style.opacity = "0.2";
                  }}
                />
                {p.badge && <span className="br-badge">{p.badge}</span>}
                <div className="br-hover-overlay">
                  <button className="br-quick-btn" onClick={() => navigate(`/bracelets/${p.id}`)}>Quick View</button>
                </div>
              </div>
              {/* Body */}
              <div className="br-card-body">
                <span className="br-stone-tag" style={{ borderColor: p.color }}>
                  ✦ {p.benefit}
                </span>
                <h3 className="br-card-name">{p.name}</h3>
                <p className="br-card-sub">{p.subtitle}</p>
                <div className="br-pricing">
                  <span className="br-price">{fmt(p.price)}</span>
                  <span className="br-orig">{fmt(p.orig)}</span>
                  <span className="br-off">{pct(p.orig, p.price)}% off</span>
                </div>
                <div className="br-tags">
                  <span className="br-tag">✓ Natural</span>
                  <span className="br-tag">✓ Energized</span>
                  {p.cat === "certified" && (
                    <span className="br-tag">📜 Certified</span>
                  )}
                  {p.cat === "combo" && (
                    <span className="br-tag">🎁 Combo</span>
                  )}
                </div>
                <button
                  className="br-add-btn"
                  onClick={() => addToCart({ ...p, originalPrice: p.orig, category: "bracelets" })}
                >Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── About ────────────────────────────── */}
      <section className="br-about">
        <div className="br-about-inner">
          <div className="br-about-text">
            <h2>About Our Crystal Bracelets</h2>
            <p>
              Our crystal bracelets are{" "}
              <em>
                beautifully handcrafted pieces designed to enhance your style
                while embracing the natural beauty of genuine crystals
              </em>
              . Made from carefully selected gemstones such as Amethyst, Rose
              Quartz, Citrine, Tiger Eye, and many more, each bracelet showcases
              its own unique charm and timeless appeal.
            </p>

            <p>
              Perfect for everyday wear or gifting, these crystal bracelets
              combine elegance with fine craftsmanship. Their vibrant colors and
              natural textures make them a versatile accessory that complements
              both traditional and modern outfits, adding a touch of
              sophistication to any look.
            </p>
            <p>
              Whether you are seeking{" "}
              <em>
                financial abundance, emotional healing, spiritual protection or
                chakra alignment
              </em>{" "}
              — there is a perfect crystal bracelet waiting to become your daily
              companion.
            </p>
          </div>
          <div className="br-stats">
            <div className="br-stat">
              <span>78+</span>
              <p>Bracelet Designs</p>
            </div>
            <div className="br-stat">
              <span>100%</span>
              <p>Natural Crystals</p>
            </div>
            <div className="br-stat">
              <span>🌙</span>
              <p>Moon Energized</p>
            </div>
            <div className="br-stat">
              <span>15K+</span>
              <p>Happy Wearers</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────── */}
      <section className="br-faq">
        <h2 className="br-sec-head">Frequently Asked Questions</h2>
        <div className="br-faq-list">
          {faqs.map((f, i) => (
            <div
              className={`br-faq-item ${faqOpen === i ? "open" : ""}`}
              key={i}
            >
              <button
                className="br-faq-q"
                onClick={() => setFaqOpen(faqOpen === i ? null : i)}
              >
                <span>{f.q}</span>
                <span className="br-faq-icon">{faqOpen === i ? "−" : "+"}</span>
              </button>
              <div className="br-faq-a">
                <p>{f.a}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
