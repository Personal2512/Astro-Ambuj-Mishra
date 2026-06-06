import React, { useState } from "react";
import "./Bracelets.css";
const products = [
  {
    id: 1,
    name: "Pyrite Bracelet",
    subtitle: "Attract Wealth, Prosperity and Success",
    price: 599,
    orig: 1799,
    image: "/bracelet1.webp",
    badge: "Best Seller",
    cat: "wealth",
    benefit: "Wealth & Success",
    color: "#fbbf24",
  },
  {
    id: 2,
    name: "Dhan Yog Bracelet",
    subtitle: "Attract Wealth & Prosperity",
    price: 949,
    orig: 1399,
    image: "/bracelet2.webp",
    badge: "Popular",
    cat: "wealth",
    benefit: "Wealth & Fortune",
    color: "#f59e0b",
  },
  {
    id: 3,
    name: "Citrine Bracelet",
    subtitle: "Stone of Abundance, Wealth & Luxury Life",
    price: 1299,
    orig: 1899,
    image: "/bracelet3.webp",
    badge: null,
    cat: "wealth",
    benefit: "Abundance & Luxury",
    color: "#fbbf24",
  },
  {
    id: 4,
    name: "Amethyst Bracelet",
    subtitle: "Improve Focus and Balance Emotions",
    price: 899,
    orig: 1999,
    image: "/bracelet4.webp",
    badge: null,
    cat: "healing",
    benefit: "Focus & Calm",
    color: "#7c3aed",
  },
  {
    id: 5,
    name: "Green Aventurine Bracelet",
    subtitle: "Attracts Luck, Wealth & Opportunities",
    price: 1499,
    orig: 1999,
    image: "/bracelet2.webp",
    badge: null,
    cat: "wealth",
    benefit: "Luck & Opportunity",
    color: "#34d399",
  },
  {
    id: 6,
    name: "Rose Quartz Bracelet",
    subtitle: "Attract Love, Strengthen Relationships",
    price: 1199,
    orig: 1599,
    image: "/bracelet4.webp",
    badge: null,
    cat: "healing",
    benefit: "Love & Harmony",
    color: "#fda4af",
  },
  {
    id: 7,
    name: "Cat's Eye Bracelet",
    subtitle: "Intuition, Detachment, and Spirituality",
    price: 899,
    orig: 1299,
    image: "/bracelet1.webp",
    badge: null,
    cat: "healing",
    benefit: "Intuition & Spirit",
    color: "#854d0e",
  },
  {
    id: 8,
    name: "Mother of Pearl Bracelet",
    subtitle: "Calm Emotions, Peace & Inner Balance",
    price: 1549,
    orig: 1999,
    image: "/bracelet3.webp",
    badge: null,
    cat: "healing",
    benefit: "Peace & Balance",
    color: "#e2e8f0",
  },
  {
    id: 9,
    name: "7 Chakra Bracelet",
    subtitle: "Balance All Seven Energy Centres",
    price: 1179,
    orig: 1599,
    image: "/bracelet1.webp",
    badge: "Popular",
    cat: "chakra",
    benefit: "Chakra Alignment",
    color: "#f59e0b",
  },
  {
    id: 10,
    name: "Sunstone Bracelet",
    subtitle: "Boost Confidence, Success & Leadership Energy",
    price: 1299,
    orig: 1599,
    image: "/bracelet3.webp",
    badge: null,
    cat: "healing",
    benefit: "Confidence & Success",
    color: "#f97316",
  },
  {
    id: 11,
    name: "Golden Obsidian Bracelet",
    subtitle: "Shield & Protect Your Aura",
    price: 699,
    orig: 1199,
    image: "/bracelet4.webp",
    badge: null,
    cat: "healing",
    benefit: "Aura Protection",
    color: "#78350f",
  },
  {
    id: 12,
    name: "Brown Tiger Eye Bracelet",
    subtitle: "Courage, Willpower & Self-Confidence",
    price: 1049,
    orig: 1599,
    image: "/bracelet3.webp",
    badge: null,
    cat: "healing",
    benefit: "Courage & Strength",
    color: "#92400e",
  },
  {
    id: 13,
    name: "Bloodstone Bracelet",
    subtitle: "Mars Stone for Energy, Courage & Strength",
    price: 999,
    orig: 1249,
    image: "/bracelet2.webp",
    badge: null,
    cat: "healing",
    benefit: "Vitality & Courage",
    color: "#065f46",
  },
  {
    id: 14,
    name: "Turquoise Bracelet",
    subtitle: "Boost Confidence & Improve Communication",
    price: 999,
    orig: 1199,
    image: "/bracelet1.webp",
    badge: null,
    cat: "healing",
    benefit: "Communication & Calm",
    color: "#0d9488",
  },
  {
    id: 15,
    name: "Rudraksha Crystal Bracelet",
    subtitle: "Divine Protection & Spiritual Energy",
    price: 1299,
    orig: 1599,
    image: "/bracelet2.webp",
    badge: null,
    cat: "healing",
    benefit: "Divine Protection",
    color: "#92400e",
  },
  {
    id: 16,
    name: "Moonstone Bracelet",
    subtitle: "Enhance Intuition & Emotional Clarity",
    price: 799,
    orig: 1899,
    image: "/bracelet3.webp",
    badge: null,
    cat: "healing",
    benefit: "Intuition & Clarity",
    color: "#c7d2fe",
  },
  {
    id: 17,
    name: "Dragon Vein Agate Bracelet",
    subtitle: "Transform & Strengthen Your Aura",
    price: 899,
    orig: 1599,
    image: "/bracelet1.webp",
    badge: null,
    cat: "healing",
    benefit: "Transformation",
    color: "#1d4ed8",
  },
  {
    id: 18,
    name: "Jade Bracelet",
    subtitle: "Prosperity, Luck & Wisdom",
    price: 999,
    orig: 1099,
    image: "/bracelet4.webp",
    badge: null,
    cat: "wealth",
    benefit: "Luck & Wisdom",
    color: "#15803d",
  },
  {
    id: 19,
    name: "Clear Quartz Bracelet",
    subtitle: "Master Healer & Energy Amplifier",
    price: 1099,
    orig: 1899,
    image: "/bracelet3.webp",
    badge: null,
    cat: "healing",
    benefit: "Universal Healing",
    color: "#f8fafc",
  },
  {
    id: 20,
    name: "Tourmaline Bracelet",
    subtitle: "Negative Energy Shield & Grounding",
    price: 1599,
    orig: 1899,
    image: "/bracelet1.webp",
    badge: null,
    cat: "healing",
    benefit: "Protection & Ground",
    color: "#1f2937",
  },
  {
    id: 21,
    name: "Rhodonite Bracelet",
    subtitle: "Heal Emotional Wounds & Restore Love",
    price: 599,
    orig: 1199,
    image: "/bracelet2.webp",
    badge: null,
    cat: "healing",
    benefit: "Emotional Healing",
    color: "#e11d48",
  },
  {
    id: 22,
    name: "Kambaba Jasper Bracelet",
    subtitle: "Peace, Growth & Natural Grounding",
    price: 799,
    orig: 1199,
    image: "/bracelet4.webp",
    badge: null,
    cat: "healing",
    benefit: "Grounding & Peace",
    color: "#166534",
  },
  {
    id: 23,
    name: "Lapis Lazuli Bracelet",
    subtitle: "Wisdom, Truth & Mental Clarity",
    price: 1299,
    orig: 1899,
    image: "/bracelet1.webp",
    badge: null,
    cat: "healing",
    benefit: "Wisdom & Clarity",
    color: "#1d4ed8",
  },
  {
    id: 24,
    name: "Sodalite Bracelet",
    subtitle: "Enhance Logic, Truth & Calm",
    price: 1249,
    orig: 1899,
    image: "/bracelet3.webp",
    badge: null,
    cat: "healing",
    benefit: "Logic & Calm",
    color: "#1e40af",
  },
  {
    id: 25,
    name: "Picasso Jasper Bracelet",
    subtitle: "Creativity, Transformation & Strength",
    price: 1549,
    orig: 1999,
    image: "/bracelet4.webp",
    badge: null,
    cat: "healing",
    benefit: "Creativity & Strength",
    color: "#78716c",
  },
  {
    id: 26,
    name: "Howlite Bracelet",
    subtitle: "Patience, Calm & Emotional Balance",
    price: 799,
    orig: 1199,
    image: "/bracelet2.webp",
    badge: null,
    cat: "healing",
    benefit: "Patience & Calm",
    color: "#f1f5f9",
  },
  {
    id: 27,
    name: "Agate (Black) Bracelet",
    subtitle: "Protection, Stability & Inner Strength",
    price: 999,
    orig: 1199,
    image: "/bracelet2.webp",
    badge: null,
    cat: "healing",
    benefit: "Stability & Protection",
    color: "#111827",
  },
  {
    id: 28,
    name: "Azurite Bracelet",
    subtitle: "Insight, Intuition & Psychic Ability",
    price: 1249,
    orig: 1599,
    image: "/bracelet3.webp",
    badge: null,
    cat: "healing",
    benefit: "Insight & Intuition",
    color: "#1e3a5f",
  },
  {
    id: 29,
    name: "Evil Eye Bracelet",
    subtitle: "Protection from Negative Energies & Envy",
    price: 849,
    orig: 1249,
    image: "/bracelet1.webp",
    badge: "Popular",
    cat: "healing",
    benefit: "Evil Eye Protection",
    color: "#2563eb",
  },
  {
    id: 30,
    name: "Amazonite Bracelet",
    subtitle: "Calm, Courage & Positive Communication",
    price: 899,
    orig: 1299,
    image: "/bracelet4.webp",
    badge: null,
    cat: "healing",
    benefit: "Courage & Positivity",
    color: "#0d9488",
  },
  {
    id: 31,
    name: "Blue Tiger Eye Bracelet",
    subtitle: "Clear Mind, Calm Nerves & Focus",
    price: 949,
    orig: 1349,
    image: "/bracelet1.webp",
    badge: null,
    cat: "healing",
    benefit: "Focus & Calm Mind",
    color: "#1d4ed8",
  },
  {
    id: 32,
    name: "Hematite Bracelet",
    subtitle: "Grounding, Balance & Inner Strength",
    price: 699,
    orig: 1099,
    image: "/bracelet3.webp",
    badge: null,
    cat: "healing",
    benefit: "Grounding & Balance",
    color: "#374151",
  },
  {
    id: 33,
    name: "Opalite Bracelet",
    subtitle: "Clarity, Positivity & Transition Support",
    price: 1099,
    orig: 1999,
    image: "/bracelet4.webp",
    badge: null,
    cat: "healing",
    benefit: "Clarity & Light",
    color: "#bfdbfe",
  },
  {
    id: 34,
    name: "Natural Carnelian Bracelet",
    subtitle: "Motivation, Vitality & Creative Energy",
    price: 1199,
    orig: 1499,
    image: "/bracelet2.webp",
    badge: null,
    cat: "healing",
    benefit: "Motivation & Vitality",
    color: "#ea580c",
  },
  {
    id: 35,
    name: "Multi Stone Flat Beads Bracelet",
    subtitle: "Harmonise Multiple Energies",
    price: 1199,
    orig: 1499,
    image: "/bracelet1.webp",
    badge: null,
    cat: "healing",
    benefit: "Multi-Energy Healing",
    color: "#d97706",
  },
  {
    id: 36,
    name: "Golden Pyrite Hematite Cube Beads Bracelet",
    subtitle: "Wealth, Grounding & Manifestation",
    price: 949,
    orig: 1349,
    image: "/bracelet3.webp",
    badge: null,
    cat: "wealth",
    benefit: "Wealth & Grounding",
    color: "#fbbf24",
  },
  {
    id: 37,
    name: "7 Chakra Hematite Bracelet",
    subtitle: "Grounded Chakra Balance & Alignment",
    price: 799,
    orig: 1099,
    image: "/bracelet4.webp",
    badge: null,
    cat: "chakra",
    benefit: "Chakra & Grounding",
    color: "#374151",
  },
  {
    id: 38,
    name: "Dalmatian Jasper Bracelet",
    subtitle: "Joy, Playfulness & Positive Energy",
    price: 599,
    orig: 999,
    image: "/bracelet2.webp",
    badge: "Value",
    cat: "healing",
    benefit: "Joy & Positivity",
    color: "#f5f0e8",
  },
  {
    id: 39,
    name: "Black Obsidian Bracelet",
    subtitle: "Powerful Protection & Negativity Shield",
    price: 1099,
    orig: 1499,
    image: "/bracelet2.webp",
    badge: null,
    cat: "healing",
    benefit: "Psychic Protection",
    color: "#0f172a",
  },
  {
    id: 40,
    name: "7 Chakra Adjustable Bracelet",
    subtitle: "Universal Fit Chakra Healing",
    price: 849,
    orig: 1199,
    image: "/bracelet4.webp",
    badge: null,
    cat: "chakra",
    benefit: "Chakra Balancing",
    color: "#f59e0b",
  },
  {
    id: 41,
    name: "Original 7 Chakra Jasper Bracelet",
    subtitle: "With Lab Certificate",
    price: 699,
    orig: 999,
    image: "/bracelet1.webp",
    badge: "Certified",
    cat: "certified",
    benefit: "Certified Chakra",
    color: "#f59e0b",
  },
  {
    id: 42,
    name: "Labradorite Bracelet",
    subtitle: "Magic, Protection & Transformation",
    price: 949,
    orig: 1349,
    image: "/bracelet2.webp",
    badge: null,
    cat: "healing",
    benefit: "Magic & Protection",
    color: "#4f46e5",
  },
  {
    id: 43,
    name: "Golden Pyrite Pyramid Adjustable Bracelet",
    subtitle: "Wealth Manifestation & Pyramid Energy",
    price: 599,
    orig: 899,
    image: "/bracelet3.webp",
    badge: null,
    cat: "wealth",
    benefit: "Pyramid Energy",
    color: "#fbbf24",
  },
  {
    id: 44,
    name: "Pure Beauty Duo",
    subtitle: "Rose Quartz + Moonstone Combo Set",
    price: 1549,
    orig: 2399,
    image: "/bracelet4.webp",
    badge: "Combo",
    cat: "combo",
    benefit: "Beauty & Radiance",
    color: "#fda4af",
  },
  {
    id: 45,
    name: "Multi Stone Pyramid Bracelet",
    subtitle: "Multi Crystal Pyramid Power",
    price: 1049,
    orig: 1499,
    image: "/bracelet2.webp",
    badge: null,
    cat: "healing",
    benefit: "Multi Crystal Energy",
    color: "#d97706",
  },
  {
    id: 46,
    name: "Original Sulemani Hakik Bracelet",
    subtitle: "With Lab Certificate — Rare & Powerful",
    price: 1799,
    orig: 2499,
    image: "/bracelet3.webp",
    badge: "Certified",
    cat: "certified",
    benefit: "Rare & Powerful",
    color: "#111827",
  },
  {
    id: 47,
    name: "Original Selenite Bracelet",
    subtitle: "With Lab Certificate — Cleansing & Clarity",
    price: 1099,
    orig: 2199,
    image: "/bracelet1.webp",
    badge: "Certified",
    cat: "certified",
    benefit: "Cleansing & Clarity",
    color: "#f8fafc",
  },
  {
    id: 48,
    name: "Original Rudraksha Crystal Magnetic Bracelet",
    subtitle: "With Certificate — Divine & Magnetic Healing",
    price: 999,
    orig: 1499,
    image: "/bracelet4.webp",
    badge: "Certified",
    cat: "certified",
    benefit: "Divine Healing",
    color: "#92400e",
  },
  {
    id: 49,
    name: "Original 7 Chakra Agate Bracelet",
    subtitle: "With Lab Certificate",
    price: 849,
    orig: 1199,
    image: "/bracelet3.webp",
    badge: "Certified",
    cat: "certified",
    benefit: "Certified Chakra",
    color: "#f59e0b",
  },
  {
    id: 50,
    name: "Self Confidence Duo",
    subtitle: "Sunstone + Tiger Eye Combo Set",
    price: 1049,
    orig: 2399,
    image: "/bracelet1.webp",
    badge: "Combo",
    cat: "combo",
    benefit: "Confidence & Power",
    color: "#f97316",
  },
];

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
      <nav className="br-breadcrumb">
        <a href="/">Home</a>
        <span>›</span>
        <span>Crystal Bracelets</span>
      </nav>

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
                  <button className="br-quick-btn">Quick View</button>
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
                <button className="br-add-btn">Add to Cart</button>
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
