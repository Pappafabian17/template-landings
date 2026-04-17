import { content } from '../../config/content'
import './Footer.css'

export function Footer() {
  const { brand, footer } = content

  return (
    <footer className="footer" id="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          {brand.logo
            ? <img src={brand.logo} alt={brand.logoAlt} className="footer__logo" />
            : <span className="footer__brand-name">{brand.name}</span>
          }
          <p className="footer__tagline">{footer.tagline}</p>
        </div>

        <nav className="footer__links">
          {footer.links.map((link) => (
            <a href={link.href} key={link.label} className="footer__link">
              {link.label}
            </a>
          ))}
        </nav>
      </div>

      <div className="container footer__bottom">
        <p className="footer__copy">{footer.copyright}</p>
      </div>
    </footer>
  )
}
