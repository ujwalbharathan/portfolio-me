'use client'

import { useState, FormEvent } from 'react'

export default function Contact() {
  const [formValid, setFormValid] = useState(false)

  const handleInputChange = (e: FormEvent<HTMLFormElement>) => {
    const form = e.currentTarget
    setFormValid(form.checkValidity())
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    form.reset()
    setFormValid(false)
  }

  return (
    <article className="contact active">
      <header>
        <h2 className="h2 article-title">Contact</h2>
      </header>
      <section className="mapbox">
        <figure>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3926.5!2d76.2134!3d10.3456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0817543b8b8b8b%3A0x8b8b8b8b8b8b8b8b!2sIrinjalakuda%2C%20Kerala!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
            width="400"
            height="300"
            loading="lazy"
            style={{ border: 0 }}
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            title="Irinjalakuda, Thrissur, Kerala, India"
          ></iframe>
        </figure>
      </section>
      <section className="contact-form">
        <h3 className="h3 form-title">Contact Form</h3>
        <form className="form" onSubmit={handleSubmit} onInput={handleInputChange}>
          <div className="input-wrapper">
            <input
              type="text"
              name="fullname"
              className="form-input"
              placeholder="Full name"
              required
            />
            <input
              type="email"
              name="email"
              className="form-input"
              placeholder="Email address"
              required
            />
          </div>
          <textarea
            name="message"
            className="form-input"
            placeholder="Your Message"
            required
          ></textarea>
          <button className="form-btn" type="submit" disabled={!formValid}>
            <ion-icon name="paper-plane"></ion-icon>
            <span>Send Message</span>
          </button>
        </form>
      </section>
    </article>
  )
}
