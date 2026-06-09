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
    title: "25 Years of Experience",
    sub: "Guiding individuals through astrology, life guidance, and personal growth",
  },
  {
    icon: <BookOpen size={16} />,
    title: "Holistic Life Guidance",
    sub: "Blending astrology, mental wellness, and practical life insights",
  },
  {
    icon: <Award size={16} />,
    title: "Trusted Astrology Expert",
    sub: "Helping people make informed decisions with clarity and confidence",
  },
  {
    icon: <GraduationCap size={16} />,
    title: "Personal Growth Mentor",
    sub: "Empowering individuals through self-awareness and positive transformation",
  },
];

const pillars = [
  {
    icon: "🔮",
    title: "Astrology with Practical Insights",
    desc: "Combining traditional astrological wisdom with practical guidance to help individuals make informed decisions and navigate life's challenges.",
  },
  {
    icon: "🧠",
    title: "Mental Wellness & Self-Growth",
    desc: "Focusing on emotional well-being, self-awareness, and personal development to inspire confidence and positive transformation.",
  },
  {
    icon: "🌍",
    title: "25+ Years of Experience",
    desc: "Over two decades of guiding individuals through astrology, life coaching, and holistic wellness with compassion and clarity.",
  },
  {
    icon: "✨",
    title: "Holistic Life Guidance",
    desc: "A unique approach that integrates astrology, mental wellness, and life guidance to help people achieve balance, purpose, and success.",
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
            About <span>Ambuj Mishra</span>
          </h1>

          <p className="au-hero-sub">
            Over 25 years of experience in astrology, mental wellness, and life guidance — empowering individuals with clarity, wisdom, compassion, and practical insights for a balanced and fulfilling life.
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
                <h4>25 Years</h4>
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
            Ambuj Mishra{" "}
            {/* <span>'Bhairav'</span> */}
          </h2>

          <div className="au-divider" />

          <div className="au-content-body">
            <p>
             Ambuj Mishra is a visionary businesswoman, astrologer, and mental wellness professional with over 25 years of experience in guiding people toward personal growth, clarity, and balance.
            </p>
            <p>
              With a unique blend of business expertise, astrological knowledge, and a deep understanding of human emotions, Ambuj Mishra helps individuals explore their potential, overcome challenges, and create a more meaningful path in life.
            </p>
            <p>
              Her approach combines traditional wisdom with practical insights, focusing on self-awareness, confidence, emotional well-being, and positive transformation. Through her work in astrology and mental wellness programs, she has supported many individuals in making thoughtful decisions and building a balanced lifestyle.
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
            Book a personalised consultation with Ambuj Mishra and discover
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
