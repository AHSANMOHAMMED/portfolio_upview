export default function ProjectsSection() {
  return (
    <section className="portfolio-section" id="case-studies">
      <div className="portfolio-heading">
        <div className="section-intro">
          <div className="section-label">
            <span aria-hidden="true"></span>
            <p>Case Studies</p>
          </div>
          <h2>AI products<br />we&#x27;ve shipped.</h2>
        </div>
        <a className="primary-button portfolio-button" href="https://upview.tech/work">View Full Portfolio</a>
      </div>
      <div className="gallery-grid">
        <a className="gallery-card" href="/oral-connect">
          <div className="gallery-media">
            <div className="media-showcase media-desktop media-accent-soft media-compact media-static">
              <span className="media-loader" aria-hidden="true"><span></span></span>
              <div className="browser-frame">
                <div className="browser-bar" aria-hidden="true">
                  <span></span><span></span><span></span>
                </div>
                <video src="/videos/oral-connect.mp4" poster="/assets/gallery-oral.png" autoPlay loop muted playsInline></video>
                <span className="media-cursor" aria-hidden="true"></span>
              </div>
              <span className="media-glint" aria-hidden="true"></span>
            </div>
          </div>
          <div className="gallery-copy">
            <h3>Oral Connect</h3>
            <p>An AI-driven dental CRM that automates lead management.</p>
          </div>
        </a>

        <a className="gallery-card" href="/furfield">
          <div className="gallery-media">
            <div className="media-showcase media-phones media-accent-soft media-compact media-static">
              <span className="media-loader" aria-hidden="true"><span></span></span>
              <div className="phone-stack">
                <div className="phone-shell" style={{ "--i": 0 } as React.CSSProperties}>
                  <img src="/assets/gallery-furfield-1.png" alt="" loading="lazy" decoding="async" />
                </div>
                <div className="phone-shell" style={{ "--i": 1 } as React.CSSProperties}>
                  <video src="/videos/furfield.mp4" poster="/assets/gallery-furfield-2.png" autoPlay loop muted playsInline></video>
                </div>
                <div className="phone-shell" style={{ "--i": 2 } as React.CSSProperties}>
                  <img src="/assets/gallery-furfield-3.png" alt="" loading="lazy" decoding="async" />
                </div>
              </div>
              <span className="media-glint" aria-hidden="true"></span>
            </div>
          </div>
          <div className="gallery-copy">
            <h3>FURFIELD</h3>
            <p>A multi-stakeholder pet-care platform.</p>
          </div>
        </a>

        <a className="gallery-card" href="/leap-strategy-partner">
          <div className="gallery-media">
            <div className="media-showcase media-desktop media-accent-soft media-compact media-static">
              <span className="media-loader" aria-hidden="true"><span></span></span>
              <div className="browser-frame">
                <div className="browser-bar" aria-hidden="true">
                  <span></span><span></span><span></span>
                </div>
                <video src="/videos/leap.mp4" poster="/assets/gallery-leap.png" autoPlay loop muted playsInline></video>
                <span className="media-cursor" aria-hidden="true"></span>
              </div>
              <span className="media-glint" aria-hidden="true"></span>
            </div>
          </div>
          <div className="gallery-copy">
            <h3>LEAP Strategy Partners</h3>
            <p>An AI/ML engine that precision-matches CEOs with advisory panels.</p>
          </div>
        </a>

        <a className="gallery-card" href="/kompete">
          <div className="gallery-media">
            <div className="media-showcase media-phones media-accent-soft media-compact media-static">
              <span className="media-loader" aria-hidden="true"><span></span></span>
              <div className="phone-stack">
                <div className="phone-shell" style={{ "--i": 0 } as React.CSSProperties}>
                  <img src="/assets/gallery-kompete-1.png" alt="" loading="lazy" decoding="async" />
                </div>
                <div className="phone-shell" style={{ "--i": 1 } as React.CSSProperties}>
                  <video src="/videos/kompete.mp4" poster="/assets/gallery-kompete-2.png" autoPlay loop muted playsInline></video>
                </div>
                <div className="phone-shell" style={{ "--i": 2 } as React.CSSProperties}>
                  <img src="/assets/gallery-kompete-3.png" alt="" loading="lazy" decoding="async" />
                </div>
              </div>
              <span className="media-glint" aria-hidden="true"></span>
            </div>
          </div>
          <div className="gallery-copy">
            <h3>Kompete</h3>
            <p>Camera-based AI analyses athlete workout app.</p>
          </div>
        </a>

        <a className="gallery-card" href="/handybot">
          <div className="gallery-media">
            <div className="media-showcase media-desktop media-accent-soft media-compact media-static">
              <span className="media-loader" aria-hidden="true"><span></span></span>
              <div className="browser-frame">
                <div className="browser-bar" aria-hidden="true">
                  <span></span><span></span><span></span>
                </div>
                <video src="/videos/handybot.mp4" poster="/assets/gallery-handybot.png" autoPlay loop muted playsInline></video>
                <span className="media-cursor" aria-hidden="true"></span>
              </div>
              <span className="media-glint" aria-hidden="true"></span>
            </div>
          </div>
          <div className="gallery-copy">
            <h3>Handybot</h3>
            <p>An AI agent that helps your day-to-day handyman works.</p>
          </div>
        </a>
      </div>
    </section>
  );
}
