"use client";

import { useState } from "react";
import Reveal from "./site/Reveal";
import { useSite } from "./site/SiteProvider";

const PlayIcon = () => (
  <svg viewBox="0 0 24 24">
    <path d="M8 5v14l11-7z" />
  </svg>
);

export default function ContactForm() {
  const { openModal } = useSite();
  const [form, setForm] = useState({
    name: "",
    company: "",
    phone: "",
    industry: "",
    goal: "",
    consent: false,
  });

  const update = (key) => (e) =>
    setForm((f) => ({
      ...f,
      [key]: e.target.type === "checkbox" ? e.target.checked : e.target.value,
    }));

  const submit = () => {
    if (!form.name.trim()) {
      alert("Please add your name so we can reach out.");
      return;
    }
    if (!form.consent) {
      alert("Please check the consent box to continue.");
      return;
    }
    /* DEV NOTE: connect this to your CRM / GoHighLevel webhook or EmailJS
       (the @emailjs/browser package is already installed). For now we just
       confirm receipt to the user. */
    openModal("succ");
  };

  return (
    <section id="final" className="s-darker">
      <div className="wrap">
        <div className="final-inner">
          <div className="final-content">
            <Reveal as="span" className="eyebrow">
              Let&apos;s talk
            </Reveal>
            <Reveal as="h2" delay={0.08}>
              Let&apos;s see if we can
              <br />
              fill your <em>calendar.</em>
            </Reveal>
            <Reveal as="p" delay={0.18}>
              Tell us about your company. We&apos;ll look at your market and tell
              you, straight, what&apos;s possible — and whether we&apos;re the
              right team to do it.
            </Reveal>
            <Reveal delay={0.18}>
              <div className="final-video" onClick={() => openModal("video")}>
                <span className="fv-badge">▶ 40 seconds</span>
                <div className="fv-play">
                  <PlayIcon />
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal className="final-form" delay={0.28}>
            <div className="ff-head">Tell us about your business.</div>
            <div className="ff-sub">
              We&apos;ll show you exactly what&apos;s possible in your area.
            </div>

            <div className="ff-field">
              <input
                type="text"
                placeholder="Your name"
                value={form.name}
                onChange={update("name")}
              />
            </div>
            <div className="ff-field">
              <input
                type="text"
                placeholder="Company name"
                value={form.company}
                onChange={update("company")}
              />
            </div>
            <div className="ff-field">
              <input
                type="tel"
                placeholder="Phone number"
                value={form.phone}
                onChange={update("phone")}
              />
            </div>
            <div className="ff-field">
              <select value={form.industry} onChange={update("industry")}>
                <option value="">What do you do?</option>
                <option>Tree Service / Arborist</option>
                <option>Stump Grinding</option>
                <option>Landscaping</option>
                <option>Lawn Care / Maintenance</option>
                <option>Other Green Industry</option>
              </select>
            </div>
            <div className="ff-field">
              <select value={form.goal} onChange={update("goal")}>
                <option value="">What would winning look like?</option>
                <option>A fully booked calendar</option>
                <option>Bigger, higher-ticket jobs</option>
                <option>Steady work in the off-season</option>
                <option>Enough work to add another crew</option>
              </select>
            </div>

            <label className="ff-consent">
              <input
                type="checkbox"
                checked={form.consent}
                onChange={update("consent")}
              />
              <span>
                By checking this box, I agree to receive marketing and
                informational text messages (SMS) and calls from Leagun
                Technologies LLC at the number provided, including messages sent by
                autodialer. Consent is not a condition of purchase. Message
                frequency varies. Message &amp; data rates may apply. Reply STOP to
                unsubscribe or HELP for help. See our{" "}
                <a
                  onClick={(e) => {
                    e.stopPropagation();
                    openModal("terms");
                  }}
                >
                  Terms
                </a>{" "}
                &amp;{" "}
                <a
                  onClick={(e) => {
                    e.stopPropagation();
                    openModal("privacy");
                  }}
                >
                  Privacy Policy
                </a>
                .
              </span>
            </label>

            <button className="ff-btn" onClick={submit}>
              Show Me What&apos;s Possible →
            </button>
            <div className="ff-note">
              We respond within one business day. No spam, ever.
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
