import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  Clock,
  Users,
  Star,
  Search,
  BookOpen,
  PlayCircle,
  Award,
  Globe,
  ArrowRight,
  Phone,
  CheckCircle,
} from "lucide-react";
import { Link } from "react-router-dom";
import "./Courses.css";

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
const courseStats = [
  { icon: "📚", number: "12+", label: "Courses Available" },
  { icon: "🎓", number: "1000+", label: "Students Trained" },
  { icon: "⭐", number: "4.9", label: "Average Rating" },
  { icon: "🌍", number: "20+", label: "Countries Reached" },
];

const categories = [
  { id: "all", label: "All Courses" },
  { id: "vedic", label: "Vedic Astrology" },
  { id: "numerology", label: "Numerology" },
  { id: "vastu", label: "Vastu Shastra" },
  { id: "palmistry", label: "Palmistry" },
  { id: "remedies", label: "Astrological Remedies" },
];

const courses = [
  {
    id: 1,
    category: "vedic",
    level: "beginner",
    title: "Foundations of Vedic Astrology",
    desc: "Master the basics — planets, signs, houses and their cosmic interplay. The perfect starting point for any aspiring astrologer.",
    duration: "40 hrs",
    students: "320+",
    rating: 4.9,
    price: "₹4,999",
    originalPrice: "₹8,000",
    image: "/Kundli.webp",
    modules: 12,
  },
  {
    id: 2,
    category: "vedic",
    level: "intermediate",
    title: "Advanced Kundli Analysis",
    desc: "Dive deep into birth chart interpretation — divisional charts, yogas, dashas and predictive techniques used by classical scholars.",
    duration: "60 hrs",
    students: "210+",
    rating: 4.8,
    price: "₹7,999",
    originalPrice: "₹14,000",
    image: "/DailyHoroscope.webp",
    modules: 20,
  },
  {
    id: 3,
    category: "vedic",
    level: "advanced",
    title: "Predictive Astrology Masterclass",
    desc: "Harness transits, varshaphal, and prashna to make time-tested predictions with accuracy and ethical responsibility.",
    duration: "80 hrs",
    students: "150+",
    rating: 5.0,
    price: "₹11,999",
    originalPrice: "₹20,000",
    image: "/marriage.webp",
    modules: 28,
  },
  {
    id: 4,
    category: "numerology",
    level: "beginner",
    title: "Numerology — Numbers & Destiny",
    desc: "Decode the hidden vibrations of numbers in your name and date of birth to reveal personality, life path and future cycles.",
    duration: "20 hrs",
    students: "280+",
    rating: 4.7,
    price: "₹2,999",
    originalPrice: "₹5,000",
    image: "/GemGuide.webp",
    modules: 8,
  },
  {
    id: 5,
    category: "vastu",
    level: "beginner",
    title: "Vastu Shastra for Modern Homes",
    desc: "Apply ancient spatial science to contemporary living spaces — balance directions, five elements and energies for harmony.",
    duration: "25 hrs",
    students: "180+",
    rating: 4.8,
    price: "₹3,499",
    originalPrice: "₹6,000",
    image: "/carrier.webp",
    modules: 10,
  },
  {
    id: 6,
    category: "palmistry",
    level: "beginner",
    title: "Palmistry — Read Your Hand",
    desc: "Learn to interpret life line, heart line, fate line and mounts to reveal character traits and life events encoded in the palm.",
    duration: "18 hrs",
    students: "240+",
    rating: 4.6,
    price: "₹2,499",
    originalPrice: "₹4,500",
    image: "/course.webp",
    modules: 7,
  },
  {
    id: 7,
    category: "remedies",
    level: "intermediate",
    title: "Astrological Remedies & Gemstones",
    desc: "Understand planetary imbalances and apply the right gemstones, mantras, and rituals for positive transformation.",
    duration: "30 hrs",
    students: "190+",
    rating: 4.9,
    price: "₹4,499",
    originalPrice: "₹8,000",
    image: "/GemGuide.webp",
    modules: 14,
  },
  {
    id: 8,
    category: "vedic",
    level: "intermediate",
    title: "Marriage & Relationship Astrology",
    desc: "Explore kundli matching, 7th house analysis, Venus and Mars placement to guide informed decisions about relationships.",
    duration: "35 hrs",
    students: "260+",
    rating: 4.8,
    price: "₹5,499",
    originalPrice: "₹10,000",
    image: "/marriage.webp",
    modules: 16,
  },
  {
    id: 9,
    category: "numerology",
    level: "intermediate",
    title: "Business Numerology & Name Correction",
    desc: "Align your business name, brand, and launch dates with powerful numeric vibrations for success and growth.",
    duration: "22 hrs",
    students: "130+",
    rating: 4.7,
    price: "₹3,999",
    originalPrice: "₹7,000",
    image: "/carrier.webp",
    modules: 9,
  },
];

const benefits = [
  {
    icon: "🎥",
    title: "Lifetime Video Access",
    desc: "All course recordings are yours forever — revisit lessons at any time, on any device.",
  },
  {
    icon: "📜",
    title: "Certified by Ambuj Mishra",
    desc: "Receive a personal certificate of completion, signed by Astro Ambuj Mishra.",
  },
  {
    icon: "🤝",
    title: "Live Q&A Sessions",
    desc: "Regular live doubt-clearing sessions with Ambuj Mishra for in-depth clarity.",
  },
  {
    icon: "📖",
    title: "Study Material Included",
    desc: "Curated notes, reference charts and PDF workbooks provided with every course.",
  },
  {
    icon: "🌐",
    title: "Hindi & English Medium",
    desc: "Courses are available in both Hindi and English for maximum accessibility.",
  },
  {
    icon: "🕉️",
    title: "Traditional Lineage Teaching",
    desc: "Rooted in Guru-Shishya Parampara — authentic knowledge passed down through sacred tradition.",
  },
];

/* ── Component ───────────────────────────────────────────── */
export default function Courses() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = useMemo(() => {
    return courses.filter((c) => {
      const matchCat = activeCategory === "all" || c.category === activeCategory;
      const matchSearch =
        searchQuery === "" ||
        c.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.desc.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCat && matchSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="cr-page">
      {/* ── Hero ───────────────────────────────────────────── */}
      <section id="courses" className="cr-hero">
        <div className="cr-hero-glow-a" />
        <div className="cr-hero-glow-b" />
        <div className="cr-hero-glow-c" />

        <motion.div
          className="cr-hero-content"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          <span className="cr-hero-badge">
            <BookOpen size={13} />
            Learn Vedic Sciences
          </span>

          <h1 className="cr-hero-title">
            Astrology <span>Courses</span> by Ambuj Mishra
          </h1>

          <p className="cr-hero-sub">
            Master the sacred sciences of Vedic Astrology, Numerology, Vastu, and more through structured, practical courses designed by Ambuj Mishra, drawing on over 25 years of experience in astrology, mental wellness, and personal development.
          </p>
        </motion.div>
      </section>

      {/* ── Stats bar ──────────────────────────────────────── */}
      <div className="cr-stats-bar">
        {courseStats.map((stat, i) => (
          <motion.div
            key={i}
            className="cr-stat-card"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={i}
            variants={fadeUp}
          >
            <div className="cr-stat-icon">{stat.icon}</div>
            <div className="cr-stat-info">
              <strong>{stat.number}</strong>
              <span>{stat.label}</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* ── Search ─────────────────────────────────────────── */}
      <div className="cr-search-wrap">
        <div className="cr-search-inner">
          <Search size={16} />
          <input
            className="cr-search-input"
            type="text"
            placeholder="Search courses — e.g. Kundli, Numerology…"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* ── Category filter ────────────────────────────────── */}
      <div className="cr-filter-wrap">
        <p className="cr-filter-label">Browse by Category</p>
        <div className="cr-filter-tabs">
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`cr-tab ${activeCategory === cat.id ? "active" : ""}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* ── Course grid ────────────────────────────────────── */}
      <div className="cr-grid-wrap">
        <div className="cr-grid-head">
          <h2>
            {activeCategory === "all"
              ? "All Courses"
              : categories.find((c) => c.id === activeCategory)?.label}
          </h2>
          <span>{filtered.length} course{filtered.length !== 1 ? "s" : ""} found</span>
        </div>

        <div className="cr-grid">
          {filtered.length === 0 ? (
            <div className="cr-empty">
              <div className="cr-empty-icon">🔭</div>
              <p>No courses found for your search. Try a different keyword or category.</p>
            </div>
          ) : (
            filtered.map((course, i) => (
              <motion.div
                key={course.id}
                className="cr-card"
                custom={i % 3}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
              >
                {/* Image */}
                <div className="cr-card-img-wrap">
                  <img src={course.image} alt={course.title} />
                  <span className={`cr-card-level ${course.level}`}>
                    {course.level.charAt(0).toUpperCase() + course.level.slice(1)}
                  </span>
                </div>

                {/* Body */}
                <div className="cr-card-body">
                  <div className="cr-card-category">
                    {categories.find((c) => c.id === course.category)?.label}
                  </div>
                  <h3 className="cr-card-title">{course.title}</h3>
                  <p className="cr-card-desc">{course.desc}</p>

                  <div className="cr-card-meta">
                    <span className="cr-card-meta-item">
                      <Clock size={13} />
                      {course.duration}
                    </span>
                    <span className="cr-card-meta-item">
                      <BookOpen size={13} />
                      {course.modules} modules
                    </span>
                    <span className="cr-card-meta-item">
                      <Users size={13} />
                      {course.students}
                    </span>
                    <span className="cr-card-rating">
                      <Star size={12} fill="currentColor" />
                      {course.rating}
                    </span>
                  </div>
                </div>

                {/* Footer */}
                <div className="cr-card-footer">
                  <div className="cr-card-price">
                    <strong>{course.price}</strong>
                    <span>{course.originalPrice}</span>
                  </div>
                  <button className="cr-enroll-btn">
                    Enroll Now <ArrowRight size={13} />
                  </button>
                </div>
              </motion.div>
            ))
          )}
        </div>
      </div>

      {/* ── Instructor strip ───────────────────────────────── */}
      <section className="cr-instructor">
        <motion.div
          className="cr-instructor-inner"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <img
            src="/about.webp"
            alt="Astro Ambuj Mishra"
            className="cr-instructor-avatar"
          />
          <div>
            <p className="cr-instructor-label">Your Instructor</p>
            <h2 className="cr-instructor-name">
              Astro Ambuj Mishra
            </h2>
            <p className="cr-instructor-bio">
              With over 25 years of experience in astrology, business guidance, and mental wellness, Ambuj Mishra brings a unique blend of traditional wisdom and practical insights to every course, empowering learners with knowledge for personal growth and positive transformation.
            </p>
          </div>
          <Link to="/about-us" className="cr-instructor-cta">
            Know More <ArrowRight size={16} />
          </Link>
        </motion.div>
      </section>

      {/* ── Benefits ───────────────────────────────────────── */}
      <section className="cr-benefits">
        <motion.div
          className="cr-section-head"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2>What You Get in Every Course</h2>
          <p>
            Every course is designed for depth, clarity and real-world
            application.
          </p>
        </motion.div>

        <div className="cr-benefits-grid">
          {benefits.map((b, i) => (
            <motion.div
              key={i}
              className="cr-benefit-card"
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <div className="cr-benefit-icon">{b.icon}</div>
              <h3>{b.title}</h3>
              <p>{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────────── */}
      <section className="cr-cta">
        <motion.div
          className="cr-cta-inner"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2>Start Your Learning Journey Today</h2>
          <p>
            Enroll in any course and begin mastering the cosmic science that
            has guided humanity for thousands of years.
          </p>
          <div className="cr-cta-btns">
            <a href="#courses" className="cr-cta-primary">
              <PlayCircle size={16} />
              Browse All Courses
            </a>
            <Link to="/contact-us" className="cr-cta-secondary">
              Have a Question? <ArrowRight size={16} />
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
