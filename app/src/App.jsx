import { useEffect, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import bannerStack from '../../assets/banner-stack.png'
import ReactIcon from './Icons/React.svg'
import VueIcon from './Icons/Vue.js.svg'
import SvelteIcon from './Icons/Svelte.svg'
import NextIcon from './Icons/Next.js.svg'
import NodeIcon from './Icons/Node.js.svg'
import PostgresIcon from './Icons/PostgresSQL.svg'
import RedisIcon from './Icons/Redis.svg'
import JavaScriptIcon from './Icons/JavaScript.svg'
import TypeScriptIcon from './Icons/TypeScript.svg'
import JavaIcon from './Icons/Java.svg'
import TailwindIcon from './Icons/Tailwind CSS.svg'
import DockerIcon from './Icons/Docker.svg'
import technologiesData from './data/technologies.json'
import './App.css'

const iconMap = {
  react: ReactIcon,
  vue: VueIcon,
  svelte: SvelteIcon,
  next: NextIcon,
  node: NodeIcon,
  postgres: PostgresIcon,
  redis: RedisIcon,
  javascript: JavaScriptIcon,
  typescript: TypeScriptIcon,
  java: JavaIcon,
  tailwind: TailwindIcon,
  docker: DockerIcon,
}

function TechIcon({ type }) {
  const IconSrc = iconMap[type]

  if (IconSrc) {
    return <img src={IconSrc} alt="" className="tech-icon-image" />
  }

  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="32" cy="32" r="20" />
    </svg>
  )
}

const technologies = technologiesData

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [stack, setStack] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  const addToStack = (technology) => {
    const exists = stack.some((item) => item.id === technology.id)

    if (exists) {
      toast.warn(`${technology.name} is already in your stack.`)
      return
    }

    setStack((current) => [...current, technology])
    toast.success(`${technology.name} added to your stack.`)
  }

  const removeFromStack = (technologyId) => {
    const item = stack.find((tech) => tech.id === technologyId)
    setStack((current) => current.filter((item) => item.id !== technologyId))

    if (item) {
      toast.info(`${item.name} removed from your stack.`)
    }
  }

  const removeAll = () => {
    if (stack.length === 0) {
      toast.info('Your stack is already empty.')
      return
    }

    setStack([])
    toast.info('All technologies removed from your stack.')
  }

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

        <section className="technology-layout" aria-label="Technology list and stack sidebar">
          <div className="technology-panel">
            {isLoading ? (
              <div className="loading-state" aria-live="polite">
                <div className="loading-spinner" aria-hidden="true" />
                <p>Loading technologies...</p>
              </div>
            ) : (
              <div className="technology-grid">
                {technologies.map((technology) => {
                  const isSelected = stack.some((item) => item.id === technology.id)

                  return (
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

                      <button
                        type="button"
                        className="stack-button"
                        onClick={() => addToStack(technology)}
                        disabled={isSelected}
                      >
                        {isSelected ? 'Added to Stack' : 'Add to Stack'}
                      </button>
                    </article>
                  )
                })}
              </div>
            )}
          </div>

          <aside className="stack-sidebar" aria-label="Selected stack">
            <h3>Your Stack</h3>
            <p>{stack.length} Technology Selected</p>

            {stack.length === 0 ? (
              <div className="stack-empty">
                <h4>Your Stack</h4>
                <p>No technologies selected yet.</p>
                <div className="empty-placeholder">Your stack is empty.</div>
              </div>
            ) : (
              <div className="stack-selected">
                {stack.map((item) => (
                  <div key={item.id} className="stack-item">
                    <div className="stack-item-main">
                      <span className={`tech-icon small ${item.accent}`}>
                        <TechIcon type={item.icon} />
                      </span>
                      <div className="stack-item-text">
                        <span>{item.name}</span>
                        <small>{item.category}</small>
                      </div>
                    </div>
                    <button
                      type="button"
                      className="remove-item"
                      onClick={() => removeFromStack(item.id)}
                      aria-label={`Remove ${item.name}`}
                    >
                      ×
                    </button>
                  </div>
                ))}
                <button type="button" className="remove-all" onClick={removeAll}>Remove All</button>
              </div>
            )}
          </aside>
        </section>

      </main>

      <ToastContainer
        position="top-right"
        autoClose={2200}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      <footer className="site-footer">
        <div className="footer-main">
          <div className="footer-brand">
            <div className="footer-brand-row">
              <span className="brand-mark footer-mark">DS</span>
              <span className="brand-name">
                Dev<span>Stack</span>
              </span>
            </div>
            <p>
              Curated tools, technologies, and resources for developers building
              modern software.
            </p>
            <div className="social-links">
              <a href="#github">GitHub</a>
              <a href="#twitter">Twitter</a>
              <a href="#linkedin">LinkedIn</a>
            </div>
          </div>

          <div className="footer-column">
            <h4>PRODUCT</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#technologies">Technologies</a></li>
              <li><a href="#projects">Projects</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>COMPANY</h4>
            <ul>
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><a href="#careers">Careers</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>LEGAL</h4>
            <ul>
              <li><a href="#privacy">Privacy Policy</a></li>
              <li><a href="#terms">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 Dev Stack. All rights reserved.</span>
          <div className="bottom-links">
            <a href="#privacy">Privacy</a>
            <a href="#terms">Terms</a>
          </div>
        </div>

      </footer>
    </>
  )
}

export default App
