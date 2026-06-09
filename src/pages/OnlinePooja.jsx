import { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle,
  ArrowRight,
  MessageCircle,
  Star,
  Flame,
  Globe,
  Calendar,
} from "lucide-react";
import { Link } from "react-router-dom";
import "./OnlinePooja.css";

/* ── Framer-motion variants ──────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.1, ease: "easeOut" },
  }),
};

/* ── Static data ─────────────────────────────────────────── */
const stats = [
  { icon: "🕉️", number: "500+", label: "Pujas Performed" },
  { icon: "🌍", number: "15+", label: "Countries Reached" },
  { icon: "🏆", number: "15+", label: "Years of Tradition" },
  { icon: "🙏", number: "98%", label: "Devotee Satisfaction" },
];

const pujas = [
  {
    icon: "🔥",
    title: "Maha Rudrabhishek",
    desc: "A grand ritual invocation of Lord Shiva through sacred Vedic mantras and abhishek with milk, honey, ghee and holy water — for blessings, health and liberation from suffering.",
    benefits: ["Health & Longevity", "Peace of Mind", "Removal of Doshas"],
    duration: "3–4 Hours",
    mode: "Online / Onsite",
    price: "₹5,100",
    originalPrice: "₹9,000",
    featured: true,
    image: "/Rudraksha.webp",
  },
  {
    icon: "🌺",
    title: "Satyanarayan Puja",
    desc: "A beloved Vaishnava ritual performed for prosperity, fulfilment of wishes and gratitude. Ideal for housewarmings, business launches, marriages and auspicious occasions.",
    benefits: ["Prosperity", "Wish Fulfilment", "Family Harmony"],
    duration: "2–3 Hours",
    mode: "Online / Onsite",
    price: "₹2,100",
    originalPrice: "₹4,000",
    featured: false,
    image: "/DailyHoroscope.webp",
  },
  {
    icon: "☀️",
    title: "Surya Graha Shanti",
    desc: "Pacification of the Sun planet through Vedic rituals and mantras to strengthen confidence, leadership, career prospects and physical vitality in the native's life.",
    benefits: ["Career Growth", "Confidence Boost", "Health & Vitality"],
    duration: "2 Hours",
    mode: "Online",
    price: "₹1,800",
    originalPrice: "₹3,500",
    featured: false,
    image: "/sunrise.webp",
  },
  {
    icon: "🌙",
    title: "Chandra Graha Shanti",
    desc: "A soothing ritual dedicated to the Moon for emotional balance, mental peace, improved relationships and relief from anxiety. Highly recommended for Chandra Mahadasha.",
    benefits: ["Emotional Stability", "Mental Peace", "Better Relationships"],
    duration: "2 Hours",
    mode: "Online",
    price: "₹1,800",
    originalPrice: "₹3,500",
    featured: false,
    image: "/moonrise.webp",
  },
  {
    icon: "🧘",
    title: "Kaal Sarp Dosh Nivaran",
    desc: "A powerful ritual to neutralise the effects of Kaal Sarp Yoga in the birth chart — relieving obstacles, delays, fear and instability caused by this planetary formation.",
    benefits: ["Obstacle Removal", "Stability & Growth", "Fear Relief"],
    duration: "4–5 Hours",
    mode: "Online / Onsite",
    price: "₹7,500",
    originalPrice: "₹13,000",
    featured: false,
    image: "/Kundli.webp",
  },
  {
    icon: "💍",
    title: "Vivah & Mangal Dosh Shanti",
    desc: "Dedicated rituals to reduce the ill-effects of Mangal Dosh in the horoscope, removing obstacles to marriage and ensuring a harmonious, blessed marital life.",
    benefits: ["Marriage Blessings", "Mangal Dosh Relief", "Couple Harmony"],
    duration: "3 Hours",
    mode: "Online / Onsite",
    price: "₹3,500",
    originalPrice: "₹6,500",
    featured: false,
    image: "/marriage.webp",
  },
  {
    icon: "💼",
    title: "Lakshmi Kubera Puja",
    desc: "A sacred wealth-inviting ritual calling upon Goddess Lakshmi and Lord Kubera for financial abundance, business growth, debt relief and sustained prosperity.",
    benefits: ["Financial Abundance", "Business Growth", "Debt Relief"],
    duration: "2–3 Hours",
    mode: "Online",
    price: "₹2,500",
    originalPrice: "₹4,800",
    featured: false,
    image: "/GemGuide.webp",
  },
  {
    icon: "🎓",
    title: "Saraswati Puja & Vidya Prapti",
    desc: "Invoke the blessings of Goddess Saraswati for excellence in education, creativity, memory, clarity of thought and success in competitive examinations.",
    benefits: ["Academic Success", "Memory & Focus", "Creative Expression"],
    duration: "2 Hours",
    mode: "Online",
    price: "₹1,500",
    originalPrice: "₹2,800",
    featured: false,
    image: "/course.webp",
  },
];

const howItWorks = [
  {
    icon: "📝",
    title: "Select Your Puja",
    desc: "Browse our puja offerings and choose the one that aligns with your intention, need or astrological guidance.",
  },
  {
    icon: "📋",
    title: "Fill the Request Form",
    desc: "Share your name, gotra (lineage), sankalpa (intention) and preferred date. We'll guide you on the best muhurta.",
  },
  {
    icon: "🔥",
    title: "Puja is Performed",
    desc: "Our pandit team performs the complete puja with proper Vedic rituals, mantras and ahutis (fire offerings).",
  },
  {
    icon: "📹",
    title: "Receive Prasad & Video",
    desc: "You receive a live stream or recorded video of the puja, plus sacred prasad delivered to your doorstep.",
  },
];

const testimonials = [
  {
    avatar: "🙏",
    text: "The Maha Rudrabhishek was performed with such devotion and precision. I could feel the positive energy even through the online stream. My health issues reduced significantly within weeks.",
    name: "Kavita Sharma",
    location: "Delhi, India",
    stars: 5,
  },
  {
    avatar: "🌺",
    text: "We had the Kaal Sarp Dosh Nivaran puja done for my son. The change was remarkable — job offers started coming after months of struggle. Truly grateful to Acharya Bhairav.",
    name: "Ramesh Gupta",
    location: "Jaipur, India",
    stars: 5,
  },
  {
    avatar: "✨",
    text: "The Lakshmi Kubera Puja was a turning point for our business. Within 3 months of the ritual, we secured two major contracts. The blessings were very real.",
    name: "Priya Agarwal",
    location: "Mumbai, India",
    stars: 5,
  },
  {
    avatar: "🕉️",
    text: "Acharya Bhairav's team performed Satyanarayan Puja for our new home. The entire ceremony was beautiful, authentic and filled with spiritual energy. Highly recommended.",
    name: "Suresh & Anita Verma",
    location: "Lucknow, India",
    stars: 5,
  },
];

const whyCards = [
  {
    icon: "📜",
    title: "100% Vedic Methods",
    desc: "Every puja is performed strictly according to classical Vedic scriptures and Guru-Shishya parampara — no shortcuts, no compromises.",
  },
  {
    icon: "🔴",
    title: "Live Online Darshan",
    desc: "Watch your puja live via secure video call. Participate from anywhere in the world without missing a sacred moment.",
  },
  {
    icon: "🌿",
    title: "Authentic Samagri",
    desc: "Only pure, sourced-from-origin puja materials are used — fresh flowers, natural ghee, Gangajal and traditional herbs.",
  },
  {
    icon: "🎁",
    title: "Prasad Home Delivery",
    desc: "Consecrated prasad and energised yantra/rudraksha are dispatched to your address across India following the ceremony.",
  },
  {
    icon: "🙏",
    title: "Personalised Sankalpa",
    desc: "Your name, gotra and specific intention (sankalpa) are recited during the puja to ensure the blessings reach you directly.",
  },
  {
    icon: "📞",
    title: "Post-Puja Guidance",
    desc: "Receive post-ritual guidance on follow-up practices, do's and don'ts, and how to maximise the puja's benefits.",
  },
];

const pujaOptions = [
  "Select a Puja…",
  "Maha Rudrabhishek",
  "Satyanarayan Puja",
  "Surya Graha Shanti",
  "Chandra Graha Shanti",
  "Kaal Sarp Dosh Nivaran",
  "Vivah & Mangal Dosh Shanti",
  "Lakshmi Kubera Puja",
  "Saraswati Puja & Vidya Prapti",
  "Custom / Other Puja",
];

const infoCards = [
  {
    icon: <Phone size={18} />,
    label: "Phone / WhatsApp",
    value: "+91 98765 43210",
    sub: "Mon – Sat, 9 AM – 8 PM IST",
    href: "tel:+919876543210",
  },
  {
    icon: <Mail size={18} />,
    label: "Email",
    value: "info@acharyabhairav.com",
    sub: "Reply within 24 hours",
    href: "mailto:info@acharyabhairav.com",
  },
  {
    icon: <Clock size={18} />,
    label: "Puja Hours",
    value: "Mon – Sat: 6 AM – 8 PM",
    sub: "Muhurta-based scheduling",
    href: null,
  },
];

/* ── Component ───────────────────────────────────────────── */
export default function OnlinePooja() {
  const [form, setForm] = useState({
    name: "",
    gotra: "",
    phone: "",
    email: "",
    puja: "",
    date: "",
    sankalpa: "",
  });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);

    emailjs
      .send(
        "service_1czbudi",
        "template_29cotrm",
        {
          name: form.name,
          email: form.email,
          phone: form.phone,
          service: form.puja,
          message: `Gotra: ${form.gotra} | Preferred Date: ${form.date} | Sankalpa: ${form.sankalpa}`,
        },
        "OfnCkEEedrQA7JEDN"
      )
      .then(() => {
        setSending(false);
        setSent(true);
      })
      .catch((err) => {
        console.error(err);
        setSending(false);
        alert("Failed to submit. Please try again.");
      });
  };

  const handleReset = () => {
    setSent(false);
    setForm({ name: "", gotra: "", phone: "", email: "", puja: "", date: "", sankalpa: "" });
  };

  return (
    <div className="op-page">
      {/* ── Hero ──────────────────────────────────────────── */}
      <section id="online-pooja" className="op-hero">
        <div className="op-hero-glow-a" />
        <div className="op-hero-glow-b" />
        <div className="op-hero-glow-c" />

        <motion.div
          className="op-hero-content"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          <span className="op-hero-badge">
            <Flame size={13} />
            Karamkand &amp; Online Pooja
          </span>

          <h1 className="op-hero-title">
            Sacred Rituals,{" "}
            <span>Divine Blessings</span>
          </h1>

          <p className="op-hero-sub">
            Experience authentic Vedic pujas and karamkand ceremonies performed
            by Acharya Bhairav and his team of trained pandits — from the comfort
            of your home, with live online darshan and prasad delivery.
          </p>

          <div className="op-hero-btns">
            <a href="#book-puja" className="op-hero-btn-primary">
              <Calendar size={18} />
              Book a Puja
            </a>
            <a href="#puja-services" className="op-hero-btn-secondary">
              <ArrowRight size={18} />
              View All Pujas
            </a>
          </div>
        </motion.div>
      </section>

      {/* ── Stats bar ──────────────────────────────────────── */}
      <div className="op-stats-bar">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            className="op-stat-card"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={i}
            variants={fadeUp}
          >
            <div className="op-stat-icon">{stat.icon}</div>
            <div className="op-stat-info">
              <strong>{stat.number}</strong>
              <span>{stat.label}</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* ── Puja Services Grid ─────────────────────────────── */}
      <section id="puja-services" className="op-pujas">
        <motion.div
          className="op-section-head"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <p className="op-section-label">Our Puja Services</p>
          <h2>Choose Your Sacred Ceremony</h2>
          <p>
            Each puja is performed with complete Vedic protocols, personalised
            sankalpa and dedicated intention — so every blessing reaches you
            directly.
          </p>
        </motion.div>

        <div className="op-pujas-grid">
          {pujas.map((puja, i) => (
            <motion.div
              key={i}
              className={`op-card${puja.featured ? " featured" : ""}`}
              custom={i % 3}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <div className="op-card-img-wrap">
                <img src={puja.image} alt={puja.title} className="op-card-img" />
              </div>

              <div className="op-card-body">
                <div className="op-card-icon">{puja.icon}</div>
                <h3 className="op-card-title">{puja.title}</h3>
                <p className="op-card-desc">{puja.desc}</p>

                <div className="op-card-benefits">
                  {puja.benefits.map((b, j) => (
                    <span key={j} className="op-benefit-tag">
                      ✓ {b}
                    </span>
                  ))}
                </div>

                <div className="op-card-meta">
                  <span className="op-card-tag">
                    <Clock size={12} />
                    {puja.duration}
                  </span>
                  <span className="op-card-tag">
                    <Globe size={12} />
                    {puja.mode}
                  </span>
                </div>
              </div>

              <div className="op-card-footer">
                <div className="op-card-price">
                  <strong>{puja.price}</strong>
                  <span>{puja.originalPrice}</span>
                </div>
                <a href="#book-puja" className="op-inquire-btn">
                  Book Now <ArrowRight size={13} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── How It Works ───────────────────────────────────── */}
      <section className="op-how">
        <motion.div
          className="op-section-head"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <p className="op-section-label">Simple Process</p>
          <h2>How It Works</h2>
          <p>From booking to divine blessings — four simple steps.</p>
        </motion.div>

        <div className="op-how-steps">
          {howItWorks.map((step, i) => (
            <motion.div
              key={i}
              className="op-how-step"
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <div className="op-step-circle">{step.icon}</div>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Booking Form ───────────────────────────────────── */}
      <section id="book-puja" className="op-booking">
        <motion.div
          className="op-section-head"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <p className="op-section-label">Book a Puja</p>
          <h2>Request Your Sacred Ceremony</h2>
          <p>
            Fill in your details and our team will reach out to confirm the
            muhurta (auspicious timing) and all arrangements.
          </p>
        </motion.div>

        <div className="op-booking-wrap">
          {/* Info side */}
          <motion.div
            className="op-booking-info"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <div>
              <h2>Get in Touch</h2>
              <p>
                Prefer a direct call? Reach Acharya Bhairav's team to schedule
                your puja, ask questions or get guidance on the right ceremony
                for your needs.
              </p>
            </div>

            <div className="op-info-cards">
              {infoCards.map((item, i) =>
                item.href ? (
                  <motion.a
                    key={i}
                    href={item.href}
                    className="op-info-card"
                    custom={i}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                  >
                    <div className="op-ic-icon">{item.icon}</div>
                    <div className="op-ic-text">
                      <strong>{item.label}</strong>
                      <p>{item.value}</p>
                      <span>{item.sub}</span>
                    </div>
                  </motion.a>
                ) : (
                  <motion.div
                    key={i}
                    className="op-info-card"
                    custom={i}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                  >
                    <div className="op-ic-icon">{item.icon}</div>
                    <div className="op-ic-text">
                      <strong>{item.label}</strong>
                      <p>{item.value}</p>
                      <span>{item.sub}</span>
                    </div>
                  </motion.div>
                )
              )}

              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="op-inquire-btn"
                style={{ justifyContent: "center", padding: "0.9rem 1.5rem", borderRadius: "1.2rem" }}
              >
                <MessageCircle size={16} />
                Chat on WhatsApp
              </a>
            </div>
          </motion.div>

          {/* Form panel */}
          <motion.div
            className="op-form-panel"
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <AnimatePresence mode="wait">
              {sent ? (
                <motion.div
                  key="success"
                  className="op-success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="op-success-icon">🙏</div>
                  <h3>Puja Request Received!</h3>
                  <p>
                    Our team will contact you shortly to confirm the auspicious
                    muhurta and all arrangements for your ceremony.
                  </p>
                  <button className="op-success-btn" onClick={handleReset}>
                    <CheckCircle size={14} />
                    Book Another Puja
                  </button>
                </motion.div>
              ) : (
                <motion.div
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <h2 className="op-form-title">Puja Booking Request</h2>
                  <p className="op-form-subtitle">
                    We'll confirm your booking &amp; muhurta within 24 hours.
                  </p>

                  <form className="op-form" onSubmit={handleSubmit}>
                    <div className="op-form-row">
                      <div className="op-field">
                        <label htmlFor="op-name">Full Name</label>
                        <input
                          id="op-name"
                          type="text"
                          name="name"
                          placeholder="Your full name"
                          value={form.name}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div className="op-field">
                        <label htmlFor="op-gotra">Gotra (Lineage)</label>
                        <input
                          id="op-gotra"
                          type="text"
                          name="gotra"
                          placeholder="e.g. Kashyap, Bharadwaj…"
                          value={form.gotra}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className="op-form-row">
                      <div className="op-field">
                        <label htmlFor="op-phone">Phone / WhatsApp</label>
                        <input
                          id="op-phone"
                          type="tel"
                          name="phone"
                          placeholder="+91 XXXXX XXXXX"
                          value={form.phone}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div className="op-field">
                        <label htmlFor="op-email">Email Address</label>
                        <input
                          id="op-email"
                          type="email"
                          name="email"
                          placeholder="you@example.com"
                          value={form.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="op-field">
                      <label htmlFor="op-puja">Select Puja / Ceremony</label>
                      <select
                        id="op-puja"
                        name="puja"
                        value={form.puja}
                        onChange={handleChange}
                      >
                        {pujaOptions.map((opt) => (
                          <option
                            key={opt}
                            value={opt === pujaOptions[0] ? "" : opt}
                          >
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="op-field">
                      <label htmlFor="op-date">Preferred Date</label>
                      <input
                        id="op-date"
                        type="date"
                        name="date"
                        value={form.date}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="op-field">
                      <label htmlFor="op-sankalpa">Sankalpa / Intention</label>
                      <textarea
                        id="op-sankalpa"
                        name="sankalpa"
                        placeholder="Describe your prayer, wish or the purpose behind this puja…"
                        value={form.sankalpa}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <button
                      type="submit"
                      className="op-submit-btn"
                      disabled={sending}
                    >
                      {sending ? (
                        <>Submitting…</>
                      ) : (
                        <>
                          <Send size={16} />
                          Submit Puja Request
                        </>
                      )}
                    </button>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* ── Testimonials ───────────────────────────────────── */}
      <section className="op-testimonials">
        <motion.div
          className="op-section-head"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <p className="op-section-label">Devotee Stories</p>
          <h2>Blessed by the Divine</h2>
          <p>
            Hear from devotees whose lives were transformed through the power of
            authentic Vedic rituals.
          </p>
        </motion.div>

        <div className="op-testi-grid">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              className="op-testi-card"
              custom={i % 3}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <div className="op-testi-quote">"</div>
              <p className="op-testi-text">{t.text}</p>
              <div className="op-testi-footer">
                <div className="op-testi-avatar">{t.avatar}</div>
                <div className="op-testi-name">
                  <strong>{t.name}</strong>
                  <span>{t.location}</span>
                </div>
                <div className="op-testi-stars">
                  {Array.from({ length: t.stars }).map((_, j) => (
                    <Star key={j} size={13} fill="currentColor" />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Why Choose Us ──────────────────────────────────── */}
      <section className="op-why">
        <motion.div
          className="op-section-head"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <p className="op-section-label">Why Choose Us</p>
          <h2>Our Commitment to Sacred Tradition</h2>
          <p>
            Every ceremony is performed with authenticity, devotion and
            personalised care — as if done in your own home.
          </p>
        </motion.div>

        <div className="op-why-grid">
          {whyCards.map((card, i) => (
            <motion.div
              key={i}
              className="op-why-card"
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <div className="op-why-icon">{card.icon}</div>
              <h3>{card.title}</h3>
              <p>{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── CTA Banner ─────────────────────────────────────── */}
      <section className="op-cta">
        <motion.div
          className="op-cta-inner"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2>Invite the Divine Into Your Life</h2>
          <p>
            Let the ancient power of Vedic rituals bring clarity, protection and
            abundance into your home, family and future.
          </p>
          <div className="op-cta-btns">
            <a href="#book-puja" className="op-cta-primary">
              <Flame size={16} />
              Book a Puja Now
            </a>
            <Link to="/contact-us" className="op-cta-secondary">
              Have Questions? <ArrowRight size={16} />
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
