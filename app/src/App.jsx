import { useState } from 'react'
import bannerStack from '../../assets/banner-stack.png'
import technologiesData from './data/technologies.json'
import './App.css'

function TechIcon({ type }) {
  const commonProps = {
    viewBox: '0 0 64 64',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 2.5,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    'aria-hidden': true,
  }

  switch (type) {
    case 'react':
      return (
        <svg {...commonProps}>
          <ellipse cx="32" cy="32" rx="18" ry="7" transform="rotate(0 32 32)" />
          <ellipse cx="32" cy="32" rx="18" ry="7" transform="rotate(60 32 32)" />
          <ellipse cx="32" cy="32" rx="18" ry="7" transform="rotate(120 32 32)" />
          <circle cx="32" cy="32" r="4" fill="currentColor" stroke="none" />
        </svg>
      )
    case 'vue':
      return (
        <svg {...commonProps}>
          <path d="M13 18L32 48L51 18" fill="none" />
          <path d="M21 18L32 38L43 18" fill="none" />
        </svg>
      )
    case 'svelte':
      return (
        <svg {...commonProps}>
          <path d="M17 18c7-6 24-6 30 3 4 5 4 12 0 17-5 6-17 8-23 3-5-4-5-11 0-16 6-5 15-4 20 0" />
          <path d="M24 44c-4 3-10 4-16 2" />
        </svg>
      )
    case 'next':
      return (
        <svg {...commonProps}>
          <path d="M16 48V16L42 48H16Z" fill="none" />
          <path d="M42 16H50V48" />
        </svg>
      )
    case 'node':
      return (
        <svg {...commonProps}>
          <path d="M32 10L48 20V44L32 54L16 44V20L32 10Z" />
          <path d="M16 20L32 30L48 20" />
          <path d="M32 30V54" />
        </svg>
      )
    case 'postgres':
      return (
        <svg {...commonProps}>
          <path d="M22 18h20c5 0 8 4 8 9v18c0 5-3 9-8 9H22c-5 0-8-4-8-9V27c0-5 3-9 8-9Z" />
          <path d="M18 27h28" />
          <path d="M24 18v28" />
          <path d="M40 18v28" />
          <path d="M24 32h16" />
        </svg>
      )
    case 'redis':
      return (
        <svg {...commonProps}>
          <path d="M18 22c0-4 6-8 14-8s14 4 14 8-6 8-14 8-14-4-14-8Z" />
          <path d="M18 22v14c0 4 6 8 14 8s14-4 14-8V22" />
          <path d="M18 28c0 4 6 8 14 8s14-4 14-8" />
          <path d="M18 34c0 4 6 8 14 8s14-4 14-8" />
        </svg>
      )
    case 'javascript':
      return (
        <svg {...commonProps}>
          <rect x="12" y="12" width="40" height="40" rx="8" fill="currentColor" stroke="none" />
          <text x="32" y="39" textAnchor="middle" fontSize="18" fontWeight="700" fill="#0f172a" fontFamily="Segoe UI, sans-serif">JS</text>
        </svg>
      )
    case 'typescript':
      return (
        <svg {...commonProps}>
          <rect x="12" y="12" width="40" height="40" rx="8" fill="currentColor" stroke="none" />
          <text x="32" y="39" textAnchor="middle" fontSize="18" fontWeight="700" fill="#fff" fontFamily="Segoe UI, sans-serif">TS</text>
        </svg>
      )
    case 'java':
      return (
        <svg {...commonProps}>
          <path d="M17 25c0-7 7-12 15-12s15 5 15 12v8c0 7-7 14-15 14S17 40 17 33v-8Z" />
          <path d="M22 41h22" />
          <path d="M20 25h24" />
          <path d="M46 25c0 4-3 7-6 7H26c-3 0-6-3-6-7" />
          <path d="M50 27v9" />
        </svg>
      )
    case 'tailwind':
      return (
        <svg {...commonProps}>
          <path d="M19 18c5-5 11-7 18-7 7 0 12 3 14 8 2-4 6-6 12-6 5 0 9 2 11 7-4-2-8-2-11 0-3 2-6 7-8 12-4 8-8 12-15 12-7 0-10-5-11-12-1-6-4-10-10-14Z" fill="currentColor" stroke="none" opacity="0.18" />
          <path d="M20 28c4-6 8-9 14-9 6 0 11 3 13 9-4 0-7 3-9 8-2 5-5 8-10 8-4 0-7-2-9-6-1-3-2-6-2-10Z" fill="currentColor" stroke="none" />
        </svg>
      )
    case 'docker':
      return (
        <svg {...commonProps}>
          <path d="M20 35h26v5H20zm2-10h5v7h-5zm7 0h5v7h-5zm7 0h5v7h-5zm7 0h5v7h-5z" />
          <path d="M26 19c0-4 4-7 10-7s10 3 10 7v5H26v-5Z" />
        </svg>
      )
    default:
      return (
        <svg {...commonProps}>
          <circle cx="32" cy="32" r="20" />
        </svg>
      )
  }
}

const technologies = technologiesData

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <header className="site-header">
        <nav className="navbar" aria-label="Main navigation">
          <a className="brand" href="#top" aria-label="DevStack home">
            <span className="brand-mark">DS</span>
            <span className="brand-name">
              Dev<span>Stack</span>
            </span>
          </a>

          <button
            type="button"
            className="menu-toggle"
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <div className={`nav-content${menuOpen ? ' is-open' : ''}`}>
            <div className="nav-links">
              <a className="active" href="#home" onClick={() => setMenuOpen(false)}>Home</a>
              <a href="#technologies" onClick={() => setMenuOpen(false)}>Technologies</a>
              <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
              <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
              <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
            </div>
            <div className="auth-actions">
              <a href="#sign-in">Sign In</a>
              <a className="sign-up" href="#sign-up">Sign Up</a>
            </div>
          </div>
        </nav>
      </header>

      <main className="page-shell">
        <section className="hero-banner" id="home">
          <div className="hero-copy">
            <h1>
              Build Your Ideal
              <span>Development Stack</span>
            </h1>
            <p>
              Explore frontend, backend, database, and tooling options, compare
              them side by side, and put together the stack that fits your next
              project.
            </p>
            <div className="hero-actions">
              <a className="primary-button" href="#technologies">Explore Technologies</a>
              <a className="secondary-button" href="#about">Learn More</a>
            </div>
          </div>
          <div className="hero-visual">
            <img src={bannerStack} alt="Technology stack illustration" />
          </div>
        </section>

        <section className="technologies-intro" id="technologies">
          <h2>Explore the <span>Technologies</span></h2>
          <p>Pick one technology per category to build your ideal stack.</p>
        </section>

        <section className="technology-panel" aria-label="Technology list">
          <div className="technology-grid">
            {technologies.map((technology) => (
              <article key={technology.id} className="tech-card">
                <div className="tech-card-top">
                  <span className={`tech-icon ${technology.accent}`}>
                    <TechIcon type={technology.icon} />
                  </span>
                  <span className="tech-badge" data-category={technology.category}>{technology.badge}</span>
                </div>

                <h3>{technology.name}</h3>
                <p className="tech-description">{technology.description}</p>

                <div className="tech-meta">
                  <span className="meta-tag">{technology.category}</span>
                  <span className="meta-tag">{technology.difficulty}</span>
                  <span className="rating">{technology.rating.toFixed(1)}</span>
                </div>

                <button type="button" className="stack-button">Add to Stack</button>
              </article>
            ))}
          </div>
        </section>
      </main>
    </>
  )
}

export default App
