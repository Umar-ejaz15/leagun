"use client";

import Reveal from "./site/Reveal";
import Cta from "./site/Cta";
import { useSite } from "./site/SiteProvider";
import { useTilt } from "./site/interactions";

const YES = [
  "You already do great work and have the crews to handle more",
  "You're tired of slow seasons and a phone that only rings from referrals",
  "You want jobs coming in every week — not feast or famine",
  "You'll actually call the leads we send while they're still hot",
  "You're ready to hire, add a truck, and take more of your market",
];

const NO = [
  "You're brand new, with no reviews and no way to handle real demand",
  "You're already maxed out and couldn't take another job today",
  "You're hunting for the cheapest option, not the best return",
  "You expect a flood of jobs overnight with zero ad spend",
  "You like the idea of growing more than actually doing it",
];

export default function WhoWeHelp() {
  const { scrollTo } = useSite();
  const tiltRef = useTilt();

  return (
    <section id="icp" className="s-cream">
      <div className="wrap">
        <div className="sec-head center">
          <Reveal as="span" className="eyebrow">
            Who we take on
          </Reveal>
          <Reveal as="h2" delay={0.08}>
            We&apos;re not for everyone.
            <br />
            <em>On purpose.</em>
          </Reveal>
          <Reveal as="p" className="lead" delay={0.18}>
            We only make money when you make money. So we only work with operators
            we can actually grow. Here&apos;s the honest filter.
          </Reveal>
        </div>

        <div className="fit-grid">
          <Reveal className="fit-col yes" delay={0.08} ref={tiltRef}>
            <div className="fit-head2">
              <div className="fit-ic y">
                <svg viewBox="0 0 24 24">
                  <path d="M5 12l5 5 9-11" />
                </svg>
              </div>
              <h3>This is you if…</h3>
            </div>
            <ul className="fit-list">
              {YES.map((t) => (
                <li key={t}>
                  <span className="fmark" />
                  {t}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal className="fit-col no" delay={0.18}>
            <div className="fit-head2">
              <div className="fit-ic n">
                <svg viewBox="0 0 24 24">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </div>
              <h3>This isn&apos;t you if…</h3>
            </div>
            <ul className="fit-list">
              {NO.map((t) => (
                <li key={t}>
                  <span className="fmark" />
                  {t}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal className="fit-cta">
          <Cta className="btn-lg btn-primary" onClick={() => scrollTo("final")}>
            That&apos;s Me — Let&apos;s Talk →
          </Cta>
        </Reveal>
      </div>
    </section>
  );
}
