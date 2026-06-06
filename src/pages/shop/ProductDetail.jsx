import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import './ProductDetail.css';

import { bracelets }    from '../../data/bracelets';
import { gemstones }    from '../../data/gemstones';
import { rudraksha }    from '../../data/rudraksha';
import { crystalTrees } from '../../data/crystalTrees';

/* ─── Data & Route Maps ─────────────────────────────── */
const dataMap = {
  bracelets,
  gemstones,
  rudraksha,
  'crystal-trees': crystalTrees,
};

const categoryLabels = {
  bracelets:       'Crystal Bracelets',
  gemstones:       'Gemstones',
  rudraksha:       'Natural Rudraksha',
  'crystal-trees': 'Crystal Trees',
};

const categoryRoutes = {
  bracelets:       '/bracelets',
  gemstones:       '/gemstones',
  rudraksha:       '/rudraksha',
  'crystal-trees': '/crystal-trees',
};

/* ─── Helpers ───────────────────────────────────────── */
const fmt = (p) =>
  new Intl.NumberFormat('en-IN', {
    style: 'currency', currency: 'INR', maximumFractionDigits: 0,
  }).format(p);

const pct = (o, c) => Math.round(((o - c) / o) * 100);

const renderStars = (rating, size = 'pd-star') =>
  [1, 2, 3, 4, 5].map((i) => (
    <span key={i} className={i <= Math.round(rating) ? `${size} filled` : size}>
      ★
    </span>
  ));

/* ─── Dynamic Content Generator ────────────────────── */
const generateContent = (product, category) => {
  switch (category) {
    case 'bracelets':
      return {
        description:
          `The ${product.name} is a handcrafted crystal bracelet made from authentic natural gemstones. ` +
          `${product.subtitle}. Every bead is individually selected for quality and energetic purity, ` +
          `then cleansed under full moonlight and energized with specific Vedic mantras before dispatch. ` +
          `The elastic stretch thread ensures a comfortable fit for most wrist sizes, making it perfect ` +
          `for everyday wear or as a powerful spiritual accessory.`,
        benefits: [
          `Primary Energy: ${product.benefit}`,
          '100% natural, untreated crystal beads — no glass or artificial dye',
          'Ritually energized under full moonlight with Vedic mantras',
          'Adjustable elastic thread, fits wrists up to 7.5 inches',
          'Ships in a premium gift pouch with a crystal care card',
        ],
        howToUse:
          'Wear on your left wrist to receive healing energy into your body, or your right wrist to project ' +
          'intentions outward. Set a clear personal intention when first wearing. Cleanse monthly by placing ' +
          'in full moonlight overnight or smudging with sage smoke. Avoid harsh chemicals, perfumes, and ' +
          'prolonged water exposure to maintain the bead quality and thread integrity.',
      };

    case 'gemstones':
      return {
        description:
          `${product.name} (${product.hindi}) is a powerful Vedic gemstone governed by ${product.planet}. ` +
          `Recommended for ${product.rashi} zodiac signs, this stone amplifies the positive energy of its ` +
          `ruling planet while neutralising malefic effects. Sourced from the finest global mines and ` +
          `certified by premier gemological laboratories, each stone is 100% natural and untreated — ` +
          `ensuring full astrological potency and lasting spiritual benefit.`,
        benefits: [
          `Governed by ${product.planet} — harmonises planetary energy in your birth chart`,
          `Ideal for ${product.rashi} ascendant and moon sign individuals`,
          'IGI / GIA certified — authenticity and origin fully guaranteed',
          'Pre-energized with planetary mantras before dispatch',
          'Enhances career, health, relationships and spiritual growth',
        ],
        howToUse:
          `Have ${product.name} set in the prescribed metal (gold or silver) by a trusted jeweller. ` +
          `Wear on the specific finger as per Vedic astrology on the auspicious day. Recite the ` +
          `${product.planet} mantra 108 times while putting it on. Remove before bathing. Avoid wearing ` +
          `during funerals or inauspicious occasions.`,
      };

    case 'rudraksha':
      return {
        description:
          `The ${product.name} is a sacred ${product.mukhis ? `${product.mukhis} Mukhi` : ''} Rudraksha ` +
          `bead blessed by ${product.deity}. Sourced directly from the highlands of Nepal and verified ` +
          `through X-ray analysis to confirm authenticity, this bead carries centuries of spiritual ` +
          `significance. Each bead is energized with Vedic rituals including Rudrabhishek puja before ` +
          `dispatch to ensure maximum spiritual potency and divine blessings.`,
        benefits: [
          `Deity: ${product.deity} — receive divine blessings and protection`,
          product.mukhis
            ? `${product.mukhis} natural mukhis (faces) — X-ray verified authentic Nepali bead`
            : 'Rare special form — highly auspicious and spiritually powerful',
          'Directly sourced from Nepal highlands — premium quality assured',
          'Vedic Rudrabhishek ritual energized before dispatch',
          'Promotes spiritual growth, aura protection and inner peace',
        ],
        howToUse:
          'On a Monday morning, wash the Rudraksha bead with Panchamrit (mixture of milk, curd, honey, ' +
          'ghee and sugar). Chant "Om Namah Shivaya" 108 times while holding it. Thread in red or black ' +
          'string or set in silver/gold wire. Wear and maintain a sattvic lifestyle for maximum benefit. ' +
          'Avoid wearing during funerals. Remove before consuming non-vegetarian food or alcohol.',
      };

    case 'crystal-trees':
      return {
        description:
          `The ${product.name} is a beautiful handcrafted Feng Shui and Vastu tool that merges the ` +
          `healing power of natural crystals with the sacred symbolism of the Tree of Life. Each branch ` +
          `is hand-twisted from copper wire and adorned with genuine crystal chips that continuously ` +
          `radiate the healing frequency of ${product.benefit}. Place in your home or office to transform ` +
          `the energy of your space and attract positive vibrations 24/7.`,
        benefits: [
          `Key Energy: ${product.benefit}`,
          'Handcrafted with genuine natural crystal chips on copper wire',
          'Cleansed under full moonlight and energized with Vedic intentions',
          'Powerful Feng Shui & Vastu tool — transforms your space 24/7',
          'Each tree is unique — natural variations in chip colour and texture',
        ],
        howToUse:
          'Place the crystal tree in the recommended direction/room as per Vastu (e.g. Citrine in ' +
          'southeast for wealth, Amethyst in bedroom for peace, 7 Chakra in living room for harmony). ' +
          'Cleanse monthly by leaving in full moonlight overnight or smudge with sage. Dust gently with ' +
          'a soft brush. Avoid prolonged direct sunlight to preserve crystal colour and wire integrity.',
      };

    default:
      return {
        description: product.name,
        benefits: [],
        howToUse: 'Follow the care instructions included with your product.',
      };
  }
};

/* ─── Static Data ───────────────────────────────────── */
const SAMPLE_REVIEWS = [
  {
    name: 'Priya Sharma', rating: 5, date: 'March 2025', verified: true,
    text: 'Absolutely beautiful product! The quality is exceptional and I can feel the positive energy already. Packaging was very premium. Highly recommended!',
  },
  {
    name: 'Rahul Mehta', rating: 4, date: 'February 2025', verified: true,
    text: 'Great product, delivered quickly and well-packaged. The energization process really makes a difference. Using it for a month and the results are already noticeable.',
  },
  {
    name: 'Ananya Patel', rating: 5, date: 'January 2025', verified: true,
    text: 'I was skeptical at first but after two weeks I can see a clear shift in my energy. The authenticity certificate gave me full confidence in my purchase.',
  },
  {
    name: 'Suresh Kumar', rating: 4, date: 'December 2024', verified: false,
    text: 'Good quality product. Exactly as described. Fast delivery and well-protected packaging. Will definitely buy more from this store.',
  },
];

const TRUST_BADGES = [
  { icon: '🚚', label: 'Free Shipping',    sub: 'On orders ₹999+' },
  { icon: '🔒', label: 'Secure Payment',   sub: '100% encrypted'  },
  { icon: '🎁', label: 'Gift Packaging',   sub: 'Premium pouch'   },
  { icon: '✅', label: 'Authenticated',     sub: 'Certified genuine'},
  { icon: '🔄', label: 'Easy Returns',     sub: '7-day policy'    },
];

/* ─── Component ─────────────────────────────────────── */
export default function ProductDetail({ category }) {
  const { id }       = useParams();
  const navigate     = useNavigate();

  const [activeImage, setActiveImage] = useState(0);
  const [qty,         setQty]         = useState(1);
  const [activeTab,   setActiveTab]   = useState('description');
  const [toast,       setToast]       = useState(false);

  /* Look up product */
  const products = dataMap[category] || [];
  const product  = products.find((p) => String(p.id) === String(id));

  /* Scroll to top whenever product changes */
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }, [id, category]);

  /* ── Not found ──────────────────────────────────── */
  if (!product) {
    return (
      <div className="pd-not-found">
        <h2>Product not found</h2>
        <button onClick={() => navigate(categoryRoutes[category] || '/')}>
          ← Back to {categoryLabels[category] || 'Shop'}
        </button>
      </div>
    );
  }

  /* ── Derived values ─────────────────────────────── */
  const origPrice = product.orig || product.originalPrice;
  const discount  = pct(origPrice, product.price);
  const images    = Array(4).fill(product.image);
  const related   = products.filter((p) => p.id !== product.id).slice(0, 4);
  const content   = generateContent(product, category);
  const rating    = product.rating    || 4.5;
  const revCount  = product.reviewCount || 1247;
  const catLabel  = categoryLabels[category] || 'Shop';
  const catRoute  = categoryRoutes[category] || '/';

  /* ── Meta tags for current product ─────────────── */
  const metaTags = [];
  if (product.benefit)  metaTags.push(`✦ ${product.benefit}`);
  if (product.deity)    metaTags.push(`🙏 ${product.deity}`);
  if (product.planet)   metaTags.push(`🪐 ${product.planet}`);
  if (product.mukhis)   metaTags.push(`${product.mukhis} Mukhi`);
  if (product.rashi)    metaTags.push(`♈ ${product.rashi}`);
  if (product.hindi)    metaTags.push(product.hindi);

  /* ── Action handlers ────────────────────────────── */
  const handleAddToCart = () => {
    setToast(true);
    setTimeout(() => setToast(false), 3500);
  };

  const handleBuyNow = () => {
    const msg =
      `Hi! I want to buy *${product.name}* priced at *${fmt(product.price)}* ` +
      `(Qty: ${qty}) from Acharya Bhairav. Please confirm availability.`;
    window.open(`https://dashboard.paytm.com/login/?text=${encodeURIComponent(msg)}`, '_blank');
  };

  /* ── Render ─────────────────────────────────────── */
  return (
    <div className="pd-page">

      {/* ─── Breadcrumb ───────────────────────────── */}
      <nav className="pd-breadcrumb">
        <Link to="/">Home</Link>
        <span className="sep">›</span>
        <Link to={catRoute}>{catLabel}</Link>
        <span className="sep">›</span>
        <span>{product.name}</span>
      </nav>

      {/* ─── Main Section ─────────────────────────── */}
      <div className="pd-main">

        {/* ── LEFT: Image Gallery ──────────────────── */}
        <div className="pd-gallery">
          <div className="pd-gallery-main">
            <div
              className="pd-gallery-glow"
              style={{ background: (product.color || '#c9a96e') + '44' }}
            />
            <img src={images[activeImage]} alt={product.name} />
            {product.badge && (
              <span className="pd-gallery-badge">{product.badge}</span>
            )}
          </div>
          <div className="pd-gallery-thumbs">
            {images.map((img, i) => (
              <div
                key={i}
                className={`pd-gallery-thumb ${activeImage === i ? 'active' : ''}`}
                onClick={() => setActiveImage(i)}
              >
                <img src={img} alt={`${product.name} view ${i + 1}`} />
              </div>
            ))}
          </div>
        </div>

        {/* ── RIGHT: Product Info ──────────────────── */}
        <div className="pd-info">

          {/* Category tag */}
          <span className="pd-cat-tag">✦ {catLabel}</span>

          {/* Title */}
          <h1 className="pd-title">{product.name}</h1>

          {/* Subtitle */}
          {(product.subtitle || product.benefit) && (
            <p className="pd-subtitle">{product.subtitle || product.benefit}</p>
          )}

          {/* Meta tags */}
          {metaTags.length > 0 && (
            <div className="pd-meta-tag">
              {metaTags.map((t, i) => <span key={i}>{t}</span>)}
            </div>
          )}

          {/* Rating */}
          <div className="pd-rating">
            <div className="pd-stars">{renderStars(rating)}</div>
            <span className="pd-rating-val">{rating.toFixed(1)}</span>
            <span className="pd-rating-count">({revCount.toLocaleString('en-IN')} reviews)</span>
          </div>

          <hr className="pd-divider" />

          {/* Price */}
          <div className="pd-price-row">
            <span className="pd-price">{fmt(product.price)}</span>
            <span className="pd-orig">{fmt(origPrice)}</span>
            <span className="pd-discount-badge">{discount}% OFF</span>
          </div>
          <p className="pd-savings">
            You save {fmt(origPrice - product.price)} on this order
          </p>

          <hr className="pd-divider" />

          {/* Quantity */}
          <div className="pd-qty-section">
            <span className="pd-qty-label">Quantity</span>
            <div className="pd-qty-row">
              <button
                className="pd-qty-btn"
                onClick={() => setQty((q) => Math.max(1, q - 1))}
                disabled={qty <= 1}
                aria-label="Decrease quantity"
              >−</button>
              <span className="pd-qty-val">{qty}</span>
              <button
                className="pd-qty-btn"
                onClick={() => setQty((q) => Math.min(10, q + 1))}
                disabled={qty >= 10}
                aria-label="Increase quantity"
              >+</button>
            </div>
          </div>

          {/* Feature tags */}
          <div className="pd-tags">
            <span className="pd-tag">✓ 100% Natural</span>
            <span className="pd-tag">✓ Vedic Energized</span>
            {product.badge && <span className="pd-tag">⭐ {product.badge}</span>}
            <span className="pd-tag">🚚 Free Shipping</span>
          </div>

          {/* CTA Buttons */}
          <div className="pd-cta">
            <button
              id="pd-add-to-cart"
              className="pd-add-btn"
              onClick={handleAddToCart}
            >
              <span>🛒 Add to Cart</span>
            </button>
            <button
              id="pd-buy-now"
              className="pd-buy-btn"
              onClick={handleBuyNow}
            >
              ⚡ Buy Now
            </button>
          </div>

          {/* Trust Badges */}
          <div className="pd-trust">
            {TRUST_BADGES.map((b, i) => (
              <div className="pd-trust-item" key={i}>
                <span className="pd-trust-icon">{b.icon}</span>
                <span className="pd-trust-label">{b.label}</span>
                <span className="pd-trust-sub">{b.sub}</span>
              </div>
            ))}
          </div>

        </div>{/* end pd-info */}
      </div>{/* end pd-main */}

      {/* ─── Tabs Section ────────────────────────── */}
      <div className="pd-tabs-section">

        {/* Tab Nav */}
        <div className="pd-tabs-nav" role="tablist">
          {[
            { key: 'description', label: 'Description' },
            { key: 'benefits',    label: 'Benefits'    },
            { key: 'howToUse',   label: 'How to Use'  },
            { key: 'reviews',    label: `Reviews (${revCount.toLocaleString('en-IN')})` },
          ].map((t) => (
            <button
              key={t.key}
              role="tab"
              aria-selected={activeTab === t.key}
              className={`pd-tab-btn ${activeTab === t.key ? 'active' : ''}`}
              onClick={() => setActiveTab(t.key)}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="pd-tab-content" key={activeTab}>

          {activeTab === 'description' && (
            <div className="pd-desc">
              <p>{content.description}</p>
              <p>
                At Acharya Bhairav, every product is personally selected and energized
                by our expert team of Vedic astrologers. We believe that the right product,
                chosen with intention and energized with authentic Vedic rituals, can bring
                meaningful positive change in your life. Each piece is packed with care and
                shipped directly to your doorstep.
              </p>
            </div>
          )}

          {activeTab === 'benefits' && (
            <div className="pd-benefits-list">
              {content.benefits.map((b, i) => (
                <div className="pd-benefit-item" key={i}>
                  <div className="pd-benefit-dot" />
                  <span className="pd-benefit-text">{b}</span>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'howToUse' && (
            <div className="pd-how-to">
              <h3>🌿 Guidance for Use</h3>
              <p>{content.howToUse}</p>
            </div>
          )}

          {activeTab === 'reviews' && (
            <div>
              {/* Summary */}
              <div className="pd-reviews-header">
                <span className="pd-reviews-avg">{rating.toFixed(1)}</span>
                <div className="pd-reviews-meta">
                  <div className="pd-reviews-stars">{renderStars(rating, 'pd-review-star')}</div>
                  <span className="pd-reviews-count">
                    Based on {revCount.toLocaleString('en-IN')} verified reviews
                  </span>
                </div>
              </div>
              {/* Review Cards */}
              <div className="pd-reviews-grid">
                {SAMPLE_REVIEWS.map((r, i) => (
                  <div className="pd-review-card" key={i}>
                    <div className="pd-review-top">
                      <span className="pd-reviewer-name">{r.name}</span>
                      <span className="pd-review-date">{r.date}</span>
                    </div>
                    <div className="pd-review-stars">{renderStars(r.rating, 'pd-review-star')}</div>
                    <p className="pd-review-text">{r.text}</p>
                    {r.verified && (
                      <span className="pd-verified">✓ Verified Purchase</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>{/* end tab-content */}
      </div>{/* end tabs-section */}

      {/* ─── Related Products ─────────────────────── */}
      {related.length > 0 && (
        <section className="pd-related">
          <h2 className="pd-related-heading">You May Also Like</h2>
          <p className="pd-related-sub">More from our {catLabel} collection</p>
          <div className="pd-related-grid">
            {related.map((p) => {
              const relOrig = p.orig || p.originalPrice;
              return (
                <div
                  key={p.id}
                  className="pd-rel-card"
                  onClick={() => navigate(`${catRoute}/${p.id}`)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === 'Enter' && navigate(`${catRoute}/${p.id}`)}
                >
                  <div className="pd-rel-img">
                    <div
                      className="pd-rel-glow"
                      style={{ background: (p.color || '#c9a96e') + '33' }}
                    />
                    <img src={p.image} alt={p.name} loading="lazy" />
                  </div>
                  <div className="pd-rel-body">
                    <h4 className="pd-rel-name">{p.name}</h4>
                    <div className="pd-rel-pricing">
                      <span className="pd-rel-price">{fmt(p.price)}</span>
                      <span className="pd-rel-orig">{fmt(relOrig)}</span>
                      <span className="pd-rel-off">{pct(relOrig, p.price)}% off</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* ─── Toast ───────────────────────────────── */}
      <div className={`pd-toast ${toast ? 'visible' : ''}`} role="status" aria-live="polite">
        <span className="pd-toast-icon">🛒</span>
        <div className="pd-toast-text">
          <strong>Added to cart!</strong>
          {product.name} × {qty} — we'll confirm shortly.
        </div>
      </div>

    </div>
  );
}
