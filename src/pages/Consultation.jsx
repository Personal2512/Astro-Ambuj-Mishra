import { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion, AnimatePresence } from "framer-motion";
import {
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle,
  Sparkles,
  MessageCircle,
  Video,
  PhoneCall,
  Star,
  ArrowRight,
  Calendar,
  Globe,
  User,
  FileText,
} from "lucide-react";
import { Link } from "react-router-dom";
import "./Consultation.css";

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
  { icon: "⭐", number: "10,000+", label: "Consultations Done" },
  { icon: "🌍", number: "20+", label: "Countries Served" },
  { icon: "🏆", number: "25", label: "Years of Expertise" },
  { icon: "💯", number: "98%", label: "Satisfaction Rate" },
];

const consultationTypes = [
  {
    icon: "🔮",
    title: "Kundli / Birth Chart Reading",
    desc: "A comprehensive analysis of your natal chart — planets, houses, yogas and dashas — to reveal your life purpose, strengths and challenges.",
    duration: "60 min",
    mode: "Video / Phone",
    price: "₹1,999",
    originalPrice: "₹3,500",
    popular: true,
    image: "/Kundli.webp",
  },
  {
    icon: "💍",
    title: "Marriage & Compatibility",
    desc: "In-depth kundli matching (Ashtakoot & Dashakoot), analysis of the 7th house and relationship planets for informed life decisions.",
    duration: "45 min",
    mode: "Video / Phone",
    price: "₹1,499",
    originalPrice: "₹2,800",
    popular: false,
    image: "/marriage.webp",
  },
  {
    icon: "💼",
    title: "Career & Finance Astrology",
    desc: "Identify the right career path, auspicious timings for job changes, business ventures and wealth accumulation through your 10th house.",
    duration: "45 min",
    mode: "Video / Phone",
    price: "₹1,499",
    originalPrice: "₹2,800",
    popular: false,
    image: "/carrier.webp",
  },
  {
    icon: "💎",
    title: "Gemstone Recommendation",
    desc: "Personalised gemstone prescription based on your ascendant and planetary periods — which stone to wear, how and when for maximum benefit.",
    duration: "30 min",
    mode: "Video / Phone / Chat",
    price: "₹999",
    originalPrice: "₹1,800",
    popular: false,
    image: "/GemGuide.webp",
  },
  {
    icon: "🕉️",
    title: "Karamkand & Online Puja",
    desc: "Specially curated pujas, homas and spiritual rituals performed for planetary appeasement, prosperity, health and family harmony.",
    duration: "Custom",
    mode: "Online Ceremony",
    price: "₹2,499",
    originalPrice: "₹4,500",
    popular: false,
    image: "/DailyHoroscope.webp",
  },
  {
    icon: "📖",
    title: "Life Path & Spiritual Guidance",
    desc: "An introspective session covering karma, past-life influences, dharma and practical spiritual remedies for inner peace and clarity.",
    duration: "60 min",
    mode: "Video / Phone",
    price: "₹1,799",
    originalPrice: "₹3,200",
    popular: false,
    image: "/course.webp",
  },
];

const howItWorks = [
  {
    num: "1",
    icon: "📅",
    title: "Book Your Slot",
    desc: "Fill the booking form with your details and preferred consultation type. We'll confirm your appointment within hours.",
  },
  {
    num: "2",
    icon: "📋",
    title: "Share Birth Details",
    desc: "Provide your exact date, time and place of birth. The more precise, the more accurate your reading.",
  },
  {
    num: "3",
    icon: "🔭",
    title: "Chart Preparation",
    desc: "Ambuj Mishra personally prepares your Kundli and analyses the planetary positions before your session.",
  },
  {
    num: "4",
    icon: "🎯",
    title: "Your Consultation",
    desc: "Attend your session via phone or video call. Receive personalised guidance, remedies and answers to your questions.",
  },
];

const testimonials = [
  {
    avatar: "🙏",
    text: "The birth chart reading was incredibly precise. Ambuj Mishra identified a challenging Saturn transit I was unknowingly going through and gave me practical remedies that truly helped.",
    name: "Priya Sharma",
    location: "Delhi, India",
    stars: 5,
  },
  {
    avatar: "🌟",
    text: "I was sceptical at first, but the career consultation opened my eyes. The guidance on timing my business launch was spot on — we launched in the recommended muhurta and things took off immediately.",
    name: "Rahul Verma",
    location: "Mumbai, India",
    stars: 5,
  },
  {
    avatar: "✨",
    text: "We consulted Ambuj Mishra for kundli matching before our wedding. His analysis was thorough, compassionate and deeply rooted in traditional Vedic principles. Highly recommended.",
    name: "Ananya & Rohan",
    location: "Bangalore, India",
    stars: 5,
  },
  {
    avatar: "🔮",
    text: "The gemstone recommendation changed my life. Within two months of wearing the suggested stone, my financial situation improved dramatically. Forever grateful.",
    name: "Suresh Nair",
    location: "Lucknow,India",
    stars: 5,
  },
  {
    avatar: "🕉️",
    text: "Ambuj Mishra's knowledge of Jyotish is unmatched. His reading was not just about predictions but about empowering me to make better decisions. A truly life-changing experience.",
    name: "Meera Iyer",
    location: "Gujarat, India",
    stars: 5,
  },
  {
    avatar: "🌙",
    text: "The spiritual guidance session helped me understand my life's purpose. I walked away with clarity, peace and a clear path forward. Ambuj Mishra is a rare gem.",
    name: "Amit Joshi",
    location: "Varanasi, India",
    stars: 5,
  },
];

const whyCards = [
  {
    icon: "🎓",
   title: "Holistic Life Mentor",
desc: "With expertise in astrology, business guidance, and mental wellness, Ambuj Mishra inspires individuals to overcome challenges and unlock their true potential.",
  },
  {
    icon: "📜",
  title: "Trusted Guidance",
  desc: "With over 25 years of experience, providing trusted astrology consultations and holistic guidance to support personal growth and meaningful life decisions.",
},
  {
    icon: "🌍",
    title: "Global Clientele",
    desc: "Clients from 20+ countries across India, UAE, UK, USA, Canada and beyond trust Ambuj Mishra for life-changing guidance.",
  },
  {
    icon: "💬",
    title: "Personal Attention",
    desc: "Every consultation is conducted personally by Ambuj Mishra — no assistants, no templates. Genuine, one-on-one care.",
  },
  {
    icon: "⚡",
    title: "Practical Remedies",
    desc: "Remedies are simple, affordable and effective — no superstition, no pressure. Only science-backed Vedic solutions.",
  },
  {
    icon: "🤝",
    title: "Post-session Support",
    desc: "Follow-up queries via WhatsApp included with every session. You're never left without guidance.",
  },
];

const consultationTopics = [
  "Select a Consultation Type…",
  "Kundli / Birth Chart Reading",
  "Marriage & Compatibility",
  "Career & Finance Astrology",
  "Gemstone Recommendation",
  "Karamkand / Online Puja",
  "Life Path & Spiritual Guidance",
  "Other / General Query",
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
    value: "info@ambujmishra.com",
    sub: "Reply within 24 hours",
    href: "mailto:info@ambujmishra.com",
  },
  {
    icon: <Clock size={18} />,
    label: "Consultation Hours",
    value: "Mon – Sat: 9 AM – 8 PM",
    sub: "Sunday: By appointment only",
    href: null,
  },
];

/* ── Component ───────────────────────────────────────────── */
export default function Consultation() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    dob: "",
    birthTime: "",
    birthPlace: "",
    consultationType: "",
    message: "",
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
          dob: form.dob,
          birthTime: form.birthTime,
          birthPlace: form.birthPlace,
          service: form.consultationType,
          message: form.message,
        },
        "OfnCkEEedrQA7JEDN"
      )
      .then(() => {
        setSending(false);
        setSent(true);
      })
      .catch((error) => {
        console.error(error);
        setSending(false);
        alert("Failed to send booking request. Please try again.");
      });
  };

  const handleReset = () => {
    setSent(false);
    setForm({
      name: "",
      email: "",
      phone: "",
      dob: "",
      birthTime: "",
      birthPlace: "",
      consultationType: "",
      message: "",
    });
  };

  return (
    <div className="cn-page">
      {/* ── Hero ──────────────────────────────────────────── */}
      <section id="consultation" className="cn-hero">
        <div className="cn-hero-glow-a" />
        <div className="cn-hero-glow-b" />
        <div className="cn-hero-glow-c" />

        <motion.div
          className="cn-hero-content"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          <span className="cn-hero-badge">
            <Sparkles size={13} />
            Vedic Astrology Consultation
          </span>

          <h1 className="cn-hero-title">
            Seek Clarity From{" "}
            <span>The Stars</span>
          </h1>

          <p className="cn-hero-sub">
            Book a personalized one-on-one consultation with Ambuj Mishra, a renowned astrologer, business mentor, and mental wellness professional with over 25 years of experience helping individuals achieve clarity, confidence, and personal growth.
          </p>

          <div className="cn-hero-btns">
            <a href="#book-now" className="cn-hero-btn-primary">
              <Calendar size={18} />
              Book Your Session
            </a>
            <a href="#how-it-works" className="cn-hero-btn-secondary">
              <ArrowRight size={18} />
              How It Works
            </a>
          </div>
        </motion.div>
      </section>

      {/* ── Stats bar ──────────────────────────────────────── */}
      <div className="cn-stats-bar">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            className="cn-stat-card"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={i}
            variants={fadeUp}
          >
            <div className="cn-stat-icon">{stat.icon}</div>
            <div className="cn-stat-info">
              <strong>{stat.number}</strong>
              <span>{stat.label}</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* ── Consultation Types ─────────────────────────────── */}
      <section className="cn-types">
        <motion.div
          className="cn-section-head"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <p className="cn-section-label">Our Services</p>
          <h2>Choose Your Consultation</h2>
          <p>
            Select the type of guidance that resonates most with your current
            life situation. Every session is conducted personally by Ambuj Mishra
            .
          </p>
        </motion.div>

        <div className="cn-types-grid">
          {consultationTypes.map((type, i) => (
            <motion.div
              key={i}
              className={`cn-type-card${type.popular ? " popular" : ""}`}
              custom={i % 3}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <div className="cn-type-img-wrap">
                <img src={type.image} alt={type.title} className="cn-type-img" />
              </div>

              <div className="cn-type-body">
                <div className="cn-type-icon">{type.icon}</div>
                <h3 className="cn-type-title">{type.title}</h3>
                <p className="cn-type-desc">{type.desc}</p>

                <div className="cn-type-meta">
                  <span className="cn-type-tag">
                    <Clock size={12} />
                    {type.duration}
                  </span>
                  <span className="cn-type-tag">
                    <Video size={12} />
                    {type.mode}
                  </span>
                </div>
              </div>

              <div className="cn-type-footer">
                <div className="cn-type-price">
                  <strong>{type.price}</strong>
                  <span>{type.originalPrice}</span>
                </div>
                <a href="#book-now" className="cn-book-btn">
                  Book Now <ArrowRight size={13} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── How it Works ───────────────────────────────────── */}
      <section id="how-it-works" className="cn-how">
        <motion.div
          className="cn-section-head"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <p className="cn-section-label">Simple Process</p>
          <h2>How It Works</h2>
          <p>Your consultation journey in four simple steps.</p>
        </motion.div>

        <div className="cn-how-steps">
          {howItWorks.map((step, i) => (
            <motion.div
              key={i}
              className="cn-how-step"
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <div className="cn-step-num">
                <span className="cn-step-icon">{step.icon}</span>
              </div>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Booking Form ───────────────────────────────────── */}
      <section id="book-now" className="cn-booking">
        <motion.div
          className="cn-section-head"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <p className="cn-section-label">Book Now</p>
          <h2>Schedule Your Session</h2>
          <p>
            Fill in your details below and Ambuj Mishra's team will confirm
            your appointment within a few hours.
          </p>
        </motion.div>

        <div className="cn-booking-wrap">
          {/* Info side */}
          <motion.div
            className="cn-booking-info"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <div>
              <h2>Reach Out Directly</h2>
              <p>
                Prefer a quick chat? Call or WhatsApp Ambuj Mishra's team
                directly for same-day appointment confirmation.
              </p>
            </div>

            <div className="cn-info-cards">
              {infoCards.map((item, i) =>
                item.href ? (
                  <motion.a
                    key={i}
                    href={item.href}
                    className="cn-info-card"
                    style={{ textDecoration: "none" }}
                    custom={i}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                  >
                    <div className="cn-ic-icon">{item.icon}</div>
                    <div className="cn-ic-text">
                      <strong>{item.label}</strong>
                      <p>{item.value}</p>
                      <span>{item.sub}</span>
                    </div>
                  </motion.a>
                ) : (
                  <motion.div
                    key={i}
                    className="cn-info-card"
                    custom={i}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                  >
                    <div className="cn-ic-icon">{item.icon}</div>
                    <div className="cn-ic-text">
                      <strong>{item.label}</strong>
                      <p>{item.value}</p>
                      <span>{item.sub}</span>
                    </div>
                  </motion.div>
                )
              )}

              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="cn-book-btn"
                style={{ justifyContent: "center", padding: "0.9rem 1.5rem", borderRadius: "1.2rem" }}
              >
                <MessageCircle size={16} />
                Chat on WhatsApp
              </a>
            </div>
          </motion.div>

          {/* Form panel */}
          <motion.div
            className="cn-form-panel"
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <AnimatePresence mode="wait">
              {sent ? (
                <motion.div
                  key="success"
                  className="cn-success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="cn-success-icon">🙏</div>
                  <h3>Booking Received!</h3>
                  <p>
                    Thank you for reaching out. Ambuj Mishra's team will
                    confirm your appointment within a few hours.
                  </p>
                  <button className="cn-success-btn" onClick={handleReset}>
                    <CheckCircle size={14} />
                    Book Another Session
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
                  <h2 className="cn-form-title">Book a Consultation</h2>
                  <p className="cn-form-subtitle">
                    Fill in your details and we'll confirm your slot.
                  </p>

                  <form className="cn-form" onSubmit={handleSubmit}>
                    <div className="cn-form-row">
                      <div className="cn-field">
                        <label htmlFor="cn-name">Full Name</label>
                        <input
                          id="cn-name"
                          type="text"
                          name="name"
                          placeholder="Your full name"
                          value={form.name}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div className="cn-field">
                        <label htmlFor="cn-phone">Phone / WhatsApp</label>
                        <input
                          id="cn-phone"
                          type="tel"
                          name="phone"
                          placeholder="+91 XXXXX XXXXX"
                          value={form.phone}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="cn-field">
                      <label htmlFor="cn-email">Email Address</label>
                      <input
                        id="cn-email"
                        type="email"
                        name="email"
                        placeholder="you@example.com"
                        value={form.email}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="cn-field">
                      <label htmlFor="cn-type">Consultation Type</label>
                      <select
                        id="cn-type"
                        name="consultationType"
                        value={form.consultationType}
                        onChange={handleChange}
                      >
                        {consultationTopics.map((opt) => (
                          <option
                            key={opt}
                            value={opt === consultationTopics[0] ? "" : opt}
                          >
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="cn-form-row">
                      <div className="cn-field">
                        <label htmlFor="cn-dob">Date of Birth</label>
                        <input
                          id="cn-dob"
                          type="date"
                          name="dob"
                          value={form.dob}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div className="cn-field">
                        <label htmlFor="cn-time">Time of Birth</label>
                        <input
                          id="cn-time"
                          type="time"
                          name="birthTime"
                          value={form.birthTime}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className="cn-field">
                      <label htmlFor="cn-place">Place of Birth</label>
                      <input
                        id="cn-place"
                        type="text"
                        name="birthPlace"
                        placeholder="City, State, Country"
                        value={form.birthPlace}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="cn-field">
                      <label htmlFor="cn-message">Your Query / Message</label>
                      <textarea
                        id="cn-message"
                        name="message"
                        placeholder="Describe your concerns, questions or specific areas you'd like guidance on…"
                        value={form.message}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <button
                      type="submit"
                      className="cn-submit-btn"
                      disabled={sending}
                    >
                      {sending ? (
                        <>Submitting…</>
                      ) : (
                        <>
                          <Send size={16} />
                          Request Consultation
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
      <section className="cn-testimonials">
        <motion.div
          className="cn-section-head"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <p className="cn-section-label">Client Stories</p>
          <h2>What Our Clients Say</h2>
          <p>
            Real experiences from people whose lives were transformed through
            Vedic astrology guidance.
          </p>
        </motion.div>

        <div className="cn-testimonials-grid">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              className="cn-testi-card"
              custom={i % 3}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <div className="cn-testi-quote">"</div>
              <p className="cn-testi-text">{t.text}</p>
              <div className="cn-testi-footer">
                <div className="cn-testi-avatar">{t.avatar}</div>
                <div className="cn-testi-name">
                  <strong>{t.name}</strong>
                  <span>{t.location}</span>
                </div>
                <div className="cn-testi-stars">
                  {Array.from({ length: t.stars }).map((_, j) => (
                    <Star key={j} size={13} fill="currentColor" />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Why Ambuj Mishra ────────────────────────────── */}
      <section className="cn-why">
        <motion.div
          className="cn-section-head"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <p className="cn-section-label">Why Choose Us</p>
          <h2>Why Thousands Trust Ambuj Mishra</h2>
          <p>
            Authentic, research-backed Vedic guidance rooted in classical
            tradition — tailored uniquely for you.
          </p>
        </motion.div>

        <div className="cn-why-grid">
          {whyCards.map((card, i) => (
            <motion.div
              key={i}
              className="cn-why-card"
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <div className="cn-why-card-icon">{card.icon}</div>
              <h3>{card.title}</h3>
              <p>{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── CTA Banner ─────────────────────────────────────── */}
      <section className="cn-cta">
        <motion.div
          className="cn-cta-inner"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2>Begin Your Cosmic Journey Today</h2>
          <p>
            Your stars hold the answers. Let Ambuj Mishra help you decode
            them and navigate life with confidence and clarity.
          </p>
          <div className="cn-cta-btns">
            <a href="#book-now" className="cn-cta-primary">
              <PhoneCall size={16} />
              Book a Consultation
            </a>
            <Link to="/contact-us" className="cn-cta-secondary">
              Contact Us <ArrowRight size={16} />
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
