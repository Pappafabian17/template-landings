import { content } from '../../config/content'
import './Hero.css'

export function Hero() {
  const { hero } = content

  return (
    <section className="hero section" id="hero">
      <div className="container hero__inner">
        <div className="hero__text">
          <h1 className="hero__title">{hero.title}</h1>
          <p className="hero__subtitle">{hero.subtitle}</p>
          <div className="hero__actions">
            <a href={hero.cta.href} className="btn btn--primary">{hero.cta.label}</a>
            <a href={hero.secondaryCta.href} className="btn btn--outline">{hero.secondaryCta.label}</a>
          </div>
        </div>

        <div className="hero__image-wrap">
          {hero.image
            ? <img src={hero.image} alt={hero.imageAlt} className="hero__image" />
            : <div className="hero__image-placeholder">📸 hero image</div>
          }
        </div>
      </div>
    </section>
  )
}
