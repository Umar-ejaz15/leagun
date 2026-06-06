import Reveal from "./site/Reveal";

export default function About() {
  return (
    <section id="about" className="s-cream">
      <div className="wrap">
        <div className="about-grid">
          <Reveal delay={0.08}>
            <div className="founder-photo">
              {/* Add the founder photo: drop a file in /public and replace the
                  block below with, e.g.:
                  <Image src="/zain.jpg" alt="Zain Noor, Founder of Leagun"
                         fill style={{objectFit:"cover"}} /> */}
              <div className="ph-note">
                Founder portrait
                <br />
                Zain Noor
              </div>
              <div className="founder-badge">
                <div className="fb-item">
                  <div className="fb-v">5+ yrs</div>
                  <div className="fb-l">In Sales</div>
                </div>
                <div className="fb-item">
                  <div className="fb-v">3</div>
                  <div className="fb-l">Countries</div>
                </div>
                <div className="fb-item">
                  <div className="fb-v">Niche</div>
                  <div className="fb-l">Green Industry</div>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal className="about-text" delay={0.18}>
            <span className="eyebrow">About the founder</span>
            <h2>
              Why I only work with
              <br />
              <em>tree &amp; landscaping companies.</em>
            </h2>
            <p>
              I spent five years in enterprise sales — including leading a
              mid-market segment at <strong>Motive Technologies</strong>, a
              multi-billion-dollar company. I learned how real growth systems get
              built at scale.
            </p>
            <p>
              Then I saw it: the best tree service and landscaping owners I met
              were unbelievable at the work — and completely underserved when it
              came to getting jobs. Generic agencies didn&apos;t get their
              business, so they kept living off referrals and hoping the phone
              rang.
            </p>
            <p>
              So I built <strong>Leagun</strong> to do one thing well: bring the
              right jobs to the right companies, predictably. No fluff. No twelve
              industries at once. Just this one — done properly.
            </p>
            <div className="about-sign">
              <div className="sign-name">Zain Noor</div>
              <div className="sign-title">
                Founder &amp; CEO · Leagun Technologies LLC
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
