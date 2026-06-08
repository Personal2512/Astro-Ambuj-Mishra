import { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion, AnimatePresence } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  Sparkles,
  Camera,
  Play,
  MessageCircle,
} from "lucide-react";
import "./Contact.css";

/* ── Static data ─────────────────────────────────────────── */
const contactItems = [
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
    icon: <MapPin size={18} />,
    label: "Location",
    value: "B-5/434 Ground Floor, Viraj Khand, Gomti Nagar, Lucknow",
    sub: "Uttar Pradesh – 226010",
    href: "https://maps.app.goo.gl/cKyKiB8hnJ1qY56w7",
  },
  {
    icon: <Clock size={18} />,
    label: "Consultation Hours",
    value: "Mon – Sat: 9 AM – 8 PM",
    sub: "Sunday: By appointment only",
    href: null,
  },
];

const quickLinks = [
  {
    icon: <MessageCircle size={18} />,
    label: "WhatsApp Us",
    detail: "Chat instantly",
    href: "https://wa.me/919876543210",
    color: "#25D366",
  },
  {
    icon: <Phone size={18} />,
    label: "Call Now",
    detail: "+91 98765 43210",
    href: "tel:+919876543210",
    color: "#EAB308",
  },
  {
    icon: <Mail size={18} />,
    label: "Send Email",
    detail: "info@acharyabhairav.com",
    href: "mailto:info@acharyabhairav.com",
    color: "#9AE6D8",
  },
];

const socials = [
  {
    icon: <Camera size={14} />,
    label: "Instagram",
    href: "https://instagram.com",
  },
  {
    icon: <Play size={14} />,
    label: "YouTube",
    href: "https://youtube.com",
  },
  {
    icon: <MessageCircle size={14} />,
    label: "WhatsApp",
    href: "https://wa.me/919876543210",
  },
];

const whyCards = [
  {
    icon: "🔮",
    title: "15+ Years of Expertise",
    desc: "Acharya Bhairav brings over a decade and a half of deep Vedic astrology practice and research.",
  },
  {
    icon: "🕉️",
    title: "Traditional Lineage",
    desc: "Rooted in the Guru-Shishya Parampara with a certified Master's in Jyotish Vigyan.",
  },
  {
    icon: "🌍",
    title: "Global Reach",
    desc: "Clients from 20+ countries trust Acharya Bhairav for accurate, life-changing guidance.",
  },
  {
    icon: "💬",
    title: "Personalised Responses",
    desc: "Every query is handled personally — no bots, no template replies, only genuine guidance.",
  },
];

const serviceOptions = [
  "Select a topic…",
  "Kundli / Birth Chart Reading",
  "Marriage Compatibility",
  "Career Astrology",
  "Gemstone Recommendation",
  "Karamkand / Online Puja",
  "Astrology Course Enquiry",
  "Product / Shop Enquiry",
  "Other",
];

/* ── Framer-motion variants ──────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.1, ease: "easeOut" },
  }),
};

/* ── Component ───────────────────────────────────────────── */
export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
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
          service: form.service,
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
        alert("Failed to send message.");
      });
  };

  const handleReset = () => {
    setSent(false);
    setForm({ name: "", email: "", phone: "", service: "", message: "" });
  };

  return (
    <div className="ct-page">
      {/* ── Hero ──────────────────────────────────────────── */}
      <section id="contact-us" className="ct-hero">
        <div className="ct-hero-glow-a" />
        <div className="ct-hero-glow-b" />

        <motion.div
          className="ct-hero-content"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          <span className="ct-hero-badge">
            <Sparkles size={13} />
            Get In Touch
          </span>

          <h1 className="ct-hero-title">
            Contact <span>Acharya Bhairav</span>
          </h1>

          <p className="ct-hero-sub">
            Have a question or want to book a consultation? Reach out — we'd
            love to guide you on your cosmic journey.
          </p>
        </motion.div>
      </section>

      {/* ── Quick contact bar ───────────────────────────── */}
      <div className="ct-quick-bar">
        {quickLinks.map((q, i) => (
          <motion.a
            key={q.label}
            href={q.href}
            target="_blank"
            rel="noopener noreferrer"
            className="ct-quick-card"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={i}
            variants={fadeUp}
          >
            <div
              className="ct-quick-icon"
              style={{
                color: q.color,
                background: q.color + "18",
                borderColor: q.color + "40",
              }}
            >
              {q.icon}
            </div>
            <div className="ct-quick-info">
              <strong>{q.label}</strong>
              <span>{q.detail}</span>
            </div>
          </motion.a>
        ))}
      </div>

      {/* ── Main grid (info + form) ──────────────────────── */}
      <div className="ct-main">
        {/* Info panel */}
        <motion.div
          className="ct-info-panel"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <div>
            <p className="ct-section-label">Contact Information</p>
            <h2 className="ct-info-title">We're Here to Help You</h2>
            <p className="ct-info-desc">
              Whether you have a question about a service, need help choosing
              the right consultation, or simply want to connect — our team is
              ready to assist.
            </p>
          </div>

          <div className="ct-contact-items">
            {contactItems.map((item, i) =>
              item.href ? (
                <motion.a
                  key={i}
                  href={item.href}
                  className="ct-contact-item"
                  style={{ textDecoration: "none" }}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                >
                  <div className="ct-ci-icon">{item.icon}</div>
                  <div className="ct-ci-text">
                    <strong>{item.label}</strong>
                    <p>{item.value}</p>
                    <span>{item.sub}</span>
                  </div>
                </motion.a>
              ) : (
                <motion.div
                  key={i}
                  className="ct-contact-item"
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                >
                  <div className="ct-ci-icon">{item.icon}</div>
                  <div className="ct-ci-text">
                    <strong>{item.label}</strong>
                    <p>{item.value}</p>
                    <span>{item.sub}</span>
                  </div>
                </motion.div>
              )
            )}
          </div>

          {/* Social links */}
          <div>
            <p className="ct-section-label" style={{ marginBottom: "0.75rem" }}>
              Follow Us
            </p>
            <div className="ct-socials">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ct-social-btn"
                >
                  {s.icon}
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Form panel */}
        <motion.div
          className="ct-form-panel"
          initial={{ opacity: 0, x: 35 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <AnimatePresence mode="wait">
            {sent ? (
              <motion.div
                key="success"
                className="ct-success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
              >
                <div className="ct-success-icon">✨</div>
                <h3>Message Received!</h3>
                <p>
                  Thank you for reaching out. Acharya Bhairav's team will get
                  back to you within 24 hours.
                </p>
                <button className="ct-success-btn" onClick={handleReset}>
                  <CheckCircle size={14} />
                  Send Another Message
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
                <h2 className="ct-form-title">Send a Message</h2>
                <p className="ct-form-subtitle">
                  Fill in the form and we'll reach out personally.
                </p>

                <form className="ct-form" onSubmit={handleSubmit}>
                  <div className="ct-form-row">
                    <div className="ct-field">
                      <label htmlFor="ct-name">Full Name</label>
                      <input
                        id="ct-name"
                        type="text"
                        name="name"
                        placeholder="Your full name"
                        value={form.name}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="ct-field">
                      <label htmlFor="ct-phone">Phone / WhatsApp</label>
                      <input
                        id="ct-phone"
                        type="tel"
                        name="phone"
                        placeholder="+91 XXXXX XXXXX"
                        value={form.phone}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="ct-field">
                    <label htmlFor="ct-email">Email Address</label>
                    <input
                      id="ct-email"
                      type="email"
                      name="email"
                      placeholder="you@example.com"
                      value={form.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="ct-field">
                    <label htmlFor="ct-service">Topic / Service</label>
                    <select
                      id="ct-service"
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                    >
                      {serviceOptions.map((opt) => (
                        <option key={opt} value={opt === serviceOptions[0] ? "" : opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="ct-field">
                    <label htmlFor="ct-message">Your Message</label>
                    <textarea
                      id="ct-message"
                      name="message"
                      placeholder="Tell us about your query, birth details, or anything you'd like guidance on…"
                      value={form.message}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="ct-submit-btn"
                    disabled={sending}
                  >
                    {sending ? (
                      <>Sending…</>
                    ) : (
                      <>
                        <Send size={16} />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* ── Why choose us ────────────────────────────────── */}
      <section className="ct-why">
        <motion.div
          className="ct-why-head"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2>Why Thousands Trust Acharya Bhairav</h2>
          <p>Authentic, research-backed Vedic guidance — tailored for you.</p>
        </motion.div>

        <div className="ct-why-grid">
          {whyCards.map((card, i) => (
            <motion.div
              key={i}
              className="ct-why-card"
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <div className="ct-why-card-icon">{card.icon}</div>
              <h3>{card.title}</h3>
              <p>{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Map placeholder ───────────────────────────────── */}
      <div className="ct-map-wrap">
        <div className="ct-map-inner">
          <iframe
            src="https://www.google.com/maps?q=26.8592105,81.0271141&z=17&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            title="Ecogram Location"
          />
        </div>
        {/* <div className="ct-map-icon">📍</div>
        <p>Ecogram, Lucknow, Uttar Pradesh 226010, India</p> */}

        <a
          href="https://www.google.com/maps/place/Ecogram/@26.8592105,81.0271141,17z"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "#EAB308",
            fontSize: "0.85rem",
            fontWeight: 700,
            textDecoration: "none",
          }}
        >
          {/* Open in Google Maps → */}
        </a>
      </div>
    </div>
  );
}
