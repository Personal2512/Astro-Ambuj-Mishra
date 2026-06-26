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
    icon: <Star size={16} />,
    title: "Practicing Since 2006",
    sub: "Analyzing Kundlis and guiding individuals for nearly two decades",
  },
  {
    icon: <BookOpen size={16} />,
    title: "18,000+ Individuals Guided",
    sub: "Personalized consultations covering every area of life",
  },
  {
    icon: <Award size={16} />,
    title: "Trusted Spiritual Guide",
    sub: "Combining Vedic wisdom with NLP for holistic life guidance",
  },
  {
    icon: <GraduationCap size={16} />,
    title: "Multi-Disciplinary Expert",
    sub: "Vedic Astrology, Numerology, Palmistry, Face Reading & NLP",
  },
];

const pillars = [
  {
    icon: "🔮",
    title: "Vedic Astrology & Kundli Analysis",
    desc: "Deep-dive birth chart readings covering career, business, relationships, marriage, and financial growth with practical remedies.",
  },
  {
    icon: "🧠",
    title: "NLP & Numerology",
    desc: "Integrating Neuro-Linguistic Programming with numerological insights to foster self-awareness, confidence, and positive transformation.",
  },
  {
    icon: "🌿",
    title: "Palmistry & Face Reading",
    desc: "Reading life's story through the lines of the palm and the features of the face — a powerful complement to Vedic consultations.",
  },
  {
    icon: "✨",
    title: "Planetary Remedies & Muhurat",
    desc: "Meaningful, actionable remedies and auspicious timing guidance that bring clarity and positive shifts to everyday life.",
  },
];

const missionPoints = [
  {
    icon: <CheckCircle size={14} />,
    title: "Clarity & Confidence",
    desc: "Helping individuals gain clarity, confidence, and direction across every major life decision.",
  },
  {
    icon: <CheckCircle size={14} />,
    title: "Challenges into Opportunities",
    desc: "Every challenge has a solution — every phase of life carries an opportunity for growth.",
  },
  {
    icon: <CheckCircle size={14} />,
    title: "Balanced & Fulfilling Future",
    desc: "Guiding people to understand their true potential and create a more balanced, fulfilling life.",
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
            About <span>Ambuj Mishra</span>
          </h1>

          <p className="au-hero-sub">
            A trusted astrologer, numerologist, and spiritual guide based in Kanpur, Uttar Pradesh — empowering individuals with Vedic wisdom, NLP, and practical insights since 2006.
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
          <div className="au-image-frame mt-30">
            <img src="/home4.webp" alt="Astro Ambuj Mishra" />

            {/* Floating badge */}
            <div className="au-image-badge">
              <div className="au-image-badge-icon">
                <Award size={22} />
              </div>
              <div>
                <h4>Since 2006</h4>
                <p>Vedic Astrology & Guidance</p>
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
            Astrologer · Numerologist · Spiritual Guide
          </div>

          <h2 className="au-content-title">
            Ambuj Mishra
          </h2>

          <div className="au-divider" />

          <div className="au-content-body">
            <p>
              Ambuj Mishra is a trusted astrologer, numerologist, and spiritual guide based in Kanpur, Uttar Pradesh. Since 2006, she has helped more than 18,000 individuals make informed life decisions through detailed Kundli consultations, offering practical solutions and spiritual insights tailored to each unique journey.
            </p>
            <p>
              Her expertise extends beyond Vedic Astrology to Numerology, Palmistry, Face Reading, Planetary Analysis, and NLP (Neuro-Linguistic Programming), allowing her to provide a holistic approach to personal growth and life guidance.
            </p>
            <p>
              Whether it's career planning, business growth, financial concerns, marriage, relationships, family matters, or important life decisions — she helps individuals gain clarity, confidence, and direction. Known for combining traditional astrological wisdom with modern understanding of human behavior, Ambuj Mishra focuses not only on identifying challenges but also on providing meaningful remedies and actionable guidance.
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
          <h2>What Sets Ambuj Mishra Apart</h2>
          <p>Four pillars that define every consultation, reading, and guidance session.</p>
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
              Helping People Understand Their Potential & Navigate Life's Path
            </h2>
            <p className="au-mission-body">
              Her mission is to help people understand their potential, navigate
              life's uncertainties, and create a more balanced and fulfilling future.
              Every challenge has a solution — and through the right guidance, clarity
              becomes the foundation of a better tomorrow. ✨
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
          <h2>Ready to Begin Your Journey?</h2>
          <p>
            Book a personalised consultation with Ambuj Mishra and gain the
            clarity, confidence, and direction you deserve.
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
