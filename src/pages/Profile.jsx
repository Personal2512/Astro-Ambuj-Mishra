import { useState, useRef } from "react";
import { useAuth } from "../context/AuthContext";
import "./Profile.css";

/* ─── OTP Demo Flow ─────────────────────────── */
// For demo: any 6-digit code is accepted
const DEMO_OTP = "123456"; // shown to user

export default function Profile() {
  const { user, isLoggedIn, login, logout, updateProfile } = useAuth();

  // Auth flow state
  const [step, setStep] = useState("mobile"); // "mobile" | "otp" | "onboarding"
  const [mobile, setMobile] = useState("");
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [otpError, setOtpError] = useState("");
  const [mobileError, setMobileError] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [onboardName, setOnboardName] = useState("");
  const [onboardEmail, setOnboardEmail] = useState("");
  const otpRefs = useRef([]);

  // Profile edit state
  const [editing, setEditing] = useState(false);
  const [editName, setEditName] = useState("");
  const [editEmail, setEditEmail] = useState("");
  const [editAddress, setEditAddress] = useState("");
  const [saved, setSaved] = useState(false);

  /* ─── Auth Handlers ──────────────────────── */
  const handleSendOtp = (e) => {
    e.preventDefault();
    const cleaned = mobile.replace(/\D/g, "");
    if (cleaned.length !== 10) {
      setMobileError("Please enter a valid 10-digit mobile number.");
      return;
    }
    setMobileError("");
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setOtpSent(true);
      setStep("otp");
    }, 1200);
  };

  const handleOtpChange = (val, idx) => {
    if (!/^[0-9]?$/.test(val)) return;
    const next = [...otp];
    next[idx] = val;
    setOtp(next);
    setOtpError("");
    if (val && idx < 5) otpRefs.current[idx + 1]?.focus();
  };

  const handleOtpKeyDown = (e, idx) => {
    if (e.key === "Backspace" && !otp[idx] && idx > 0) {
      otpRefs.current[idx - 1]?.focus();
    }
  };

  const handleVerifyOtp = (e) => {
    e.preventDefault();
    const entered = otp.join("");
    // Demo: accept the demo code OR any 6-digit code
    if (entered.length !== 6) {
      setOtpError("Please enter the full 6-digit OTP.");
      return;
    }
    if (entered !== DEMO_OTP) {
      setOtpError(`Incorrect OTP. (Demo OTP: ${DEMO_OTP})`);
      return;
    }
    setStep("onboarding");
  };

  const handleOnboarding = (e) => {
    e.preventDefault();
    login({ mobile, name: onboardName, email: onboardEmail, address: "" });
  };

  const handleSkipOnboarding = () => {
    login({ mobile, name: "", email: "", address: "" });
  };

  /* ─── Profile Edit ───────────────────────── */
  const startEdit = () => {
    setEditName(user?.name || "");
    setEditEmail(user?.email || "");
    setEditAddress(user?.address || "");
    setEditing(true);
    setSaved(false);
  };

  const handleSaveProfile = (e) => {
    e.preventDefault();
    updateProfile({ name: editName, email: editEmail, address: editAddress });
    setEditing(false);
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const initials = user?.name
    ? user.name.split(" ").map((w) => w[0]).join("").toUpperCase().slice(0, 2)
    : user?.mobile?.slice(-2) || "U";

  /* ─── Render: Logged In ──────────────────── */
  if (isLoggedIn) {
    return (
      <div className="profile-page">
        <div className="profile-bg-glow" />

        <div className="profile-container">
          {/* Header */}
          <div className="profile-header">
            <div className="profile-avatar">{initials}</div>
            <div className="profile-header-info">
              <h1 className="profile-name">{user.name || "Sacred Member"}</h1>
              <p className="profile-mobile">📱 +91 {user.mobile}</p>
              {user.email && <p className="profile-email">✉️ {user.email}</p>}
            </div>
            <button className="profile-logout-btn" onClick={logout}>
              Sign Out
            </button>
          </div>

          {/* Saved Toast */}
          {saved && (
            <div className="profile-saved-toast">✅ Profile saved successfully!</div>
          )}

          {/* Profile Form */}
          <div className="profile-card">
            <div className="profile-card-header">
              <h2>My Details</h2>
              {!editing && (
                <button className="profile-edit-btn" onClick={startEdit}>
                  ✏️ Edit
                </button>
              )}
            </div>

            {editing ? (
              <form className="profile-form" onSubmit={handleSaveProfile}>
                <div className="profile-field">
                  <label>Full Name</label>
                  <input
                    type="text"
                    value={editName}
                    onChange={(e) => setEditName(e.target.value)}
                    placeholder="Enter your name"
                  />
                </div>
                <div className="profile-field">
                  <label>Email Address</label>
                  <input
                    type="email"
                    value={editEmail}
                    onChange={(e) => setEditEmail(e.target.value)}
                    placeholder="Enter your email"
                  />
                </div>
                <div className="profile-field">
                  <label>Delivery Address</label>
                  <textarea
                    value={editAddress}
                    onChange={(e) => setEditAddress(e.target.value)}
                    placeholder="Enter your address"
                    rows={3}
                  />
                </div>
                <div className="profile-form-btns">
                  <button type="submit" className="profile-save-btn">
                    Save Changes
                  </button>
                  <button
                    type="button"
                    className="profile-cancel-btn"
                    onClick={() => setEditing(false)}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            ) : (
              <div className="profile-details">
                <div className="profile-detail-row">
                  <span className="detail-label">Mobile</span>
                  <span className="detail-value">+91 {user.mobile}</span>
                </div>
                <div className="profile-detail-row">
                  <span className="detail-label">Name</span>
                  <span className="detail-value">{user.name || <em className="detail-empty">Not set</em>}</span>
                </div>
                <div className="profile-detail-row">
                  <span className="detail-label">Email</span>
                  <span className="detail-value">{user.email || <em className="detail-empty">Not set</em>}</span>
                </div>
                <div className="profile-detail-row">
                  <span className="detail-label">Address</span>
                  <span className="detail-value">{user.address || <em className="detail-empty">Not set</em>}</span>
                </div>
              </div>
            )}
          </div>

          {/* Order History Placeholder */}
          <div className="profile-card">
            <div className="profile-card-header">
              <h2>Order History</h2>
            </div>
            <div className="profile-orders-empty">
              <span>📦</span>
              <p>No orders yet. Start shopping to see your orders here!</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  /* ─── Render: Auth Flow ──────────────────── */
  return (
    <div className="profile-page">
      <div className="profile-bg-glow" />

      <div className="profile-auth-container">
        <div className="profile-auth-card">
          {/* Brand */}
          <div className="profile-auth-brand">
            <img src="/favicon.webp" alt="Astro Ambuj Mishra" />
            <h1>Astro Ambuj Mishra</h1>
            <p>Sign in to track orders & save your details</p>
          </div>

          {/* Step: Mobile Number */}
          {step === "mobile" && (
            <form className="profile-auth-form" onSubmit={handleSendOtp}>
              <div className="profile-field">
                <label>Mobile Number</label>
                <div className="profile-mobile-input">
                  <span className="mobile-prefix">🇮🇳 +91</span>
                  <input
                    id="mobile-input"
                    type="tel"
                    value={mobile}
                    onChange={(e) => {
                      setMobile(e.target.value.replace(/\D/g, "").slice(0, 10));
                      setMobileError("");
                    }}
                    placeholder="Enter 10-digit number"
                    maxLength={10}
                    autoFocus
                  />
                </div>
                {mobileError && <p className="profile-error">{mobileError}</p>}
              </div>
              <button
                type="submit"
                className="profile-primary-btn"
                disabled={sending}
              >
                {sending ? (
                  <span className="profile-spinner" />
                ) : (
                  "Send OTP"
                )}
              </button>
              <p className="profile-auth-note">
                🔒 Your number is secure. We send OTP for verification only.
              </p>
            </form>
          )}

          {/* Step: OTP Verification */}
          {step === "otp" && (
            <form className="profile-auth-form" onSubmit={handleVerifyOtp}>
              <p className="profile-otp-info">
                OTP sent to <strong>+91 {mobile}</strong>
                <button
                  type="button"
                  className="profile-change-link"
                  onClick={() => { setStep("mobile"); setOtp(["","","","","",""]); }}
                >
                  Change
                </button>
              </p>

              <div className="profile-demo-hint">
                🎭 Demo mode — use OTP: <strong>{DEMO_OTP}</strong>
              </div>

              <div className="profile-field">
                <label>Enter 6-digit OTP</label>
                <div className="profile-otp-boxes">
                  {otp.map((digit, idx) => (
                    <input
                      key={idx}
                      ref={(el) => (otpRefs.current[idx] = el)}
                      type="text"
                      inputMode="numeric"
                      maxLength={1}
                      value={digit}
                      onChange={(e) => handleOtpChange(e.target.value, idx)}
                      onKeyDown={(e) => handleOtpKeyDown(e, idx)}
                      className={`otp-box ${otpError ? "error" : ""}`}
                      autoFocus={idx === 0}
                    />
                  ))}
                </div>
                {otpError && <p className="profile-error">{otpError}</p>}
              </div>

              <button type="submit" className="profile-primary-btn">
                Verify OTP
              </button>

              <button
                type="button"
                className="profile-resend-link"
                onClick={() => setOtp(["","","","","",""])}
              >
                Resend OTP
              </button>
            </form>
          )}

          {/* Step: Onboarding (optional name & email) */}
          {step === "onboarding" && (
            <form className="profile-auth-form" onSubmit={handleOnboarding}>
              <div className="profile-onboard-check">✅</div>
              <h3 className="profile-onboard-title">Mobile Verified!</h3>
              <p className="profile-onboard-sub">Add your details for a better experience (optional)</p>

              <div className="profile-field">
                <label>Your Name</label>
                <input
                  type="text"
                  value={onboardName}
                  onChange={(e) => setOnboardName(e.target.value)}
                  placeholder="e.g. Rahul Sharma"
                />
              </div>
              <div className="profile-field">
                <label>Email Address</label>
                <input
                  type="email"
                  value={onboardEmail}
                  onChange={(e) => setOnboardEmail(e.target.value)}
                  placeholder="e.g. rahul@email.com"
                />
              </div>

              <button type="submit" className="profile-primary-btn">
                Save & Continue
              </button>
              <button
                type="button"
                className="profile-skip-btn"
                onClick={handleSkipOnboarding}
              >
                Skip for now →
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
