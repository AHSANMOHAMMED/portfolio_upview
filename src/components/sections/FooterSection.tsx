export default function FooterSection() {
  return (
    <>
      <section className="cta-section" id="contact">
        <div className="cta-glow" aria-hidden="true"></div>
        <div className="cta-content">
          <div className="section-label section-label-inverse">
            <span aria-hidden="true"></span>
            <p>Connect</p>
          </div>
          <h2>Ready to build something smarter?</h2>
          <p>Whether you have a vibe-coded prototype or a blank whiteboard, Upview&#x27;s team turns AI ideas into shipped products.</p>
          <a className="light-button" href="mailto:hello@upview.tech">Talk to Upview Team</a>
        </div>
      </section>
      <footer className="site-footer">
        <div className="footer-top">
          <img className="brand-logo brand-logo-large" src="/assets/footer-logo.svg" alt="Upview" />
          <nav className="footer-nav" aria-label="Case study navigation">
            <span className="footer-nav-item"><a href="/oral-connect">Oral Connect</a><span className="footer-divider" aria-hidden="true"></span></span>
            <span className="footer-nav-item"><a href="/leap-strategy-partner">LEAP</a><span className="footer-divider" aria-hidden="true"></span></span>
            <span className="footer-nav-item"><a href="/furfield">FURFIELD</a><span className="footer-divider" aria-hidden="true"></span></span>
            <span className="footer-nav-item"><a href="/kompete">Kompete</a><span className="footer-divider" aria-hidden="true"></span></span>
            <span className="footer-nav-item"><a href="/cpm-performance-dashboard">Strategizer</a><span className="footer-divider" aria-hidden="true"></span></span>
            <span className="footer-nav-item"><a href="/handybot">Handybot</a><span className="footer-divider" aria-hidden="true"></span></span>
            <span className="footer-nav-item"><a href="/the-lawbook">The Lawbook</a></span>
          </nav>
        </div>
        <div className="footer-bottom">
          <p>Copyrights @2025 Upview Technologies</p>
        </div>
      </footer>
    </>
  );
}
