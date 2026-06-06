import Reveal from "./site/Reveal";

/* SAMPLE campaign results — illustrative figures for layout.
   Drop in real ad-account screenshots and verified numbers before publishing. */
const CARDS = [
  {
    shot: "res-shot",
    tag: "Tree Service · North Carolina",
    headline: "Storm-season campaign for a 2-crew tree service",
    metrics: [
      { v: "64", l: "Leads / mo" },
      { v: "19", l: "Jobs booked" },
      { v: "11×", l: "Return on ads" },
    ],
  },
  {
    shot: "res-shot shot2",
    tag: "Landscaping · Texas",
    headline: "Spring design-build push in a competitive metro",
    metrics: [
      { v: "$186K", l: "Revenue" },
      { v: "27", l: "Jobs booked" },
      { v: "$31", l: "Cost / lead" },
    ],
  },
  {
    shot: "res-shot",
    tag: "Lawn Care · Idaho",
    headline: "Recurring-maintenance funnel for a solo operator",
    metrics: [
      { v: "58", l: "Leads / mo" },
      { v: "22%", l: "Close rate" },
      { v: "$94K", l: "Pipeline" },
    ],
  },
];

export default function Results() {
  return (
    <section id="results" className="s-cream">
      <div className="wrap">
        <div className="sec-head center">
          <Reveal as="span" className="eyebrow">
            Campaign results
          </Reveal>
          <Reveal as="h2" delay={0.08}>
            The numbers behind
            <br />
            the <em>booked jobs.</em>
          </Reveal>
          <Reveal as="p" className="lead" delay={0.18}>
            Straight from the ad accounts. Swap these for your latest campaign
            screenshots and case studies anytime.
          </Reveal>
        </div>

        <div className="res-grid">
          {CARDS.map((c, i) => (
            <Reveal className="res-card" key={i} delay={0.08 * (i + 1)}>
              <div className={c.shot}>
                <span className="shot-ph">
                  Campaign dashboard
                  <br />
                  Drop your ad-account screenshot here
                </span>
              </div>
              <div className="res-body">
                <div className="res-tag">{c.tag}</div>
                <h3>{c.headline}</h3>
                <div className="res-metrics">
                  {c.metrics.map((m, j) => (
                    <div className="res-metric" key={j}>
                      <div className="rm-v">{m.v}</div>
                      <div className="rm-l">{m.l}</div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal as="span" className="res-note">
          Results vary by market, season, and how fast you follow up. Examples
          only — not a guarantee.
        </Reveal>
      </div>
    </section>
  );
}
