'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function Sidebar() {
  const [isActive, setIsActive] = useState(false)

  return (
    <aside className={`sidebar ${isActive ? 'active' : ''}`}>
      <div className="sidebar-info">
        <figure className="avatar-box">
          <Image
            src="/images/my-avatar.png"
            alt="Ujwal T B"
            width={80}
            height={80}
            className="avatar-img"
            priority
          />
        </figure>
        <div className="info-content">
          <h1 className="name" title="Ujwal T B">Ujwal T B</h1>
          <p className="title">Front-end Developer</p>
        </div>
        <button className="info_more-btn" onClick={() => setIsActive(!isActive)}>
          <span>Show Contacts</span>
          <ion-icon name="chevron-down"></ion-icon>
        </button>
      </div>
      <div className="sidebar-info_more">
        <div className="separator"></div>
        <ul className="contacts-list">
          <li className="contact-item">
            <div className="icon-box">
              <ion-icon name="mail-outline"></ion-icon>
            </div>
            <div className="contact-info">
              <p className="contact-title">Email</p>
              <a href="mailto:ujwal.bharathan1@gmail.com" className="contact-link">ujwal.bharathan1@gmail.com</a>
            </div>
          </li>
          <li className="contact-item">
            <div className="icon-box">
              <ion-icon name="phone-portrait-outline"></ion-icon>
            </div>
            <div className="contact-info">
              <p className="contact-title">Phone</p>
              <a href="tel:+917994818153" className="contact-link">+91 7994818153</a>
            </div>
          </li>
          <li className="contact-item">
            <div className="icon-box">
              <ion-icon name="calendar-outline"></ion-icon>
            </div>
            <div className="contact-info">
              <p className="contact-title">Birthday</p>
              <time dateTime="2000-08-08">August 8, 2000</time>
            </div>
          </li>
          <li className="contact-item">
            <div className="icon-box">
              <ion-icon name="location-outline"></ion-icon>
            </div>
            <div className="contact-info">
              <p className="contact-title">Location</p>
              <address>Irinjalakuda, Thrissur, Kerala, India</address>
            </div>
          </li>
        </ul>
        <div className="separator"></div>
        <ul className="social-list">
          <li className="social-item">
            <a href="https://github.com/ujwalbharathan" target="_blank" rel="noopener noreferrer" className="social-link">
              <ion-icon name="logo-github"></ion-icon>
            </a>
          </li>
          <li className="social-item">
            <a href="https://www.linkedin.com/in/ujwal-bharathan" target="_blank" rel="noopener noreferrer" className="social-link">
              <ion-icon name="logo-linkedin"></ion-icon>
            </a>
          </li>
        </ul>
      </div>
    </aside>
  )
}
