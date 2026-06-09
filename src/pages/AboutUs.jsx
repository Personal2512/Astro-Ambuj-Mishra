import { motion } from "framer-motion";
import {
  Sparkles,
  Award,
  BookOpen,
  Star,
  CheckCircle,
  ArrowRight,
  Phone,
  GraduationCap,
  Globe,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";
import { testimonials, stats } from "../data/siteData";
import "./AboutUs.css";

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
const credentials = [
  {
    icon: <GraduationCap size={16} />,
    title: "M.A. Jyotish Vigyan",
    sub: "Certified by Uttar Pradesh Sanskrit Sansthan",
  },
  {
    icon: <Award size={16} />,
    title: "Jyotish Visharad — ICAS",
    sub: "Lifetime Member, Indian Council of Astrological Sciences",
  },
  {
    icon: <BookOpen size={16} />,
    title: "Guru-Shishya Parampara",
    sub: "Deeply rooted in traditional Vedic lineage",
  },
  {
    icon: <Star size={16} />,
    title: "15+ Years of Practice",
    sub: "Active research-backed consultations since 2009",
  },
];

const pillars = [
  {
    icon: "🔮",
    title: "Authentic Vedic Knowledge",
    desc: "Grounded in classical texts — Brihat Parashara Hora Shastra, Jataka Parijata — for precise, time-tested readings.",
  },
  {
    icon: "📚",
    title: "Academic Excellence",
    desc: "A Master's degree in Jyotish Vigyan blends rigorous scholarship with spiritual depth for unmatched accuracy.",
  },
  {
    icon: "🌍",
    title: "Global Client Base",
    desc: "Serving seekers from 20+ countries with personalised guidance tailored to their unique planetary blueprints.",
  },
  {
    icon: "🕉️",
    title: "Research-Backed Approach",
    desc: "Acharya Bhairav actively documents astrological patterns to continuously refine the quality of every reading.",
  },
];

const missionPoints = [
  {
    icon: <CheckCircle size={14} />,
    title: "Clarity Over Complexity",
    desc: "Every reading is delivered in clear, actionable language — no jargon, no vagueness.",
  },
  {
    icon: <CheckCircle size={14} />,
    title: "Ethical & Responsible Guidance",
    desc: "We empower you with knowledge — never fear, never dependency.",
  },
  {
    icon: <CheckCircle size={14} />,
    title: "Preserving Vedic Heritage",
    desc: "A commitment to keeping the ancient science alive and accessible for generations to come.",
  },
];

/* ── Component ───────────────────────────────────────────── */
export default function AboutUs() {
  return (
    <div className="au-page">
      {/* ── Hero ─────────────────────────────────────────── */}
      <section id="about-us" className="au-hero">
        <div className="au-hero-glow-a" />
        <div className="au-hero-glow-b" />

        <motion.div
          className="au-hero-content"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          <span className="au-hero-badge">
            <Sparkles size={13} />
            Our Story
          </span>

          <h1 className="au-hero-title">
            About <span>Acharya Bhairav</span>
          </h1>

          <p className="au-hero-sub">
            Over 15 years of authentic Vedic astrology practice, academic
            mastery, and a sacred lineage — brought to you with clarity,
            compassion and precision.
          </p>
        </motion.div>
      </section>

      {/* ── Stats bar ────────────────────────────────────── */}
      <div className="au-stats-bar">
        {stats.map(([number, label], i) => (
          <motion.div
            key={label}
            className="au-stat-card"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={i}
            variants={fadeUp}
          >
            <div className="au-stat-number">{number}</div>
            <div className="au-stat-label">{label}</div>
          </motion.div>
        ))}
      </div>

      {/* ── Main profile section ──────────────────────────── */}
      <div className="au-main">
        {/* Image column */}
        <motion.div
          className="au-image-col"
          initial={{ opacity: 0, x: -35 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="au-image-frame">
            <img src="/about.webp" alt="Astro Ambuj Mishra" />

            {/* Floating badge */}
            <div className="au-image-badge">
              <div className="au-image-badge-icon">
                <Award size={22} />
              </div>
              <div>
                <h4>15+ Years</h4>
                <p>Experience in Astrology</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Content column */}
        <motion.div
          className="au-content-col"
          initial={{ opacity: 0, x: 35 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="au-eyebrow">
            <Sparkles size={14} />
            Vedic Astrology
          </div>

          <h2 className="au-content-title">
            Acharya Vatsal Mishra{" "}
            <span>'Bhairav'</span>
          </h2>

          <div className="au-divider" />

          <div className="au-content-body">
            <p>
              Astro Ambuj Mishra has been practicing astrology for
              over 15 years, deeply rooted in the sacred Guru-Shishya
              Parampara. Certified by the Uttar Pradesh Sanskrit Sansthan, he
              holds a Master of Arts (Jyotish Vigyan) degree, blending deep
              academic excellence with traditional spiritual lineage.
            </p>
            <p>
              He is a lifetime member and Jyotish Visharad of the prestigious
              Indian Council of Astrological Sciences (ICAS). Driven by a
              passion for accuracy, Acharya Bhairav actively incorporates
              rigorous astrological research into his practice.
            </p>
            <p>
              By combining timeless traditional wisdom with a contemporary,
              research-backed approach, he continues to uphold the rich legacy
              of Vedic astrology — delivering logical, practical, and highly
              impactful guidance for the modern world.
            </p>
          </div>

          {/* Credentials list */}
          <div className="au-credentials">
            {credentials.map((cred, i) => (
              <motion.div
                key={i}
                className="au-cred-item"
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
              >
                <div className="au-cred-icon">{cred.icon}</div>
                <div className="au-cred-text">
                  <strong>{cred.title}</strong>
                  <span>{cred.sub}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* ── Core pillars ─────────────────────────────────── */}
      <section className="au-pillars">
        <motion.div
          className="au-section-head"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2>What Sets Acharya Bhairav Apart</h2>
          <p>Four pillars that define every consultation and every reading.</p>
        </motion.div>

        <div className="au-pillars-grid">
          {pillars.map((card, i) => (
            <motion.div
              key={i}
              className="au-pillar-card"
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <div className="au-pillar-icon">{card.icon}</div>
              <h3>{card.title}</h3>
              <p>{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Mission strip ─────────────────────────────────── */}
      <section className="au-mission">
        <motion.div
          className="au-mission-inner"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          {/* Left */}
          <div>
            <p className="au-mission-label">Our Mission</p>
            <h2 className="au-mission-title">
              Bridging Ancient Wisdom with the Modern Seeker
            </h2>
            <p className="au-mission-body">
              The mission is simple: to make the profound science of Vedic
              astrology accessible, accurate and transformative — for every
              person who seeks clarity, purpose and direction in life.
            </p>
          </div>

          {/* Right */}
          <div className="au-mission-right">
            {missionPoints.map((mp, i) => (
              <motion.div
                key={i}
                className="au-mission-point"
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
              >
                <div className="au-mp-dot">{mp.icon}</div>
                <div className="au-mp-text">
                  <strong>{mp.title}</strong>
                  <span>{mp.desc}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ── Testimonials ──────────────────────────────────── */}
      <section className="au-testimonials">
        <motion.div
          className="au-section-head"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2>Words from Our Seekers</h2>
          <p>Real stories from people whose lives were touched by the stars.</p>
        </motion.div>

        <div className="au-testimonials-grid">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              className="au-testi-card"
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <div className="au-testi-stars">
                {[...Array(5)].map((_, s) => (
                  <Star key={s} size={14} fill="currentColor" />
                ))}
              </div>

              <blockquote>"{t.text}"</blockquote>

              <div className="au-testi-author">
                <div className="au-testi-avatar">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <strong>{t.name}</strong>
                  <span>{t.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────── */}
      <section className="au-cta">
        <motion.div
          className="au-cta-inner"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2>Ready to Begin Your Cosmic Journey?</h2>
          <p>
            Book a personalised consultation with Acharya Bhairav and discover
            the guidance the stars hold for you.
          </p>

          <div className="au-cta-btns">
            <a href="#kundli" className="au-cta-btn-primary">
              <Phone size={16} />
              Book Consultation
            </a>
            <Link to="/contact-us" className="au-cta-btn-secondary">
              Contact Us
              <ArrowRight size={16} />
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
