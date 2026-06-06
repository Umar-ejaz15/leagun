"use client";

import { useSite } from "./site/SiteProvider";

function Overlay({ id, children, className = "" }) {
  const { activeModal, closeModal } = useSite();
  const open = activeModal === id;
  return (
    <div
      className={`overlay${open ? " open" : ""}`}
      onClick={(e) => {
        if (e.target === e.currentTarget) closeModal();
      }}
    >
      <div className={`modal ${className}`}>
        <button className="m-x" onClick={closeModal} aria-label="Close">
          ✕
        </button>
        {children}
      </div>
    </div>
  );
}

export default function Modals() {
  return (
    <>
      {/* Success */}
      <Overlay id="succ">
        <div className="m-ico">✓</div>
        <div className="m-h">You&apos;re on our radar.</div>
        <div className="m-p">
          We&apos;ll reach out within one business day to talk through your market
          and what&apos;s possible. Talk soon.
        </div>
      </Overlay>

      {/* Video */}
      <Overlay id="video" className="video-modal">
        <div className="vm-frame">
          {/* PLACEHOLDER: replace with an <iframe> or <video> of the founder clip */}
          ▶ Founder video goes here
          <br />
          <span style={{ fontSize: ".74rem", opacity: 0.6 }}>
            (40-second &quot;Who this is for&quot; clip — replace this block)
          </span>
        </div>
      </Overlay>

      {/* Terms */}
      <Overlay id="terms" className="legal-modal">
        <h3>Terms &amp; Conditions</h3>
        <div className="legal-date">
          Last updated: May 2026 · Leagun Technologies LLC
        </div>
        <p>
          By submitting a form on this website, you agree to these Terms. Leagun
          Technologies LLC (&quot;Leagun,&quot; &quot;we,&quot; &quot;us&quot;)
          provides marketing and lead-generation services to tree service and
          landscaping businesses.
        </p>
        <h4>SMS / Text Messaging Terms</h4>
        <p>
          When you provide your phone number and check the consent box, you agree
          to receive marketing and informational text messages (SMS/MMS) and phone
          calls from Leagun Technologies LLC at the number you provided, including
          messages sent using an automatic telephone dialing system. Consent is not
          a condition of purchasing any goods or services.
        </p>
        <ul>
          <li>Message frequency varies based on your interaction with us.</li>
          <li>
            Message and data rates may apply, depending on your mobile carrier
            plan.
          </li>
          <li>
            To opt out at any time, reply STOP to any message. You will receive a
            confirmation and no further messages.
          </li>
          <li>
            For help, reply HELP or email contact@leagun.com or call (307)
            430-1754.
          </li>
          <li>Carriers are not liable for delayed or undelivered messages.</li>
        </ul>
        <h4>Use of Services</h4>
        <p>
          All information you provide must be accurate and your own. You agree not
          to misuse the website or submit false contact details. We reserve the
          right to decline service to anyone.
        </p>
        <h4>No Guarantee of Results</h4>
        <p>
          Marketing results vary by market, season, capacity, and follow-up speed.
          Any figures shown are examples and not a guarantee of future performance.
        </p>
        <h4>Contact</h4>
        <p>
          Leagun Technologies LLC, 30 N Gould St Ste R, Sheridan, WY 82801. Email:
          contact@leagun.com. Phone: (307) 430-1754.
        </p>
      </Overlay>

      {/* Privacy */}
      <Overlay id="privacy" className="legal-modal">
        <h3>Privacy Policy</h3>
        <div className="legal-date">
          Last updated: May 2026 · Leagun Technologies LLC
        </div>
        <p>
          This Privacy Policy explains how Leagun Technologies LLC collects, uses,
          and protects the information you share with us.
        </p>
        <h4>Information We Collect</h4>
        <p>
          We collect the information you submit through our forms, including your
          name, company name, phone number, email address, industry, and goals. We
          may also collect basic usage data through standard website analytics.
        </p>
        <h4>How We Use Your Information</h4>
        <ul>
          <li>To contact you about our services by phone, email, and text message.</li>
          <li>
            To send marketing and informational messages you have consented to
            receive.
          </li>
          <li>
            To respond to your inquiries and provide the services you request.
          </li>
        </ul>
        <h4>SMS Consent &amp; Privacy</h4>
        <p>
          Your phone number and the consent you provide for text messaging are used
          solely by Leagun Technologies LLC to communicate with you. We do not
          sell, rent, or share your phone number or SMS opt-in data with any third
          parties or affiliates for their own marketing purposes. Mobile opt-in
          information is never shared with anyone for promotional reasons.
        </p>
        <h4>Opting Out</h4>
        <p>
          You can opt out of text messages at any time by replying STOP. You can
          unsubscribe from emails using the link in any email, or by contacting us
          directly.
        </p>
        <h4>Data Security</h4>
        <p>
          We take reasonable measures to protect your information. However, no
          method of transmission over the internet is fully secure.
        </p>
        <h4>Contact</h4>
        <p>
          Questions about this policy? Email contact@leagun.com, call (307)
          430-1754, or write to Leagun Technologies LLC, 30 N Gould St Ste R,
          Sheridan, WY 82801.
        </p>
      </Overlay>
    </>
  );
}
