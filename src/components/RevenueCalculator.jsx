"use client";

import { useMemo, useState } from "react";
import Reveal from "./site/Reveal";
import Cta from "./site/Cta";
import { useSite } from "./site/SiteProvider";
import { useTilt } from "./site/interactions";

const money = (n) => "$" + Math.round(n).toLocaleString();

export default function RevenueCalculator() {
  const { scrollTo } = useSite();
  const tiltRef = useTilt();
  const [budget, setBudget] = useState(2000);
  const [ticket, setTicket] = useState(2000);
  const [industry, setIndustry] = useState("tree");

  const calc = useMemo(() => {
    const cpl = ticket < 1500 ? 28 : 30;
    const leads = Math.round(budget / cpl);
    const jobs = Math.round(leads * 0.2);
    const monthly = jobs * ticket;
    const annual = monthly * 12;
    const roi = budget > 0 ? monthly / budget : 0;
    return { leads, jobs, monthly, annual, roi };
  }, [budget, ticket]);

  return (
    <section id="calc" className="s-dark">
      <div className="wrap">
        <div className="sec-head center">
          <Reveal as="span" className="eyebrow">
            Revenue Calculator
          </Reveal>
          <Reveal as="h2" delay={0.08}>
            See the money you&apos;re
            <br />
            <em>leaving on the table.</em>
          </Reveal>
          <Reveal as="p" className="lead" delay={0.18}>
            Drag the sliders to match your business. We&apos;ll show you what your
            ad budget could turn into — and what it&apos;s costing you to wait.
          </Reveal>
        </div>

        <div className="calc-layout">
          <Reveal className="calc-panel" delay={0.08}>
            <div className="cp-title">Your numbers</div>
            <div className="cp-sub">
              Adjust these to match your business. The estimate updates instantly.
            </div>

            <div className="cp-field">
              <div className="cp-label">
                <span>Monthly Ad Budget</span>
                <span className="cp-value">{money(budget)}</span>
              </div>
              <input
                type="range"
                min={500}
                max={15000}
                step={250}
                value={budget}
                onChange={(e) => setBudget(+e.target.value)}
              />
              <div className="cp-range-labels">
                <span>$500</span>
                <span>$15,000</span>
              </div>
            </div>

            <div className="cp-field">
              <div className="cp-label">
                <span>Average Job Ticket</span>
                <span className="cp-value">{money(ticket)}</span>
              </div>
              <input
                type="range"
                min={300}
                max={12000}
                step={100}
                value={ticket}
                onChange={(e) => setTicket(+e.target.value)}
              />
              <div className="cp-range-labels">
                <span>$300</span>
                <span>$12,000</span>
              </div>
            </div>

            <div className="cp-field">
              <div className="cp-label">
                <span>Your Industry</span>
              </div>
              <select
                className="cp-select"
                value={industry}
                onChange={(e) => setIndustry(e.target.value)}
              >
                <option value="tree">Tree Service / Arborist</option>
                <option value="land">Landscaping / Lawn Care</option>
              </select>
            </div>
          </Reveal>

          <Reveal className="calc-result" delay={0.18} ref={tiltRef}>
            <div className="cr-eyebrow">Projected revenue from ads</div>
            <div className="cr-big">{money(calc.monthly)}</div>
            <div className="cr-period">per month</div>
            <div className="cr-annual">
              That&apos;s about <strong>{money(calc.annual)}</strong> a year.
            </div>
            <div className="cr-stats">
              <div className="cr-stat">
                <div className="cr-sv">{calc.leads}</div>
                <div className="cr-sl">Leads / mo</div>
              </div>
              <div className="cr-stat">
                <div className="cr-sv">{calc.jobs}</div>
                <div className="cr-sl">Jobs / mo</div>
              </div>
              <div className="cr-stat">
                <div className="cr-sv">{calc.roi.toFixed(1)}×</div>
                <div className="cr-sl">Return on ads</div>
              </div>
            </div>
            <div className="crm-miss">
              <div className="cm-v">{money(calc.annual)} / yr</div>
              <div className="cm-n">
                Every month you wait is a month of jobs going to your competitors.
              </div>
            </div>
            <Cta
              className="btn-primary"
              style={{ width: "100%" }}
              onClick={() => scrollTo("final")}
            >
              I&apos;m Ready To Scale →
            </Cta>
          </Reveal>
        </div>

        <div className="calc-disclaimer">
          Estimates assume an average cost per lead of $28–$30 (depending on ticket
          size) and a 20% lead-to-close rate, based on typical campaign benchmarks.
          Actual results vary by market, season, and how quickly you follow up.
          This is a projection, not a guarantee.
        </div>
      </div>
    </section>
  );
}
