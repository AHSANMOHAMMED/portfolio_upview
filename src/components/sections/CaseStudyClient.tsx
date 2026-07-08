'use client'

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap, ScrollTrigger } from "@/lib/gsap";

export default function CaseStudyClient({ data, allSlugs }: { data: any, allSlugs: {slug: string, title: string}[] }) {
  const solutionSectionRef = useRef<HTMLElement>(null);
  const solutionListRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = solutionSectionRef.current;
    const list = solutionListRef.current;
    if (!section || !list) return;

    const items = list.querySelectorAll('article');
    if (items.length <= 1) return;

    const ctx = gsap.context(() => {
      // Horizontal scroll for the solution list
      gsap.to(list, {
        xPercent: -100 * (items.length - 1) / items.length,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          pin: true,
          scrub: 1,
          snap: {
            snapTo: 1 / (items.length - 1),
            duration: { min: 0.2, max: 0.6 },
            ease: "power1.inOut"
          },
          end: () => `+=${list.offsetWidth}`,
        }
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <main className="case-page" style={{ backgroundColor: 'var(--navy)', color: 'var(--white)' }}>
      {/* HERO SECTION */}
      <section className="case-hero">
        <img className="brand-logo" src="/assets/logo.svg" alt="Upview" />
        <div className="case-hero-row">
          <div className="case-hero-copy">
            <p>{data.hero.description}</p>
            <h1>
              {data.hero.title}
              <span>.</span>
            </h1>
          </div>
          <Link className="back-button case-hero-back" href="/">
            <span>Back to Main</span>
            <span className="back-button-arrow" aria-hidden="true">
              -&gt;
            </span>
          </Link>
        </div>
      </section>

      {/* PRODUCT BAND SECTION */}
      <section className="product-band" aria-label={`${data.hero.title} product screens`}>
        {data.productBand.type === "desktop" ? (
          <div className="media-showcase media-desktop media-accent-soft media-compact media-static media-loaded">
            <div className="browser-frame">
              <div className="browser-bar" aria-hidden="true">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <img src={data.productBand.image} alt="" decoding="async" />
              <span className="media-cursor" aria-hidden="true"></span>
            </div>
            <span className="media-glint" aria-hidden="true"></span>
          </div>
        ) : (
          <div className="phone-stack">
             {/* Note: In a real app we'd map phone images here if fetched. Our scraper just captures the primary image. */}
             <div className="phone-shell" style={{ '--i': 0 } as React.CSSProperties}>
               <img src={data.productBand.image} alt="" decoding="async" />
             </div>
          </div>
        )}
      </section>

      {/* SOLUTION SECTION - HORIZONTAL SCROLL */}
      <div className="solution-section-wrapper" style={{ overflowX: 'hidden' }}>
        <section ref={solutionSectionRef} className="solution-section">
          <div className="section-intro solution-heading">
            <div className="section-label">
              <span aria-hidden="true"></span>
              <p>Solution</p>
            </div>
            <h2 dangerouslySetInnerHTML={{ __html: "How Upview<br/>Solved It With AI" }} />
          </div>
          
          <div className="solution-list-container">
            <div ref={solutionListRef} className="solution-list" style={{ display: 'flex', flexDirection: 'row', width: `${data.solution.rows.length * 100}vw` }}>
              {data.solution.rows.map((row: any, idx: number) => (
                <article key={idx} className={`solution-row ${row.reverse ? "solution-row-reverse" : ""}`} style={{ width: '100vw', padding: '0 5vw', boxSizing: 'border-box' }}>
                  <div className="solution-copy">
                    <h3>{row.title}</h3>
                    {row.paragraphs.map((p: string, pIdx: number) => (
                      <p key={pIdx}>{p}</p>
                    ))}
                  </div>
                  <div className={`media-showcase media-wide ${row.accent} ${row.video ? 'media-has-video' : ''} media-loaded`} data-animated-media="wide">
                    {row.video ? (
                      <video
                        className="wide-media-image media-fit-cover"
                        src={row.video}
                        poster={row.poster}
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="metadata"
                        aria-hidden="true"
                      ></video>
                    ) : (
                      <img 
                        className="wide-media-image media-fit-cover"
                        src={row.poster}
                        alt={row.title}
                      />
                    )}
                    <span className="media-glint" aria-hidden="true"></span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* BEFORE AFTER SECTION */}
      <section className="before-after-section">
        <div className="section-intro">
          <div className="section-label">
            <span aria-hidden="true"></span>
            <p>Solution</p>
          </div>
          <h2>Before &amp; After</h2>
        </div>
        <div className="outcome-panel">
          <div className="compare-grid">
            <article className="compare-card compare-before">
              <h3>Before</h3>
              {data.beforeAfter.before.map((p: string, i: number) => (
                <p key={i}>{p}</p>
              ))}
            </article>
            <article className="compare-card compare-after">
              <h3>After</h3>
              {data.beforeAfter.after.map((p: string, i: number) => (
                <p key={i}>{p}</p>
              ))}
            </article>
          </div>
          <div className="metrics-grid">
            {data.beforeAfter.metrics.map((metric: any, i: number) => (
              <article key={i} className="metric-card">
                <strong>{metric.value}</strong>
                <p>{metric.label}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="cta-section" id="contact">
        <div className="cta-glow" aria-hidden="true"></div>
        <div className="cta-content">
          <div className="section-label section-label-inverse">
            <span aria-hidden="true"></span>
            <p>Connect</p>
          </div>
          <h2>Ready to build something smarter?</h2>
          <p>Whether you have a vibe-coded prototype or a blank whiteboard, Upview's team turns AI ideas into shipped products.</p>
          <a className="light-button" href="#contact">
            Talk to Upview Team
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="site-footer">
        <div className="footer-top">
          <Link className="back-button" href="/">
            <span>Back to Main</span>
            <span className="back-button-arrow" aria-hidden="true">
              -&gt;
            </span>
          </Link>
          <nav className="footer-nav" aria-label="Case study navigation">
            {allSlugs.map((s, idx, arr) => (
              <span key={s.slug} className="footer-nav-item">
                <Link href={`/${s.slug}`}>{s.title}</Link>
                {idx < arr.length - 1 && (
                  <span className="footer-divider" aria-hidden="true"></span>
                )}
              </span>
            ))}
          </nav>
        </div>
        <div className="footer-bottom">
          <p>Copyrights @2025 Upview Technologies</p>
        </div>
      </footer>
    </main>
  );
}
