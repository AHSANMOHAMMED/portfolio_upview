'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { gsap, ScrollTrigger } from '@/lib/gsap'
import styles from './ProjectsSection.module.css'
import caseStudiesData from '@/data/case-studies.json'

const PROJECTS = [
  {
    id: 'oral-connect',
    title: 'Oral Connect',
    subtitle: 'An AI-driven dental CRM that automates lead management.',
    desc: 'Oral Connect helps dental practices streamline their lead generation and management process using AI-powered scoring, automated follow-ups, and an intelligent calling queue.',
    type: 'CRM Platform',
    link: '/oral-connect',
    video: '/videos/oral-connect.mp4',
    poster: '/assets/gallery-oral.png',
    brandColor: '#1d8286',
    tech: ['Next.js', 'React', 'Node.js', 'AI/ML']
  },
  {
    id: 'furfield',
    title: 'FURFIELD',
    subtitle: 'A multi-stakeholder pet-care platform.',
    desc: 'FURFIELD connects pet owners, veterinarians, and service providers into a unified ecosystem. It leverages AI for symptom interpretation, health insights, and smart collar integrations.',
    type: 'Pet Care App',
    link: '/furfield',
    video: '/videos/furfield.mp4',
    poster: '/assets/gallery-furfield-1.png',
    posters: [
      '/assets/gallery-furfield-1.png',
      '/assets/gallery-furfield-2.png',
      '/assets/gallery-furfield-3.png'
    ],
    brandColor: '#fa811d',
    tech: ['React Native', 'Firebase', 'IoT', 'AI Diagnostics']
  },
  {
    id: 'leap-strategy-partner',
    title: 'LEAP Strategy Partners',
    subtitle: 'An AI/ML engine that precision-matches CEOs with advisory panels.',
    desc: 'LEAP uses advanced machine learning to parse executive profiles, extract core competencies, and dynamically assemble the optimal advisory panel for specific strategic initiatives.',
    type: 'AI Matchmaking',
    link: '/leap-strategy-partner',
    video: '/videos/leap.mp4',
    poster: '/assets/gallery-leap.png',
    brandColor: '#4c85d3',
    tech: ['Python', 'Machine Learning', 'Next.js', 'PostgreSQL']
  },
  {
    id: 'kompete',
    title: 'Kompete',
    subtitle: 'Camera-based AI analyses athlete workout app.',
    desc: 'Kompete transforms standard smartphone cameras into advanced biomechanical analysis tools, offering real-time AI insights on form, movement validation, and personalized coaching.',
    type: 'Fitness AI',
    link: '/kompete',
    video: '/videos/kompete.mp4',
    poster: '/assets/gallery-kompete-1.png',
    posters: [
      '/assets/gallery-kompete-1.png',
      '/assets/gallery-kompete-2.png',
      '/assets/gallery-kompete-3.png'
    ],
    brandColor: '#7beca1',
    tech: ['Computer Vision', 'TensorFlow', 'iOS/Android', 'WebSockets']
  },
  {
    id: 'handybot',
    title: 'Handybot',
    subtitle: 'An AI agent that helps your day-to-day handyman works.',
    desc: 'Handybot provides an intelligent interface for diagnosing home maintenance issues. It guides users through repair steps or automatically dispatches local technicians using geographic routing.',
    type: 'AI Assistant',
    link: '/handybot',
    video: '/videos/handybot.mp4',
    poster: '/assets/gallery-handybot.png',
    brandColor: '#4e148b',
    tech: ['LLMs', 'React', 'Geolocation API', 'Stripe']
  },
  {
    id: 'the-lawbook',
    title: 'The Lawbook',
    subtitle: 'Accelerates legal workflows by parsing complex documents.',
    desc: 'The Lawbook accelerates legal workflows by parsing complex documents, estimating matter probabilities, and providing a conversational interface to query historical case data.',
    type: 'Legal Tech',
    link: '/the-lawbook',
    video: '/assets/videos/lawbook-matter-prediction.mp4',
    poster: '/assets/lawbook-main.png',
    brandColor: '#735be1',
    tech: ['NLP', 'RAG', 'Vector Database', 'Next.js']
  },
  {
    id: 'cpm-performance-dashboard',
    title: 'CPM Performance Dashboard',
    subtitle: 'Dynamic chart generation and customizable widgets.',
    desc: 'The CPM Performance Dashboard offers dynamic chart generation, customizable widgets, and conversational report building to help enterprises visualize their most critical KPIs.',
    type: 'Analytics Dashboard',
    link: '/cpm-performance-dashboard',
    video: '/assets/videos/cpm-chart-generation.mp4',
    poster: '/assets/gallery-cpm.png',
    brandColor: '#6366f1',
    tech: ['React', 'D3.js', 'Node.js', 'Supabase']
  },
  {
    id: 'upview-builder',
    title: 'Upview Builder',
    subtitle: 'A conversational AI prototyping tool.',
    desc: 'Upview Builder empowers teams to rapidly prototype and iterate conversational AI interfaces. It streamlines the creation of dynamic, AI-driven chat experiences with visual workflows.',
    type: 'Prototyping Tool',
    link: '/upview-builder',
    video: '',
    poster: '/assets/gallery-upview-builder.png',
    brandColor: '#f54900',
    tech: ['React', 'Node.js', 'AI/ML', 'Next.js']
  }
]

export default function ProjectsSection() {
  const sectionRef  = useRef<HTMLElement>(null)
  const trackRef    = useRef<HTMLDivElement>(null)
  const contentRefs = useRef<(HTMLDivElement | null)[]>([])
  const bgRefs      = useRef<(HTMLDivElement | null)[]>([])
  const counterRef  = useRef<HTMLSpanElement>(null)
  const progressRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    const track   = trackRef.current
    if (!section || !track) return

    const n = PROJECTS.length
    contentRefs.current = contentRefs.current.slice(0, n)
    bgRefs.current      = bgRefs.current.slice(0, n)

    const ctx = gsap.context(() => {
      // Slides 2+ hidden initially
      contentRefs.current.forEach((el, i) => {
        if (el && i > 0) gsap.set(el, { opacity: 0, y: 30 })
      })

      const tl = gsap.timeline({ paused: true })

      // Horizontal slide
      tl.to(track, {
        xPercent: -((n - 1) / n * 100),
        ease: 'none',
        duration: n - 1,
      }, 0)

      for (let i = 0; i < n - 1; i++) {
        const curr   = contentRefs.current[i]
        const next   = contentRefs.current[i + 1]
        const nextBg = bgRefs.current[i + 1]

        if (curr) {
          tl.to(curr, {
            opacity: 0, y: -40, filter: 'blur(6px)',
            duration: 0.2, ease: 'power2.in',
          }, i + 0.30)
        }

        if (nextBg) {
          tl.fromTo(nextBg,
            { scale: 1.04 },
            { scale: 1.0, duration: 1.0, ease: 'power2.out' },
            i
          )
        }

        if (next) {
          tl.set(next, { opacity: 1, y: 0 }, i + 0.44)

          const meta  = next.querySelector(`.${styles.meta}`)
          const title = next.querySelector(`.${styles.title}`)
          const sub   = next.querySelector(`.${styles.subtitle}`)
          const desc  = next.querySelector(`.${styles.desc}`)
          const tags  = next.querySelectorAll(`.${styles.tag}`)
          const btn   = next.querySelector(`.${styles.liveBtn}`)

          if (meta)  tl.fromTo(meta,  { x: -10, opacity: 0 }, { x: 0, opacity: 1, duration: 0.25, ease: 'power2.out' }, i + 0.45)
          if (title) tl.fromTo(title, { opacity: 0, y: 20 },  { opacity: 1, y: 0, duration: 0.45, ease: 'expo.out'   }, i + 0.48)
          if (sub)   tl.fromTo(sub,   { y: 12, opacity: 0 },  { y: 0, opacity: 1, duration: 0.30, ease: 'power2.out' }, i + 0.54)
          if (desc)  tl.fromTo(desc,  { y: 10, opacity: 0 },  { y: 0, opacity: 1, duration: 0.35, ease: 'power2.out' }, i + 0.58)
          if (tags.length) {
            tl.fromTo(tags,  { y: 6, opacity: 0 },  { y: 0, opacity: 1, duration: 0.25, ease: 'power2.out', stagger: 0.03 }, i + 0.65)
          }
          if (btn)   tl.fromTo(btn,   { y: 8, opacity: 0 },  { y: 0, opacity: 1, duration: 0.30, ease: 'power2.out' }, i + 0.72)
        }
      }

      ScrollTrigger.create({
        animation: tl,
        trigger:  section.parentElement,
        start:    'top top',
        end:      () => `+=${(n - 1) * window.innerHeight * 1.5}`,
        scrub: 1,
        snap: {
          snapTo: 1 / (n - 1),
          duration: { min: 0.4, max: 0.8 },
          ease: "power2.inOut"
        },
        onUpdate: (self) => {
          const activeIdx = Math.round(self.progress * (n - 1))

          if (progressRef.current) {
            gsap.set(progressRef.current, {
              scaleX: self.progress, transformOrigin: 'left center', overwrite: true,
            })
          }

          if (counterRef.current) counterRef.current.textContent = `0${activeIdx + 1}`
        },
      })
    }, section)

    return () => ctx.revert()
  }, [])

  return (
    <div className="full-bleed-section" style={{ height: `calc(100vh + ${(PROJECTS.length - 1) * 150}vh)` }}>
      <section ref={sectionRef} className={styles.section} id="case-studies">

        {/* Top bar */}
        <div className={styles.topBar}>
          <span className={styles.sectionLabel}>Upview Portfolio</span>
          <div className={styles.counter}>
            <span ref={counterRef} className={styles.cCur}>01</span>
            <span className={styles.cSep}> / </span>
            <span className={styles.cTot}>0{PROJECTS.length}</span>
          </div>
        </div>

        {/* Horizontal track */}
        <div
          ref={trackRef}
          className={styles.track}
          style={{ width: `${PROJECTS.length * 100}vw` }}
        >
          {PROJECTS.map((proj, i) => {
            const study = (caseStudiesData as any)[proj.id];
            return (
            <div key={proj.id} className={styles.slide}>

              <div
                ref={el => { bgRefs.current[i] = el }}
                className={styles.slideBg}
              >
                {(proj as any).posters ? (
                  <div className={styles.mobileComposite}>
                    {(proj as any).posters.map((src: string, idx: number) => (
                      <img key={idx} src={src} className={styles.mobileScreenImg} alt="" />
                    ))}
                  </div>
                ) : (
                  <img
                    src={proj.poster}
                    alt={proj.title}
                    className={styles.slideImg}
                  />
                )}
                
                <div className={styles.slideOverlayLeft}   aria-hidden />
                <div className={styles.slideOverlayBottom} aria-hidden />
                <div className={styles.slideVignette}      aria-hidden />
              </div>

              <span className={styles.slideNum} aria-hidden>0{i + 1}</span>

              <div
                ref={el => { contentRefs.current[i] = el }}
                className={styles.slideContent}
              >
                <div className={styles.slideLeft}>
                  <div className={styles.meta}>
                    <span className={styles.typeTag}>{proj.type}</span>
                  </div>
                  <h2 className={styles.title} style={{ color: proj.brandColor || '#fff' }}>{proj.title}</h2>
                  <p  className={styles.subtitle}>{proj.subtitle}</p>
                  <Link
                    href={proj.link}
                    className={styles.liveBtn}
                    style={{ '--btn-bg': proj.brandColor || 'var(--accent)', color: '#fff' } as React.CSSProperties}
                  >
                    <span>Read Case Study</span>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
                      <path d="M2 10L10 2M10 2H4M10 2V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </Link>
                </div>
                <div className={styles.slideRight}>
                  {study && study.problem ? (
                    <div className={styles.problemContainer}>
                      <p className={styles.desc} style={{ color: '#fff', fontSize: '1.05rem', lineHeight: 1.6, marginBottom: '1rem' }}>{proj.desc}</p>
                      <div className={styles.stack} style={{ marginBottom: '2rem' }}>
                        {proj.tech.map(t => (
                          <span key={t} className={styles.tag}>{t}</span>
                        ))}
                      </div>
                      
                      <h3 className={styles.problemHeading}>The Problem</h3>
                      <p className={styles.problemIntro}>{study.problem.intro}</p>
                      <div className={styles.problemList}>
                        {study.problem.cards.map((card: any, idx: number) => (
                          <article key={idx} className={styles.problemCard}>
                            <span className={styles.problemIcon} aria-hidden="true">x</span>
                            <div>
                              <h4>{card.title}</h4>
                              <p>{card.description}</p>
                            </div>
                          </article>
                        ))}
                      </div>
                      
                      {study.solution && (
                        <>
                          <h3 className={styles.problemHeading} style={{ marginTop: '2rem' }}>How Upview Solved It</h3>
                          <div className={styles.problemList}>
                            {study.solution.rows.map((row: any, idx: number) => (
                              <article key={'sol-'+idx} className={styles.problemCard} style={{ borderColor: 'rgba(0, 255, 100, 0.2)' }}>
                                <span className={styles.problemIcon} style={{ background: 'rgba(0, 255, 100, 0.1)', color: '#00E5FF' }}>✓</span>
                                <div>
                                  <h4>{row.title}</h4>
                                  {row.paragraphs.map((p: string, i: number) => (
                                    <p key={i} style={{ marginBottom: '0.8rem' }}>{p}</p>
                                  ))}
                                </div>
                              </article>
                            ))}
                          </div>
                        </>
                      )}
                    </div>
                  ) : (
                    <div className={styles.problemContainer}>
                      <p className={styles.desc} style={{ color: '#fff', fontSize: '1.05rem', lineHeight: 1.6, marginBottom: '1rem' }}>{proj.desc}</p>
                      <div className={styles.stack}>
                        {proj.tech.map(t => (
                          <span key={t} className={styles.tag}>{t}</span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

            </div>
            )
          })}
        </div>

        {/* Progress bar */}
        <div className={styles.bottomUI}>
          <div className={styles.progressTrack}>
            <div ref={progressRef} className={styles.progressBar} />
          </div>
        </div>

      </section>
    </div>
  )
}
