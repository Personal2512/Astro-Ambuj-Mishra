import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './CrystalTrees.css'
import { crystalTrees as products } from '../../data/crystalTrees'
import { useCart } from '../../context/CartContext'

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
  const navigate = useNavigate()
  const { addToCart } = useCart()
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
      {/* <div className="ct-breadcrumb">
        <a href="/">Home</a>
        <span className="ct-bc-sep">›</span>
        <span>Crystal Trees & Healing Crystals</span>
      </div> */}

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
                  <button className="ct-overlay-btn" onClick={() => navigate(`/crystal-trees/${product.id}`)}>View Details</button>
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
                <button
                  className="ct-card-btn"
                  onClick={() => addToCart({ ...product, category: 'crystal-trees' })}
                >Add to Cart</button>
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

