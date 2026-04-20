import { content } from '../../config/content'
import './Contact.css'

export function Contact() {
  const { contact } = content

  const waUrl = `https://wa.me/${contact.whatsapp.number}?text=${encodeURIComponent(contact.whatsapp.message)}`

  return (
    <section className="contact section section--dark" id="contact">
      <div className="container contact__inner">
        <span className="contact__eyebrow">✉️ Hablemos</span>
        <h2 className="contact__title">{contact.title}</h2>
        <p className="contact__subtitle">{contact.subtitle}</p>

        <div className="contact__channels">
          <a href={waUrl} target="_blank" rel="noopener noreferrer" className="contact__channel contact__channel--wa">
            <span className="contact__channel-icon">💬</span>
            <div>
              <p className="contact__channel-label">WhatsApp</p>
              <p className="contact__channel-value">Escribirnos ahora</p>
            </div>
          </a>

          {contact.instagram && (
            <a
              href={`https://instagram.com/${contact.instagram.replace('@', '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="contact__channel contact__channel--ig"
            >
              <span className="contact__channel-icon">📸</span>
              <div>
                <p className="contact__channel-label">Instagram</p>
                <p className="contact__channel-value">{contact.instagram}</p>
              </div>
            </a>
          )}

          {contact.email && (
            <a href={`mailto:${contact.email}`} className="contact__channel contact__channel--email">
              <span className="contact__channel-icon">✉️</span>
              <div>
                <p className="contact__channel-label">Email</p>
                <p className="contact__channel-value">{contact.email}</p>
              </div>
            </a>
          )}
        </div>
      </div>
    </section>
  )
}
