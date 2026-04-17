import { content } from '../../config/content'
import './Cta.css'

export function Cta() {
  const { cta } = content

  return (
    <section className="cta-section section section--dark" id="cta">
      <div className="container cta-section__inner">
        <h2 className="cta-section__title">{cta.title}</h2>
        <p className="cta-section__subtitle">{cta.subtitle}</p>
        <a href={cta.button.href} className="btn btn--secondary cta-section__btn">
          {cta.button.label}
        </a>
        {cta.note && <p className="cta-section__note">{cta.note}</p>}
      </div>
    </section>
  )
}
