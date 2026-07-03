export default function ServicesSection() {
  return (
    <section className="work-section">
      <div className="work-heading">
        <div className="section-label">
          <span aria-hidden="true"></span>
          <p>How We Work</p>
        </div>
        <h2>Three ways to<br />build with us.</h2>
      </div>
      <div className="work-grid">
        <article className="work-card">
          <strong>1</strong>
          <h3>MVP from Your Vibe-Coded Draft</h3>
          <p>You&#x27;ve built something on Bolt, Lovable, or Cursor. We take that prototype and engineer it into a production-ready, scalable product with real AI infrastructure underneath.</p>
        </article>
        <article className="work-card">
          <strong>2</strong>
          <h3>Extended Development Team</h3>
          <p>Integrate senior engineers, AI specialists, and designers into your existing team. We work inside your workflow, tools, and culture no overhead, just output.</p>
        </article>
        <article className="work-card">
          <strong>3</strong>
          <h3>MVP Built From Scratch</h3>
          <p>Start with an idea. We handle discovery, UX design, engineering, AI integration, QA, and go-to-market launch delivering a complete, investor-ready MVP on a defined scope.</p>
        </article>
      </div>
    </section>
  );
}
