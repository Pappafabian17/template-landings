import { useState, useEffect, useCallback } from 'react'
import { content } from '../../config/content'
import './Testimonials.css'

const VISIBLE = 3 // cuántas cards se ven a la vez (en desktop)

function Stars({ rating }) {
  return (
    <div className="stars" aria-label={`${rating} de 5 estrellas`}>
      {Array.from({ length: 5 }, (_, i) => (
        <span key={i} className={i < rating ? 'star star--on' : 'star star--off'}>★</span>
      ))}
    </div>
  )
}

function Avatar({ name, avatar, alt }) {
  if (avatar) return <img src={avatar} alt={alt || name} className="tcard__avatar" />
  const initials = name.split(' ').map(w => w[0]).slice(0, 2).join('')
  return <div className="tcard__avatar tcard__avatar--initials">{initials}</div>
}

export function Testimonials() {
  const { testimonials } = content
  if (!testimonials.enabled) return null

  const items = testimonials.items
  const total = items.length
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)

  const next = useCallback(() => setCurrent(c => (c + 1) % total), [total])
  const prev = () => setCurrent(c => (c - 1 + total) % total)
  const goTo = (i) => setCurrent(i)

  useEffect(() => {
    if (paused) return
    const id = setInterval(next, 4000)
    return () => clearInterval(id)
  }, [paused, next])

  // Genera el orden del carousel: empieza desde current
  const ordered = Array.from({ length: total }, (_, i) => items[(current + i) % total])

  return (
    <section
      className="testimonials section section--alt"
      id="testimonials"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="container">
        <div className="section__header">
          <span className="section__eyebrow">⭐ Testimonios</span>
          <h2 className="section__title">{testimonials.title}</h2>
          <p className="section__subtitle">{testimonials.subtitle}</p>
        </div>

        <div className="testimonials__carousel">
          <button className="testimonials__arrow testimonials__arrow--prev" onClick={prev} aria-label="Anterior">
            ‹
          </button>

          <div className="testimonials__track">
            {ordered.slice(0, VISIBLE).map((item, i) => (
              <article className={`tcard ${i === 0 ? 'tcard--active' : ''}`} key={`${current}-${i}`}>
                <Stars rating={item.rating} />
                <p className="tcard__text">"{item.text}"</p>
                <div className="tcard__author">
                  <Avatar name={item.name} avatar={item.avatar} />
                  <div>
                    <p className="tcard__name">{item.name}</p>
                    <p className="tcard__role">{item.role}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <button className="testimonials__arrow testimonials__arrow--next" onClick={next} aria-label="Siguiente">
            ›
          </button>
        </div>

        <div className="testimonials__dots">
          {items.map((_, i) => (
            <button
              key={i}
              className={`testimonials__dot ${i === current ? 'testimonials__dot--active' : ''}`}
              onClick={() => goTo(i)}
              aria-label={`Ir al testimonio ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
