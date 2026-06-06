import React, { useState } from 'react'
import './CrystalTrees.css'
const products = [
  // Crystal Trees
  {
    id: 1,
    name: "Small Amethyst Crystal Tree",
    price: 599,
    originalPrice: 799,
    image: "/crystal1.webp",
    badge: "Best Seller",
    category: "tree",
    benefit: "Peace & Clarity",
    color: "#7c3aed"
  },
  {
    id: 2,
    name: "Large Amethyst Crystal Tree",
    price: 999,
    originalPrice: 1099,
    image: "/crystal2.webp",
    badge: null,
    category: "tree",
    benefit: "Intuition & Calm",
    color: "#6d28d9"
  },
  {
    id: 3,
    name: "Amethyst Crystal Tree (With Plate Base)",
    price: 599,
    originalPrice: 1299,
    image: "/crystal3.webp",
    badge: "Premium",
    category: "tree",
    benefit: "Spiritual Growth",
    color: "#7c3aed"
  },
  {
    id: 4,
    name: "Amethyst With Cluster Tree",
    price: 699,
    originalPrice: 1749,
    image: "/crystal4.webp",
    badge: null,
    category: "tree",
    benefit: "Protection & Balance",
    color: "#7c3aed"
  },
  {
    id: 5,
    name: "Large Crystal Quartz Tree",
    price: 999,
    originalPrice: 1199,
    image:"/crystal3.webp",
    badge: null,
    category: "tree",
    benefit: "Healing & Clarity",
    color: "#e2e8f0"
  },
  {
    id: 6,
    name: "Small Seven Chakra Crystal Tree",
    price: 749,
    originalPrice: 999,
    image: "/crystal2.webp",
    badge: null,
    category: "tree",
    benefit: "Chakra Balancing",
    color: "#f59e0b"
  },
  {
    id: 7,
    name: "Large Seven Chakra Crystal Tree",
    price: 999,
    originalPrice: 1399,
    image: "/crystal4.webp",
    badge: "Popular",
    category: "tree",
    benefit: "Full Chakra Balance",
    color: "#f59e0b"
  },
  {
    id: 8,
    name: "Seven Chakra Raw Stone Tree",
    price: 1299,
    originalPrice: 1899,
    image: "/crystal3.webp",
    badge: null,
    category: "tree",
    benefit: "Grounding & Healing",
    color: "#84cc16"
  },
  {
    id: 9,
    name: "Citrine With Amethyst Cluster Tree",
    price: 1599,
    originalPrice: 2399,
    image:"/crystal1.webp",
    badge: "Rare Combo",
    category: "tree",
    benefit: "Wealth & Clarity",
    color: "#f59e0b"
  },
  {
    id: 10,
    name: "Amethyst With Raw Rose Quartz Large Tree",
    price: 1599,
    originalPrice: 2599,
    image: "/crystal2.webp",
    badge: null,
    category: "tree",
    benefit: "Love & Serenity",
    color: "#fda4af"
  },
  {
    id: 11,
    name: "Citrine With Raw Rose Quartz Large Tree",
    price: 1599,
    originalPrice: 2599,
    image: "/crystal3.webp",
    badge: null,
    category: "tree",
    benefit: "Abundance & Love",
    color: "#fbbf24"
  },
  {
    id: 12,
    name: "Wooden Golden Quartz Crystal Tree",
    price: 1099,
    originalPrice: 1799,
    image: "/crystal4.webp",
    badge: null,
    category: "tree",
    benefit: "Prosperity & Success",
    color: "#f59e0b"
  },
  // Clusters & Stones
  {
    id: 13,
    name: "Aura Quartz Cluster",
    price: 1299,
    originalPrice: 2499,
    image: "/crystal1.webp",
    badge: "Rare",
    category: "cluster",
    benefit: "Aura Protection",
    color: "#a78bfa"
  },
  {
    id: 14,
    name: "Pyrite Cluster",
    price: 1299,
    originalPrice: 2349,
    image: "/crystal2.webp",
    badge: null,
    category: "cluster",
    benefit: "Wealth & Manifestation",
    color: "#fbbf24"
  },
  {
    id: 15,
    name: "Green Aventurine Amethyst Cluster",
    price: 1499,
    originalPrice: 2199,
    image: "/crystal3.webp",
    badge: null,
    category: "cluster",
    benefit: "Luck & Opportunity",
    color: "#34d399"
  },
  {
    id: 16,
    name: "Black Tower Tourmaline",
    price: 799,
    originalPrice: 1199,
    image:"/crystal4.webp",
    badge: null,
    category: "cluster",
    benefit: "EMF & Negativity Shield",
    color: "#1f2937"
  },
  // Malas & Bracelets
  {
    id: 17,
    name: "7 Chakra Mala",
    price: 699,
    originalPrice: 2399,
    image: "/crystal3.webp",
    badge: null,
    category: "mala",
    benefit: "Full Chakra Activation",
    color: "#f59e0b"
  },
  {
    id: 18,
    name: "Sphatik Mala (Crystal Quartz)",
    price: 699,
    originalPrice: 7999,
    image: "/crystal1.webp",
    badge: "Premium",
    category: "mala",
    benefit: "Meditation & Clarity",
    color: "#e2e8f0"
  },
  {
    id: 19,
    name: "Clear Quartz Bracelet",
    price: 899,
    originalPrice: 1799,
    image: "/crystal4.webp",
    badge: null,
    category: "bracelet",
    benefit: "Universal Healing",
    color: "#f8fafc"
  },
  {
    id: 20,
    name: "7 Chakra Bracelet",
    price: 1099,
    originalPrice: 1499,
    image: "/crystal3.webp",
    badge: "Popular",
    category: "bracelet",
    benefit: "Energy Alignment",
    color: "#f59e0b"
  },
  {
    id: 21,
    name: "Amethyst Bracelet",
    price: 1099,
    originalPrice: 1999,
    image: "/crystal2.webp",
    badge: null,
    category: "bracelet",
    benefit: "Focus & Emotional Balance",
    color: "#7c3aed"
  },
  {
    id: 22,
    name: "Rose Quartz Bracelet",
    price: 899,
    originalPrice: 1499,
    image: "/crystal1.webp",
    badge: null,
    category: "bracelet",
    benefit: "Love & Heart Chakra",
    color: "#fda4af"
  },
  {
    id: 23,
    name: "Citrine Bracelet",
    price: 1399,
    originalPrice: 1699,
    image: "/crystal3.webp",
    badge: null,
    category: "bracelet",
    benefit: "Abundance & Wealth",
    color: "#fbbf24"
  },
  {
    id: 24,
    name: "Rudraksha Crystal Bracelet",
    price: 1099,
    originalPrice: 1499,
    image:"/crystal1.webp",
    badge: null,
    category: "bracelet",
    benefit: "Divine Protection",
    color: "#92400e"
  },
  {
    id: 25,
    name: "Original Rock Crystal Bracelet (Certified)",
    price: 699,
    originalPrice: 1399,
    image: "/crystal2.webp",
    badge: "Certified",
    category: "bracelet",
    benefit: "Clarity & Healing",
    color: "#e2e8f0"
  },
  {
    id: 26,
    name: "Green Aventurine Bracelet",
    price: 1099,
    originalPrice: 1399,
    image: "/crystal3.webp",
    badge: null,
    category: "bracelet",
    benefit: "Luck & Opportunities",
    color: "#34d399"
  },
  {
    id: 27,
    name: "Pyrite Bracelet",
    price: 1399,
    originalPrice: 1649,
    image: "/crystal4.webp",
    badge: null,
    category: "bracelet",
    benefit: "Wealth & Success",
    color: "#fbbf24"
  },
  {
    id: 28,
    name: "Tourmaline Bracelet",
    price: 999,
    originalPrice: 1849,
    image: "/crystal2.webp",
    badge: null,
    category: "bracelet",
    benefit: "Negative Energy Shield",
    color: "#1f2937"
  },
]

const benefits = [
  { icon: "🌳", title: "Hand-crafted Trees", desc: "Each crystal tree is handcrafted with genuine gemstone chips set on natural wire branches." },
  { icon: "✨", title: "Energy Amplification", desc: "Crystal trees amplify the healing energy of stones, spreading positive vibes throughout your space." },
  { icon: "🏠", title: "Vastu & Feng Shui", desc: "Place them in your home or office to attract prosperity, harmony and remove stagnant energy." },
  { icon: "🔮", title: "Chakra Healing", desc: "Seven Chakra trees activate and balance all energy centres for complete mind-body alignment." },
  { icon: "💎", title: "Natural Crystals", desc: "All crystals used are 100% natural, untreated stones — no artificial dyes or glass." },
  { icon: "🎁", title: "Perfect Gift", desc: "A crystal tree makes a meaningful, spiritually powerful gift for any occasion." },
]

const faqs = [
  {
    q: "Where should I place a crystal tree for best results?",
    a: "Place Amethyst trees in the bedroom or meditation corner for peace and clarity. Citrine trees work best in the wealth corner (southeast) or office desk. Seven Chakra trees are ideal in the living room or prayer space. Crystal Quartz trees can be placed anywhere to amplify energy."
  },
  {
    q: "How do I cleanse and recharge my crystal tree?",
    a: "Cleanse your crystal tree monthly by placing it in moonlight overnight (especially on a full moon). You can also smudge it with sage smoke, place it on a selenite slab, or bury it in the earth for 24 hours. Avoid soaking in water as the wire base may rust."
  },
  {
    q: "Are the crystals on the tree real or artificial?",
    a: "All our crystal trees use 100% natural, genuine gemstone chips and beads. We never use glass, plastic, or artificially dyed stones. The authenticity can be verified by the natural variations in colour, texture, and translucency of each chip."
  },
  {
    q: "What is the difference between small and large crystal trees?",
    a: "Small trees (6–8 inches) are ideal for personal desks, bedside tables, or gifting. Large trees (10–14 inches) have more stones and stronger energy field, making them better for living rooms, office spaces, or as centrepiece decor. The healing intent is the same — size affects the reach of energy."
  },
  {
    q: "Which crystal tree is best for attracting money?",
    a: "Citrine (Golden Quartz) trees are considered the premier money tree in crystal healing. Pyrite clusters also attract wealth and financial success. Green Aventurine trees attract luck and new opportunities. For maximum effect, place them in the southeast corner of your home or workspace."
  },
]

const formatPrice = (price) =>
  new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(price)

const discount = (orig, curr) => Math.round(((orig - curr) / orig) * 100)

export default function CrystalTrees() {
  const [activeFilter, setActiveFilter] = useState('all')
  const [sortBy, setSortBy] = useState('featured')
  const [openFaq, setOpenFaq] = useState(null)

  const filters = [
    { label: 'All', value: 'all' },
    { label: 'Crystal Trees', value: 'tree' },
    { label: 'Clusters & Stones', value: 'cluster' },
    { label: 'Malas', value: 'mala' },
    { label: 'Bracelets', value: 'bracelet' },
  ]

  const filteredProducts = products
    .filter(p => activeFilter === 'all' || p.category === activeFilter)
    .sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price
      if (sortBy === 'price-desc') return b.price - a.price
      if (sortBy === 'name') return a.name.localeCompare(b.name)
      return 0
    })

  return (
    <div className="ct-page">

      {/* Hero */}
      <section className="ct-hero">
        <div className="ct-hero-overlay" />
        {/* Animated crystal sparkles */}
        <div className="ct-sparkles">
          {[...Array(16)].map((_, i) => (
            <span key={i} className={`sparkle s-${i}`} />
          ))}
        </div>
        <div className="ct-hero-content">
          <span className="ct-hero-tag">✦ Handcrafted with Natural Crystals ✦</span>
          <h1 className="ct-hero-title">Crystal Trees & Healing Crystals</h1>
          <p className="ct-hero-subtitle">Transform Your Space with Sacred Crystal Energy</p>
          <p className="ct-hero-desc">
            Authentic handcrafted crystal trees, clusters and healing stones — 
            each piece energised with powerful Vedic intentions to bring
            prosperity, peace and positive vibrations to your life and home.
          </p>
          <div className="ct-hero-badges">
            <span className="ct-badge">🌿 100% Natural</span>
            <span className="ct-badge">🖐️ Handcrafted</span>
            <span className="ct-badge">✨ Energized</span>
            <span className="ct-badge">🚚 Free Shipping</span>
          </div>
        </div>
        <div className="ct-hero-scroll"><span>↓</span></div>
      </section>

      {/* Breadcrumb */}
      <div className="ct-breadcrumb">
        <a href="/">Home</a>
        <span className="ct-bc-sep">›</span>
        <span>Crystal Trees & Healing Crystals</span>
      </div>

      {/* Benefits Strip */}
      <section className="ct-benefits">
        <div className="ct-benefits-inner">
          {benefits.map((b, i) => (
            <div className="ct-benefit-item" key={i}>
              <span className="ct-benefit-icon">{b.icon}</span>
              <div>
                <strong>{b.title}</strong>
                <p>{b.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Placement Guide */}
      <section className="ct-placement">
        <h2 className="ct-section-heading">Crystal Tree Placement Guide</h2>
        <p className="ct-section-sub">Strategic placement maximises the healing energy of your crystal tree</p>
        <div className="ct-placement-grid">
          {[
            { room: "Bedroom", stone: "Amethyst Tree", icon: "🛏️", tip: "Promotes restful sleep, calm dreams and emotional healing" },
            { room: "Office / Desk", stone: "Citrine Tree", icon: "💼", tip: "Attracts success, concentration and financial abundance" },
            { room: "Living Room", stone: "7 Chakra Tree", icon: "🏠", tip: "Brings harmony, balanced energy and positive family relations" },
            { room: "Meditation Space", stone: "Crystal Quartz", icon: "🧘", tip: "Amplifies intention, deepens focus and clears mental chatter" },
            { room: "Wealth Corner", stone: "Pyrite Cluster", icon: "💰", tip: "Southeast corner — activates wealth, prosperity and career luck" },
            { room: "Entrance / Foyer", stone: "Black Tourmaline", icon: "🚪", tip: "Creates a protective shield, blocks negative energy at the door" },
          ].map((p, i) => (
            <div className="ct-placement-card" key={i}>
              <span className="ct-place-icon">{p.icon}</span>
              <h3 className="ct-place-room">{p.room}</h3>
              <p className="ct-place-stone">{p.stone}</p>
              <p className="ct-place-tip">{p.tip}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Filter + Sort */}
      <section className="ct-toolbar">
        <div className="ct-filters">
          {filters.map(f => (
            <button
              key={f.value}
              className={`ct-filter-btn ${activeFilter === f.value ? 'active' : ''}`}
              onClick={() => setActiveFilter(f.value)}
            >
              {f.label}
            </button>
          ))}
        </div>
        <div className="ct-sort">
          <label>Sort by:</label>
          <select value={sortBy} onChange={e => setSortBy(e.target.value)}>
            <option value="featured">Featured</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="name">Name</option>
          </select>
        </div>
      </section>

      {/* Products Grid */}
      <section className="ct-products">
        <div className="ct-grid">
          {filteredProducts.map(product => (
            <div className="ct-card" key={product.id}>
              <div className="ct-card-img">
                <div className="ct-img-glow" style={{ background: product.color + '22' }} />
                <img src={product.image} alt={product.name} loading="lazy"
                  onError={e => { e.target.style.opacity = '0.3' }}
                />
                {product.badge && (
                  <span className="ct-card-badge">{product.badge}</span>
                )}
                <div className="ct-card-overlay">
                  <button className="ct-overlay-btn">View Details</button>
                </div>
              </div>
              <div className="ct-card-body">
                <span className="ct-benefit-tag" style={{ borderColor: product.color }}>
                  ✦ {product.benefit}
                </span>
                <h3 className="ct-card-title">{product.name}</h3>
                <div className="ct-pricing">
                  <span className="ct-price">{formatPrice(product.price)}</span>
                  <span className="ct-original">{formatPrice(product.originalPrice)}</span>
                  <span className="ct-discount">{discount(product.originalPrice, product.price)}% off</span>
                </div>
                <div className="ct-tags">
                  <span className="ct-tag">✓ Natural</span>
                  <span className="ct-tag">✓ Energized</span>
                  <span className="ct-tag">{
                    product.category === 'tree' ? '🌳 Tree' :
                    product.category === 'cluster' ? '💎 Cluster' :
                    product.category === 'mala' ? '📿 Mala' : '🔮 Bracelet'
                  }</span>
                </div>
                <button className="ct-card-btn">Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="ct-about">
        <div className="ct-about-inner">
          <div className="ct-about-text">
            <h2>About Our Crystal Trees</h2>
            <p>
              Crystal trees are powerful <em>Feng Shui and Vastu tools</em> that combine the energy of
              natural gemstones with the symbolism of the tree of life. Each branch holds carefully
              selected crystal chips that radiate the healing frequency of that particular stone.
            </p>
            <p>
              Our artisans handcraft every tree using real copper or silver wire, with genuine
              natural gemstone chips sourced ethically from mines in India, Brazil and South America.
              From Amethyst for peace, to Citrine for wealth, each tree is a living energy centre
              for your home or workspace.
            </p>
            <p>
              Before dispatch, every crystal tree is cleansed under moonlight and energized with
              specific Vedic mantras aligned to its crystal's healing frequency, ensuring you
              receive a fully activated piece.
            </p>
          </div>
          <div className="ct-about-stats">
            <div className="ct-stat"><span>50+</span><p>Tree Varieties</p></div>
            <div className="ct-stat"><span>100%</span><p>Natural Crystals</p></div>
            <div className="ct-stat"><span>🌙</span><p>Moon Energized</p></div>
            <div className="ct-stat"><span>5K+</span><p>Happy Customers</p></div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="ct-faq">
        <h2 className="ct-section-heading">Frequently Asked Questions</h2>
        <div className="ct-faq-list">
          {faqs.map((faq, i) => (
            <div className={`ct-faq-item ${openFaq === i ? 'open' : ''}`} key={i}>
              <button className="ct-faq-q" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                <span>{faq.q}</span>
                <span className="ct-faq-icon">{openFaq === i ? '−' : '+'}</span>
              </button>
              <div className="ct-faq-a">
                <p>{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
