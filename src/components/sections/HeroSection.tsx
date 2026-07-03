export default function HeroSection() {
  return (
    <section className="landing-hero">
      <div className="hero-grid">
        <div className="hero-copy">
          <img className="brand-logo" src="/assets/logo.svg" alt="Upview" />
          <div>
            <h1>We build products where<br /><span>AI does the work.</span></h1>
            <p>Upview Technologies partners with founders and product teams to design, engineer, and deploy intelligent software that solves real problems, not just software with an AI badge on it.</p>
          </div>
          <div className="hero-actions">
            <a className="primary-button" href="#case-studies">Explore Projects</a>
            <a className="ghost-button" href="https://upview.tech">Visit Upview</a>
          </div>
        </div>
        <aside className="testimonial-card">
          <span className="corner-arrow" aria-hidden="true">-&gt;</span>
          <div>
            <p className="testimonial-quote">&quot;We developed a great relationship with team Upview and their dedication to our products is evident.&quot;</p>
            <div className="testimonial-person">
              <img src="/assets/testimonial.jpg" alt="Tony Idiculla" />
              <div>
                <strong>Tony Idiculla</strong>
                <span>Co-Founder, FURFIELD</span>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
