"use client";

import Reveal from "./site/Reveal";
import Cta from "./site/Cta";
import { useSite } from "./site/SiteProvider";

export default function CtaBand() {
  const { scrollTo } = useSite();
  return (
    <section className="cta-band s-dark">
      <div className="wrap">
        <div className="cta-inner">
          <Reveal as="span" className="eyebrow">
            Your move
          </Reveal>
          <Reveal as="h2" delay={0.08}>
            You handle the trucks.
            <br />
            We&apos;ll handle <em>the phone.</em>
          </Reveal>
          <Reveal as="p" delay={0.18}>
            If you&apos;ve got the crews and the craftsmanship, we&apos;ll make
            sure the work never stops coming. Let&apos;s see what your market is
            worth.
          </Reveal>
          <Reveal className="cta-actions" delay={0.28}>
            <Cta className="btn-lg btn-primary" onClick={() => scrollTo("final")}>
              I&apos;m Ready To Scale →
            </Cta>
            <Cta className="btn-lg btn-ghost" onClick={() => scrollTo("calc")}>
              Revenue Calculator
            </Cta>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
