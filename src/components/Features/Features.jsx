import { content } from '../../config/content'
import './Features.css'

export function Features() {
  const { features } = content

  return (
    <section className="features section" id="features">
      <div className="container">
        <div className="section__header">
          <span className="section__eyebrow">Nuestro diferencial</span>
          <h2 className="section__title">{features.title}</h2>
          <p className="section__subtitle">{features.subtitle}</p>
        </div>

        <div className="features__grid">
          {features.items.map((item, i) => (
            <div className="feature-card" key={i}>
              <div className="feature-card__icon-wrap">{item.icon}</div>
              <h3 className="feature-card__title">{item.title}</h3>
              <p className="feature-card__desc">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
