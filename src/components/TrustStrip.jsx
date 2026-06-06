const LOGOS = [
  "Tree Service Co.",
  "Arborists",
  "Landscaping",
  "Lawn Care",
  "Stump Grinding",
];

export default function TrustStrip() {
  return (
    <section className="trust s-darker" style={{ padding: 0 }}>
      <div className="wrap" style={{ paddingTop: 48, paddingBottom: 48 }}>
        <div className="trust-lbl">
          Purpose-built for tree service &amp; landscaping operators
        </div>
        <div className="trust-row">
          {LOGOS.map((l) => (
            <span className="tlogo" key={l}>
              {l}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
