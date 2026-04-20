import { content } from '../../config/content'
import './About.css'

export function About() {
  const { about } = content

  return (
    <section className="about section" id="about">
      <div className="container about__inner">
        <div className="about__image-wrap">
          {about.image
            ? <img src={about.image} alt={about.imageAlt} className="about__image" />
            : <div className="about__image-placeholder">📸 foto del emprendimiento</div>
          }
        </div>

        <div className="about__text">
          <p className="about__eyebrow">{about.subtitle}</p>
          <h2 className="about__title">{about.title}</h2>
          <p className="about__description">{about.description}</p>

          <ul className="about__highlights">
            {about.highlights.map((item, i) => (
              <li className="about__highlight" key={i}>
                <span className="about__highlight-icon">{item.icon}</span>
                <span>{item.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
