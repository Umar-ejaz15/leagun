import Reveal from "./site/Reveal";

/* SAMPLE testimonials — illustrative, on-theme placeholders.
   Replace with real client quotes you have written permission to use. */
const CARDS = [
  {
    av: "MD",
    quote:
      "We went from chasing referrals to turning work away. Leagun keeps our crews booked solid — I haven't worried about where the next job is coming from in months.",
    name: "Mike Dalton",
    company: "Dalton Tree & Stump · Asheville, NC",
    result: "+38 jobs",
    timeframe: "in 90 days",
  },
  {
    av: "CM",
    quote:
      "The leads are actually people ready to hire, not tire-kickers. They get followed up with before I even pick up the phone, so we close more than half of what comes in.",
    name: "Carlos Marin",
    company: "Evergreen Lawn & Landscape · Austin, TX",
    result: "$214K",
    timeframe: "added revenue",
  },
  {
    av: "TB",
    quote:
      "I run the saws, they run the phone. Best decision I've made for the business — we added a second crew this spring just to keep up with the work.",
    name: "Travis Boone",
    company: "Boone's Arbor Care · Boise, ID",
    result: "2× bookings",
    timeframe: "year over year",
  },
];

export default function Testimonials() {
  return (
    <section id="testi" className="s-offwhite">
      <div className="wrap">
        <div className="sec-head center">
          <Reveal as="span" className="eyebrow">
            What owners say
          </Reveal>
          <Reveal as="h2" delay={0.08}>
            Owners who stopped
            <br />
            waiting for the <em>phone to ring.</em>
          </Reveal>
          <Reveal as="p" className="lead" delay={0.18}>
            Real words from operators who put a system behind their crews instead
            of relying on word of mouth.
          </Reveal>
        </div>

        <div className="testi-grid">
          {CARDS.map((c, i) => (
            <Reveal className="t-card" key={c.av} delay={0.08 * (i + 1)}>
              <div className="t-stars">★★★★★</div>
              <div className="t-quote">&quot;{c.quote}&quot;</div>
              <div className="t-row">
                <div className="t-av">{c.av}</div>
                <div>
                  <div className="t-name">{c.name}</div>
                  <div className="t-co">{c.company}</div>
                </div>
                <div className="t-result">
                  <div className="tr-val">{c.result}</div>
                  <div className="tr-lbl">{c.timeframe}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
