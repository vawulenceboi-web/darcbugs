'use client'

import { useEffect, useRef, useState } from 'react'
import { ArrowUpRight, ChevronDown, Menu, X } from 'lucide-react'

const disciplines = [
  { number: '01', title: 'Robotics', detail: 'Embodied intelligence' },
  { number: '02', title: 'Autonomous systems', detail: 'Machines with agency' },
  { number: '03', title: 'Humanoid technology', detail: 'The human interface' },
  { number: '04', title: 'Aerial systems', detail: 'Beyond the horizon' },
]


export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeTrack, setActiveTrack] = useState(0)
  const [scrolled, setScrolled] = useState(false)
  const [robotsActive, setRobotsActive] = useState(false)
  const robotsRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const node = robotsRef.current
    if (!node) return
    const observer = new IntersectionObserver(([entry]) => setRobotsActive(entry.isIntersecting), { threshold: 0.25 })
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <main className="site-shell">
      <header className={`site-header ${scrolled ? 'site-header--scrolled' : ''}`}>
        <a className="wordmark" href="#top" aria-label="DarcBugs home">
          <img src="/darcbugs-logo-clean.png" alt="DarcBugs logo" />
        </a>
        <nav className={`main-nav ${menuOpen ? 'main-nav--open' : ''}`}>
          <a href="#work" onClick={() => setMenuOpen(false)}>What we build</a>
          <a href="#approach" onClick={() => setMenuOpen(false)}>Approach</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </nav>
        <a className="header-link" href="#contact">Start a conversation <ArrowUpRight size={15} /></a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen}>
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>

      <section className="hero" id="top">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-orbit hero-orbit--one" aria-hidden="true"><span /><span /><span /></div>
        <div className="hero-orbit hero-orbit--two" aria-hidden="true"><span /><span /></div>
        <div className="hero-core" aria-hidden="true"><div className="core-glow" /><div className="core-ring" /><div className="core-ring core-ring--inner" /></div>
        <div className="hero-copy">
          <p className="eyebrow"><span className="status-dot" /> Independent R&amp;D / 2026</p>
          <h1>Building<br /><em>what comes</em><br />next.</h1>
          <p className="hero-description">We research, prototype, and deploy intelligent machines for a world that has not arrived yet.</p>
          <a className="circle-link" href="#work" aria-label="Explore our work"><span>Explore<br />the work</span><ArrowUpRight size={19} /></a>
        </div>
        <div className="hero-aside"><span>01 — 04</span><span className="hero-line" /><span>Scroll to explore</span><ChevronDown size={14} /></div>
      </section>

      <section className="statement" id="approach">
        <div className="section-label"><span>( 01 )</span><span>Why we exist</span></div>
        <div className="statement-content"><p>We work at the edge of the possible — where curiosity becomes capability.</p><span className="statement-rule" /><p className="statement-small">DarcBugs is an independent innovation lab focused on the technologies that will define the next century of human experience.</p></div>
      </section>

      <section className="work-section" id="work">
        <div className="section-label"><span>( 02 )</span><span>Research domains</span></div>
        <div className="work-layout">
          <div className="work-intro"><div className="glass-kicker">DARCBUGS / 001</div><h2>Ideas in<br /><em>motion.</em></h2><p>From first principles to field-ready systems, we move through uncertainty with intent.</p><div className="glass-note"><span className="glass-note-dot" /> Research signal detected <ArrowUpRight size={14} /></div></div>
          <div className="discipline-list">
            {disciplines.map((item, index) => <button className={`discipline ${activeTrack === index ? 'discipline--active' : ''}`} key={item.number} onClick={() => setActiveTrack(index)}><span className="discipline-number">{item.number}</span><span className="discipline-title">{item.title}</span><span className="discipline-detail">{item.detail}</span><ArrowUpRight className="discipline-arrow" size={20} /></button>)}
          </div>
        </div>
      </section>

      <section className={`robot-lab ${robotsActive ? 'robot-lab--active' : ''}`} ref={robotsRef} id="robots">
        <div className="section-label"><span>( 03 )</span><span>Embodied intelligence</span></div>
        <div className="robot-lab-header"><div><p className="eyebrow"><span className="status-dot" /> Live humanoid study</p><h2>Machines<br /><em>in motion.</em></h2></div><p>Scroll into the lab to wake the prototypes. Each body is a study in balance, perception, and intent.</p></div>
        <div className="robot-stage" aria-label="Animated humanoid robot prototypes">
          <div className="stage-grid" aria-hidden="true" />
          {[{name: 'DB-NADIA', role: 'Social integration', image: '/robot-nadia.png', className: 'robot-proto robot-proto--two'}, {name: 'DB-ALEX', role: 'Field operations', image: '/robot-alex.png', className: 'robot-proto robot-proto--three'}].map((robot) => <div className={robot.className} key={robot.name}><img src={robot.image} alt={robot.name} className="robot-image" /><div className="robot-info"><strong>{robot.name}</strong><span>{robot.role}</span></div></div>)}
          <div className="robot-status"><span className="status-dot" /> Motion capture / active</div>
        </div>
      </section>

      <section className="signal-section">
        <div className="signal-visual" aria-hidden="true"><div className="signal-orbit signal-orbit--a" /><div className="signal-orbit signal-orbit--b" /><div className="signal-dot" /></div>
        <div className="signal-copy"><p className="eyebrow">The aperture principle</p><h2>Make the<br /><em>invisible</em><br />legible.</h2><p>Good research does not predict the future. It gives people the tools to build it.</p><a className="text-link" href="#contact">Meet the people behind the work <ArrowUpRight size={16} /></a></div>
      </section>

      <section className="contact-section" id="contact"><p className="eyebrow">Have a difficult problem?</p><h2>Let&apos;s find<br /><em>the signal.</em></h2><a className="contact-button" href="mailto:hello@darcbugs.com">hello@darcbugs.com <ArrowUpRight size={18} /></a></section>
      <footer><span>© 2026 DarcBugs Innovation Lab</span><span>Robotics / AI / Autonomy</span><span>Built for the next horizon ↗</span></footer>
    </main>
  )
}
