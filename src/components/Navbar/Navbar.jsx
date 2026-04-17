import { useState } from 'react'
import { content } from '../../config/content'
import './Navbar.css'

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { brand, nav } = content

  return (
    <header className="navbar">
      <div className="container navbar__inner">
        <a href="#hero" className="navbar__brand">
          {brand.logo
            ? <img src={brand.logo} alt={brand.logoAlt} className="navbar__logo" />
            : <span className="navbar__brand-name">{brand.name}</span>
          }
        </a>

        <nav className={`navbar__nav ${menuOpen ? 'navbar__nav--open' : ''}`}>
          <ul className="navbar__links">
            {nav.links.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="navbar__link" onClick={() => setMenuOpen(false)}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a href={nav.cta.href} className="btn btn--primary navbar__cta" onClick={() => setMenuOpen(false)}>
            {nav.cta.label}
          </a>
        </nav>

        <button
          className="navbar__hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menú"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}
