import { useState } from 'react'
import bannerStack from '../../assets/banner-stack.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

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

      <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Documentation</h2>
          <p>Your questions, answered</p>
          <ul>
            <li>
              <a href="https://vite.dev/" target="_blank">
                <img className="logo" src={viteLogo} alt="" />
                Explore Vite
              </a>
            </li>
            <li>
              <a href="https://react.dev/" target="_blank">
                <img className="button-icon" src={reactLogo} alt="" />
                Learn more
              </a>
            </li>
          </ul>
        </div>
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Connect with us</h2>
          <p>Join the Vite community</p>
          <ul>
            <li>
              <a href="https://github.com/vitejs/vite" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a href="https://chat.vite.dev/" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                Discord
              </a>
            </li>
            <li>
              <a href="https://x.com/vite_js" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#x-icon"></use>
                </svg>
                X.com
              </a>
            </li>
            <li>
              <a href="https://bsky.app/profile/vite.dev" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#bluesky-icon"></use>
                </svg>
                Bluesky
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
